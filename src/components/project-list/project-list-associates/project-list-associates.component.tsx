import * as React from "react";
import Slider from "react-slick";

import {getAssociateList} from "../../../actions/info/info.actions";
import { connect } from "react-redux";
import { IState } from "../../../reducers";



interface IProps {
    exampleProp: string;
    associateList: any[];
    getAssociateList: () => any;
}

export class ProjectListAssociatesComponent extends React.Component<IProps, any> {
    constructor(props: any) {
        super(props);
    }

    public componentDidMount(){
        this.props.getAssociateList();
    }

    public render() {
        const entries: any[] = [];
        const settings = {
            dots: true,
            infinite: false,
            slidesToShow: 3,
            speed: 500,
        };

        if(entries === undefined){
            return (
                <div>
                    There is nothing to show!
                </div>
            );
        }
        else {
        return (
            <div style={{width: "500px"}}>
                <Slider {...settings}>
                    <div>
                        <h3>Hey there. Notice me Senpai. 1</h3>
                    </div>
                    <div>
                        <h3>Hey there. Notice me Senpai. 2</h3>
                    </div>
                    <div>
                        <h3>Hey there. Notice me Senpai. 3</h3>
                    </div>
                    <div>
                        <h3>Hey there. Notice me Senpai. 4</h3>
                    </div>
                    <div>
                        <h3>Hey there. Notice me Senpai. 5</h3>
                    </div>
                    <div>
                        <h3>Hey there. Notice me Senpai. 6</h3>
                    </div>
                </Slider>
            </div>
        );
        }

    }
}
const mapStateToProps = (state: IState) => {
    return {
        associateList: state.info.associateList
    };
};

const mapDispatchToProps = {
    getAssociateList,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProjectListAssociatesComponent);
