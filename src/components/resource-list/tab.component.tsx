import * as React from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Container } from 'reactstrap';
import { getResourceList, updateTableType } from "../../actions/info/info.actions";
import classnames from 'classnames';
import { connect } from "react-redux";
import { IState } from "../../reducers";
import TablesComponent from "./tables/tables.component";
import ResourceListExport from "./tables/resourceListExport";

interface IProps {
    tableType: string;
    getResourceList: (text: string) => any;
    updateTableType: (text: string) => any;
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
        if (tab === "1") {
            this.props.updateTableType("UI");
        }
        else if (tab === "2") {
            this.props.updateTableType("Mobility");
        }
        else if (tab === "3") {
            this.props.updateTableType("CM");
        }
        else if (tab === "4") {
            this.props.updateTableType("Design");
        }
    }

    public componentDidUpdate() {
        console.log("The table type selected is: " + this.props.tableType);
        this.props.getResourceList(this.props.tableType);
    }


    public render() {
        return (
            <Container fluid>
                <Row>
                    <div className="col-md-10">
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
                    </div>
                    <div className="col-md-2">
                        <span className="pl-0"><ResourceListExport /></span>
                    </div>
                </Row>

                <Row>
                    <div className="col-md-12">
                        <TabContent activeTab={this.state.activeTab}>
                            <TabPane tabId="1">
                                <TablesComponent />
                            </TabPane>
                            <TabPane tabId="2">
                                <TablesComponent />
                            </TabPane>
                            <TabPane tabId="3">
                                <TablesComponent />
                            </TabPane>
                            <TabPane tabId="4">
                                <TablesComponent />
                            </TabPane>
                        </TabContent>
                    </div>
                </Row>
            </Container>
        );
    }
}
const mapStateToProps = (state: IState) => {
    return {
        tableType: state.info.tableType
    };
};

const mapDispatchToProps = {
    getResourceList,
    updateTableType
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TabComponent);
