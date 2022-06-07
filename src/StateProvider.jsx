import {createContext, useContext, useReducer} from "react"

//Se crea la capa que encierra toda la aplicación para poder pasar los datos entre todos
export const StateContext= createContext()// Retorna un objeto: { Provider, Consumer }

//Es la herramiente que permite pasar los datos en toda la apliicación
export const StateProvider = ({reducer, initialState, children})=>(
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

//Esta función es la que permite usar los datos en todos los componentes
export const useStateValue = ()=>useContext(StateContext)
