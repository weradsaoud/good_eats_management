import React, { Component, useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import './editstore.css';
import { Folder, ChevronRight, KeyboardArrowLeft } from '@material-ui/icons';
import Checkbox from '@mui/material/Checkbox';
import DropDown from "../../../../views/basiccomponents/dropdown/DropDown";
import { makeStyles } from '@material-ui/core/styles';
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import routes from "../../../../../globals/routes";
import { connect } from "react-redux";
import * as actionsTypes from '../../../../../store/actions/actionsTypes';
import CircularProgress from '@material-ui/core/CircularProgress';
import { notifySuccess, notifyFailure } from '../../../../../services/toasts';

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

const options = [{ id: 1, name: '1' }, { id: 2, name: '2' }, { id: 3, name: '3' }];

type LocationState = { id: number };

function EditStore(props) {

    const classes = useStyles();
    //use location to get toedit store id
    let location = useLocation();
    let { id } = location.state as LocationState;
    //const [storesCategoriesUpdated, setStoresCategoriesUpdated] = useState(false);

    let navigate = useNavigate();

    const nameChangeHandler = (event) => {
        props.changeInput('name', event.target.value);
    };
    const phoneChangeHandler = (event) => {
        props.changeInput('phone', event.target.value);
    };
    const emailChangeHandler = (event) => {

        props.changeInput('email', event.target.value);
    };
    const numberOfTablesChangeHandler = (event) => {
        props.changeInput('numberOfTables', event.target.value);
    };
    const descriptionChangeHandler = (event) => {
        props.changeInput('description', event.target.value);
    };
    const canDeliverChangeHandler = () => {
        props.changeInput('canDeliver');
    };
    const canPickupChangeHandler = () => {
        props.changeInput('canPickup');
    };
    const canTableOrderChangeHandler = () => {
        props.changeInput('canTableOrder');
    };
    const deliverMinSpendChangeHandler = (event) => {
        props.changeInput('deliverMinSpend', event.target.value);
    };
    const pickupMinSpendChangeHandler = (event) => {
        props.changeInput('pickupMinSpend', event.target.value);
    };
    const tableOrderMinSpendChangeHandler = (event) => {
        props.changeInput('tableOrderMinSpend', event.target.value);
    };
    const activeChangeHandler = () => {
        props.changeInput('active');
    };
    const satChangeHandler = () => {
        props.changeInput('sat');
    };
    const satFromChangeHandler = (event) => {

        props.changeInput('satFrom', event.target.value);
    };
    const satToChangeHandler = (event) => {
        props.changeInput('satTo', event.target.value);
    };
    const sunChangeHandler = () => {
        props.changeInput('sun');
    };
    const sunFromChangeHandler = (event) => {
        props.changeInput('sunFrom', event.target.value);
    };
    const sunToChangeHandler = (event) => {
        props.changeInput('sunTo', event.target.value);
    };
    const monChangeHandler = () => {
        props.changeInput('mon');
    };
    const monFromChangeHandler = (event) => {
        props.changeInput('monFrom', event.target.value);
    };
    const monToChangeHandler = (event) => {
        props.changeInput('monTo', event.target.value);
    };
    const tueChangeHandler = () => {
        props.changeInput('tue');
    };
    const tueFromChangeHandler = (event) => {
        props.changeInput('tueFrom', event.target.value);
    };
    const tueToChangeHandler = (event) => {
        props.changeInput('tueTo', event.target.value);
    };
    const wedChangeHandler = () => {
        props.changeInput('wed');
    };
    const wedFromChangeHandler = (event) => {
        props.changeInput('wedFrom', event.target.value);
    };
    const wedToChangeHandler = (event) => {
        props.changeInput('wedTo', event.target.value);
    };
    const thurChangeHandler = () => {
        props.changeInput('thur');
    };
    const thurFromChangeHandler = (event) => {
        props.changeInput('thurFrom', event.target.value);
    };
    const thurToChangeHandler = (event) => {
        props.changeInput('thurTo', event.target.value);
    };
    const friChangeHandler = () => {
        props.changeInput('fri');
    };
    const friFromChangeHandler = (event) => {
        props.changeInput('friFrom', event.target.value);
    };
    const friToChangeHandler = (event) => {
        props.changeInput('friTo', event.target.value);
    };

    const storeCategoryChangeHandler = (categoryId) => {
        props.changeInput('storeCategory', categoryId);
    };
    const onNextBtnClick = (event) => {
        props.nextStoreInfo();
    };
    const readCoverPhoto = (event) => {
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                props.changeInput(
                    'coverPhoto',
                    {
                        coverPhoto: e.target.result,
                        uploadCoverPhoto: event.target.files[0]
                    }
                );
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    const readLogoPhoto = (event) => {
        console.log('input event: ', event.target.files[0]);

        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                props.changeInput(
                    'logoPhoto',
                    {
                        logoPhoto: e.target.result,
                        uploadLogoPhoto: event.target.files[0]
                    }
                );
            };

            reader.readAsDataURL(event.target.files[0]);
        }
    };
    const getPhotoExtention = (photo): string => {
        return photo.type.split('/')[1];
    };
    const updateStoreHandler = () => {

        let toUpdateFormData = new FormData();
        //append to edit store id
        let storeId = id;
        toUpdateFormData.append('storeId', storeId.toString());
        //append storeInfo
        let { uploadLogoPhoto, uploadCoverPhoto, logoPhoto, coverPhoto, ...toEditStore } = props.toEditStore;
        toUpdateFormData.append('storeInfo', JSON.stringify(toEditStore));

        //append store cover photo
        if (props.toEditStore.uploadCoverPhoto) {
            toUpdateFormData.append(
                'storeCoverPhoto',
                props.toEditStore.uploadCoverPhoto,
                props.toEditStore.name + '_cover.' + getPhotoExtention(props.toEditStore.uploadCoverPhoto)
            );
        }

        //append store logo photo
        if (props.toEditStore.uploadLogoPhoto) {
            toUpdateFormData.append(
                'storeLogoPhoto',
                props.toEditStore.uploadLogoPhoto,
                props.toEditStore.name + '_logo.' + getPhotoExtention(props.toEditStore.uploadLogoPhoto)
            );
        }
        props.updateStore(toUpdateFormData);
    };
    useEffect(() => {
        props.getStoresCategories();// get stores categories
        props.getStoreToEdit(id);

        return () => {

        };

    }, []);

    useEffect(() => {
        if (props.storeUpdat_success) {
            notifySuccess('Store updated successfully!');
            props.resetUpdateStore_success();
            navigate(routes.storesPageUrl);
        }
        console.log('useEffect1: ', props.storeUpdat_success);
    }, [props.storeUpdat_success]);

    useEffect(() => {
        if (props.storeUpdat_failure) {
            notifyFailure('Update store failed!');
            props.resetUpdateStore_failure();
        }
        console.log('useEffect2: ', props.storeUpdat_failure);
    }, [props.storeUpdat_failure]);

    let view = null;

    if (!props.updatingStore_get) {
        //console.log('in if');

        view = (
            <div className="storeInfoDiv">
                <div className="firstContainer">
                    <div className="leftDiv">
                        <div className="name_phone_div">
                            <TextField autoComplete="off" onChange={nameChangeHandler} id="outlined-basic" className="NameTextField" label="Name" variant="outlined" size="small" value={props.toEditStore.name} />
                            <TextField autoComplete="off" onChange={phoneChangeHandler} id="outlined-basic" className="PhoneTextField" label="Phone" variant="outlined" size="small" value={props.toEditStore.phone} />
                        </div>
                        <div className="Email_Tables_div">
                            <TextField autoComplete="off" onChange={emailChangeHandler} id="outlined-basic" className="EmailTextField" label="Email" variant="outlined" size="small" value={props.toEditStore.email} />
                            <TextField autoComplete="off" onChange={numberOfTablesChangeHandler} id="outlined-basic" className="TablesTextField" label="Number Of Tables" variant="outlined" size="small" value={props.toEditStore.numberOfTables} />
                        </div>
                        <div className="describtionDiv">
                            <TextField autoComplete="off"
                                className="descriptionTextField"
                                id="outlined-multiline-flexible"
                                label="Description"
                                multiline
                                maxRows={4}
                                value={props.toEditStore.description}
                                onChange={descriptionChangeHandler}
                            />
                        </div>
                    </div>
                    <div className="rightDiv">
                        <div className="canDeliver_div">
                            <FormControlLabel control={<Switch onChange={canDeliverChangeHandler} checked={props.toEditStore.canDeliver} />} label="Can deliver?" />
                            <TextField autoComplete="off" onChange={deliverMinSpendChangeHandler} id="outlined-basic" className="DeliverMinTextField" label="Deliver min spend" variant="outlined" size="small" value={props.toEditStore.deliveryMinSpend} />
                        </div>
                        <div className="canPickup_div">
                            <FormControlLabel control={<Switch onChange={canPickupChangeHandler} checked={props.toEditStore.canPickup} />} label="Can pickup?" />
                            <TextField autoComplete="off" onChange={pickupMinSpendChangeHandler} id="outlined-basic" className="PickupMinTextField" label="Pickup min spend" variant="outlined" size="small" defaultValue={props.toEditStore.pickupMinSpend} />
                        </div>
                        <div className="canTableOrder_div">
                            <FormControlLabel control={<Switch onChange={canTableOrderChangeHandler} checked={props.toEditStore.canTableOrder} />} label="Can table order?" />
                            <TextField autoComplete="off" onChange={tableOrderMinSpendChangeHandler} id="outlined-basic" className="TableOrderMinTextField" label="Table order min spend" variant="outlined" size="small" value={props.toEditStore.tableOrderMinSpend} />
                        </div>
                    </div>
                </div>
                <div className="secondContainer">
                    <div className="secondLeftDiv">
                        <div className="coverDiv">
                            <label style={{ "margin": "0px", "alignSelf": "center" }}>Cover photo</label>
                            <img className="coverPhotoClass" src={props.toEditStore.coverPhoto} />  {/*props.storeInfo.coverPhoto*/}
                            <Button component="label" variant="outlined" style={{ 'height': '37px', 'textTransform': 'none', 'marginLeft': '10px', 'alignSelf': 'center' }} startIcon={<Folder />}>
                                Browse
                                <input
                                    type="file"
                                    onChange={(event) => readCoverPhoto(event)}
                                    hidden
                                />
                            </Button>
                        </div>
                        <div className="logoDiv">
                            <label style={{ "margin": "0px", "alignSelf": "center" }}>Logo photo</label>
                            <img className="coverPhotoClass" src={props.toEditStore.logoPhoto} />  {/*props.storeInfo.coverPhoto*/}
                            <Button component="label" variant="outlined" style={{ 'height': '37px', 'textTransform': 'none', 'marginLeft': '10px', 'alignSelf': 'center' }} startIcon={<Folder />}>
                                Browse
                                <input
                                    type="file"
                                    onChange={(event) => readLogoPhoto(event)}
                                    hidden
                                />
                            </Button>
                        </div>
                        <div className="ownerDiv">
                            <label style={{ "display": "block" }}>Choose Owner</label>
                            <DropDown options={options} itemChangeHandler={storeCategoryChangeHandler} selectedItemId={props.toEditStore.categoryId}></DropDown>
                        </div>
                        <div className="categoryDiv">
                            <label style={{ "display": "block" }}>Choose Category</label>
                            <DropDown options={props.storesCategories} itemChangeHandler={storeCategoryChangeHandler} selectedItemId={props.toEditStore.categoryId}></DropDown>
                        </div>
                        <div className="activeDiv">
                            <FormControlLabel control={<Switch onChange={activeChangeHandler} checked={props.toEditStore.active} />} label="Active?" />
                        </div>
                    </div>
                    <div className="secondRightDiv">
                        <div className="daysDiv">
                            <div className="satDiv">
                                <FormControlLabel control={<Checkbox onChange={satChangeHandler} checked={props.toEditStore.saterday} />} label="Saterday" className="dayCheckBox" />
                            </div>
                            <div className="sunDiv">
                                <FormControlLabel control={<Checkbox onChange={sunChangeHandler} checked={props.toEditStore.sunday} />} label="Sunday" className="dayCheckBox" />
                            </div>
                            <div className="monDiv">
                                <FormControlLabel control={<Checkbox onChange={monChangeHandler} checked={props.toEditStore.monday} />} label="Monday" className="dayCheckBox" />
                            </div>
                            <div className="tueDiv">
                                <FormControlLabel control={<Checkbox onChange={tueChangeHandler} checked={props.toEditStore.tuesday} />} label="Tuesday" className="dayCheckBox" />
                            </div>
                            <div className="wedDiv">
                                <FormControlLabel control={<Checkbox onChange={wedChangeHandler} checked={props.toEditStore.wednesday} />} label="Wednesday" className="dayCheckBox" />
                            </div>
                            <div className="thuDiv">
                                <FormControlLabel control={<Checkbox onChange={thurChangeHandler} checked={props.toEditStore.thursday} />} label="Thursday" className="dayCheckBox" />
                            </div>
                            <div className="friDiv">
                                <FormControlLabel control={<Checkbox onChange={friChangeHandler} checked={props.toEditStore.friday} />} label="Friday" className="dayCheckBox" />
                            </div>
                        </div>

                        <div className="fromDiv">
                            <div className="satFrom">
                                <TextField autoComplete="off" onChange={satFromChangeHandler} id="outlined-basic" className="satFromTextField" label="From" variant="outlined" size="small" value={props.toEditStore.satFrom} />
                            </div>
                            <div className="sunFrom">
                                <TextField autoComplete="off" onChange={sunFromChangeHandler} id="outlined-basic" className="satFromTextField" label="From" variant="outlined" size="small" value={props.toEditStore.sunFrom} />
                            </div>
                            <div className="monFrom">
                                <TextField autoComplete="off" onChange={monFromChangeHandler} id="outlined-basic" className="satFromTextField" label="From" variant="outlined" size="small" value={props.toEditStore.monFrom} />
                            </div>
                            <div className="tueFrom">
                                <TextField autoComplete="off" onChange={tueFromChangeHandler} id="outlined-basic" className="satFromTextField" label="From" variant="outlined" size="small" value={props.toEditStore.tueFrom} />
                            </div>
                            <div className="wedFrom">
                                <TextField autoComplete="off" onChange={wedFromChangeHandler} id="outlined-basic" className="satFromTextField" label="From" variant="outlined" size="small" value={props.toEditStore.wedFrom} />
                            </div>
                            <div className="thurFrom">
                                <TextField autoComplete="off" onChange={thurFromChangeHandler} id="outlined-basic" className="satFromTextField" label="From" variant="outlined" size="small" value={props.toEditStore.thurFrom} />
                            </div>
                            <div className="friFrom">
                                <TextField autoComplete="off" onChange={friFromChangeHandler} id="outlined-basic" className="satFromTextField" label="From" variant="outlined" size="small" value={props.toEditStore.friFrom} />
                            </div>
                        </div>

                        <div className="toDiv">
                            <div className="satTo">
                                <TextField autoComplete="off" onChange={satToChangeHandler} id="outlined-basic" className="satToTextField" label="To" variant="outlined" size="small" value={props.toEditStore.satTo} />
                            </div>
                            <div className="sunTo">
                                <TextField autoComplete="off" onChange={sunToChangeHandler} id="outlined-basic" className="satToTextField" label="To" variant="outlined" size="small" value={props.toEditStore.sunTo} />
                            </div>
                            <div className="monTo">
                                <TextField autoComplete="off" onChange={monToChangeHandler} id="outlined-basic" className="satToTextField" label="To" variant="outlined" size="small" value={props.toEditStore.monTo} />
                            </div>
                            <div className="tueTo">
                                <TextField autoComplete="off" onChange={tueToChangeHandler} id="outlined-basic" className="satToTextField" label="To" variant="outlined" size="small" value={props.toEditStore.tueTo} />
                            </div>
                            <div className="wedTo">
                                <TextField autoComplete="off" onChange={wedToChangeHandler} id="outlined-basic" className="satToTextField" label="To" variant="outlined" size="small" value={props.toEditStore.wedTo} />
                            </div>
                            <div className="thurTo">
                                <TextField autoComplete="off" onChange={thurToChangeHandler} id="outlined-basic" className="satToTextField" label="To" variant="outlined" size="small" value={props.toEditStore.thurTo} />
                            </div>
                            <div className="friTo">
                                <TextField autoComplete="off" onChange={friToChangeHandler} id="outlined-basic" className="satToTextField" label="To" variant="outlined" size="small" value={props.toEditStore.friTo} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ctrlBtns">
                    <div className="endBtns">
                        {
                            (!props.updatingStore_post) ?
                                <Button onClick={updateStoreHandler} style={{ "marginRight": "20px", "textTransform": "none", "color": '#4BB543' }}>Update Store</Button> :
                                <div className="update_store_loader">
                                    <CircularProgress size={30} />
                                </div>
                        }
                        <NavLink to={routes.storesPageUrl} className="NavLinkClass" style={{ 'padding': '6px 8px' }} >
                            <Button style={{ "textTransform": "none", "color": "#F32013" }} >Cancel</Button>
                        </NavLink>
                    </div>
                    {/* <div className="navBtns">
                        <Button style={{ "marginRight": "20px", "textTransform": "none" }} startIcon={<KeyboardArrowLeft />} disabled>Previous</Button>
                        <Button onClick={onNextBtnClick} style={{ "textTransform": "none" }} endIcon={<ChevronRight />}>Next</Button>
                    </div> */}
                </div>
            </div>
        );
    } else {
        view = <CircularProgress />;
    }

    return view;

}

