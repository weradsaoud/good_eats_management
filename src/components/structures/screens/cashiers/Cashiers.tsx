import React, { Component } from "react";
import { connect } from 'react-redux';
import * as actionsTypes from '../../../../store/actions/actionsTypes';
import routes from '../../../../globals/routes';
import path from "path";

interface IProps {
    changeTab: any;
}

interface IState {

}

class Cashiers extends Component<IProps, IState>{


    componentDidMount(): void {
        this.props.changeTab(routes.cashiersPageUrl);
    }

    render(): React.ReactNode {
        return (
            <div> you are in Cashiers </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Cashiers);