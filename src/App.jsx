import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/styles";
import "bootstrap/dist/css/bootstrap.min.css"

import theme from "./utils/temaConfig";
import WelcomePage from "./pages/WelcomePage";
import NotFoundPage from "./pages/NotFoundPage";
import DesingPage from "./pages/DesingPage"
import HistoryPage from "./pages/HistoryPage";
import OutletPage from "./pages/OutletPage";
import WallPage from "./pages/WallPage";
import CreatorPage from "./pages/CreatorPage";
import HomeAdminPage from "./pages/Admin/HomeAdminPage";
import UserAdminPage from "./pages/Admin/UserAdminPage";
import Login from "./components/Users/Login";
import LineAdminPage from "./pages/Admin/LineAdminPage";


const App = () => {
    return (
        
            <ThemeProvider theme={theme}>
                <Router>
                    <Routes>
                        <Route path="/" element={<WelcomePage/>} />
                        <Route path="/nuestros-disenios" element={<DesingPage/>} />
                        <Route path="/nuestra-historia" element={<HistoryPage/>} />
                        <Route path="/nuestra-creadora" element={<CreatorPage/>} />
                        <Route path="/zona-outlet" element={<OutletPage/>} />
                        <Route path="/muro-fama" element={<WallPage/>} />
                        <Route path="/admin/home" element={<HomeAdminPage/>} />
                        <Route path="/admin/users" element={<UserAdminPage/>} />
                        <Route path="/admin/lines" element={<LineAdminPage/>} />
                        <Route path="/admin/products" element={<UserAdminPage/>} />
                        <Route path="/login" element={<Login/>} />
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
