'use strict';

import React, {Component} from 'react';
import SongsContainer from '../containers/SongsContainer';
import {receiveArtist, fetchAndGoToArtist} from '../action-creators/artists';
import {switchLocation} from '../action-creators/location';
import store from '../store';



export default class Artist extends Component {
    //console.log("artist prop", this.props)

    componentDidMount(){
      console.log("params", this.params);
      console.log("artist prop", this.props);
        let artistId = `/api/artists/${this.props.params.artistId}`,
        songs = `${artistId}/songs`,
        albums = `${artistId}/albums`;

        Promise
          .all([fetch(artistId), fetch(songs), fetch(albums)])
          .then(responses => Promise.all(responses.map(res => res.json())))
          .then(results => {
            dispatch(receiveArtist(...results));
            dispatch(switchLocation('artist'));
          });
    }


    render(){      console.log('render', this.props.selectedArtist);
     return(
               <div>
                  <h3>{ this.props.selectedArtist.name }</h3>
                  <h3>Albums</h3>
                  <div className="row">
                    {
                      this.props.selectedArtist.albums.map(album => (
                        <div className="col-xs-4" key={album.id}>
                          <a className="thumbnail" href="#" onClick={() => go(album)}>
                            <img src={ album.imageUrl } />
                            <div className="caption">
                              <h5>
                                <span>{ album.name }</span>
                              </h5>
                              <small>{ album.songs.length } songs</small>
                            </div>
                          </a>
                        </div>
                      ))
                    }
                  </div>
                  <SongsContainer songs={this.props.selectedArtist.songs} />
                </div>
        )
    }
}
