import * as React from 'react';
import * as resourceSkillsDisplayActions from '../../actions/resource-skills/resource-skills-display.actions';
import { connect } from 'react-redux';
import { IResourceSkillsDisplayState, IState } from '../../reducers';
import AddSkillsComponent from './add-skills.component';
import { ResourceSkillsDetail } from './resource-skills-detail.component';
import { Resource } from '../../models/Resource';
import { RouteComponentProps } from 'react-router';

interface IProps extends RouteComponentProps<{}>, IResourceSkillsDisplayState {
    toggleConfirm: () => void
    updateResource: (newResource: Resource) => void
}

class ResourceSkillDisplayComponent extends React.Component<IProps, any>{

    public render() {
        return (
            <>
                {this.props.isConfirm ? <ResourceSkillsDetail resource={this.props.currentResource} /> : <AddSkillsComponent history={this.props.history} updateParentResource={this.props.updateResource} toggleConfirm={this.props.toggleConfirm} />}
            </>
        );
    }
}

const mapStateToProps = (state: IState) => state.resourceSkillsDisplayState;

const mapDispatchToProps = {
    toggleConfirm: resourceSkillsDisplayActions.toggleConfirm,
    updateResource: resourceSkillsDisplayActions.updateResource
};

export default connect(mapStateToProps, mapDispatchToProps)(ResourceSkillDisplayComponent);