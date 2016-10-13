'use strict';

import React, {Component} from 'react';
import SongsContainer from '../containers/SongsContainer';
import store from '../store';
import {receiveAlbum} from '../action-creators/albums';
import {switchLocation} from '../action-creators/location';

export default class Album extends Component {
    //console.log("album prop", this.props)

    componentDidMount(){
       console.log("album prop", this.props)
        fetch(`/api/albums/${this.props.params.albumId}`)
          .then(res => res.json())
          .then(album => {
            store.dispatch(receiveAlbum(album));
            store.dispatch(switchLocation('album'));
          });
    }


    render(){
        return(
             <div className="album">
                <div>
                  <h3>{ this.props.selectedAlbum.name }</h3>
                  <img src={ this.props.selectedAlbum.imageUrl } className="img-thumbnail" />
                </div>
                <SongsContainer songs={ this.props.selectedAlbum.songs === undefined ? []: this.props.selectedAlbum.songs} />
              </div>
        )
    }
}



