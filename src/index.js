//Antes
// import React from 'react'
// import ReactDOM from 'react-dom'
// import App from './App'

// ReactDOM.render(
//     <App />,
//     document.getElementById("root")
// )

//React 18 e adelante
import { createRoot} from "react-dom/client"
import App from './App'

const contenedor= document.getElementById("root")
const root = createRoot(contenedor)
root.render(<App/>);