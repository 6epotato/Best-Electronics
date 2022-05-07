import React from "react";
import './Chart.css'
import useItem from "../Hooks/useItem";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
} from "recharts";



export default function App() {
    const [items, setItems] = useItem()
    return (
        <>
            <h3 className="mt-5 text-center">Product Update</h3>
            <AreaChart className="chart"
                width={500}
                height={400}
                data={items}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="quantity" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
        </>
    );
}
