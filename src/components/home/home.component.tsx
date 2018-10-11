import * as React from 'react';
// import ProjectListTableComponent from "../project-list/project-list-table/project-list-table.component";
// import TabComponent from "../resource-list/tab.component";
// import {Container} from "reactstrap";
import TabComponent from "../resource-list/tab.component";

export class HomeComponent extends React.Component {

  public render() {
    return (
      <div>
          <span className="secondary-color font-weight-bold mb-3">RESOURCE LIST</span>
          <TabComponent />
      </div>
    );
  }
}

