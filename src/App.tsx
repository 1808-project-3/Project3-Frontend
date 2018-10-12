import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import TalentDashboard from './components/dashboard/talent-dashboard.component';
import { Layout } from './components/layout/layout.component';
import RegisterComponent from './components/register/register.component';
import ResourceSkillDisplayComponent from './components/resource-skills/resource-skills-display';
import SearchResultComponent from './components/search-result/search-result.component';
import SignInComponent from './components/sign-in/sign-in.component';
import './include/bootstrap';
import { store } from './Store';
import { ProtectedRoute } from './components/routes/protected-route.component';
import ResourceListComponent from "./components/resource-list/resource-list.component";
import ProjectListComponent from "./components/project-list/project-list.component";

class App extends React.Component {

  public render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div id="main-content-container">
            <Switch>
              <ProtectedRoute path="/sign-in" component={SignInComponent} />
              <ProtectedRoute path="/register" component={RegisterComponent} />
              <ProtectedRoute path="/home" component={this.wrappedRoutes} />
              <ProtectedRoute component={SignInComponent} />
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
        <ProtectedRoute path="/home/resources/search-results" component={SearchResultComponent} />
        <ProtectedRoute path="/home/add-skills" component={ResourceSkillDisplayComponent} />
        <ProtectedRoute path="/home/resources" component={ResourceListComponent}/>
        <ProtectedRoute path="/home/projects" component={ProjectListComponent}/>
        <ProtectedRoute path="/home" component={TalentDashboard} />
      </Switch>
    </Layout>
  )
}



export default App;
