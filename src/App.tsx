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

// import { ResourceSkillsDetail } from './components/resource-skills/resource-skills-detail.component'
// import projectListTableComponent from "./components/project-list/project-list-table/project-list-table.component";
// import AddSkillsComponent from './components/resource-skills/add-skills.component';

class App extends React.Component {

  public render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div id="main-content-container">
            <Switch>
<<<<<<< HEAD
              <Route path="/sign-in" component={SignInComponent} />
              <Route path="/register" component={RegisterComponent} />
              {
              false &&  
                (
                <Route path="/home" component={this.wrappedRoutes} />
                )
              }
              <Route component={SignInComponent} />
=======
              <ProtectedRoute path="/sign-in" component={SignInComponent} />
              <ProtectedRoute path="/register" component={RegisterComponent} />
              <ProtectedRoute path="/home" component={this.wrappedRoutes} />
              <ProtectedRoute component={SignInComponent} />
>>>>>>> 8ae8b121e6ac98dc0668b4f9c6ba56afc794e1ac
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
        <ProtectedRoute path="/home" component={TalentDashboard} />
      </Switch>
    </Layout>
  )
}



export default App;
