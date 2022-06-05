import React, { Component, useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import DropDown from "../../../../../views/basiccomponents/dropdown/DropDown";
import IconButton from '@mui/material/IconButton';
import { AddCircle, RemoveCircle, ChevronRight, KeyboardArrowLeft, Delete, Add } from '@material-ui/icons';
import Button from '@mui/material/Button';
import { NavLink } from "react-router-dom";
import routes from "../../../../../../globals/routes";
import './extras.css';
import * as actionsTypes from '../../../../../../store/actions/actionsTypes';
import { connect } from "react-redux";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

function Extras(props) {

    const previousHandler = () => {
        props.previousExtras();
    };
    const nextHandler = () => {
        props.nextExtras();
    };
    const itemChangeHandler = (itemId: string, newItemId: string) => {
        props.changeInput('extraItemId', itemId, newItemId);
    };
    const extraNameCahngeHandler = (event, itemId: string, itemExtraIndex: number) => {
        props.changeInput('extraName', itemId, null, itemExtraIndex, event.target.value);
    };
    const itemExtraPriceChangeHandler = (event, itemId: string, itemExtraIndex: number) => {
        props.changeInput('extraPrice', itemId, null, itemExtraIndex, event.target.value);
    };
    const addExtraHandler = (itemId: string) => {
        props.addExtra(itemId);
    };
    const forAllVariantsChangeHandler = (itemId: string, itemExtraIndex) => {
        props.changeInput('extraForAllVariants', itemId, null, itemExtraIndex);
    };
    const removeExtraHandler = (itemId: string, itemOptionIndex: number) => {
        props.removeExtra(itemId, itemOptionIndex);
    };
    const addItemHandler = () => {
        props.addItem();
    };
    const removeItemHandler = (itemId: string) => {
        props.removeItem(itemId);
    };

    let itemsIds = Object.keys(props.extras);

    let itemsExtras = itemsIds.map((itemId, itemIndex) => { //items
        let itemsAddRemoveBtns: JSX.Element;

        if (itemsIds.length == 1) {
            itemsAddRemoveBtns = (
                <div className="removeAddItemDiv">
                    <div className="addItemDiv">
                        <Button onClick={addItemHandler} style={{ "textTransform": "none", "color": "#4BB543", "borderColor": "#4BB543" }} variant="outlined" startIcon={<Add />}>
                            Next Item
                        </Button>
                    </div>
                </div>
            );

        } else {
            if (itemIndex == itemsIds.length - 1) {
                itemsAddRemoveBtns = (
                    <div className="removeAddItemDiv">
                        <div className="removeItemDiv">
                            <Button onClick={() => removeItemHandler(itemId)} style={{ "textTransform": "none", "color": "#F32013", "borderColor": "#F32013" }} variant="outlined" startIcon={<Delete />}>
                                Remove Item Extras
                            </Button>
                        </div>
                        <div className="addItemDiv">
                            <Button onClick={addItemHandler} style={{ "textTransform": "none", "color": "#4BB543", "borderColor": "#4BB543" }} variant="outlined" startIcon={<Add />}>
                                Next Item
                            </Button>
                        </div>
                    </div>
                );
            } else {
                itemsAddRemoveBtns = (
                    <div className="removeAddItemDiv">
                        <div className="removeItemDiv">
                            <Button onClick={() => removeItemHandler(itemId)} style={{ "textTransform": "none", "color": "#F32013", "borderColor": "#F32013" }} variant="outlined" startIcon={<Delete />}>
                                Remove Item Extras
                            </Button>
                        </div>
                    </div>
                );
            }
        }

        let itemExtras = props.extras[itemId].map((itemExtra, itemExtraIndex) => { // itemExtras
            let itemExtraAddOrMinus: JSX.Element;
            if (props.extras[itemId] && props.extras[itemId].length == 1) {
                itemExtraAddOrMinus = (
                    <div className="addMinusDiv">
                        <div className="optionAddBtnDiv">
                            <IconButton className="IconButtonClass" onClick={() => addExtraHandler(itemId)} aria-label="delete">
                                <AddCircle className="AddCircle" />
                            </IconButton>
                        </div>
                    </div>
                );
            } else {
                if (itemExtraIndex == props.extras[itemId].length - 1) {
                    itemExtraAddOrMinus = (
                        <div className="addMinusDiv">
                            <div className="optionAddBtnDiv">
                                <IconButton className="IconButtonClass" onClick={() => addExtraHandler(itemId)} aria-label="delete">
                                    <AddCircle className="AddCircle" />
                                </IconButton>
                            </div>
                            <div className="optionMinusBtnDiv">
                                <IconButton className="IconButtonClass" onClick={() => removeExtraHandler(itemId, itemExtraIndex)} aria-label="delete">
                                    <RemoveCircle className="RemoveCircle" />
                                </IconButton>
                            </div>
                        </div>
                    );
                } else {
                    itemExtraAddOrMinus = (
                        <div className="addMinusDiv">
                            <div className="itemOptionValueFakeAddBtnDiv">
                                <IconButton className="IconButtonClass" aria-label="delete" disabled>
                                    <RemoveCircle className="RemoveCircleFake" />
                                </IconButton>
                            </div>
                            <div className="optionMinusBtnDiv">
                                <IconButton className="IconButtonClass" onClick={() => removeExtraHandler(itemId, itemExtraIndex)} aria-label="delete">
                                    <RemoveCircle className="RemoveCircle" />
                                </IconButton>
                            </div>
                        </div>
                    );
                }
            }

            return (
                <div className="nameValuesDiv" key={itemExtraIndex}>
                    <div className="nameDiv">
                        {itemExtraAddOrMinus}
                        <div className="optionNameInputDiv">
                            <TextField  autoComplete="off"  onChange={(event) => extraNameCahngeHandler(event, itemId, itemExtraIndex)} id="outlined-basic" className="NameTextField" label="Name" variant="outlined" size="small" value={itemExtra.name} />
                        </div>
                    </div>
                    <div className="valuesDiv">
                        <div className="valueDiv">
                            <div className="valuesInputDiv">
                                <TextField  autoComplete="off"  onChange={(event) => itemExtraPriceChangeHandler(event, itemId, itemExtraIndex)} id="outlined-basic" className="NameTextField" label="Price" variant="outlined" size="small" value={itemExtra.price} />
                            </div>
                            <div className="forAlllVariantsDiv">
                                <FormControlLabel control={<Checkbox onChange={() => forAllVariantsChangeHandler(itemId, itemExtraIndex)} checked={itemExtra.forAllVariants} />} label="For all variants" className="dayCheckBox" />
                            </div>
                        </div>
                    </div>
                </div>
            );
        });


        return (
            <div className="itemOptionsDiv" key={itemId}>
                <div className="itemsDropDownDiv">
                    <label style={{ "marginRight": "10px" }}>Choose Item</label>
                    <DropDown
                        options={props.items}
                        itemChangeHandler={(newItemId) => itemChangeHandler(itemId, newItemId)}
                        selectedItemId={itemId}
                    />
                </div>
                {itemExtras}
                {itemsAddRemoveBtns}
            </div>
        );
    });


    return (
        <div className="optionsDiv">
            <div className="allItemsOptionsDiv">
                {itemsExtras}
            </div>
            <div className="ctrlBtns">
                <div className="endBtns">
                    <Button style={{ "marginRight": "20px", "textTransform": "none", "color": '#4BB543' }}>Save Store</Button>
                    <NavLink to={routes.storesPageUrl} className="NavLinkClass" style={{'padding': '6px 8px'}}>
                        <Button style={{ "textTransform": "none", "color": "#F32013" }}>Cancel</Button>
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
        items: state.createStore.items,
        extras: state.createStore.extras
    }
};
const mapDispatchToProps = dispatch => {
    return {
        next: () => dispatch({ type: actionsTypes.OPTIONSNEXT }),
        previous: () => dispatch({ type: actionsTypes.OPTIONSPREVIOUS }),
        addExtra: (itemId: string) => dispatch({ type: actionsTypes.ADDEXTRA, itemId: itemId }),
        removeExtra: (itemId: string, itemExtraIndex: number) => dispatch({ type: actionsTypes.REMOVEEXTRA, itemId: itemId, itemExtraIndex: itemExtraIndex }),
        addItem: () => dispatch({ type: actionsTypes.ADDITEMFOREXTRAS }),
        removeItem: (itemId: string) => dispatch({ type: actionsTypes.REMOVEITEMFROMExtras, itemId: itemId }),
        changeInput: (input: string, itemId: string, newItemId: string, extraIndex: number = null, val: any = null) => dispatch({ type: actionsTypes.CHANGEINPUT, in: 'Extras', input: input, itemId: itemId, newItemId: newItemId, extraIndex: extraIndex, val: val })
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Extras);
