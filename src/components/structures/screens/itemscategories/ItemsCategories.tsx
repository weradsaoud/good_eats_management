import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import * as actionsTypes from '../../../../store/actions/actionsTypes';
import routes from '../../../../globals/routes';
import { DataGrid, GridColDef, GridValueGetterParams } from '@material-ui/data-grid';
import { Button, CircularProgress, IconButton } from '@material-ui/core';
import './itemscategories.css';
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


function ItemsCategories(props) {

    const classes = useStyles();

    const [openModal, setOpenModal] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalDescription, setModalDescription] = useState('');
    const [titleClassName, setTitleClassName] = useState('');
    const [descriptionClassName, setDescriptionClassName] = useState('');
    const [categoryIdToDeteOrEdit, setCategoryIdToDeteOrEdit] = useState(null);

    useEffect(() => {
        props.changeTab(routes.itemsCategoriesPageUrl);
        props.getItemsCategories();
    }, []);

    const handleDelete = async (id: number) => {
        setOpenModal(true);
        setModalTitle('Warning');
        setModalDescription('Are you sure you want to delete Category?');
        setTitleClassName('warning_title');
        setDescriptionClassName('warning_descrition');
        setCategoryIdToDeteOrEdit(id);
    };

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

    const addCategoryHandler = () => {
        props.changePath(routes.addItemCategoryUrl);
    };

    const columns: GridColDef[] = [
        { field: 'actualId', headerName: 'actualId', hide: true },
        { field: 'storeId', hide: true },
        { field: 'id', headerName: 'ID', width: 90, align: "center" },
        {
            field: 'storeName',
            headerName: 'Store name',
            width: 200,
            //editable: true,
            align: "center"

        },
        {
            field: 'categoryName',
            headerName: 'Category name',
            width: 200,
            //editable: true,
            align: "center"

        },
        {
            field: 'active',
            headerName: 'active',
            width: 150,
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
                            <IconButton /*onClick={editeCategoryHandler}*/ aria-label="edit" size="small">
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

    rows = props.itemsCategories.itemsCategories.map((itemCate, index) => {
        return {
            actualId: itemCate.cateId,
            storeId: itemCate.storeId,
            id: index + 1,
            storeName: itemCate.storeName,
            categoryName: itemCate.cateName,
            active: itemCate.active
        }
    });

    let view = null;
    if (props.itemsCategories.gettingItemsCategories) {
        view = <CircularProgress />;
    } else {
        view = (
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
                <div style={{ height: 600, width: '65%' }}>
                    <div className="dataGridContainer">
                        <div className="searchDiv">
                            <Grid container spacing={1} alignItems="flex-end">
                                <Grid item>
                                    <Search />
                                </Grid>
                                <Grid item>
                                    <TextField autoComplete="off" id="input-with-icon-grid" label="Search" />
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
                            <NavLink to={routes.addItemCategoryUrl} className={"NavLinkClass"} style={{ marginTop: "9px" }} >
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

    return (
        //<div> you are in ItemsCategories </div>
        <div>
            {view}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        breadcrumb: state.breadcrumb,
        itemsCategories: state.itemsCategories
    }
};

const mapDispatchToProps = dispatch => {
    return {
        changeTab: (tab: string) => dispatch({ type: actionsTypes.TABLOADED, tab: tab }),
        changePath: (path: string) => dispatch({ type: actionsTypes.CHANGEPATH, path: path }),
        getItemsCategories: () => dispatch({ type: actionsTypes.GET_ITEMSCATEGORIES })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemsCategories);