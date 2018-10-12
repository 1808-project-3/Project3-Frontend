import * as React from 'react';
import { IState } from '../../reducers';
import { connect } from 'react-redux';
import { Table, Label, Row, Col } from 'reactstrap';
import RecentlyAddedProjectsComponent from '../dashboard/project-cards/recently-added-projects';
import ResourceRequirementComponent from '../dashboard/project-cards/resource-requirement';


export class SearchResultComponent extends React.Component<any, {}> {

    public componentDidMount() {
        console.log(this.props.searchResults.searchResults);
    }


    public render() {
        const { searchResults } = this.props.searchResults;
        return (
            <div>
                <Row> 
                <Col>
                <Label className="search-result-label"><small className='font-weight-bold'>SEARCH RESULTS</small></Label>
                <Table className='search-result-table'>
                    <thead>
                        <tr>
                            <th><Label className="search-result-label"><small className='font-weight-bold'>ASSOCIATE NAME</small></Label></th>
                            <th><Label className="search-result-label"><small className='font-weight-bold'>ID</small></Label></th>
                            <th><Label className="search-result-label"><small className='font-weight-bold'>CERTIFICATION</small></Label></th>
                            <th><Label className="search-result-label"><small className='font-weight-bold'>PROJECT DETAILS</small></Label></th>
                            <th><Label className="search-result-label"><small className='font-weight-bold'>GRADE</small></Label></th>
                        </tr>
                    </thead>
                    <tbody>
                        {searchResults.map((associate: any) =>
                            <tr key={associate.associateId}>
                                <td className="search-result-label"><small>{associate.associateName}</small></td>
                                <td className="search-result-label"><small>{associate.associateId}</small></td>
                                <td className="search-result-label"><small>{associate.certifications.toString()}</small></td>
                                <td className="search-result-label"><small>{associate.projectName}</small></td>
                                <td className="search-result-label"><small>{associate.grade}</small></td>
                            </tr>
                        )}
                    </tbody>
                </Table>
                </Col>
                <Col md={3}>
                <RecentlyAddedProjectsComponent />
                <br/>
                <ResourceRequirementComponent />
                </Col>
                </Row>
            </div>
        );
    }
}

const mapStateToProps = (state: IState) => {
    return {
        register: state.register,
        searchResults: state.searchResults,
        signIn: state.signIn
    }
}
const mapDispatchToProps = {}
export default connect(mapStateToProps, mapDispatchToProps)(SearchResultComponent);