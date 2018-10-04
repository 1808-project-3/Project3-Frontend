import * as React from 'react';
import './include/bootstrap';
import './App.css';
import {Layout} from './components/layout/layout.component';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignInComponent from './components/sign-in/sign-in.component';
import { Provider } from 'react-redux';
import { store } from './Store';

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div id="within-root">
            <div id="main-content-container">
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
  public wrappedRoutes = (props:any) => (
    <Layout location={props.location} history={props.history}>
      <Switch>
        <Route path="/home"/>
      </Switch>
    </Layout>
  )
}



export default App;
