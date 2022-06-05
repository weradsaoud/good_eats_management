import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings, ArrowRightTwoTone } from "@material-ui/icons";
import { NavLink } from "react-router-dom";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';

export default function TopBar(props) {

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
                <span style={{"fontSize":"small", "margin":"0px"}}>{segment.replace("_", " ")}</span>
            </Typography>) :
            (<NavLink key={index} to={paths[index]} className="NavLinkClass">
                <p style={{"fontSize":"small", "margin":"0px"}}>{segment.replace("_", " ")}</p>
            </NavLink>));
    }


    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">GoodEats</span>
                    <div className="topMiddle">
                        <Breadcrumbs
                            separator={<ArrowRightTwoTone style={{"fontSize":"large"}}/>}
                            aria-label="breadcrumb"
                        >
                            {breadcrumbs}
                        </Breadcrumbs>
                    </div>
                </div>

                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
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
        </div>
    );
}