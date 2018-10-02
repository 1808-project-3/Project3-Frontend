import * as React from "react";
import { connect } from "react-redux";
import { IState } from "../../../reducers";


interface IProps {
    exampleProp: string;
}

class ProjectListTableComponent extends React.Component<IProps, any> {
    constructor(props: any) {
        super(props);
        // remember to bind your functions here
    }

    public render() {
        return (
            <div>
                <p>Insert test here</p>
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
)(ProjectListTableComponent);
