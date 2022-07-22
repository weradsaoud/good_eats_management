import { ListItemText, List } from "@material-ui/core";
import { ListItemButton } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";
import routes from "../../../globals/routes";
import './list.css';
import * as actionsTypes from '../../../store/actions/actionsTypes';
import { connect } from "react-redux";

interface listElement {
    id: number,
    content: string
};

interface IProps {
    list: listElement[],
    closeNotificationList: any,
    setOpenedOrderId: any
};

function NotificationsList(props: IProps) {

    const [selectedIndex, setSelectedIndex] = React.useState(-1);

    let navigate = useNavigate();

    const handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number,
    ) => {
        console.log(index);

        setSelectedIndex(index);
        props.closeNotificationList();
        props.setOpenedOrderId(index);
        navigate(routes.ordersPageUrl);
    };


    return (
        <div className="list_div">
            <List component="nav" aria-label="secondary mailbox folder" className="my_List">

                {
                    props.list.map((element, idx) => {
                        return (
                            <ListItemButton
                                key={idx}
                                selected={selectedIndex === element.id}
                                onClick={(event) => handleListItemClick(event, element.id)}>
                                <ListItemText primary={`New Order to ${element.content}`} />
                            </ListItemButton>
                        );
                    })
                }
            </List>
        </div>
    );
}


const mapStateToProps = state => {
    return {
    }
};
const mapDispatchToProps = dispatch => {
    return {
        closeNotificationList: () => dispatch({ type: actionsTypes.CLOSENOTIFICATIONLISTOPEN }),
        setOpenedOrderId:(orderId: number) => dispatch({type: actionsTypes.SETOPENEDORDERID, orderId:orderId})
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(NotificationsList);