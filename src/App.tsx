import * as React from 'react';
import './include/bootstrap';
import './App.css';
import AppNav from './components/nav/nav.component';
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
          <div>
            {/* <AppNav /> */}
            <div>
              <Switch>
                <Route path="/sign-in" component={SignInComponent} />
                <Route component={this.wrappedRoutes} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }

  // these are the routes that include the nav/side bars.
  public wrappedRoutes = () => (
    <div>
      <AppNav />
      <div id="main-content-container">
        <Switch>
          <Route path="/home" component={HomeComponent} />
          <Route component={HomeComponent}/>
        </Switch>
      </div>
    </div>
  )
}



export default App;
