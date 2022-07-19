import React, { Component, useEffect } from "react";
import { connect } from 'react-redux';
import * as actionsTypes from '../../../../store/actions/actionsTypes';
import routes from '../../../../globals/routes';
import { Accordion, AccordionDetails, AccordionSummary, CircularProgress, Typography } from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";

interface IProps {
    changeTab: any;
    ordersDidMount: any,
    gettingOrders: boolean,
    orders: any[]
}

interface IState {

}

function Orders(props: IProps) {


    useEffect(() => {
        props.changeTab(routes.ordersPageUrl);
        props.ordersDidMount();
    }, []);


    let view = null;
    if (this.props.gettingOrders) {
        view = <CircularProgress />;
    } else {
        view = <div className="orders_accordion_div">
            {
                props.orders.map((order, idx) => {
                    return (<div key={idx} className="order_accordion_div">
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className="accordion_title">Order to {order.data.store.store_name}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>)
                })
            }
        </div>
    }



    return view;
}


const mapStateToProps = state => {
    return {
        breadcrumb: state.breadcrumb,
        gettingOrders: state.orders.gettingOrders,
        orders: state.orders.orders
    }
};

const mapDispatchToProps = dispatch => {
    return {
        changeTab: (tab: string) => dispatch({ type: actionsTypes.TABLOADED, tab: tab }),
        ordersDidMount: () => dispatch({ type: actionsTypes.ORDERSDIDMOUNT })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);