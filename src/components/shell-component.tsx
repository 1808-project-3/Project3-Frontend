import * as React from "react";
import { connect } from "react-redux";
import { IState } from "../reducers";

/**
 * This is a shell component, don't impliment this!
 * Copy and past the text into new components.
 */
interface IProps {
  exampleProp: string;
}

class ShellComponent extends React.Component<IProps, any> {
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
)(ShellComponent);
