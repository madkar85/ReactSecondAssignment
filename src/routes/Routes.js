import { HomeView } from "../view/homeview/HomeView";
import {PokeView} from "../view/pokeview/PokeView";
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import RoutingPath from "./RoutingPath";

export const Routes = ({children}) => {
    return (
        <BrowserRouter basename="/ReactSecondAssignment">
            {children}
            <Switch>
                <Route exact path={RoutingPath.pokeView} component={PokeView}/>
                <Route exact path={RoutingPath.homeView} component={HomeView} />
            </Switch>
            
        </BrowserRouter>
    )
}
