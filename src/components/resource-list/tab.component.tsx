import * as React from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap';
import classnames from 'classnames';
import { connect } from "react-redux";
import { IState } from "../../reducers";
import UiTableComponent from "./ui-table/ui-table.component";
import MobilityTableComponent from "./mobility-table/mobility-table.component";
import CmTableComponent from "./cm-table/cm-table.component";
import DesignTableComponent from "./design-table/design-table.component";

interface IProps {
    exampleProp: string;
}

/**
 * This displays the tabs from which you can specify what resource table will display
 */
export class TabComponent extends React.Component<IProps, any> {
    constructor(props: any) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
    }

    public toggle(tab: any) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    public render() {
        return (
            <div>
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '1' })}
                            onClick={() => { this.toggle('1'); }}
                        >
                            UI/Dev
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '2' })}
                            onClick={() => { this.toggle('2'); }}
                        >
                            Mobility
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '3' })}
                            onClick={() => { this.toggle('3'); }}
                        >
                            Content Management
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '4' })}
                            onClick={() => { this.toggle('4'); }}
                        >
                            Design
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <UiTableComponent />
                    </TabPane>
                    <TabPane tabId="2">
                        <MobilityTableComponent />
                    </TabPane>
                    <TabPane tabId="3">
                        <CmTableComponent />
                        Hello!
                    </TabPane>
                    <TabPane tabId="4">
                        <DesignTableComponent />
                        World!
                    </TabPane>
                </TabContent>
            </div>
        );
    }
}
const mapStateToProps = (state: IState) => {
    return {
        // insert properties of the state here
    };
};

const mapDispatchToProps = {
    // insert actions here
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TabComponent);
