import React, { Component, useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import DropDown from "../../../../../views/basiccomponents/dropdown/DropDown";
import IconButton from '@mui/material/IconButton';
import { AddCircle, RemoveCircle, ChevronRight, KeyboardArrowLeft, Delete, Add } from '@material-ui/icons';
import Button from '@mui/material/Button';
import { NavLink } from "react-router-dom";
import routes from "../../../../../../globals/routes";
import './pricingvariants.css';
import * as actionsTypes from '../../../../../../store/actions/actionsTypes';
import { connect } from "react-redux";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import SimpleAccordion from "../../../../../views/basiccomponents/accordion/Accordion";
import { getVariants } from "../../../../../../helperfunctions/getVariants";
import CircularProgress from '@material-ui/core/CircularProgress';
import DropDownWithCheckBoxes from "../../../../../views/basiccomponents/dropdownwithcheckboxes/DropDownWithCheckBoxes";

function PricingVariants(props) {

    const [finishCalculateVariants, setFinishCalculateVariants] = useState(false);

    useEffect(() => {
        //calculate variants
        console.log('useEffect1');
        console.log('finishCalculateVariants1: ', finishCalculateVariants);

        let itemsVariants = {};
        for (const itemId in props.options) {
            if (Object.prototype.hasOwnProperty.call(props.options, itemId)) {
                let itemVariants = [];
                let itemOptions = props.options[itemId];
                let optionsNames = itemOptions.map(itemOption => itemOption.name);
                let itemOptionsValues = itemOptions.map(itemOption => itemOption.values);
                itemVariants = getVariants(itemOptionsValues, optionsNames);
                if (props.extras[itemId]) {
                    props.extras[itemId].forEach(extra => {
                        if (extra.forAllVariants) {
                            itemVariants.forEach(variant => {
                                if (variant.hasOwnProperty('extras')) {
                                    variant.extras.push(extra.id);
                                } else {
                                    variant.extras = [extra.id];
                                }
                            });
                        }
                    });
                }
                itemsVariants[itemId] = itemVariants;
            }
        }
        props.saveVariantsInStore(itemsVariants);
    }, []);

    useEffect(() => {
        setFinishCalculateVariants(true);
        console.log('useEffect2');
        console.log('finishCalculateVariants2: ', finishCalculateVariants);
        console.log('useEffect2 - props.variants: ', props.variants);

    }, [props.variants]);

    const previousHandler = () => {
        props.previousPricingVariants();
    };
    const nextHandler = () => {
        props.nextOptions();
    };

    const changeExtraStatusForVariant = (itemId, itemVariantIndex, extraId) => {
        props.changeInput('variantextra', itemId, itemVariantIndex, extraId);
    };

    const priceChangeHandler = (event, itemId, itemVariantIndex) => {
        props.changeInput('variantPrice', itemId, itemVariantIndex, null, event.target.value);
    };

    let data = [];
    if (finishCalculateVariants) {
        for (const itemId in props.variants) {
            if (Object.prototype.hasOwnProperty.call(props.variants, itemId)) {
                let extras = props.extras[itemId];
                let itemName = props.items.filter(item => item.id == itemId)[0].name;
                let accordionBody = props.variants[itemId].map((itemVariant, itemVariantIndex) => {
                    let itemVariantKeys = Object.keys(itemVariant).filter(key => (key != 'price' && key != 'extras')); //filter
                    let label = [];
                    for (let index = 0; index < itemVariantKeys.length; index++) {
                        let key = itemVariantKeys[index];
                        let value = itemVariant[key];
                        if (index == itemVariantKeys.length - 1) {
                            label.push(<p className="variantNameP"><strong style={{ 'color': '#1976d2' }}>{key}</strong>:  {value} </p>);
                        } else {
                            label.push(<p className="variantNameP"><strong style={{ 'color': '#1976d2' }}>{key}</strong>:  {value + ','} </p>);
                        }
                    }
                    let price;
                    if (props.variants && props.variants[itemId]) {
                        price = props.variants[itemId][itemVariantIndex].price ? props.variants[itemId][itemVariantIndex].price : '';
                    } else {
                        price = '';
                    }
                    return (
                        <div className="variantDiv" key={itemVariantIndex}>
                            <div className="variantLabelDiv">
                                <label>{label}</label>
                            </div>
                            <div className="variantPriceDiv">
                                <TextField autoComplete="off" onChange={(event) => priceChangeHandler(event, itemId, itemVariantIndex)} id="outlined-basic" className="EmailTextField" label="Price" variant="outlined" size="small" value={price} />
                            </div>
                            <div className="extrasDropDownDiv">
                                <DropDownWithCheckBoxes options={extras} toggleOptionCheck={(extraId) => changeExtraStatusForVariant(itemId, itemVariantIndex, extraId)} checkedItemsIds={itemVariant.hasOwnProperty('extras') ? itemVariant.extras : []} />
                            </div>
                        </div>
                    );
                });
                data.push({ title: itemName, accordionBody: accordionBody });
            }
        }
    }

    let view = null;
    if (finishCalculateVariants) {
        view = (<div className="pricingVariantsDiv">
            <SimpleAccordion data={data}></SimpleAccordion>
            <div className="ctrlBtns">
                <div className="endBtns">
                    <Button style={{ "marginRight": "20px", "textTransform": "none", "color": '#4BB543' }}>Save Store</Button>
                    <NavLink to={routes.storesPageUrl} className="NavLinkClass" style={{'padding': '6px 8px'}} >
                        <Button style={{ "textTransform": "none", "color": "#F32013" }}>Cancel</Button>
                    </NavLink>
                </div>
                <div className="navBtns">
                    <Button onClick={previousHandler} style={{ "marginRight": "20px", "textTransform": "none" }} startIcon={<KeyboardArrowLeft />}>Previous</Button>
                    <Button disabled onClick={nextHandler} style={{ "textTransform": "none" }} endIcon={<ChevronRight />}>Next</Button>
                </div>
            </div>
        </div>);
    } else {
        view = (<CircularProgress />);
    }
    return view;
}


const mapStateToProps = state => {
    return {
        items: state.createStore.items,
        options: state.createStore.options,
        variants: state.createStore.variants,
        extras: state.createStore.extras,
    }
};
const mapDispatchToProps = dispatch => {
    return {
        next: () => dispatch({ type: actionsTypes.OPTIONSNEXT }),
        previous: () => dispatch({ type: actionsTypes.OPTIONSPREVIOUS }),
        //addExtra: (itemId: string) => dispatch({ type: actionsTypes.ADDEXTRA, itemId: itemId }),
        //removeExtra: (itemId: string, itemExtraIndex: number) => dispatch({ type: actionsTypes.REMOVEEXTRA, itemId: itemId, itemExtraIndex: itemExtraIndex }),
        //addItem: () => dispatch({ type: actionsTypes.ADDITEMFOREXTRAS }),
        //removeItem: (itemId: string) => dispatch({ type: actionsTypes.REMOVEITEMFROMExtras, itemId: itemId }),
        saveVariantsInStore: (variants) => dispatch({ type: actionsTypes.SAVEVARIANTSINSTORE, variants: variants }),
        changeInput: (
            input: string,
            itemId: string,
            itemVariantIndex: number,
            extraId: string = null,
            val: any = null
        ) => dispatch({
            type: actionsTypes.CHANGEINPUT,
            in: 'PricingVariants',
            input: input,
            itemId: itemId,
            itemVariantIndex,
            extraId: extraId,
            val: val
        })
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(PricingVariants);