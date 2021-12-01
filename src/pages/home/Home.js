import React from 'react'
import Chart from '../../components/chart/Chart'
import FeaturedInfo from '../../components/featuredinfo/FeaturedInfo'
import "./home.css"
import { userdata } from "../../dummyData";
import WidgetSmall from '../../components/widgetSmall/WidgetSmall';
import WidgetLarge from '../../components/widgetLarge/WidgetLarge';

const Home = () => {
    return (
        <div className="home">
            <FeaturedInfo />
            <Chart data={userdata} title="USer Analytics" grid dataKey="Active User"/>
            <div className="homeWidgets">
                <WidgetSmall />
                <WidgetLarge />
            </div>
        </div>
    )
}

export default Home
