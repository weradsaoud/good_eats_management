import React, { Component, useEffect, useState } from "react";
import { connect } from 'react-redux';
import * as actionsTypes from '../../../../store/actions/actionsTypes';
import routes from '../../../../globals/routes';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { Button, Chip, CircularProgress, Typography } from "@material-ui/core";
import { ExpandMore, LabelImportant } from "@material-ui/icons";
import './orders.css';
import { useLocation } from "react-router";

interface IProps {
    changeTab: any;
    ordersDidMount: any,
    gettingOrders: boolean,
    orders: any[],
    setOpenedOrderId: any,
    expandedOrderId: number | false,
    orderReady: any,
    isOrderReadyRequestSend: boolean
}

interface IState {

}

type LocationState = { orderId: number };

function Orders(props: IProps) {

    useEffect(() => {
        props.changeTab(routes.ordersPageUrl);
        props.ordersDidMount();
    }, []);

    const handleChange = (orderId: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {

        if (isExpanded) {
            props.setOpenedOrderId(orderId);
        } else {
            props.setOpenedOrderId(false);
        }
    };

    const orderReadyHandler = (orderId: number, notificationId: string) => {
        props.orderReady(orderId, notificationId);
    };

    let view = null;
    if (props.gettingOrders) {
        view = <CircularProgress />;
    } else {
        view = <div className="orders_accordion_div">
            {props.isOrderReadyRequestSend ? <div className="orders_loader">
                <CircularProgress size={30} />;
            </div> : null}
            {
                props.orders.map((order, idx) => {
                    console.log('order: ', order);

                    return (<div key={idx} className="order_accordion_div">
                        <Accordion expanded={props.expandedOrderId === order.data.order_id} onChange={handleChange(order.data.order_id)}>
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className="accordion_title">Order to {order.data.store.store_name}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="accordion_details_div">
                                    <div className="client_phone_div">
                                        <span className="client_phone_literal_span"><strong>Client Phone </strong></span>
                                        <span className="client_phone_number_span">{order.data.client_phone}</span>
                                    </div>
                                    <div className="items_div">
                                        {
                                            order.data.items.map((item, idx) => {

                                                let optionsKeys = [];
                                                if (item.hasOwnProperty('variant')) {
                                                    if (item.variant[item.item_id]) {
                                                        if (item.variant[item.item_id].hasOwnProperty('variant_options')) {
                                                            optionsKeys = Object.keys(item.variant[item.item_id].variant_options);
                                                        }
                                                    }
                                                }

                                                return (
                                                    <div className="item_div" key={idx}>
                                                        <div className="item_name_div">
                                                            <Chip
                                                                label={item.item_name}
                                                                //onClick={handleClick}
                                                                //onDelete={handleDelete}
                                                                icon={<LabelImportant />}
                                                                variant="outlined"
                                                                className="item_name_chip"
                                                                color="primary"
                                                            />
                                                        </div>
                                                        {
                                                            item.item_count > 0 ? null :
                                                                <div className="options_div">
                                                                    <div className="options_literal_div">
                                                                        <strong>options</strong>
                                                                    </div>
                                                                    {
                                                                        optionsKeys.map((key, idx) => {
                                                                            return (
                                                                                <div key={idx} className="option_div">
                                                                                    <span className="option_key_span">
                                                                                        {key}
                                                                                    </span>
                                                                                    <span className="option_value_span">
                                                                                        {item.variant[item.item_id].variant_options[key]}
                                                                                    </span>
                                                                                </div>
                                                                            );
                                                                        })
                                                                    }
                                                                </div>
                                                        }
                                                        <div className="extras_div">
                                                            <div className="extras_literal_div">
                                                                <strong>Extras</strong>
                                                            </div>
                                                            {
                                                                item.extras[item.item_id].map((extra, idx) => {
                                                                    return (
                                                                        <div key={idx} className="extra_div">
                                                                            {extra.extra_name}
                                                                        </div>
                                                                    );
                                                                })
                                                            }
                                                        </div>
                                                    </div>
                                                );
                                            })
                                        }
                                    </div>
                                    <Button
                                        className="change_state_button"
                                        onClick={() => orderReadyHandler(order.data.order_id, order.id)}>order is ready</Button>
                                </div>
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
        orders: state.orders.orders,
        expandedOrderId: state.orders.expandedOrderId,
        isOrderReadyRequestSend: state.orders.isOrderReadyRequestSend
    }
};

const mapDispatchToProps = dispatch => {
    return {
        changeTab: (tab: string) => dispatch({ type: actionsTypes.TABLOADED, tab: tab }),
        ordersDidMount: () => dispatch({ type: actionsTypes.ORDERSDIDMOUNT }),
        setOpenedOrderId: (orderId: number | false) => dispatch({ type: actionsTypes.SETOPENEDORDERID, orderId: orderId }),
        orderReady: (orderId: number, notificationId) => dispatch({ type: actionsTypes.ORDERREADY, orderId: orderId, notificationId: notificationId })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);