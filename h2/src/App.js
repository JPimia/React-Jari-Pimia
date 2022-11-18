import "./App.css";

import { Routes, Route } from "react-router-dom";

//pages
import MainPage from "./pages";
import PageNotFound from "./pages/404";
import UserPage from "./pages/users";
import MonthPage from "./pages/months";
import RandomPage from "./pages/random";

export default function App() {
    return (
        <div className="App-header">
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/users" element={<UserPage />} />
                <Route path="/months" element={<MonthPage />} />
                <Route path="/random/*" element={<RandomPage />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </div>
    );
}
