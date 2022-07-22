import React, { useState } from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings, ArrowRightTwoTone } from "@material-ui/icons";
import { NavLink } from "react-router-dom";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import { connect } from "react-redux";
import NotificationsList from '../list/List';
import * as actionsTypes from '../../../store/actions/actionsTypes';

function TopBar(props) {



    const [isNotificationListOpen, setIsNotificationListOpen] = useState(false);

    document.addEventListener('mouseup', function (e) {
        var container = document.getElementById('notification_list_div');
        if (container)
            if (!container.contains(e.target)) {
                props.closeNotificationList();
            }
    });


    let notificationsList = props.newOrders.map((nO, idx) => {
        return {
            id: nO.data.order_id,
            content: nO.data.store.store_name
        };
    });


    //console.log("TopBar props: ", props);
    let breadcrumbs = [];
    let pathArray = props.path.split("/");

    if (pathArray && pathArray.length > 0) {
        let paths = [];
        let segments = pathArray.slice(1, pathArray.length);
        for (let i = 0; i < segments.length; i++) {
            let temp = segments.slice(0, i + 1);
            let element = "";
            for (let j = 0; j < temp.length; j++) {
                element = element + "/" + temp[j];

            }
            paths[i] = element;
        }

        breadcrumbs = segments.map((segment, index) => (index == (segments.length - 1)) ?
            (<Typography key={index} color="text.primary">
                <span style={{ "fontSize": "small", "margin": "0px" }}>{segment.replace("_", " ")}</span>
            </Typography>) :
            (<NavLink key={index} to={paths[index]} className="NavLinkClass">
                <p style={{ "fontSize": "small", "margin": "0px" }}>{segment.replace("_", " ")}</p>
            </NavLink>));
    }

    const toggleNotificationsList = () => {
        console.log('clicked');
        setIsNotificationListOpen(true);
    };


    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">GoodEats</span>
                    <div className="topMiddle">
                        <Breadcrumbs
                            separator={<ArrowRightTwoTone style={{ "fontSize": "large" }} />}
                            aria-label="breadcrumb"
                        >
                            {breadcrumbs}
                        </Breadcrumbs>
                    </div>
                </div>

                <div className="topRight">
                    <div className="topbarIconContainer" onClick={props.openNotificationsList}>
                        <NotificationsNone />
                        {(props.newOrders.length > 0) ? <span className="topIconBadge">{props.newOrders.length}</span> : null}
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                    <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
                </div>
            </div>
            {props.isNotificationListOpen ? <div id="notification_list_div" className="notification_list_div">
                <NotificationsList
                    list={notificationsList} />
            </div> : null}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        newOrders: state.orders.newOrders,
        isNotificationListOpen: state.orders.isNotificationListOpen
    }
};
const mapDispatchToProps = dispatch => {
    return {
        closeNotificationList: () => dispatch({ type: actionsTypes.CLOSENOTIFICATIONLISTOPEN }),
        openNotificationsList: () => dispatch({ type: actionsTypes.OPENNOTIFICATIONLISTOPEN })
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(TopBar);