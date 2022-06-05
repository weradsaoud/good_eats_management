import React, { Component } from "react";
import { connect } from 'react-redux';
import LogIn from "../auth/LogIn";
import { Views } from '../../../globals/views';
import AdminLayout from "../layouts/AdminLayout";
import * as actionsTypes from '../../../store/actions/actionsTypes';
import { Route, Routes } from 'react-router-dom';
import routes from "../../../globals/routes";

import Dashboard from '../screens/dashboard/Dashboard';
import StoresCategories from '../screens/storescategories/StoresCategories';
import Stores from '../screens/stores/Stores';
import ItemsCategories from '../screens/itemscategories/ItemsCategories';
import Items from '../screens/items/Items';
import Options from '../screens/options/Options';
import Extras from '../screens/extras/Extras';
import Offers from '../screens/offers/Offers';
import PricingVariants from "../screens/pricingvariants/PricingVariants";
import Owners from "../screens/owners/Owners";
import Cashiers from "../screens/cashiers/Cashiers";
import CreateStore from "../screens/stores/CreateStore/CreateStore";
import AddStoreCategory from "../screens/storescategories/addstorecategory/AddStoreCategory";
import { toast } from 'react-toastify';
import EditeStoreCategory from "../screens/storescategories/editestorecategory/EditeStoreCategory";
import EditStore from "../screens/stores/EditStore/EditStore";
import AddItemCategory from "../screens/itemscategories/additemcategory/AddItemCategory";

interface IProps {
    login: any,
    view: any,
    onDidmount: any
}

interface IState {

}

class GoodEats extends Component<IProps, IState>{


    componentDidMount(): void {
        this.props.onDidmount();
        //console.log('goodeats props: ', this.props);
        toast.configure();
    }

    public render(): React.ReactNode {
        return (
            <Routes>
                <Route path={routes.loginPageUrl} element={<LogIn />} />
                <Route element={<AdminLayout />}>
                    <Route path={routes.dashboardPageUrl} element={<Dashboard />} />
                    <Route path={routes.storesCategoriesPageUrl} element={<StoresCategories />} />
                    <Route path={routes.addStoreCategoryUrl} element={<AddStoreCategory />} />
                    <Route path={routes.editeStoreCategoryUrl} element={<EditeStoreCategory />} />
                    <Route path={routes.storesPageUrl} element={<Stores />} />
                    <Route path={routes.editStorePageUrl} element={<EditStore />} />
                    <Route path={routes.createStorePageUrl} element={<CreateStore />} />
                    <Route path={routes.itemsCategoriesPageUrl} element={<ItemsCategories />} />
                    <Route path={routes.addItemCategoryUrl} element={<AddItemCategory />} />
                    <Route path={routes.itemsPageUrl} element={<Items />} />
                    <Route path={routes.optionsPageUrl} element={<Options />} />
                    <Route path={routes.extrasPageUrl} element={<Extras />} />
                    <Route path={routes.offersPageUrl} element={<Offers />} />
                    <Route path={routes.pricingVariantsPageUrl} element={<PricingVariants />} />
                    <Route path={routes.ownersPageUrl} element={<Owners />} />
                    <Route path={routes.cashiersPageUrl} element={<Cashiers />} />
                </Route>

            </Routes >
        );


        // let view: React.ReactNode;
        // switch (this.props.view) {
        //     case Views.LOGIN:
        //         view = <LogIn></LogIn>
        //         break;
        //     case Views.DASHBOARD:
        //         view = (<AdminLayout >
        //             <div>
        //                 hellllo
        //             </div>
        //         </AdminLayout>);
        //         break;
        //     default:
        //         break;
        // }
        // return view;
    }
}

const mapStateToProps = state => {
    return {
        config: state.config,
        login: state.login,
        view: state.view.view
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onDidmount: () => dispatch({ type: actionsTypes.LOAD_CONFIG })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(GoodEats); 