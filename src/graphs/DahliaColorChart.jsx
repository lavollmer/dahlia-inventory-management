import "../App.css"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const DahliaColorChart = ({ inventory }) => {
    const colorCounts = inventory.reduce((acc, item) => {
        const color = item.color || "Unknown";
        acc[color] = (acc[color] || 0) + 1;
        return acc;
    }, {});

    const data = Object.entries(colorCounts).map(([color, count]) => ({
        Colors: color,
        count,
    }));

    return (
        <div>
            <h1>Number of Dahlias by Color</h1>
            <BarChart width={730} height={250} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="Colors" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#545099ff" />
            </BarChart>
        </div>
    )
}

export default DahliaColorChart