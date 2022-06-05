import React, { Component, useEffect, useState } from "react";
import { connect } from 'react-redux';
import * as actionsTypes from '../../../../store/actions/actionsTypes';
import routes from '../../../../globals/routes';
import { DataGrid, GridColDef, GridValueGetterParams } from '@material-ui/data-grid';
import { Button, CircularProgress, IconButton } from '@material-ui/core';
import './stores.css';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { Search, Add, FilterList, Edit, Delete } from '@material-ui/icons';
import { NavLink } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import TransitionsModal from '../../../views/Modal/Modal';
import { notifySuccess, notifyFailure } from '../../../../services/toasts'

const useStyles = makeStyles({
    root: {
        color: '#4BB543',
        textTransform: 'none',
    },
    cancelBtn: {
        color: '#F32013 !important',
        textTransform: 'none',
    },
    navBtn: {
        textTransform: 'none',
    },
});

function Stores(props) {

    const classes = useStyles();

    const [openModal, setOpenModal] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalDescription, setModalDescription] = useState('');
    const [titleClassName, setTitleClassName] = useState('');
    const [descriptionClassName, setDescriptionClassName] = useState('');
    const [storeIdToDeteOrEdit, setStoreIdToDeteOrEdit] = useState(null);

    useEffect(() => {
        props.changeTab(routes.storesPageUrl);
        props.getStores();
        return () => {
            props.Stores_WillUnMount();
        };
    }, []);

    useEffect(() => {
        if (props.stores.storeDeletedSuccessfully) {
            notifySuccess('Store deleted successfully!');
            props.reset_storeDeletedSuccessfully();
        }
    }, [props.stores.storeDeletedSuccessfully]);

    useEffect(() => {
        if (props.stores.deleteStoreFailure) {
            notifyFailure('Delete store failed!');
            props.reset_deleteStoreFailure();
        }
    }, [props.stores.deleteStoreFailure]);

    const addStoreHandler = () => {
        console.log("addStoreHandler");
        props.changePath(routes.createStorePageUrl);
    };
    const handleDeleteStore = (storeId) => {
        setOpenModal(true);
        setModalTitle('Warning');
        setModalDescription('Are you sure you want to delete Store?');
        setTitleClassName('warning_title');
        setDescriptionClassName('warning_descrition');
        setStoreIdToDeteOrEdit(storeId);
    };
    const handleCanel = () => {
        setOpenModal(false);
        setModalTitle('');
        setModalDescription('');
        setTitleClassName('');
        setDescriptionClassName('');
        setStoreIdToDeteOrEdit(null);
    };
    const handleDeleteConfirmation = () => {
        props.deleteStore(parseInt(storeIdToDeteOrEdit));
        setOpenModal(false);
        setModalTitle('')
        setModalDescription('');
        setTitleClassName('');
        setDescriptionClassName('');
        //setStoreIdToDeteOrEdit(null);
    };
    const editeStoreHandler = () => {
        props.changePath(routes.editStorePageUrl);
    }
    const columns: GridColDef[] = [
        { field: 'coverLink', hide: true },
        { field: 'logoLink', hide: true },
        { field: 'categoryId', hide: true },
        { field: 'ownerId', hide: true },
        { field: 'actualId', headerName: 'actualId', hide: true },
        { field: 'id', headerName: 'ID', width: 90, align: "center" },
        {
            field: 'owner',
            headerName: 'Owner',
            width: 120,
            editable: true,
            align: "center"
        },
        {
            field: 'category',
            headerName: 'Category',
            width: 120,
            editable: true,
            align: "center"
        },
        {
            field: 'name',
            headerName: 'Name',
            width: 120,
            editable: true,
            align: "center"
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 120,
            editable: true,
            align: "center"
        },
        {
            field: 'phone',
            headerName: 'Phone',
            width: 120,
            editable: true,
            align: "center"
        },
        {
            field: 'logo',
            headerName: 'Logo',
            sortable: false,
            filterable: false,
            width: 90,
            renderCell: (params) => {
                return (<div style={{ 'padding': '5px' }}>
                    <img className="coverPhotoTableClass" src={params.row.logoLink}></img>
                </div>);
            },
            align: "center"
        },
        {
            field: 'cover',
            headerName: 'Cover',
            sortable: false,
            filterable: false,
            width: 90,
            renderCell: (params) => {
                return (<div style={{ 'padding': '5px' }}>
                    <img className="coverPhotoTableClass" src={params.row.coverLink}></img>
                </div>);
            },
            align: "center"
        },
        {
            field: 'active',
            headerName: 'Active',
            sortable: false,
            filterable: false,
            width: 90,
            align: "center"
        },
        {
            field: 'description',
            headerName: 'Description',
            sortable: false,
            filterable: false,
            width: 160,
            align: "center"
        },
        {
            field: 'canDeliver',
            headerName: 'Can deliver',
            sortable: false,
            filterable: false,
            width: 90,
            align: "center"
        },
        {
            field: 'deliverMinSpend',
            headerName: 'Deliver Min spend',
            sortable: false,
            filterable: false,
            width: 90,
            align: "center"
        },
        {
            field: 'canPickup',
            headerName: 'Can pickup',
            sortable: false,
            filterable: false,
            width: 90,
            align: "center"
        },
        {
            field: 'pickupMinSpend',
            headerName: 'Pickup Min spend',
            sortable: false,
            filterable: false,
            width: 90,
            align: "center"
        },
        {
            field: 'canTableOredr',
            headerName: 'Can table order',
            sortable: false,
            filterable: false,
            width: 90,
            align: "center"
        },
        {
            field: 'tableOrderMinSpend',
            headerName: 'Pickup Min spend',
            sortable: false,
            filterable: false,
            width: 90,
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
                        <NavLink to={routes.editStorePageUrl}
                            state={{ id: params.row.actualId }}>
                            <IconButton onClick={editeStoreHandler} aria-label="edit" size="small">
                                <Edit color="primary" fontSize="inherit" />
                            </IconButton>
                        </NavLink>
                    </div>
                    <div className="deleteStoreLoader">
                        {(props.stores.deleteingStore && params.row.actualId == storeIdToDeteOrEdit) ?
                            <CircularProgress size={29} /> :
                            <IconButton style={{ 'marginLeft': '5px' }} onClick={() => handleDeleteStore(params.row.actualId)} aria-label="delete" size="small">
                                <Delete color="error" fontSize="inherit" />
                            </IconButton>}
                    </div>
                </div>)
            },
            align: "center"
        }
    ];

    let rows = [
    ];

    rows = props.stores.stores.map((store, index) => {
        return {
            actualId: store.id,
            categoryId: store.store_cate_id,
            ownerId: store.store_owner_id,
            id: index + 1,
            owner: store.store_owner_name,
            category: store.store_cate_name,
            name: store.name,
            email: store.email,
            phone: store.phone,
            logoLink: store.logo,
            coverLink: store.cover,
            active: store.active,
            description: store.description,
            canDeliver: store.can_deliver,
            deliverMinSpend: store.deliver_minimum_spend,
            canPickup: store.can_pickup,
            pickupMinSpend: store.pickup_minimum_spend,
            canTableOredr: store.can_table_order,
            tableOrderMinSpend: store.table_oredr_minimum_spend
        }
    });

    let view = null;
    if (props.stores.getStoresSuccess) {
        view = (
            <div style={{ height: 600, width: '100%' }}>
                <TransitionsModal
                    open={openModal}
                    title={modalTitle}
                    description={modalDescription}
                    titleClassName={titleClassName}
                    descriptionClassName={descriptionClassName}
                    okHandler={handleDeleteConfirmation}
                    cancelHandler={handleCanel}
                />

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
                        <NavLink to={routes.createStorePageUrl} className={"NavLinkClass"} style={{ marginTop: "9px" }} >
                            <Button className={classes.root} color="primary" startIcon={<Add />} size="small" onClick={addStoreHandler}>Add Store</Button>
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
        );
    } else {
        view = <CircularProgress />;
    }

    return (
        <div>
            {view}
        </div>

    );

}


const mapStateToProps = state => {
    return {
        breadcrumb: state.breadcrumb,
        stores: state.stores
    }
};

const mapDispatchToProps = dispatch => {
    return {
        changeTab: (tab: string) => dispatch({ type: actionsTypes.TABLOADED, tab: tab }),
        changePath: (path: string) => dispatch({ type: actionsTypes.CHANGEPATH, path: path }),
        getStores: () => dispatch({ type: actionsTypes.GETSTORES }),
        deleteStore: (storeId: number) => dispatch({ type: actionsTypes.DELETESTORE, storeId: storeId }),
        Stores_WillUnMount: () => dispatch({ type: actionsTypes.STORES_WILLUNMOUNT }),
        reset_storeDeletedSuccessfully: () => dispatch({ type: actionsTypes.RESET_STOREDELETEDSUCCESSFULLY }),
        reset_deleteStoreFailure: () => dispatch({ type: actionsTypes.RESET_DELETESTOREFAILURE })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Stores);
