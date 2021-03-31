import React from "react";
import "../assets/scss/pages/home.scss";
import HomeCards from "../components/home/HomeCards";
import Layout from "../components/base/Layout";
import HomeContent from "../components/home/HomeContent";
import HomeBooking from "../components/home/HomeBooking";

const Home = ()=>{
    return(
        <Layout header='DashBoard'>
            <div className='home-main-container'>
                <HomeCards/>
                <HomeContent/>
                <HomeBooking/>
            </div>
        </Layout>
    );
};
export default Home;
