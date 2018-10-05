import * as React from 'react';
import './include/bootstrap';
import './App.css';
import { Layout } from './components/layout/layout.component';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignInComponent from './components/sign-in/sign-in.component';
import { Provider } from 'react-redux';
import { store } from './Store';
import RegisterComponent from './components/register/register.component';
import SearchResultComponent from './components/search-result/search-result.component';

class App extends React.Component {

  public render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div id="main-content-container">
            <Switch>
              <Route path="/sign-in" component={SignInComponent} />
              <Route path="/register" component={RegisterComponent} />
              <Route path="/home" component={this.wrappedRoutes} />
              <Route component={SignInComponent} />
            </Switch>
          </div>

        </BrowserRouter>
      </Provider>
    );
  }

  // these are the routes that include the nav/side bars.
  // add the paths that the sidebar buttons will lead to in sidebar component; place paths in the link attribute starting with '/'
  // the names used in the route paths below will be what is displayed in the breadcrumbs so keep that in mind when naming routes.
  public wrappedRoutes = (props: any) => (
    <Layout location={props.location} history={props.history}>
      <Switch>
        <Route path="/home/resouces/search-results" component={SearchResultComponent} />
        <Route path="/home" />
      </Switch>
    </Layout>
  )
}



export default App;
