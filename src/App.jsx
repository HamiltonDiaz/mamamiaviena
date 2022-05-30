import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Grid } from "@mui/material";
import Product from "./components/Product";
import AppFrame from "./pages/AppFrame";
import { ThemeProvider } from "@mui/styles";
import theme from "./utils/temaConfig";
import NavRedes from "./pages/NavRedes/NavRedes";


const App = () => {
    return (
        // <Router>
        //     <Routes>
        //         <Route path="/" element={<WelcomePage />} />
        //         <Route path="/main" element={<MainPage />} />
        //         <Route path="/city/:countryCode/:city" element={<CiudadPage />}/>
        //         {/* <Route path="/city" element={<CiudadPage />} /> */}
        //         <Route path='*' element={<NotFoundPage />} />
        //     </Routes>
        // </Router>

        <ThemeProvider theme={theme}>
            <AppFrame>
            {/* <NavRedes/> */}
                <Product />
            </AppFrame>
        </ThemeProvider>
    );
};

export default App;
