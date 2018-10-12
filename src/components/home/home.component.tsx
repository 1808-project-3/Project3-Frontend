import * as React from 'react';
import TabComponent from "../resource-list/tabs/tab.component";

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

