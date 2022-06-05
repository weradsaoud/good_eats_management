import React, { Component } from "react";
import routes from '../../../globals/routes';
import "./sidebar.css";
import {
    Category,
    Store,
    Fastfood,
    Dashboard,
    ListAlt,
    Money,
    BubbleChart,
    LocalOffer,
    Copyright,
    LocalAtm
} from "@material-ui/icons";
import { NavLink } from "react-router-dom";

export default class Sidebar extends Component {


    componentDidMount() {
        //console.log('sidebar props: ', this.props);
    }

    render() {
        //console.log("sidebar props: ", this.props);
        return (
            <div className="sidebar">
                <div className="sidebarWrapper">
                    <div className="sidebarMenu">
                        <NavLink
                            to={routes.dashboardPageUrl}
                            className={"NavLinkClass"}>
                            <h3
                                className={this.props.tab == routes.dashboardPageUrl ? "dashboardItem active" : "dashboardItem"}
                            >
                                <Dashboard className="sidebarIcon" />
                                Dashboard
                            </h3>
                        </NavLink>
                        {/* <ul className="sidebarList">
                             //<Link to="/" className="link"> 
                            <li className="sidebarListItem active">
                                <LineStyle className="sidebarIcon" />
                                Home
                            </li>
                             //</Link> 
                            <li className="sidebarListItem">
                                <Timeline className="sidebarIcon" />
                                Analytics
                            </li>
                            <li className="sidebarListItem">
                                <TrendingUp className="sidebarIcon" />
                                Sales
                            </li>
                        </ul> */}
                    </div>
                    <div className="sidebarMenu">
                        <h3 className="sidebarTitle">Quick Menu</h3>
                        <ul className="sidebarList">
                            {/* //<Link to="/users" className="link"> */}
                            <NavLink
                                to={routes.storesCategoriesPageUrl}
                                className={"NavLinkClass"}>
                                <li
                                    className={this.props.tab == routes.storesCategoriesPageUrl ? "sidebarListItem active" : "sidebarListItem"}
                                >
                                    <Category className="sidebarIcon" />
                                    Stores Catgories
                                </li>
                            </NavLink>
                            {/* //</Link> */}
                            {/* //<Link to="/products" className="link"> */}
                            <NavLink to={routes.storesPageUrl} className={"NavLinkClass"}>
                                <li
                                    className={this.props.tab == routes.storesPageUrl ? "sidebarListItem active" : "sidebarListItem"}
                                >
                                    <Store className="sidebarIcon" />
                                    Stores
                                </li>
                            </NavLink>
                            {/* //</Link> */}
                            <NavLink to={routes.itemsCategoriesPageUrl} className={"NavLinkClass"}>
                                <li
                                    className={this.props.tab == routes.itemsCategoriesPageUrl ? "sidebarListItem active" : "sidebarListItem"}
                                >
                                    <Category className="sidebarIcon" />
                                    Items Categories
                                </li>
                            </NavLink>
                            <NavLink to={routes.itemsPageUrl} className={"NavLinkClass"}>
                                <li
                                    className={this.props.tab == routes.itemsPageUrl ? "sidebarListItem active" : "sidebarListItem"}
                                >
                                    <Fastfood className="sidebarIcon" />
                                    Items
                                </li>
                            </NavLink>
                            <NavLink to={routes.optionsPageUrl} className={"NavLinkClass"}>
                                <li
                                    className={this.props.tab == routes.optionsPageUrl ? "sidebarListItem active" : "sidebarListItem"}
                                >
                                    <ListAlt className="sidebarIcon" />
                                    Options
                                </li>
                            </NavLink>
                            <NavLink to={routes.pricingVariantsPageUrl} className={"NavLinkClass"}>
                                <li
                                    className={this.props.tab == routes.pricingVariantsPageUrl ? "sidebarListItem active" : "sidebarListItem"}
                                >
                                    <Money className="sidebarIcon" />
                                    Pricing Variants
                                </li>
                            </NavLink>
                            <NavLink to={routes.extrasPageUrl} className={"NavLinkClass"}>
                                <li
                                    className={this.props.tab == routes.extrasPageUrl ? "sidebarListItem active" : "sidebarListItem"}
                                >
                                    <BubbleChart className="sidebarIcon" />
                                    Extras
                                </li>
                            </NavLink>
                            <NavLink to={routes.offersPageUrl} className={"NavLinkClass"}>
                                <li
                                    className={this.props.tab == routes.offersPageUrl ? "sidebarListItem active" : "sidebarListItem"}
                                >
                                    <LocalOffer className="sidebarIcon" />
                                    Offers
                                </li>
                            </NavLink>
                        </ul>
                    </div>
                    <div className="sidebarMenu">
                        <h3 className="sidebarTitle">Users</h3>
                        <ul className="sidebarList">
                            <NavLink to={routes.ownersPageUrl} className={"NavLinkClass"}>
                                <li
                                    className={this.props.tab == routes.ownersPageUrl ? "sidebarListItem active" : "sidebarListItem"}
                                >
                                    <Copyright className="sidebarIcon" />
                                    Owners
                                </li>
                            </NavLink>
                            <NavLink to={routes.cashiersPageUrl} className={"NavLinkClass"}>
                                <li
                                    className={this.props.tab == routes.cashiersPageUrl ? "sidebarListItem active" : "sidebarListItem"}
                                >
                                    <LocalAtm className="sidebarIcon" />
                                    Cashiers
                                </li>
                            </NavLink>
                        </ul>
                    </div>
                    {/* <div className="sidebarMenu">
                        <h3 className="sidebarTitle">Staff</h3>
                        <ul className="sidebarList">
                            <li className="sidebarListItem">
                                <WorkOutline className="sidebarIcon" />
                                Manage
                            </li>
                            <li className="sidebarListItem">
                                <Timeline className="sidebarIcon" />
                                Analytics
                            </li>
                            <li className="sidebarListItem">
                                <Report className="sidebarIcon" />
                                Reports
                            </li>
                        </ul>
                    </div> */}
                </div>
            </div>
        );
    }

}