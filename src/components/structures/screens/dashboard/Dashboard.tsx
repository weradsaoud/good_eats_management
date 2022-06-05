import React, { Component } from "react";
import { connect } from 'react-redux';
import * as actionsTypes from '../../../../store/actions/actionsTypes';
import routes from '../../../../globals/routes';

interface IProps {
    changeTab: any;
    login: any;
}

interface IState {

}

class Dashboard extends Component<IProps, IState>{


    componentDidMount(): void {
        this.props.changeTab(routes.dashboardPageUrl);
        console.log("logged in user: ", this.props.login.user);

    }

    render(): React.ReactNode {
        return (
            <div> you are in dashboard </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        breadcrumb: state.breadcrumb,
        login: state.login
    }
};

const mapDispatchToProps = dispatch => {
    return {
        changeTab: (tab: string) => dispatch({ type: actionsTypes.TABLOADED, tab: tab })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);