import * as React from 'react';
import { IState } from '../../reducers';
import { connect } from 'react-redux';


export class SearchResultComponent extends React.Component<any, {}> {

    public render() {
        return (
            <div>Search Result Component
                <div>
                    <h1>{this.props.register.userID}</h1>
                    <h1>{this.props.signIn.credentials.userId}</h1>
                    <h1>{this.props.signIn.credentials.pass}</h1>
                </div>
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