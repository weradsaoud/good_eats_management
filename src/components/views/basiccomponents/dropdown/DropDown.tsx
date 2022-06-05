import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
//import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { ArrowDropDown } from '@material-ui/icons';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import { makeStyles } from '@material-ui/core/styles';

//const options = ['Create a merge commit', 'Squash and merge', 'Rebase and merge'];

const useStyles = makeStyles({
  root: {
    textTransform: 'none',
  },
  btnGroup: {
    Width: "100%",
    maxWidth: "209px"
  },
  nameBtn: {
    width: "100%",
    justifyContent: "left !important"
  },
  ulLi: {
    maxWidth: "209px",
    minWidth: "100px",
    textTransform: 'none',
    overflow: "hidden"
  }
});

export default function DropDown(props) {

  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [selectedItemId, setSelectedItemId] = React.useState(null);

  const handleClick = () => {
    //console.info(`You clicked ${props.options[selectedIndex]}`);
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    index: number,
  ) => {
    //setSelectedItemId(props.options[index].id);
    props.itemChangeHandler(props.options[index].id);
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  // React.useEffect(() => {
  //   //setSelectedItemId(props.options[selectedIndex].id);
  //   console.log("[selectedIndex]");

  //   props.itemChangeHandler(props.options[selectedIndex].id);
  // }, [selectedIndex]);

  // React.useEffect(() => {
  //   console.log('option index: ', selectedIndex);
  //   console.log('item id: ', selectedItemId);
  // }, [selectedItemId]);
  var selectedItemName: string;

  if (props.options && props.options.length > 0) {
    let selectedItemArray = props.options.filter(option => option.id == props.selectedItemId);
    let selectedItem;
    if (selectedItemArray && selectedItemArray.length > 0) {
      selectedItem = selectedItemArray[0];
      selectedItemName = selectedItem.name;
    } else {
      selectedItemName = 'Please, Choose item';
    }
  } else {
    selectedItemName = 'No items!';
  }



  return (
    <React.Fragment>
      <ButtonGroup className={classes.btnGroup} variant="contained" ref={anchorRef} aria-label="split button">
        <Button onClick={handleClick} className={classes.nameBtn} style={{ "textTransform": "none" }}>{selectedItemName}</Button>
        <Button
          size="small"
          aria-controls={open ? 'split-button-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleToggle}
        >
          <ArrowDropDown />
        </Button>
      </ButtonGroup>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        style={{ zIndex: 100 }}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" autoFocusItem>
                  {props.options ? props.options.map((option, index) => (
                    <MenuItem
                      key={option.id}
                      selected={option.id === props.selectedItemId}
                      onClick={(event) => handleMenuItemClick(event, index)}
                      className={classes.ulLi}
                    >
                      {option.name}
                    </MenuItem>
                  )) : <MenuItem
                    className={classes.ulLi}>

                  </MenuItem>}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </React.Fragment>
  );
}