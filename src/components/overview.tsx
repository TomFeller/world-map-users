import React, {useContext} from "react";
import Chart from "react-google-charts";
import {CountriesContext} from "../providers/countries-provider";
import {AppHeader} from "./app-header";


export const Overview = () => {
    const {countries} = useContext(CountriesContext);

    const chartData = [
        ['Country', 'Users'],
        ...countries.map((item) => [item.country, item.users])
    ];

     return (
         <div className={"map"}>
             <AppHeader/>
             <Chart
                 width={'800px'}
                 height={'510px'}
                 chartType="GeoChart"
                 data={chartData}
                 mapsApiKey="AIzaSyCij7stMb27jg45QNDLx_7aKzz-oqDytfU"

                 options={{
                     // region: '002', // Africa
                     explorer:{maxZoomOut:98},
                     colorAxis: { colors: ['#999999', '#666666', '#333333'] },
                     backgroundColor: '#81d4fa',
                     datalessRegionColor: '#f3f3f3',
                     defaultColor: '#f5f5f5',
                 }}
                 rootProps={{ 'data-testid': '1' }}/>
         </div>

    )
};