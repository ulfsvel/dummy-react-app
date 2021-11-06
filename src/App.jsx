import React from "react";
import NavBar from "./components/Navbar";
import Counters from "./components/Counters";
import Products from "./components/Products";

const App = () => (
    <div className="main__wrap">
        <main className="container">
            <div className="card__box">
                <Products/>
                <NavBar/>
                <Counters/>
            </div>
        </main>
    </div>
);

export default App;
