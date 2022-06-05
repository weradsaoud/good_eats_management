import React, { Component, useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import IconButton from '@mui/material/IconButton';
import { AddCircle, RemoveCircle, ChevronRight, KeyboardArrowLeft, Add, Delete } from '@material-ui/icons';
import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink, useNavigate } from "react-router-dom";
import routes from "../../../../../globals/routes";
import './additemcategory.css';
import * as actionsTypes from '../../../../../store/actions/actionsTypes';
import { connect } from "react-redux";
import DropDown from "../../../../views/basiccomponents/dropdown/DropDown";
import { CircularProgress } from "@material-ui/core";
import { notifySuccess, notifyFailure } from '../../../../../services/toasts'

function AddItemCategory(props) {

    let navigate = useNavigate();

    useEffect(() => {
        props.getStores();
    }, []);
    useEffect(() => {
        if (props.itemsCategoriesUploadedSuccessfully) {
            props.resetItemsCategoriesUploadedSuccessfully();
            notifySuccess('Items categories were saved successfully');
            navigate(routes.itemsCategoriesPageUrl);
        }
    }, [props.itemsCategoriesUploadedSuccessfully]);
    useEffect(() => {
        if (props.itemsCategoriesUploadeFailed) {
            props.resetItemsCategoriesUploadeFailed();
            notifyFailure('Saving items categories failed!');
        }
    }, [props.itemsCategoriesUploadeFailed]);
    const saveHandler = () => {
        props.save(props.toAddItemsCategories);
    };

    const addItemCategoryHandler = (storeId: string) => {
        props.addItemCategory(storeId);
    };
    const removeItemCategoryHandler = (storeId: string, index: number) => {
        props.removeItemCategory(storeId, index);
    };
    const activeChangeHandler = (storeId: string, index: number) => {
        props.changeInput('active', storeId, index);
    };
    const nameChangeHandler = (event, storeId: string, index: number) => {
        props.changeInput('name', storeId, index, event.target.value);
    };
    const previousHandler = () => {
        props.previousItemsCategories();
    };
    const nextHandler = () => {
        props.nextItemsCategories();
    };
    const selcetedStoreChangeHandler = (storeId: string, id: string) => {
        console.log('id: ', id);

        props.changeInput('storeId', storeId, null, id);
    };
    const addStoreHandler = () => {
        props.addStore();
    };
    const removeStoreHandler = (storeId: string) => {
        props.removeStore(storeId);
    };

    let storesIds = Object.keys(props.toAddItemsCategories);
    let options = props.stores.map((store) => {
        return { id: store.id, name: store.name }
    });

    let storesItemsCategories = null;
    storesItemsCategories = storesIds.map((storeId, storeIndex) => {

        let storesAddRemoveBtns = null;
        if (storesIds.length == 1) {
            storesAddRemoveBtns = (
                <div className="removeAddItemDiv">
                    <div className="addItemDiv">
                        <Button onClick={addStoreHandler} style={{ "textTransform": "none", "color": "#4BB543", "borderColor": "#4BB543" }} variant="outlined" startIcon={<Add />}>
                            Next Store
                        </Button>
                    </div>
                </div>
            );

        } else {
            if (storeIndex == storesIds.length - 1) {
                storesAddRemoveBtns = (
                    <div className="removeAddItemDiv">
                        <div className="removeItemDiv">
                            <Button onClick={() => removeStoreHandler(storeId)} style={{ "textTransform": "none", "color": "#F32013", "borderColor": "#F32013" }} variant="outlined" startIcon={<Delete />}>
                                Remove Items Categories
                            </Button>
                        </div>
                        <div className="addItemDiv">
                            <Button onClick={addStoreHandler} style={{ "textTransform": "none", "color": "#4BB543", "borderColor": "#4BB543" }} variant="outlined" startIcon={<Add />}>
                                Next Store
                            </Button>
                        </div>
                    </div>
                );
            } else {
                storesAddRemoveBtns = (
                    <div className="removeAddItemDiv">
                        <div className="removeItemDiv">
                            <Button onClick={() => removeStoreHandler(storeId)} style={{ "textTransform": "none", "color": "#F32013", "borderColor": "#F32013" }} variant="outlined" startIcon={<Delete />}>
                                Remove Items Categories
                            </Button>
                        </div>
                    </div>
                );
            }
        }


        let itemsCategories = null;
        itemsCategories = props.toAddItemsCategories[storeId].map((itemCategory, index) => {
            let addOrMinus: JSX.Element;
            if (props.toAddItemsCategories[storeId].length == 1) {
                addOrMinus = <div className="addMinusDiv">
                    <div className="addBtnDiv">
                        <IconButton onClick={() => addItemCategoryHandler(storeId)} aria-label="delete">
                            <AddCircle className="AddCircle" />
                        </IconButton>
                    </div>
                </div>;
            } else {
                if (index == props.toAddItemsCategories[storeId].length - 1) {
                    addOrMinus = <div className="addMinusDiv">
                        <div className="minusBtnDiv">
                            <IconButton onClick={() => removeItemCategoryHandler(storeId, index)} aria-label="delete">
                                <RemoveCircle className="RemoveCircle" />
                            </IconButton>
                        </div>
                        <div className="addBtnDiv">
                            <IconButton onClick={() => addItemCategoryHandler(storeId)} aria-label="delete">
                                <AddCircle className="AddCircle" />
                            </IconButton>
                        </div>
                    </div>;
                } else {
                    addOrMinus = <div className="addMinusDiv">
                        <div className="minusBtnDiv">
                            <IconButton onClick={() => removeItemCategoryHandler(storeId, index)} aria-label="delete">
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
                        <TextField autoComplete="off" onChange={(event) => { nameChangeHandler(event, storeId, index) }} id="outlined-basic" className="NameTextField" label="Name" variant="outlined" size="small" value={itemCategory.cateName} />
                    </div>
                    <div className="itemCategoryActiveDiv">
                        <FormControlLabel control={<Switch onChange={() => { activeChangeHandler(storeId, index) }} checked={itemCategory.active} />} label="Active?" />
                    </div>
                    {addOrMinus}
                </div>
            );
        });


        return (
            <div className="store_itemscategories_div" key={storeIndex}>
                <div className="store_dropdown_div">
                    <label style={{ "display": "block" }}>Choose Store</label>
                    <DropDown options={options} itemChangeHandler={(id: string) => selcetedStoreChangeHandler(storeId, id)} selectedItemId={storeId.includes('storeId') ? null : storeId}></DropDown>
                </div>
                {itemsCategories}
                {storesAddRemoveBtns}
            </div>
        );
    });

    let view = null;
    if (props.gettingStores) {
        view = <CircularProgress />;
    } else {
        view = (
            <div className="itemsCategoriesDiv">
                {storesItemsCategories}
                <div className="ctrlBtns">
                    <div className="endBtns">
                        {(!props.uploadingItemsCategories) ? <Button
                            onClick={saveHandler}
                            style={{ "marginRight": "20px", "textTransform": "none", "color": '#4BB543' }}
                        >Save</Button> : <CircularProgress />}

                        <NavLink to={routes.storesPageUrl} className="NavLinkClass" style={{ 'padding': '6px 8px' }}>
                            <Button style={{ "textTransform": "none", "color": "#F32013" }}  >Cancel</Button>
                        </NavLink>
                    </div>
                    {/* <div className="navBtns">
                    <Button onClick={previousHandler} style={{ "marginRight": "20px", "textTransform": "none" }} startIcon={<KeyboardArrowLeft />}>Previous</Button>
                    <Button onClick={nextHandler} style={{ "textTransform": "none" }} endIcon={<ChevronRight />}>Next</Button>
                </div> */}
                </div>
            </div>
        );
    }

    return (
        <div>
            {view}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        toAddItemsCategories: state.itemsCategories.toAddItemsCategories,
        gettingStores: state.itemsCategories.gettingStores,
        stores: state.itemsCategories.stores,
        uploadingItemsCategories: state.itemsCategories.uploadingItemsCategories,
        itemsCategoriesUploadedSuccessfully: state.itemsCategories.itemsCategoriesUploadedSuccessfully,
        itemsCategoriesUploadeFailed: state.itemsCategories.itemsCategoriesUploadeFailed
    }
};
const mapDispatchToProps = dispatch => {
    return {
        next: () => dispatch({ type: actionsTypes.ITEMSCATEGORIESNEXT }),
        previous: () => dispatch({ type: actionsTypes.ITEMSCATEGORIESPREVIOUS }),
        addItemCategory: (storeId: string) => dispatch({ type: actionsTypes.ADDSTOREITEMCATEGORY, storeId: storeId }),
        removeItemCategory: (storeId: string, index: number) => dispatch({ type: actionsTypes.REMOVESTOREITEMCATEGORY, storeId: storeId, index: index }),
        addStore: () => dispatch({ type: actionsTypes.ITEMSCATEGORIES_ADDSTORE }),
        removeStore: (storeId: string) => dispatch({ type: actionsTypes.ITEMSCATEGORIES_REMOVESTORE, storeId: storeId }),
        changeInput: (input: string, storeId: string, index: number, val: any) => dispatch({ type: actionsTypes.ITEMSCATEGORIES_CHANGEINPUT, input: input, storeId: storeId, index: index, val: val }),
        getStores: () => dispatch({ type: actionsTypes.GETSTORES_ITEMSCATGORIES }),
        save: (toAddItemsCategories: any) => dispatch({ type: actionsTypes.UPLOADITEMSCATEGORIES, toAddItemsCategories: toAddItemsCategories }),
        resetItemsCategoriesUploadedSuccessfully: () => dispatch({ type: actionsTypes.RESET_IC_S }),
        resetItemsCategoriesUploadeFailed: () => dispatch({ type: actionsTypes.RESET_IC_F })
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(AddItemCategory);