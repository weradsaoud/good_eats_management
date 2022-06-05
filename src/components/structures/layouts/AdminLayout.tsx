import React, { Component } from "react";
import { connect } from 'react-redux';
import { Outlet } from 'react-router-dom';
import TopBar from '../../views/topbar/TopBar';
import SideBar from '../../views/sidebar/SideBar';
import './layout.css';


interface IProps {
    //children: React.ReactNode;
    breadcrumb: any;
}

class AdminLayout extends Component<IProps> {

    render(): React.ReactNode {
        //console.log("AdminLayout props: ", this.props);
        
        return (
            <div>
                <TopBar path = {this.props.breadcrumb.path}></TopBar>
                <div className="scontainer">
                    <SideBar tab={this.props.breadcrumb.tab}></SideBar>
                    <div className="bodyContainer" style={{ flex: 4 }}>
                        {/* {this.props.children} */}
                        <Outlet />
                    </div>
                </div>
            </div>

        );
    }

}

const mapStateToProps = state => {
    return {
        breadcrumb: state.breadcrumb
    }
}

export default connect(mapStateToProps)(AdminLayout);