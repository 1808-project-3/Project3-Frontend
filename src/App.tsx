import * as React from 'react';
import './include/bootstrap';
import './App.css';
import AppNav from './components/nav/nav.component';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HomeComponent } from './components/home/home.component';
import SignInComponent from './components/sign-in/sign-in.component';
import { Provider } from 'react-redux';
import { store } from './Store';
import addSkillsComponent from './components/resource-skills/add-skills.component';

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <AppNav />
            <div id="main-content-container">
              <Switch>
                <Route path="/home" component={HomeComponent} />
                <Route path="/sign-in" component={SignInComponent} />
                <Route path="/add-skills" component={addSkillsComponent} />
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
