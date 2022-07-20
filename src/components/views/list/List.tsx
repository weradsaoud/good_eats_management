import { ListItemText, List } from "@material-ui/core";
import { ListItemButton } from "@mui/material";
import React from "react";
import './list.css';

interface listElement{
    id: number,
    content: string
};

interface IProps {
    list: listElement[],
};

function NotificationsList(props: IProps) {

    const [selectedIndex, setSelectedIndex] = React.useState(-1);

    const handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number,
    ) => {
        console.log(index);
        
        setSelectedIndex(index);
    };


    return (
        <div className="list_div">
            <List component="nav" aria-label="secondary mailbox folder" className="my_List">

                {
                    props.list.map((element, idx) => {
                        return (
                            <ListItemButton
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

export default NotificationsList;