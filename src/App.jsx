import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import { ThemeProvider } from "@mui/styles";
import "bootstrap/dist/css/bootstrap.min.css";

import theme from "./utils/temaConfig";
import WelcomePage from "./pages/WelcomePage";
import NotFoundPage from "./pages/NotFoundPage";
import DesingPage from "./pages/DesingPage";
import HistoryPage from "./pages/HistoryPage";
import OutletPage from "./pages/OutletPage";
import WallPage from "./pages/WallPage";
import CreatorPage from "./pages/CreatorPage";
import HomeAdminPage from "./pages/Admin/HomeAdminPage";
import UserAdminPage from "./pages/Admin/UserAdminPage";
import Login from "./components/Users/Login";
import LineAdminPage from "./pages/Admin/LineAdminPage";
import { getCookie } from "./utils/CookiesUtil";
import { protectAdmin } from "./utils/Functions";
import { muroFama, nuestraCreadora, nuestraHistoria, nuestrosDisenios, zonaOutlet } from "./utils/Routes";

const App = () => {
    let isLogin= getCookie("TOKENAUTH")
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Routes>
                    <Route path="/" element={<WelcomePage />} />
                    <Route path={nuestrosDisenios} element={<DesingPage />} />
                    <Route path={nuestraHistoria} element={<HistoryPage />} />
                    <Route path={nuestraCreadora} element={<CreatorPage />} />
                    <Route path={zonaOutlet} element={<OutletPage />} />
                    <Route path={muroFama} element={<WallPage />} />

                    <Route
                        path={protectAdmin("")}
                        element={<HomeAdminPage />}
                    />
                    <Route
                        path={protectAdmin("users")}
                        element={<UserAdminPage />}
                    />
                    <Route
                        path={protectAdmin("lines")}
                        element={<LineAdminPage />}
                    />
                    <Route
                        path={protectAdmin("products")}
                        element={<UserAdminPage />}
                    />

                    <Route
                        path="/login"
                        element={
                            isLogin != null ? (
                                <Navigate replace to="/admin" />
                            ) : (
                                <Login />
                            )
                        }
                    />
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
