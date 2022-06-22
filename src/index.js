//Antes
// import React from 'react'
// import ReactDOM from 'react-dom'
// import App from './App'

// ReactDOM.render(
//     <App />,
//     document.getElementById("root")
// )

//React 18 e adelante
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reducer, { initialState } from "./reducer";
import { StateProvider } from "./StateProvider";
import "swiper/css/bundle";

const contenedor = document.getElementById("root");
const root = createRoot(contenedor);
root.render(
    <StateProvider initialState={initialState} reducer={reducer}>
        <App/>
    </StateProvider>
);