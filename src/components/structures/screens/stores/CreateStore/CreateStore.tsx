import React, { Component, useEffect, useState } from "react";
import { connect } from 'react-redux';
import * as actionsTypes from '../../../../../store/actions/actionsTypes';
import routes from '../../../../../globals/routes';
import WizardHeader from "../../../../views/wizardheader/WizardHeader";
import "./createstore.css";
import StoreInfo from './WizardSteps/StoreInfo';
import ItemsCategories from "./WizardSteps/ItemsCategories";
import Items from "./WizardSteps/Items";
import Options from "./WizardSteps/options";
import Extras from "./WizardSteps/Extras";
import PricingVariants from "./WizardSteps/PricingVariants";

function CreateStore(props) {

    const [firstStep, setFirstStep] = useState({ name: "Store Info", completed: false });
    const [secondStep, setSecondStep] = useState({ name: "Items Categories", completed: false });
    const [thirdStep, setThirdStep] = useState({ name: "Items", completed: false },);
    const [fourthStep, setFourthStep] = useState({ name: "Options", completed: false });
    const [fifthstep, setFifthStep] = useState({ name: "Extras", completed: false });
    const [sixthStep, setSexthStep] = useState({ name: "Pricing Variants", completed: false });
    const [activeStep, setActiveStep] = useState(1);

    const nextStoreInfo = () => {
        setFirstStep({ name: 'Store Info', completed: true });
        setActiveStep(2);
    };
    const previousItemsCategories = () => {
        setActiveStep(1);
    };
    const nextItemsCategories = () => {
        setSecondStep({ name: 'Items Categories', completed: true });
        setActiveStep(3);
    };
    const nextItems = () => {
        setThirdStep({ name: 'Items', completed: true });
        setActiveStep(4);
    };
    const previousItems = () => {
        setActiveStep(2);
    };
    const nextOptions = () => {
        setFourthStep({ name: 'Options', completed: true });
        setActiveStep(5);
    };
    const previousOptions = () => {
        setActiveStep(3);
    };
    const nextExtras = () => {
        setFifthStep({ name: 'Extras', completed: true });
        setActiveStep(6);
    };
    const previousExtras = () => {
        setActiveStep(4);
    };
    const nextPricingVariants = () => {

    };
    const previousPricingVariants = () => {
        setActiveStep(5);
    };

    const handleStep = (stepIndex: number) => {
        setActiveStep(stepIndex + 1);
    };

    useEffect(() => {
        props.changePath(routes.createStorePageUrl);
    }, []);

    let view;

    switch (activeStep) {
        case 1:
            view = <StoreInfo nextStoreInfo={nextStoreInfo} />;
            break;
        case 2:
            view = <ItemsCategories previousItemsCategories={previousItemsCategories} nextItemsCategories={nextItemsCategories} />;
            break;
        case 3:
            view = <Items previousItems={previousItems} nextItems={nextItems} />;
            break;
        case 4:
            view = <Options previousOptions={previousOptions} nextOptions={nextOptions} />
            break;
        case 5:
            view = <Extras previousExtras={previousExtras} nextExtras={nextExtras} />
            break;
        case 6:
            view = <PricingVariants previousPricingVariants={previousPricingVariants} nextPricingVariants={nextPricingVariants} />
            break;
        default:
            break;
    }

    return (
        <div>
            <div className="WizardHeaderDiv">
                <WizardHeader
                    activeStep={activeStep}
                    steps={[firstStep, secondStep, thirdStep, fourthStep, fifthstep, sixthStep]}
                    handleStep={handleStep} />
            </div>
            <div className="WizardBodyDiv">
                {view}
            </div>
        </div>

    );
}


const mapStateToProps = state => {
    return {
        breadcrumb: state.breadcrumb
    }
};

const mapDispatchToProps = dispatch => {
    return {
        changePath: (path: string) => dispatch({ type: actionsTypes.CHANGEPATH, path: path })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateStore);