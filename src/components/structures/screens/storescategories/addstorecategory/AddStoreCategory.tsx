import React, { useState } from "react";
import * as actionsTypes from '../../../../../store/actions/actionsTypes';
import { connect } from 'react-redux';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import './addstorecategory.css';
import { Folder, ChevronRight, KeyboardArrowLeft } from '@material-ui/icons';
import Checkbox from '@mui/material/Checkbox';
import { Navigate, NavLink } from "react-router-dom";
import routes from "../../../../../globals/routes";
import { addStoreCategory } from '../../../../../API/api';
//import DropDown from "../../../../../views/basiccomponents/dropdown/DropDown";
import { notifySuccess } from '../../../../../services/toasts';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    saveBtnClass: {
        color: '#4BB543 !important',
        marginRight: '20px !important'
    },
    cancelBtnClass: {
        color: '#F32013 !important'
    },
});

function AddStoreCategory(props) {

    const classes = useStyles();

    const [categoryName, setCategoryName] = useState('');
    const [nameValide, setNameValide] = useState(true);
    const [validationMsg, setValidationMsg] = useState('');
    const [addStoreCategorySuccess, setAddStoreCategorySuccess] = useState(false);


    const handleNameChange = (event) => {

        setCategoryName(event.target.value);
        setNameValide(true);
    };

    const checkStoreCategoryNameValidation = (name: string): boolean => {
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

    const handleSaveCategory = (event) => {
        if (checkStoreCategoryNameValidation(categoryName)) {
            setNameValide(true);
            addStoreCategoryRequest(categoryName);
        }
    };

    const addStoreCategoryRequest = async (categoryName: string) => {
        try {
            let response = await addStoreCategory(categoryName);
            if (response.status == 200) {
                notifySuccess("Category was added successfully!");
                //get stores categories and save them in store
                setAddStoreCategorySuccess(true);
            }
        } catch (error) {
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
                    <TextField  autoComplete="off"  id="outlined-basic" className="SCategoryNameTextField" label="Category name" variant="outlined" size="small" onChange={handleNameChange} />
                    {(nameValide) ? null : <p style={{ "color": "red", "fontSize": "12px" }}>{validationMsg}</p>}
                </div>
                <div className="addCatBtn">
                    <Button className={classes.saveBtnClass} style={{ 'textTransform': 'none' }} onClick={handleSaveCategory}>Save Category</Button>
                    <NavLink to={routes.storesCategoriesPageUrl} className={"NavLinkClass"}>
                        <Button className={classes.cancelBtnClass} style={{ 'textTransform': 'none' }}>Cancel</Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(AddStoreCategory);