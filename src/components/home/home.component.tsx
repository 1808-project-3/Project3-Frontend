import * as React from 'react';
import TabComponent from "../resource-list/tab.component";

export class HomeComponent extends React.Component {

  public render() {
    return (
      <div>
				<span className="text-secondary font-weight-bold mb-3">PROJECT LIST</span>
        <TabComponent />
      </div>
    );
  }
}

