import * as React from 'react';
import ProjectListTableComponent from "../project-list/project-list-table/project-list-table.component";

export class HomeComponent extends React.Component {

  public render() {
    return (
      <div>
          <span className="text-secondary font-weight-bold mb-3">RESOURCE LIST</span>
          <ProjectListTableComponent />
      </div>
    );
  }
}

