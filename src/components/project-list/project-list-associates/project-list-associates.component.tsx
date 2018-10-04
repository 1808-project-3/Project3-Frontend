import * as React from "react";
import {getAssociateList} from "../../../actions/info/info.actions";
import { connect } from "react-redux";
import { IState } from "../../../reducers";
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselCaption
} from 'reactstrap';


interface IProps {
    exampleProp: string;
    associateList: any[];
    getAssociateList: () => any;
}

export class ProjectListAssociatesComponent extends React.Component<IProps, any> {
    private animating = false;
    constructor(props: any) {
        super(props);
        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    public onExiting() {
        this.animating = true;
    }

    public onExited() {
        this.animating = false;
    }

    public next() {
        if (this.animating){return;}
        const nextIndex = this.state.activeIndex === this.props.associateList.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    public previous() {
        if (this.animating) {return;}
        const nextIndex = this.state.activeIndex === 0 ? this.props.associateList.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    public goToIndex(newIndex: any) {
        if (this.animating) {return;}
        this.setState({ activeIndex: newIndex });
    }

    public componentDidMount(){
        this.props.getAssociateList();
    }

    public render() {
        const { activeIndex } = this.state;

        const slides = this.props.associateList.map((item) => {
            return (
                <CarouselItem
                    className="custom-tag"
                    tag="div"
                    key={item.user_id}
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                >

                    <CarouselCaption className="text-danger" captionText={item.last_name} captionHeader={item.first_name} />
                </CarouselItem>
            );
        });

        return (
            <div>
                <style>
                    {
                        `.custom-tag {
                max-width: 100%;
                height: 200px;
                background: black;
              }`
                    }
                </style>
                <Carousel
                    activeIndex={activeIndex}
                    next={this.next}
                    previous={this.previous}
                >
                    {slides}
                    <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                </Carousel>
            </div>
        );
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
