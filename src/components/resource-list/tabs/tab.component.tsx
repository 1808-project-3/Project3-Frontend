import * as React from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Container } from 'reactstrap';
import {
    getAssociateList, getCertificationList,
    getProjectList,
    getResourceList,
    getSkillGroups, getSkills,
    updateTableType
} from "../../../actions/info/info.actions";
import classnames from 'classnames';
import { connect } from "react-redux";
import { IState } from "../../../reducers/index";
import TablesComponent  from "../tables/tables.component";
import ResourceListExport from "../tables/resourceListExport";

interface IProps {
    associateList: any[];
    skillGroupList: any[];
    skillsList: any[];
    tableType: string;
    getAssociateList: () => any;
    getCertificationList: () => any;
    getProjectList: () => any;
    getResourceList: () => any;
    getSkills: () => any;
    getSkillGroups: () => any;
    updateTableType: (tab: number) => any;
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
            this.props.updateTableType(4);
        }
        else if (tab === "2") {
            this.props.updateTableType(1);
        }
        else if (tab === "3") {
            this.props.updateTableType(3);
        }
        else if (tab === "4") {
            this.props.updateTableType(2);
        }
    }

    public componentDidMount() {
        this.props.updateTableType(4);
        this.props.getCertificationList();
        this.props.getProjectList();
        this.props.getResourceList();
        this.props.getSkills();
        this.props.getSkillGroups();
        this.props.getAssociateList();
    }


    public render() {
        return (
            <Container fluid>
                <span className="secondary-color font-weight-bold mb-3">RESOURCE LIST</span>
                <br/>
                <br/>
                <Row>
                    <div className="col-md-10">
                        <Nav tabs>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: this.state.activeTab === '1' })}
                                    onClick={() => { this.toggle('1'); }}
                                >
                                    {this.props.skillGroupList !== undefined && this.props.skillGroupList[3]}
                        </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: this.state.activeTab === '2' })}
                                    onClick={() => { this.toggle('2'); }}
                                >
                                    {this.props.skillGroupList !== undefined && this.props.skillGroupList[0]}
                        </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: this.state.activeTab === '3' })}
                                    onClick={() => { this.toggle('3'); }}
                                >
                                    {this.props.skillGroupList !== undefined && this.props.skillGroupList[2]}
                        </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: this.state.activeTab === '4' })}
                                    onClick={() => { this.toggle('4'); }}
                                >
                                    {this.props.skillGroupList !== undefined && this.props.skillGroupList[1]}
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
        associateList: state.info.associateList,
        certificationList: state.info.certificationList,
        skillGroupList: state.info.skillGroupList,
        skillsList: state.info.skillsList,
        tableType: state.info.tableType
    };
};

const mapDispatchToProps = {
    getAssociateList,
    getCertificationList,
    getProjectList,
    getResourceList,
    getSkillGroups,
    getSkills,
    updateTableType
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TabComponent);
