import React, { Component, useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import './storeinfo.css';
import { Folder, ChevronRight, KeyboardArrowLeft } from '@material-ui/icons';
import Checkbox from '@mui/material/Checkbox';
import DropDown from "../../../../../views/basiccomponents/dropdown/DropDown";
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from "react-router-dom";
import routes from "../../../../../../globals/routes";
import { connect } from "react-redux";
import * as actionsTypes from '../../../../../../store/actions/actionsTypes';
import CircularProgress from '@material-ui/core/CircularProgress';

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


function StoreInfo(props) {

    const classes = useStyles();

    //const [storesCategoriesUpdated, setStoresCategoriesUpdated] = useState(false);

    const nameChangeHandler = (event) => {

        props.changeInput('name', event.target.value);
        //console.log(props.storeInfo);
    };
    const phoneChangeHandler = (event) => {

        props.changeInput('phone', event.target.value);
        //console.log(props.storeInfo);
    };
    const emailChangeHandler = (event) => {

        props.changeInput('email', event.target.value);
        //console.log(props.storeInfo);
    };
    const numberOfTablesChangeHandler = (event) => {

        props.changeInput('numberOfTables', event.target.value);
        //console.log(props.storeInfo);
    };
    const descriptionChangeHandler = (event) => {

        props.changeInput('description', event.target.value);
        //console.log(props.storeInfo);
    };
    const canDeliverChangeHandler = () => {

        props.changeInput('canDeliver');
        //console.log(props.storeInfo);
    };
    const canPickupChangeHandler = () => {

        props.changeInput('canPickup');
        //console.log(props.storeInfo);
    };
    const canTableOrderChangeHandler = () => {

        props.changeInput('canTableOrder');
        //console.log(props.storeInfo);
    };
    const deliverMinSpendChangeHandler = (event) => {

        props.changeInput('deliverMinSpend', event.target.value);
        //console.log(props.storeInfo);
    };
    const pickupMinSpendChangeHandler = (event) => {

        props.changeInput('pickupMinSpend', event.target.value);
        //console.log(props.storeInfo);
    };
    const tableOrderMinSpendChangeHandler = (event) => {

        props.changeInput('tableOrderMinSpend', event.target.value);
        //console.log(props.storeInfo);
    };
    const activeChangeHandler = () => {

        props.changeInput('active');
        //console.log(props.storeInfo);
    };
    const satChangeHandler = () => {

        props.changeInput('sat');
        //console.log(props.storeInfo);
    };
    const satFromChangeHandler = (event) => {

        props.changeInput('satFrom', event.target.value);
        console.log(props.storeInfo);
    };
    const satToChangeHandler = (event) => {

        props.changeInput('satTo', event.target.value);
        //console.log(props.storeInfo);
    };
    const sunChangeHandler = () => {

        props.changeInput('sun');
        //console.log(props.storeInfo);
    };
    const sunFromChangeHandler = (event) => {

        props.changeInput('sunFrom', event.target.value);
        //console.log(props.storeInfo);
    };
    const sunToChangeHandler = (event) => {

        props.changeInput('sunTo', event.target.value);
        //console.log(props.storeInfo);
    };
    const monChangeHandler = () => {

        props.changeInput('mon');
        //console.log(props.storeInfo);
    };
    const monFromChangeHandler = (event) => {

        props.changeInput('monFrom', event.target.value);
        //console.log(props.storeInfo);
    };
    const monToChangeHandler = (event) => {

        props.changeInput('monTo', event.target.value);
        //console.log(props.storeInfo);
    };
    const tueChangeHandler = () => {

        props.changeInput('tue');
        //console.log(props.storeInfo);
    };
    const tueFromChangeHandler = (event) => {
        props.changeInput('tueFrom', event.target.value);
        //console.log(props.storeInfo);
    };
    const tueToChangeHandler = (event) => {
        props.changeInput('tueTo', event.target.value);
        //console.log(props.storeInfo);
    };
    const wedChangeHandler = () => {
        props.changeInput('wed');
        //console.log(props.storeInfo);
    };
    const wedFromChangeHandler = (event) => {
        props.changeInput('wedFrom', event.target.value);
        //console.log(props.storeInfo);
    };
    const wedToChangeHandler = (event) => {
        props.changeInput('wedTo', event.target.value);
        //console.log(props.storeInfo);
    };
    const thurChangeHandler = () => {
        props.changeInput('thur');
        //console.log(props.storeInfo);
    };
    const thurFromChangeHandler = (event) => {
        props.changeInput('thurFrom', event.target.value);
        //console.log(props.storeInfo);
    };
    const thurToChangeHandler = (event) => {
        props.changeInput('thurTo', event.target.value);
        //console.log(props.storeInfo);
    };
    const friChangeHandler = () => {
        props.changeInput('fri');
        //console.log(props.storeInfo);
    };
    const friFromChangeHandler = (event) => {
        props.changeInput('friFrom', event.target.value);
        //console.log(props.storeInfo);
    };
    const friToChangeHandler = (event) => {
        props.changeInput('friTo', event.target.value);
        //console.log(props.storeInfo);
    };

    const storeCategoryChangeHandler = (categoryId) => {
        console.log('storeCategoryChangeHandler: ', categoryId);

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
    const uploadStoreHandler = () => {

        let toUploadFormData = new FormData();

        //append storeInfo
        let { uploadLogoPhoto, uploadCoverPhoto, logoPhoto, coverPhoto, ...storeInfo } = props.storeInfo;
        toUploadFormData.append('storeInfo', JSON.stringify(storeInfo));

        //append itemsCategories
        let itemsCategoriesArray = props.itemsCategories;
        let itemsCategoriesObj = {};
        itemsCategoriesArray.forEach(itemsCategory => {
            itemsCategoriesObj[itemsCategory.id] = { ...itemsCategory };
        });
        toUploadFormData.append('itemsCategories', JSON.stringify(itemsCategoriesObj));

        //append items
        let itemsArray = props.items;
        let itemsObj = {};
        itemsArray.forEach(item => {
            let { img, uploadImg, ...x } = item;
            itemsObj[item.id] = x;
        });
        toUploadFormData.append('items', JSON.stringify(itemsObj));

        //append options
        let options = props.options;
        toUploadFormData.append('options', JSON.stringify(options));

        //append extras
        let extras = props.extras;
        toUploadFormData.append('extras', JSON.stringify(extras));

        //append variants
        let variants = props.variants;
        toUploadFormData.append('variants', JSON.stringify(variants));

        //append store cover photo
        toUploadFormData.append(
            'storeCoverPhoto',
            props.storeInfo.uploadCoverPhoto,
            props.storeInfo.name + '_cover.' + getPhotoExtention(props.storeInfo.uploadCoverPhoto)
        );

        //append store logo photo
        toUploadFormData.append(
            'storeLogoPhoto',
            props.storeInfo.uploadLogoPhoto,
            props.storeInfo.name + '_logo.' + getPhotoExtention(props.storeInfo.uploadLogoPhoto)
        );

        //append items Imeges
        props.items.forEach(item => {
            toUploadFormData.append(
                item.name + '_' + item.id,
                item.uploadImg,
                item.name + '.' + getPhotoExtention(item.uploadImg)
            );
        });

        // let obj = {
        //     1: { name: 'werad', age: 37 },
        //     2: { name: 'ghad', age: 30 }
        // };
        // let formData = new FormData();
        // formData.append('obj', JSON.stringify(obj));
        // //formData.append('obj', JSON.stringify({name: 'ghad', age: 30}));
        // formData.append('storeCate', '1');
        // formData.append('image', props.storeInfo.uploadCoverPhoto);
        props.uploadStore(toUploadFormData);
    };
    useEffect(() => {
        props.getStoresCategories();
    }, []);


    let view = null;

    if (props.storesCategories.length > 0) {
        //console.log('in if');

        view = (
            <div className="storeInfoDiv">
                <div className="firstContainer">
                    <div className="leftDiv">
                        <div className="name_phone_div">
                            <TextField autoComplete="off" onChange={nameChangeHandler} id="outlined-basic" className="NameTextField" label="Name" variant="outlined" size="small" defaultValue={props.storeInfo.name} />
                            <TextField autoComplete="off" onChange={phoneChangeHandler} id="outlined-basic" className="PhoneTextField" label="Phone" variant="outlined" size="small" defaultValue={props.storeInfo.phone} />
                        </div>
                        <div className="Email_Tables_div">
                            <TextField autoComplete="off" onChange={emailChangeHandler} id="outlined-basic" className="EmailTextField" label="Email" variant="outlined" size="small" defaultValue={props.storeInfo.email} />
                            <TextField autoComplete="off" onChange={numberOfTablesChangeHandler} id="outlined-basic" className="TablesTextField" label="Number Of Tables" variant="outlined" size="small" defaultValue={props.storeInfo.numberOfTables} />
                        </div>
                        <div className="describtionDiv">
                            <TextField autoComplete="off"
                                className="descriptionTextField"
                                id="outlined-multiline-flexible"
                                label="Description"
                                multiline
                                maxRows={4}
                                defaultValue={props.storeInfo.description}
                                onChange={descriptionChangeHandler}
                            />
                        </div>
                    </div>
                    <div className="rightDiv">
                        <div className="canDeliver_div">
                            <FormControlLabel control={<Switch onChange={canDeliverChangeHandler} checked={props.storeInfo.canDeliver} />} label="Can deliver?" />
                            <TextField autoComplete="off" onChange={deliverMinSpendChangeHandler} id="outlined-basic" className="DeliverMinTextField" label="Deliver min spend" variant="outlined" size="small" defaultValue={props.storeInfo.deliveryMinSpend} />
                        </div>
                        <div className="canPickup_div">
                            <FormControlLabel control={<Switch onChange={canPickupChangeHandler} checked={props.storeInfo.canPickup} />} label="Can pickup?" />
                            <TextField autoComplete="off" onChange={pickupMinSpendChangeHandler} id="outlined-basic" className="PickupMinTextField" label="Pickup min spend" variant="outlined" size="small" defaultValue={props.storeInfo.pickupMinSpend} />
                        </div>
                        <div className="canTableOrder_div">
                            <FormControlLabel control={<Switch onChange={canTableOrderChangeHandler} checked={props.storeInfo.canTableOrder} />} label="Can table order?" />
                            <TextField autoComplete="off" onChange={tableOrderMinSpendChangeHandler} id="outlined-basic" className="TableOrderMinTextField" label="Table order min spend" variant="outlined" size="small" defaultValue={props.storeInfo.tableOrderMinSpend} />
                        </div>
                    </div>
                </div>
                <div className="secondContainer">
                    <div className="secondLeftDiv">
                        <div className="coverDiv">
                            <label style={{ "margin": "0px", "alignSelf": "center" }}>Cover photo</label>
                            <img className="coverPhotoClass" src={props.storeInfo.coverPhoto} />  {/*props.storeInfo.coverPhoto*/}
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
                            <img className="coverPhotoClass" src={props.storeInfo.logoPhoto} />  {/*props.storeInfo.coverPhoto*/}
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
                            <DropDown options={options} itemChangeHandler={storeCategoryChangeHandler} selectedItemId={props.storeInfo.categoryId}></DropDown>
                        </div>
                        <div className="categoryDiv">
                            <label style={{ "display": "block" }}>Choose Category</label>
                            <DropDown options={props.storesCategories} itemChangeHandler={storeCategoryChangeHandler} selectedItemId={props.storeInfo.categoryId}></DropDown>
                        </div>
                        <div className="activeDiv">
                            <FormControlLabel control={<Switch onChange={activeChangeHandler} checked={props.storeInfo.active} />} label="Active?" />
                        </div>
                    </div>
                    <div className="secondRightDiv">

                        <div className="daysDiv">
                            <div className="satDiv">
                                <FormControlLabel control={<Checkbox onChange={satChangeHandler} checked={props.storeInfo.saterday} />} label="Saterday" className="dayCheckBox" />
                            </div>
                            <div className="sunDiv">
                                <FormControlLabel control={<Checkbox onChange={sunChangeHandler} checked={props.storeInfo.sunday} />} label="Sunday" className="dayCheckBox" />
                            </div>
                            <div className="monDiv">
                                <FormControlLabel control={<Checkbox onChange={monChangeHandler} checked={props.storeInfo.monday} />} label="Monday" className="dayCheckBox" />
                            </div>
                            <div className="tueDiv">
                                <FormControlLabel control={<Checkbox onChange={tueChangeHandler} checked={props.storeInfo.tuesday} />} label="Tuesday" className="dayCheckBox" />
                            </div>
                            <div className="wedDiv">
                                <FormControlLabel control={<Checkbox onChange={wedChangeHandler} checked={props.storeInfo.wednesday} />} label="Wednesday" className="dayCheckBox" />
                            </div>
                            <div className="thuDiv">
                                <FormControlLabel control={<Checkbox onChange={thurChangeHandler} checked={props.storeInfo.thursday} />} label="Thursday" className="dayCheckBox" />
                            </div>
                            <div className="friDiv">
                                <FormControlLabel control={<Checkbox onChange={friChangeHandler} checked={props.storeInfo.friday} />} label="Friday" className="dayCheckBox" />
                            </div>
                        </div>

                        <div className="fromDiv">
                            <div className="satFrom">
                                <TextField autoComplete="off" onChange={satFromChangeHandler} id="outlined-basic" className="satFromTextField" label="From" variant="outlined" size="small" defaultValue={props.storeInfo.satFrom} />
                            </div>
                            <div className="sunFrom">
                                <TextField autoComplete="off" onChange={sunFromChangeHandler} id="outlined-basic" className="satFromTextField" label="From" variant="outlined" size="small" defaultValue={props.storeInfo.sunFrom} />
                            </div>
                            <div className="monFrom">
                                <TextField autoComplete="off" onChange={monFromChangeHandler} id="outlined-basic" className="satFromTextField" label="From" variant="outlined" size="small" defaultValue={props.storeInfo.monFrom} />
                            </div>
                            <div className="tueFrom">
                                <TextField autoComplete="off" onChange={tueFromChangeHandler} id="outlined-basic" className="satFromTextField" label="From" variant="outlined" size="small" defaultValue={props.storeInfo.tueFrom} />
                            </div>
                            <div className="wedFrom">
                                <TextField autoComplete="off" onChange={wedFromChangeHandler} id="outlined-basic" className="satFromTextField" label="From" variant="outlined" size="small" defaultValue={props.storeInfo.wedFrom} />
                            </div>
                            <div className="thurFrom">
                                <TextField autoComplete="off" onChange={thurFromChangeHandler} id="outlined-basic" className="satFromTextField" label="From" variant="outlined" size="small" defaultValue={props.storeInfo.thurFrom} />
                            </div>
                            <div className="friFrom">
                                <TextField autoComplete="off" onChange={friFromChangeHandler} id="outlined-basic" className="satFromTextField" label="From" variant="outlined" size="small" defaultValue={props.storeInfo.friFrom} />
                            </div>
                        </div>

                        <div className="toDiv">
                            <div className="satTo">
                                <TextField autoComplete="off" onChange={satToChangeHandler} id="outlined-basic" className="satToTextField" label="To" variant="outlined" size="small" defaultValue={props.storeInfo.satTo} />
                            </div>
                            <div className="sunTo">
                                <TextField autoComplete="off" onChange={sunToChangeHandler} id="outlined-basic" className="satToTextField" label="To" variant="outlined" size="small" defaultValue={props.storeInfo.sunTo} />
                            </div>
                            <div className="monTo">
                                <TextField autoComplete="off" onChange={monToChangeHandler} id="outlined-basic" className="satToTextField" label="To" variant="outlined" size="small" defaultValue={props.storeInfo.monTo} />
                            </div>
                            <div className="tueTo">
                                <TextField autoComplete="off" onChange={tueToChangeHandler} id="outlined-basic" className="satToTextField" label="To" variant="outlined" size="small" defaultValue={props.storeInfo.tueTo} />
                            </div>
                            <div className="wedTo">
                                <TextField autoComplete="off" onChange={wedToChangeHandler} id="outlined-basic" className="satToTextField" label="To" variant="outlined" size="small" defaultValue={props.storeInfo.wedTo} />
                            </div>
                            <div className="thurTo">
                                <TextField autoComplete="off" onChange={thurToChangeHandler} id="outlined-basic" className="satToTextField" label="To" variant="outlined" size="small" defaultValue={props.storeInfo.thurTo} />
                            </div>
                            <div className="friTo">
                                <TextField autoComplete="off" onChange={friToChangeHandler} id="outlined-basic" className="satToTextField" label="To" variant="outlined" size="small" defaultValue={props.storeInfo.friTo} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ctrlBtns">
                    <div className="endBtns">
                        <Button onClick={uploadStoreHandler} style={{ "marginRight": "20px", "textTransform": "none", "color": '#4BB543' }}>Save Store</Button>
                        <NavLink to={routes.storesPageUrl} className="NavLinkClass" style={{ 'padding': '6px 8px' }} >
                            <Button style={{ "textTransform": "none", "color": "#F32013" }} >Cancel</Button>
                        </NavLink>
                    </div>
                    <div className="navBtns">
                        <Button style={{ "marginRight": "20px", "textTransform": "none" }} startIcon={<KeyboardArrowLeft />} disabled>Previous</Button>
                        <Button onClick={onNextBtnClick} style={{ "textTransform": "none" }} endIcon={<ChevronRight />}>Next</Button>
                    </div>
                </div>
            </div>
        );
    } else {
        //console.log('in else');

        view = <CircularProgress />;
    }

    return view;

}

const mapStateToProps = state => {
    return {
        storesCategories: state.storesCategories.storesCategories,
        //
        storeInfo: state.createStore.storeInfo,
        itemsCategories: state.createStore.itemsCategories,
        items: state.createStore.items,
        options: state.createStore.options,
        extras: state.createStore.extras,
        variants: state.createStore.variants
    }
};
const mapDispatchToProps = dispatch => {
    return {
        next: () => dispatch({ type: actionsTypes.STOREINFONEXT }),
        getStoresCategories: () => dispatch({ type: actionsTypes.GET_STORESCATEGORIES }),
        changeInput: (input: string, val) => dispatch({ type: actionsTypes.CHANGEINPUT, in: 'StoreInfo', input: input, val: val }),
        uploadStore: (formData: FormData) => dispatch({ type: actionsTypes.UPLOADSTORE, formData: formData })
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(StoreInfo);