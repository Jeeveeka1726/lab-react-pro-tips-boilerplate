import React from "react";
import {Route, Routes} from "react-router-dom"
import Contacts from "./Components/Contacts";
import Home from "./Components/Home";
import Forms from "./Components/Forms";



function AllRoutes(){
    return(
        <>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/Contacts" element={<Contacts/>}></Route>
                <Route path="/Forms" element={<Forms/>}></Route>
            </Routes>
        </>
    )
}

export default AllRoutes;
