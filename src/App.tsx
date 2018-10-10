import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { Layout } from './components/layout/layout.component';
import RegisterComponent from './components/register/register.component';
import ResourceSkillDisplayComponent from './components/resource-skills/resource-skills-display';
import SearchResultComponent from './components/search-result/search-result.component';
<<<<<<< HEAD
// import projectListTableComponent from "./components/project-list/project-list-table/project-list-table.component";
// import AddSkillsComponent from './components/resource-skills/add-skills.component';
import { ResourceSkillsDetail } from './components/resource-skills/resource-skills-detail.component'
=======
import SignInComponent from './components/sign-in/sign-in.component';
import './include/bootstrap';
import { store } from './Store';
import TalentDashboard from './components/dashboard/talent-dashboard.component';
// import projectListTableComponent from "./components/project-list/project-list-table/project-list-table.component";
// import AddSkillsComponent from './components/resource-skills/add-skills.component';
// import { ResourceSkillsDetail } from './components/resource-skills/resource-skills-detail.component'
// import ResourceSkillDisplayComponent from './components/resource-skills/resource-skills-display'

// import projectListTableComponent from "./components/project-list/project-list-table/project-list-table.component";
// import AddSkillsComponent from './components/resource-skills/add-skills.component';
// import { ResourceSkillsDetail } from './components/resource-skills/resource-skills-detail.component'
>>>>>>> 320ad1a94b06a4081ed79431b70ee625dbc8a7c5
// import ResourceSkillDisplayComponent from './components/resource-skills/resource-skills-display'

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
<<<<<<< HEAD
        <Route path="/home/resouces/search-results" component={SearchResultComponent} />
        <Route path="/rs" component={ResourceSkillsDetail}/>
        <Route path="/home" />
=======
        <Route path="/home/resources/search-results" component={SearchResultComponent} />
        <Route path="/home/add-skills" component={ResourceSkillDisplayComponent} />
        <Route path="/home" component={TalentDashboard}/>
>>>>>>> 320ad1a94b06a4081ed79431b70ee625dbc8a7c5
      </Switch>
    </Layout>
  )
}



export default App;
