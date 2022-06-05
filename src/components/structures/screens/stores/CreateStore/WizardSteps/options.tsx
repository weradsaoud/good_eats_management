import React, { Component, useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import DropDown from "../../../../../views/basiccomponents/dropdown/DropDown";
import IconButton from '@mui/material/IconButton';
import { AddCircle, RemoveCircle, ChevronRight, KeyboardArrowLeft, Delete, Add } from '@material-ui/icons';
import Button from '@mui/material/Button';
import { NavLink } from "react-router-dom";
import routes from "../../../../../../globals/routes";
import './options.css';
import * as actionsTypes from '../../../../../../store/actions/actionsTypes';
import { connect } from "react-redux";


function Options(props) {

    const previousHandler = () => {
        props.previousOptions();
    };
    const nextHandler = () => {
        props.nextOptions();
    };
    const itemChangeHandler = (itemId: string, newItemId: string) => {
        props.changeInput('optionItemId', itemId, newItemId);
    };
    const optionNameCahngeHandler = (event, itemId: string, itemOptionIndex: number) => {
        props.changeInput('optionName', itemId, null, itemOptionIndex, event.target.value);
    };
    const itemOptionValueChangeHandler = (event, itemId: string, itemOptionIndex: number, itemOptionValueIndex: number) => {
        props.changeInput('optionValue', itemId, null, itemOptionIndex, null, itemOptionValueIndex, event.target.value);
    };
    const addOptionHandler = (itemId: string) => {
        props.addOption(itemId);
    };

    const removeOptionHandler = (itemId: string, itemOptionIndex: number) => {
        props.removeOption(itemId, itemOptionIndex);
    };
    const addItemOptionValueHandler = (itemId: string, itemOptionIndex: number) => {
        props.addOptionValue(itemId, itemOptionIndex);
    };
    const removeItemOptionValueHandler = (itemId: string, itemOptionIndex: number, itemOptionValueIndex: number) => {
        props.removeItemOptionValue(itemId, itemOptionIndex, itemOptionValueIndex);
    };
    const addItemHandler = () => {
        props.addItem();
    };
    const removeItemHandler = (itemId: string) => {
        props.removeItem(itemId);
    };

    let itemsIds = Object.keys(props.options);

    let itemsOptions = itemsIds.map((itemId, itemIndex) => { //items
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
                                Remove Item Options
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
                                Remove Item Options
                            </Button>
                        </div>
                    </div>
                );
            }
        }

        let itemOptions = props.options[itemId].map((itemOption, itemOptionIndex) => { // itemOptions
            let itemOptionValues = itemOption.values;
            let optionValues = itemOptionValues.map((itemOptionValue, itemOptionValueIndex) => { // itemOptionsValues
                let itemOptionValuesAddOrMinus: JSX.Element;
                if (itemOptionValues && itemOptionValues.length == 1) {
                    itemOptionValuesAddOrMinus = (
                        <div className="addMinusDiv">
                            <div className="optionValueAddBtnDiv">
                                <IconButton className="IconButtonClass" onClick={() => addItemOptionValueHandler(itemId, itemOptionIndex)} aria-label="delete">
                                    <AddCircle className="AddCircleValues" />
                                </IconButton>
                            </div>
                            <div className="itemOptionValueFakeAddBtnDiv">
                                <IconButton className="IconButtonClass" aria-label="delete" disabled>
                                    <RemoveCircle className="RemoveCircleFakeValues" />
                                </IconButton>
                            </div>
                        </div>
                    );
                } else {
                    if (itemOptionValueIndex == itemOptionValues.length - 1) {
                        itemOptionValuesAddOrMinus = (
                            <div className="addMinusDiv">
                                <div className="optionValueMinusBtnDiv">
                                    <IconButton className="IconButtonClass" onClick={() => removeItemOptionValueHandler(itemId, itemOptionIndex, itemOptionValueIndex)} aria-label="delete">
                                        <RemoveCircle className="RemoveCircleValues" />
                                    </IconButton>
                                </div>
                                <div className="optionValueAddBtnDiv">
                                    <IconButton className="IconButtonClass" onClick={() => addItemOptionValueHandler(itemId, itemOptionIndex)} aria-label="delete">
                                        <AddCircle className="AddCircleValues" />
                                    </IconButton>
                                </div>
                            </div>
                        );
                    } else {
                        itemOptionValuesAddOrMinus = (
                            <div className="addMinusDiv">
                                <div className="optionValueMinusBtnDiv">
                                    <IconButton className="IconButtonClass" onClick={() => removeItemOptionValueHandler(itemId, itemOptionIndex, itemOptionValueIndex)} aria-label="delete">
                                        <RemoveCircle className="RemoveCircleValues" />
                                    </IconButton>
                                </div>
                                <div className="itemOptionValueFakeAddBtnDiv">
                                    <IconButton className="IconButtonClass" aria-label="delete" disabled>
                                        <RemoveCircle className="RemoveCircleFakeValues" />
                                    </IconButton>
                                </div>
                            </div>
                        );
                    }
                }

                return (
                    <div className="valueDiv" key={itemOptionValueIndex}>
                        <div className="valuesInputDiv">
                            <TextField  autoComplete="off"  onChange={(event) => itemOptionValueChangeHandler(event, itemId, itemOptionIndex, itemOptionValueIndex)} id="outlined-basic" className="NameTextField" label="Value" variant="outlined" size="small" value={itemOptionValue} />
                        </div>
                        {itemOptionValuesAddOrMinus}
                    </div>
                );
            });

            let itemOptionAddOrMinus: JSX.Element;
            if (props.options[itemId] && props.options[itemId].length == 1) {
                itemOptionAddOrMinus = (
                    <div className="addMinusDiv">
                        <div className="optionAddBtnDiv">
                            <IconButton className="IconButtonClass" onClick={() => addOptionHandler(itemId)} aria-label="delete">
                                <AddCircle className="AddCircle" />
                            </IconButton>
                        </div>
                    </div>
                );
            } else {
                if (itemOptionIndex == props.options[itemId].length - 1) {
                    itemOptionAddOrMinus = (
                        <div className="addMinusDiv">
                            <div className="optionAddBtnDiv">
                                <IconButton className="IconButtonClass" onClick={() => addOptionHandler(itemId)} aria-label="delete">
                                    <AddCircle className="AddCircle" />
                                </IconButton>
                            </div>
                            <div className="optionMinusBtnDiv">
                                <IconButton className="IconButtonClass" onClick={() => removeOptionHandler(itemId, itemOptionIndex)} aria-label="delete">
                                    <RemoveCircle className="RemoveCircle" />
                                </IconButton>
                            </div>
                        </div>
                    );
                } else {
                    itemOptionAddOrMinus = (
                        <div className="addMinusDiv">
                            <div className="itemOptionValueFakeAddBtnDiv">
                                <IconButton className="IconButtonClass" aria-label="delete" disabled>
                                    <RemoveCircle className="RemoveCircleFake" />
                                </IconButton>
                            </div>
                            <div className="optionMinusBtnDiv">
                                <IconButton className="IconButtonClass" onClick={() => removeOptionHandler(itemId, itemOptionIndex)} aria-label="delete">
                                    <RemoveCircle className="RemoveCircle" />
                                </IconButton>
                            </div>
                        </div>
                    );
                }
            }

            return (
                <div className="nameValuesDiv" key={itemOptionIndex}>
                    <div className="nameDiv">
                        {itemOptionAddOrMinus}
                        <div className="optionNameInputDiv">
                            <TextField  autoComplete="off"  onChange={(event) => optionNameCahngeHandler(event, itemId, itemOptionIndex)} id="outlined-basic" className="NameTextField" label="Name" variant="outlined" size="small" value={itemOption.name} />
                        </div>
                    </div>
                    <div className="valuesDiv">
                        {optionValues}
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
                {itemOptions}
                {itemsAddRemoveBtns}
            </div>
        );
    });


    return (
        <div className="optionsDiv">
            <div className="allItemsOptionsDiv">
                {itemsOptions}
            </div>
            <div className="ctrlBtns">
                <div className="endBtns">
                    <Button style={{ "marginRight": "20px", "textTransform": "none", "color": '#4BB543' }}>Save Store</Button>
                    <NavLink to={routes.storesPageUrl} className="NavLinkClass"  style={{'padding': '6px 8px'}}>
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
        options: state.createStore.options
    }
};
const mapDispatchToProps = dispatch => {
    return {
        next: () => dispatch({ type: actionsTypes.OPTIONSNEXT }),
        previous: () => dispatch({ type: actionsTypes.OPTIONSPREVIOUS }),
        addOption: (itemId: string) => dispatch({ type: actionsTypes.ADDOPTION, itemId: itemId }),
        addOptionValue: (itemId: string, itemOptionIndex: number) => dispatch({ type: actionsTypes.ADDOPTIONVALUE, itemId: itemId, itemOptionIndex: itemOptionIndex }),
        removeOption: (itemId: string, itemOptionIndex: number) => dispatch({ type: actionsTypes.REMOVEOPTION, itemId: itemId, itemOptionIndex: itemOptionIndex }),
        removeItemOptionValue: (itemId: string, itemOptionIndex: number, itemOptionValueIndex: number) => dispatch({ type: actionsTypes.REMOVEOPTIONVALUE, itemId: itemId, itemOptionIndex: itemOptionIndex, itemOptionValueIndex: itemOptionValueIndex }),
        addItem: () => dispatch({ type: actionsTypes.ADDITEMFOROPTIONS }),
        removeItem: (itemId: string) => dispatch({ type: actionsTypes.REMOVEITEMFROMOPTIONS, itemId: itemId }),
        changeInput: (
            input: string,
            itemId: string,
            newItemId: string,
            optionIndex: number = null,
            optionVal: any = null,
            optionValueIndex: number = null,
            optionValueVal: any = null
        ) => dispatch({
            type: actionsTypes.CHANGEINPUT,
            in: 'Options',
            input: input,
            itemId: itemId,
            newItemId: newItemId,
            optionIndex: optionIndex,
            optionVal: optionVal,
            optionValueIndex: optionValueIndex,
            optionValueVal: optionValueVal
        })
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Options);