const mapStateToProps = state => {
    return {
        storesCategories: state.storesCategories.storesCategories,
        //
        toEditStore: state.stores.toEditStore,
        updatingStore_get: state.stores.updatingStore_get,
        updatingStore_post: state.stores.updatingStore_post,
        storeUpdat_success: state.stores.storeUpdat_success,
        storeUpdat_failure: state.stores.storeUpdat_failure
    }
};
const mapDispatchToProps = dispatch => {
    return {
        next: () => dispatch({ type: actionsTypes.STOREINFONEXT }),
        getStoresCategories: () => dispatch({ type: actionsTypes.GET_STORESCATEGORIES }),
        changeInput: (input: string, val) => dispatch({ type: actionsTypes.EDITINPUT, input: input, val: val }),
        getStoreToEdit: (id: number) => dispatch({ type: actionsTypes.UPDATESTORE_GET, toEditStoreId: id }),
        updateStore: (formData: FormData) => dispatch({ type: actionsTypes.UPDATESTORE_POST, formData: formData }),
        resetUpdateStore_success: () => dispatch({ type: actionsTypes.RESETUPDATESTORE_SUCCESS }),
        resetUpdateStore_failure: () => dispatch({ type: actionsTypes.RESETUPDATESTORE_FAILURE })
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(EditStore);