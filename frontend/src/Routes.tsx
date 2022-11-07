import React from 'react';

import { BrowserRouter, Switch, Route } from "react-router-dom";


import Menu from "./components/Menu";
import SalesCard from "./components/SalesCard";

import Cadastro from "./components/Cadastro";
import Header from './components/Header';



function Routes() {
    return (
        <BrowserRouter>
            <Header />
            <Menu />

            
            <Switch>

                <Route path="/salescard">
                    <SalesCard />
                </Route>
                <Route path="../cadastro">
                    <Cadastro />
                </Route>

            </Switch>


        </BrowserRouter>
    )

}

export default Routes;