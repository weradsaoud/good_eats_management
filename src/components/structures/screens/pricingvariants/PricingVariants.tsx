import React, { Component } from "react";
import { connect } from 'react-redux';
import * as actionsTypes from '../../../../store/actions/actionsTypes';
import routes from '../../../../globals/routes';

interface IProps {
    changeTab: any;
}

interface IState {

}

class PricingVariants extends Component<IProps, IState>{


    componentDidMount(): void {
        this.props.changeTab(routes.pricingVariantsPageUrl);
    }

    render(): React.ReactNode {
        return (
            <div> you are in PricingVariants </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(PricingVariants);