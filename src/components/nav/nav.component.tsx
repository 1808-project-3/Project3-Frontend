import * as React from 'react';
import {NavProfileText} from './nav-profile-text.component';
import {NavProfileImage} from './nav-profile-image.component';
import {NavLabel} from './nav-label.compoennt';
import {SearchBar} from './nav-search-bar.component';
import {NavLink} from './nav-link.component';
import {NavTitle} from './nav-title.component';
import './navStyles.css';

const AppNav: React.StatelessComponent<any> = (props) => {
  return (
    <div className="topNavbar">
      <NavTitle>TALENT PORTAL</NavTitle>
      <NavLabel>Search</NavLabel>
      <SearchBar history={props.history}/>
      <NavLink path="/home/advanced-search">Advanced Search</NavLink>
      <NavProfileText/>
      <NavProfileImage/>
    </div >
  );
}
