import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import * as actionsTypes from '../../../../store/actions/actionsTypes';
import routes from '../../../../globals/routes';
import { DataGrid, GridColDef, GridValueGetterParams } from '@material-ui/data-grid';
import { Button, IconButton } from '@material-ui/core';
import './storescategory.css';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { Search, Add, FilterList, Edit, Delete } from '@material-ui/icons';
import { NavLink } from "react-router-dom";
import { deleteStoreCategory } from '../../../../API/api';
import { notifySuccess, notifyFailure } from '../../../../services/toasts'
import TransitionsModal from '../../../views/Modal/Modal';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
        color: '#4BB543',
        textTransform: 'none',
    },
});

function StoresCategories(props) {

    const classes = useStyles();

    const [openModal, setOpenModal] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalDescription, setModalDescription] = useState('');
    const [titleClassName, setTitleClassName] = useState('');
    const [descriptionClassName, setDescriptionClassName] = useState('');
    const [categoryIdToDeteOrEdit, setCategoryIdToDeteOrEdit] = useState(null);

    useEffect(() => {
        props.changeTab(routes.storesCategoriesPageUrl);
        //fetch stores categories
        props.getStoresCategories();
    }, []);


    const handleDeleteConfirmation = async () => {
        setOpenModal(false);
        setModalTitle('')
        setModalDescription('');
        setTitleClassName('');
        setDescriptionClassName('');
        try {
            if (categoryIdToDeteOrEdit) {
                let response = await deleteStoreCategory(categoryIdToDeteOrEdit);
                setCategoryIdToDeteOrEdit(null);
                if (response.status == 200) {
                    props.getStoresCategories();
                    notifySuccess("Category was deleted successfully!");
                }
            }
        } catch (error) {
            console.log("Err in handleDelete: ", error.response);
            notifyFailure("Category was not deleted successfully!")
        }
    };

    const handleCanel = () => {
        setOpenModal(false);
        setModalTitle('');
        setModalDescription('');
        setTitleClassName('');
        setDescriptionClassName('');
        setCategoryIdToDeteOrEdit(null);
    };

    const handleDelete = async (id: number) => {
        setOpenModal(true);
        setModalTitle('Warning');
        setModalDescription('Are you sure you want to delete Category?');
        setTitleClassName('warning_title');
        setDescriptionClassName('warning_descrition');
        setCategoryIdToDeteOrEdit(id);
    };

    const addCategoryHandler = () => {
        props.changePath(routes.addStoreCategoryUrl);
    };

    const editeCategoryHandler = () => {
        props.changePath(routes.editeStoreCategoryUrl);
    };

    const columns: GridColDef[] = [
        { field: 'actualId', headerName: 'actualId', hide: true },
        { field: 'id', headerName: 'ID', width: 90, align: "center" },
        {
            field: 'categoryName',
            headerName: 'Category name',
            width: 300,
            //editable: true,
            align: "center"

        },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 150,
            sortable: false,
            filterable: false,
            hide: false,
            renderCell: (params) => {
                console.log("params from stores category: ", params);

                return (<div className="UDbtns">
                    <div style={{ 'marginRight': '5px' }}>
                        <NavLink to={routes.editeStoreCategoryUrl} state={{ id: params.row.actualId, name: params.row.categoryName }}>
                            <IconButton onClick={editeCategoryHandler} aria-label="edit" size="small">
                                <Edit color="primary" fontSize="inherit" />
                            </IconButton>
                        </NavLink>
                    </div>
                    <div>
                        <IconButton style={{ 'marginLeft': '5px' }} onClick={() => handleDelete(params.row.actualId)} aria-label="delete" size="small">
                            <Delete color="error" fontSize="inherit" />
                        </IconButton>
                    </div>
                </div>)
            },
            align: "center"
        }
    ];

    let rows = [
    ];

    rows = props.storesCategories.storesCategories.map((storeCate, index) => {
        return {
            actualId: storeCate.id,
            id: index + 1,
            categoryName: storeCate.name
        }
    });


    return (
        // <div> you are in Stores </div>
        <div className="StoresCategoriesWrapper">
            <TransitionsModal
                open={openModal}
                title={modalTitle}
                description={modalDescription}
                titleClassName={titleClassName}
                descriptionClassName={descriptionClassName}
                okHandler={handleDeleteConfirmation}
                cancelHandler={handleCanel}
            />
            <div style={{ height: 600, width: '50%' }}>
                <div className="dataGridContainer">
                    <div className="searchDiv">
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item>
                                <Search />
                            </Grid>
                            <Grid item>
                                <TextField  autoComplete="off"  id="input-with-icon-grid" label="Search" />
                            </Grid>
                        </Grid>
                    </div>
                    {/* <button className="addButton" title="Add Store">
                            <Add />
                            Add Store
                        </button> */}
                    <div className="btnsDiv">
                        <div className="filterDiv">
                            <IconButton aria-label="delete">
                                <FilterList />
                            </IconButton>
                            <label>Filter</label>
                        </div>
                        <NavLink to={routes.addStoreCategoryUrl} className={"NavLinkClass"} style={{ marginTop: "9px" }} >
                            <Button className={classes.root} color="primary" startIcon={<Add />} size="small" onClick={addCategoryHandler}>Add Category</Button>
                        </NavLink>
                    </div>

                </div>

                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={10}
                    disableSelectionOnClick
                />
            </div>
        </div>
    );
}


const mapStateToProps = state => {
    return {
        breadcrumb: state.breadcrumb,
        storesCategories: state.storesCategories
    }
};

const mapDispatchToProps = dispatch => {
    return {
        changeTab: (tab: string) => dispatch({ type: actionsTypes.TABLOADED, tab: tab }),
        changePath: (path: string) => dispatch({ type: actionsTypes.CHANGEPATH, path: path }),
        getStoresCategories: () => dispatch({ type: actionsTypes.GET_STORESCATEGORIES })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(StoresCategories);