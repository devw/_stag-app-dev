import React from "react";
import { Nav } from "./nav";

const Home: React.FC = (pageProps) => {
    console.log("pageProps...", pageProps);
    return (
        <div><Nav /></div>
    );
}

export default Home;
