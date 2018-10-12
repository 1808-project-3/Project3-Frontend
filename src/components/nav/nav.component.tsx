import * as React from 'react';
import {NavProfileText} from './nav-profile-text.component';
import {NavProfileImage} from './nav-profile-image.component';
import {NavLabel} from './nav-label.compoennt';
import {SearchBar} from './nav-search-bar/nav-search-bar.component';
import {NavLink} from './nav-link.component';
import {NavTitle} from './nav-title.component';
import './navStyles.css';
import LogoutComponent from '../logout/logout.component';
import { Row } from 'reactstrap';

export const AppNav = (props: any) =>{
  return (
    <div className="topNavbar">
    <Row>
      <NavTitle>TALENT PORTAL</NavTitle>
      <NavLabel>Search</NavLabel>
      <SearchBar history={props.history}/>
      <NavLink path="/register">Register</NavLink>
      <LogoutComponent />
      <NavProfileText/>
      <NavProfileImage/>
      </Row>
    </div >
  );
}
