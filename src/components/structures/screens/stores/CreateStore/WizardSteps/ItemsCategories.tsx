import React, { Component, useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import IconButton from '@mui/material/IconButton';
import { AddCircle, RemoveCircle, ChevronRight, KeyboardArrowLeft } from '@material-ui/icons';
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from "react-router-dom";
import routes from "../../../../../../globals/routes";
import './itemscategories.css';
import * as actionsTypes from '../../../../../../store/actions/actionsTypes';
import { connect } from "react-redux";

function ItemsCategories(props) {

    const addItemCategoryHandler = () => {
        props.addItemCategory();
    };
    const removeItemCategoryHandler = (index: number) => {
        props.removeItemCategory(index);
    };
    const activeChangeHandler = (index: number) => {
        props.changeInput('active', index);
    };
    const nameChangeHandler = (event, index: number) => {
        props.changeInput('name', index, event.target.value);
    };
    const previousHandler = () => {
        props.previousItemsCategories();
    };
    const nextHandler = () => {
        props.nextItemsCategories();
    };

    let itemsCategories = null;
    itemsCategories = props.itemsCategories.map((itemCategory, index) => {
        let addOrMinus: JSX.Element;
        if (props.itemsCategories.length == 1) {
            addOrMinus = <div className="addMinusDiv">
                <div className="addBtnDiv">
                    <IconButton onClick={addItemCategoryHandler} aria-label="delete">
                        <AddCircle className="AddCircle" />
                    </IconButton>
                </div>
            </div>;
        } else {
            if (index == props.itemsCategories.length - 1) {
                addOrMinus = <div className="addMinusDiv">
                    <div className="minusBtnDiv">
                        <IconButton onClick={() => removeItemCategoryHandler(index)} aria-label="delete">
                            <RemoveCircle className="RemoveCircle" />
                        </IconButton>
                    </div>
                    <div className="addBtnDiv">
                        <IconButton onClick={addItemCategoryHandler} aria-label="delete">
                            <AddCircle className="AddCircle" />
                        </IconButton>
                    </div>
                </div>;
            } else {
                addOrMinus = <div className="addMinusDiv">
                    <div className="minusBtnDiv">
                        <IconButton onClick={() => removeItemCategoryHandler(index)} aria-label="delete">
                            <RemoveCircle className="RemoveCircle" />
                        </IconButton>
                    </div>
                    <div className="addBtnDiv">
                        <IconButton aria-label="delete" disabled>
                            <RemoveCircle className="RemoveCircleee" />
                        </IconButton>
                    </div>
                </div>;
            }
        }

        return (
            <div className="itemCategoryDiv" key={index}>
                <div className='itemCategoryNameDiv'>
                    <TextField  autoComplete="off"  onChange={(event) => { nameChangeHandler(event, index) }} id="outlined-basic" className="NameTextField" label="Name" variant="outlined" size="small" value={itemCategory.name} />
                </div>
                <div className="itemCategoryActiveDiv">
                    <FormControlLabel control={<Switch onChange={() => { activeChangeHandler(index) }} checked={itemCategory.active} />} label="Active?" />
                </div>
                {addOrMinus}
            </div>
        );
    });


    return (
        <div className="itemsCategoriesDiv">
            {itemsCategories}
            <div className="ctrlBtns">
                <div className="endBtns">
                    <Button style={{ "marginRight": "20px", "textTransform": "none", "color": '#4BB543' }}>Save Store</Button>
                    <NavLink to={routes.storesPageUrl} className="NavLinkClass" style={{'padding': '6px 8px'}}>
                        <Button style={{ "textTransform": "none", "color": "#F32013" }}  >Cancel</Button>
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
        itemsCategories: state.createStore.itemsCategories
    }
};
const mapDispatchToProps = dispatch => {
    return {
        next: () => dispatch({ type: actionsTypes.ITEMSCATEGORIESNEXT }),
        previous: () => dispatch({ type: actionsTypes.ITEMSCATEGORIESPREVIOUS }),
        addItemCategory: () => dispatch({ type: actionsTypes.ADDITEMCATEGORY }),
        removeItemCategory: (index: number) => dispatch({ type: actionsTypes.REMOVEITEMCATEGORY, index: index }),
        changeInput: (input: string, index: number, val: any) => dispatch({ type: actionsTypes.CHANGEINPUT, in: 'ItemsCategories', input: input, index: index, val: val })
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(ItemsCategories);