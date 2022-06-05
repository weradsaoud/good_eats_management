import React, { Component, ReactNode, useState } from "react";
import * as actionsTypes from '../../../../../store/actions/actionsTypes';
import { connect } from 'react-redux';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './editestorecategory.css';
import { Navigate, NavLink, useLocation } from "react-router-dom";
import routes from "../../../../../globals/routes";
import { updateStoreCategory } from '../../../../../API/api';
import { notifySuccess, notifyFailure } from '../../../../../services/toasts'



type LocationState = { name: string, id: number };

function EditStoreCategory(props) {

    let location = useLocation();
    let { name } = location.state as LocationState;
    let { id } = location.state as LocationState;
    console.log("category name: ", name);

    const [categoryName, setCategoryName] = useState(name);
    const [nameValide, setNameValide] = useState(true);
    const [validationMsg, setValidationMsg] = useState("")
    const [addStoreCategorySuccess, setAddStoreCategorySuccess] = useState(false);

    const handleNameChange = (event) => {
        setCategoryName(event.target.value);
        setNameValide(true);
    };

    const checkStoreCategoryNameValidation = (name: string): boolean => {
        console.log("from checkStoreCategoryNameValidation: props.storesCategories: ", props.storesCategories);

        if (name == '') {
            setNameValide(false);
            setValidationMsg("Category name is required.");
            return false;
        } else if (props.storesCategories.storesCategories.map(cate => { return cate.name }).includes(name)) {
            setNameValide(false);
            setValidationMsg("Category name is already exists.");
            return false;
        }
        return true;
    };

    const handleUpdateCategory = (event) => {
        console.log("handleSaveCategory: ", event);

        if (checkStoreCategoryNameValidation(categoryName)) {
            setNameValide(true);
            updateStoreCategoryRequest(categoryName);
        }
    };

    const updateStoreCategoryRequest = async (categoryName: string) => {
        try {
            let response = await updateStoreCategory(categoryName, id);
            if (response.status == 200) {
                console.log("updateStoreCategoryResponse: ", response);
                notifySuccess("Category was updated successfully!");
                //get stores categories and save them in store
                setAddStoreCategorySuccess(true);
            }
        } catch (error) {
            console.log("update error: ", error.response);
            notifyFailure("Category was not updated successfully!");
            if (error.response.status == 500) {
                console.log('Err in addStoreCategory: ', error);
            } else if (error.response.status == 422) {
                console.log('Err in addStoreCategory: ', error.response.data.errors.name);
                if (error.response.data.errors.hasOwnProperty("name")) {
                    setNameValide(false);
                    setValidationMsg("Category name is already exists.");
                }
            }
        }
    };

    let content: React.ReactNode;
    if (addStoreCategorySuccess) {
        content = <Navigate to={routes.storesCategoriesPageUrl} />
    } else {
        content = (
            <div className="addCategoryContainer">
                <div className="SCategoryNameDiv">
                    <TextField  autoComplete="off"  id="outlined-basic" className="SCategoryNameTextField" label="Category name" variant="outlined" size="small" onChange={handleNameChange} defaultValue={name} />
                    {(nameValide) ? null : <p style={{ "color": "red", "fontSize": "12px" }}>{validationMsg}</p>}
                </div>
                <div className="addCatBtn">
                    <Button style={{ "marginRight": "20px" }} onClick={handleUpdateCategory}>Update Category</Button>
                    <NavLink to={routes.storesCategoriesPageUrl} className={"NavLinkClass"}>
                        <Button >Cancel</Button>
                    </NavLink>
                </div>
            </div>
        );
    }
    return content;

}

const mapStateToProps = state => {
    return {
        storesCategories: state.storesCategories
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getStoresCategories: () => dispatch({ type: actionsTypes.GET_STORESCATEGORIES }),
        saveStoresCategoriesLocally: (storesCategories: []) => dispatch({ type: actionsTypes.SAVE_STORESCATEGORIES_LOCALLY, storesCategories: storesCategories })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditStoreCategory);