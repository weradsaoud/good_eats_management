import React, { Component } from "react";
import { connect } from 'react-redux';
import * as actionsTypes from '../../../../store/actions/actionsTypes';
import routes from '../../../../globals/routes';

interface IProps {
    changeTab: any;
}

interface IState {

}

class Options extends Component<IProps, IState>{


    componentDidMount(): void {
        this.props.changeTab(routes.optionsPageUrl);
    }

    render(): React.ReactNode {
        return (
            <div> you are in Options </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        breadcrumb: state.breadcrumb
    }
};

const mapDispatchToProps = dispatch => {
    return {
        changeTab: (tab: string) => dispatch({ type: actionsTypes.TABLOADED, tab: tab })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Options);