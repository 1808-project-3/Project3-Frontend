import * as React from 'react';
// import { connect } from 'react-redux';
// import { Navbar, NavbarBrand } from 'reactstrap';
import {NavProfileText} from './nav-profile-text.component';
import {NavProfileImage} from './nav-profile-image.component';
import {NavLabel} from './nav-label.compoennt';
import {SearchBar} from './nav-search-bar.component';
import {NavLink} from './nav-link.component';
import {NavTitle} from './nav-title.component';

export class AppNav extends React.Component
{
  public render()
  {
    return (
      <div className="navbar">
        <NavTitle>TALENT PORTAL</NavTitle>
        <NavLabel>Search</NavLabel>
        <SearchBar/>
        <NavLink>Advanced Search</NavLink>
        <NavProfileText/>
        <NavProfileImage/>
      </div >
    );
  }
  
}

// const mapStateToProps = (state: IState) => (state)
// export default connect(mapStateToProps)(AppNav);

{/* <Navbar expand={false}>
          <NavbarBrand>TALENT PORTAL</NavbarBrand>
          <NavProfile/>
        </Navbar> */}