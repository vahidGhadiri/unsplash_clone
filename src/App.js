import React from "react"
import ReactDOM from "react-dom"

import {Button, Header, ImageGrid, Stats} from "./components";


export const App = () => {
    return (
        <>
            <Header/>
            <ImageGrid/>
            <Button/>
            <Stats/>
        </>
    )
}

ReactDOM.render(
    <App/>, document.getElementById('root')
)