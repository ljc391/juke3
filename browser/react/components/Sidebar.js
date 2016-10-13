'use strict';

import React from 'react';

import {Link} from 'react-router'
export default ({ go, location }) => (
  <sidebar>
    <img src="juke.svg" className="logo" />
    <section>
      <h4 className={location.match('album') ? 'menu-item active' : 'menu-item'}>
        <Link to = "/albums"><a href="#" onClick={() => go('albums')}>ALBUMS</a></Link>
      </h4>
    </section>
    <section>
      <h4 className={location.match('artist') ? 'menu-item active' : 'menu-item'}>
        <Link to = "/artists"><a href="#" onClick={() => go('artists')}>ARTISTS</a></Link>
      </h4>
    </section>
  </sidebar>
);