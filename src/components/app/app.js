import React from "react";
import { Switch, Route } from 'react-router-dom'
import {HomePage, BookCart} from "../pages";

import './app.css'
import ShopHeader from "../shop-header/shop-header";

class App extends React.Component {

    render() {
        return (
            <main role='main' className='container'>
                <ShopHeader numItems={0} />
                <Switch>
                    <Route path='/' component={HomePage} exact />
                    <Route path='/book-cart' component={BookCart} exact />
                </Switch>
            </main>
        )
    }
}

export default App