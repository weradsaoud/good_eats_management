import React, { Component, useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import DropDown from "../../../../../views/basiccomponents/dropdown/DropDown";
import Switch from '@mui/material/Switch';
import IconButton from '@mui/material/IconButton';
import { Folder, AddCircle, RemoveCircle, ChevronRight, KeyboardArrowLeft } from '@material-ui/icons';
import Button from '@mui/material/Button';
import { NavLink } from "react-router-dom";
import routes from "../../../../../../globals/routes";
import './items.css';
import * as actionsTypes from '../../../../../../store/actions/actionsTypes';
import { connect } from "react-redux";


function Items(props) {

    useEffect(() => {
        console.log('itemsCategories: ', props.itemsCategories);

    }, []);

    const addItemHandler = () => {
        props.addItem();
    };
    const removeItemHandler = (index: number) => {
        props.removeItem(index);
    };
    const nameChangeHandler = (event, index: number) => {
        props.changeInput('name', index, event.target.value);
    };
    const priceChangeHandler = (event, index: number) => {
        props.changeInput('price', index, event.target.value);
    };
    const vatValueChangeHandler = (event, index: number) => {
        props.changeInput('vatValue', index, event.target.value);
    };
    const descriptionChangeHandler = (event, index: number) => {
        props.changeInput('description', index, event.target.value);
    };
    const activeChangeHandler = (index: number) => {
        props.changeInput('active', index);
    };
    const itemCategoryChangeHandler = (index: number, itemCategoryId: string) => {
        props.changeInput('itemCategoryId', index, itemCategoryId);
    };
    const previousHandler = () => {
        props.previousItems();
    };
    const nextHandler = () => {
        props.nextItems();
    };
    const readItemPhoto = (event, itemIndex) => {
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                props.changeInput('itemPhoto', itemIndex, { img: e.target.result, uploadImg: event.target.files[0] });
            };

            reader.readAsDataURL(event.target.files[0]);
        }
    };

    let items = props.items.map((item, index) => {

        let addOrMinus: JSX.Element;
        if (props.items.length == 1) {
            addOrMinus = <div className="addMinusDiv">
                <div className="itemAddBtnDiv">
                    <IconButton onClick={addItemHandler} aria-label="delete">
                        <AddCircle className="AddCircle" />
                    </IconButton>
                </div>
            </div>;
        } else {
            if (index == props.items.length - 1) {
                addOrMinus = <div className="addMinusDiv">
                    <div className="itemMinusBtnDiv">
                        <IconButton onClick={() => removeItemHandler(index)} aria-label="delete">
                            <RemoveCircle className="RemoveCircle" />
                        </IconButton>
                    </div>
                    <div className="itemAddBtnDiv">
                        <IconButton onClick={addItemHandler} aria-label="delete">
                            <AddCircle className="AddCircle" />
                        </IconButton>
                    </div>
                </div>;
            } else {
                addOrMinus = <div className="addMinusDiv">
                    <div className="itemMinusBtnDiv">
                        <IconButton onClick={() => removeItemHandler(index)} aria-label="delete">
                            <RemoveCircle className="RemoveCircle" />
                        </IconButton>
                    </div>
                    <div className="itemAddBtnDiv">
                        <IconButton aria-label="delete" disabled>
                            <RemoveCircle className="RemoveCircleee" />
                        </IconButton>
                    </div>
                </div>;
            }
        }


        return (
            <div className="itemDiv" key={index}>
                <div className="itemImgDiv">
                    <img className="itemImg" src={props.items[index].img} />
                </div>
                <div className="itemLeftDiv">
                    <div className="firstRow">
                        <div className="itemCategoryDropDiv">
                            <DropDown
                                options={props.itemsCategories}
                                itemChangeHandler={(itemCategoryId) => itemCategoryChangeHandler(index, itemCategoryId)}
                                selectedItemId={item.itemCategoryId}
                            />
                        </div>
                        <TextField autoComplete="off" onChange={(event) => nameChangeHandler(event, index)} id="outlined-basic" className="NameTextField" label="Name" variant="outlined" size="small" value={item.name} />
                        <TextField autoComplete="off" onChange={(event) => priceChangeHandler(event, index)} id="outlined-basic" className="NameTextField" label="Price" variant="outlined" size="small" value={item.price} />
                        <TextField autoComplete="off" onChange={(event) => vatValueChangeHandler(event, index)} id="outlined-basic" className="NameTextField" label="Vat value" variant="outlined" size="small" value={item.vatValue} />
                    </div>
                    <div className="secondRow">
                        <TextField autoComplete="off"
                            className="itemdescriptionTextField"
                            id="outlined-multiline-flexible"
                            label="Description"
                            multiline
                            maxRows={4}
                            size="small"
                            value={item.description}
                            onChange={(event) => descriptionChangeHandler(event, index)}
                        />
                        <Button component="label" style={{ 'textTransform': 'none' }} variant="outlined" startIcon={<Folder />}>
                            Photo
                            <input
                                type="file"
                                onChange={(event) => readItemPhoto(event, index)}
                                hidden
                            />
                        </Button>
                        <FormControlLabel control={<Switch onChange={() => activeChangeHandler(index)} checked={item.active} />} label="Active?" />
                    </div>
                </div>
                <div className="itemRightDiv">
                    {addOrMinus}
                </div>
            </div>
        );
    });


    return (
        <div className="itemsDiv">
            <div className="allItemsDiv">
                {items}
            </div>
            <div className="ctrlBtns">
                <div className="endBtns">
                    <Button style={{ "marginRight": "20px", "textTransform": "none", "color": '#4BB543' }}>Save Store</Button>
                    <NavLink to={routes.storesPageUrl} className="NavLinkClass" style={{ 'padding': '6px 8px' }}>
                        <Button component="div" style={{ "textTransform": "none", "color": "#F32013" }} >
                            Cancel
                        </Button>
                    </NavLink>
                </div>
                <div className="navBtns">
                    <Button onClick={previousHandler} style={{ "marginRight": "20px", "textTransform": "none" }} startIcon={<KeyboardArrowLeft />}>Previous</Button>
                    <Button onClick={nextHandler} style={{ "textTransform": "none" }} endIcon={<ChevronRight />}>Next</Button>
                </div>
            </div>
        </div>

    );
}

const mapStateToProps = state => {
    return {
        itemsCategories: state.createStore.itemsCategories,
        items: state.createStore.items
    }
};
const mapDispatchToProps = dispatch => {
    return {
        next: () => dispatch({ type: actionsTypes.ITEMSCATEGORIESNEXT }),
        previous: () => dispatch({ type: actionsTypes.ITEMSCATEGORIESPREVIOUS }),
        addItem: () => dispatch({ type: actionsTypes.ADDITEM }),
        removeItem: (index: number) => dispatch({ type: actionsTypes.REMOVEITEM, index: index }),
        changeInput: (input: string, index: number, val: any) => dispatch({ type: actionsTypes.CHANGEINPUT, in: 'Items', input: input, index: index, val: val })
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Items);