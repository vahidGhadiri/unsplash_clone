import React from "react"
import ReactDOM from "react-dom"
import {Provider} from "react-redux";
import {store} from "./redux/store";

import {Header, ImageGrid} from "./components";

import "./App.scss"


export const App = () => {
    return (
        <Provider store={store}>
            <Header/>
            <ImageGrid/>
        </Provider>
    )
}

ReactDOM.render(
    <App/>, document.getElementById('root')
)