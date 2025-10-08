import "../App.css"
import { LineChart, XAxis, YAxis, Tooltip, Line } from 'recharts';


const PurchaseTrends = ({ inventory }) => {
    if (!inventory || inventory.length === 0) {
        return <p>No data available.</p>;
    }

    const formattedData = inventory.map(item => ({
        ...item,
        purchase_year: new Date(item.purchase_year).getFullYear()
    }));
    return (
        <div>
            <h1>Purchase Trends</h1>
            <div>
                <LineChart width={600} height={300} data={formattedData}>
                    <YAxis strokeDasharray="3 3" />
                    <XAxis dataKey="purchase_year" />
                    <Tooltip />
                    <Line type="monotone" dataKey="number_of_tubers" stroke="#8884d8" />
                </LineChart>
            </div>
        </div>
    )
}

export default PurchaseTrends