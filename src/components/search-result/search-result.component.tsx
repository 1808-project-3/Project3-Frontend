import * as React from 'react';
import { IState } from '../../reducers';
import { connect } from 'react-redux';
import { Table, Label } from 'reactstrap';


export class SearchResultComponent extends React.Component<any, {}> {

    public mockResults = [
        {
            Actions: 'View/ Edit',
            AssociateName: 'John Wells',
            Certification: 'Cert Details',
            Grade: 'M',
            ID: 348847,
            ProjectName: 'Project Name',

        },
        {
            Actions: 'View/ Edit',
            AssociateName: 'Bob Man',
            Certification: 'Cert Details',
            Grade: 'SA',
            ID: 948347,
            ProjectName: 'Project Name',

        },
        {
            Actions: 'View/ Edit',
            AssociateName: 'Blake Kruppa',
            Certification: 'Cert Details',
            Grade: 'M',
            ID: 69_420,
            ProjectName: 'Talent Portal Server Dream',

        }
    ]


    public render() {
        return (
            <div>
                <Label className="search-result-label"><small className='font-weight-bold'>SEARCH RESULTS</small></Label>
            <Table className='search-result-table'>
                <thead>
                    <tr>
                        <th><Label className="search-result-label"><small className='font-weight-bold'>ASSOCIATE NAME</small></Label></th>
                        <th><Label className="search-result-label"><small className='font-weight-bold'>ID</small></Label></th>
                        <th><Label className="search-result-label"><small className='font-weight-bold'>CERTIFICATION</small></Label></th>
                        <th><Label className="search-result-label"><small className='font-weight-bold'>PROJECT DETAILS</small></Label></th>
                        <th><Label className="search-result-label"><small className='font-weight-bold'>GRADE</small></Label></th>
                        <th><Label className="search-result-label"><small className='font-weight-bold'>DETAILS</small></Label></th>
                    </tr>
                </thead>
                <tbody>
                {this.mockResults.map((associate: any) =>
                      <tr key={associate.ID}>
                        <td className="search-result-label"><small>{associate.AssociateName}</small></td>
                        <td className="search-result-label"><small>{associate.ID}</small></td>
                        <td className="search-result-label"><small>{associate.Certification}</small></td>
                        <td className="search-result-label"><small>{associate.ProjectName}</small></td>
                        <td className="search-result-label"><small>{associate.Grade}</small></td>
                        <td className="search-result-label"><small>{associate.Actions}</small></td>
                      </tr>
                    )}
                </tbody>
            </Table>
            </div>
        );
    }
}

const mapStateToProps = (state: IState) => {
    return {
        register: state.register,
        signIn: state.signIn
    }
}
const mapDispatchToProps = {}
export default connect(mapStateToProps, mapDispatchToProps)(SearchResultComponent);