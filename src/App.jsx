import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/styles";
import theme from "./utils/temaConfig";
import WelcomePage from "./pages/WelcomePage";
import NotFoundPage from "./pages/NotFoundPage";
import DesingPage from "./pages/DesingPage"


const App = () => {
    return (
        
            <ThemeProvider theme={theme}>
                <Router>
                    <Routes>
                        <Route path="/" element={<WelcomePage/>} />
                        <Route path="/nuestros-disenios" element={<DesingPage/>} />
                        {/* <Route path="/main" element={<MainPage />} /> */}
                        {/* <Route
                            path="/city/:countryCode/:city"
                            element={<CiudadPage />}
                        />
                        {/* <Route path="/city" element={<CiudadPage />} /> */}
                        <Route path="*" element={<NotFoundPage />} /> 
                    </Routes>
                </Router>
            </ThemeProvider>
        
    );
};

export default App;
