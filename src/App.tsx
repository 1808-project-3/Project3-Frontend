import * as React from 'react';
import './include/bootstrap';
import './App.css';
// import AppNav from './components/nav/nav.component';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HomeComponent } from './components/home/home.component';
import SignInComponent from './components/sign-in/sign-in.component';
import { Provider } from 'react-redux';
import { store } from './Store';

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div id="within-root">
             {/* <AppNav />  */}
            {/* need to make it so nav bar wont load on sign in screen */}
            <div id="main-content-container">
              <Switch>
                <Route path="/home" component={HomeComponent} />
                <Route path="/sign-in" component={SignInComponent} />
                <Route component={HomeComponent} />
              </Switch>
            </div>
            <div id="within-root2">
              <hr id="line"></hr>
              <p id="copyright-tag">© COGNIZENT</p>
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
