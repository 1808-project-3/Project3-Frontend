import * as React from 'react';
import './include/bootstrap';
import './App.css';
import AppNav from './components/nav/nav.component';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HomeComponent } from './components/home/home.component';
import SignInComponent from './components/sign-in/sign-in.component';
import { Provider } from 'react-redux';
import { store } from './Store';
import projectListTableComponent from "./components/project-list/project-list-table/project-list-table.component";
import AddSkillsComponent from './components/resource-skills/add-skills.component';
import { ResourceSkillsDetail } from './components/resource-skills/resource-skills-detail.component'
import ResourceSkillDisplayComponent from './components/resource-skills/resource-skills-display'

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <AppNav />
            <div>
              <Switch>
                <Route path="/home" component={HomeComponent} />
                <Route path="/sign-in" component={SignInComponent} />
                <Route component={projectListTableComponent} />
                <Route path="/add-skills" component={AddSkillsComponent} />
                <Route path="/resource-skills-details" component={ResourceSkillsDetail} />
                <Route path="/test" component={ResourceSkillDisplayComponent} />
                <Route component={HomeComponent} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
