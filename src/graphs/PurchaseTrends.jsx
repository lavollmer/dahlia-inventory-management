import "../App.css"
import { LineChart, XAxis, YAxis, Tooltip, Line, CartesianGrid } from 'recharts';


const PurchaseTrends = ({ inventory }) => {
    if (!inventory || inventory.length === 0) {
        return <p>No data available.</p>;
    }

    const yearlyTotals = inventory.reduce((acc,item) => {
        const year = new Date(item.purchase_year).getFullYear();
        const tubers = item.number_of_tubers || 0;

        if (!acc[year]){
            acc[year] = 0;
        }
        acc[year] += tubers;
        return acc;
    }, {});

     const chartData = Object.entries(yearlyTotals)
        .map(([year, totalTubers]) => ({
            year: parseInt(year),
            totalTubers,
        }))
        .sort((a, b) => a.year - b.year);

    return (
        <div>
            <h1>Purchase Trends</h1>
            <div>
                <LineChart width={600} height={300} data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <YAxis />
                    <XAxis dataKey="year" />
                    <Tooltip />
                    <Line type="monotone" dataKey="number_of_tubers" stroke="#8884d8" />
                </LineChart>
            </div>
        </div>
    )
}

export default PurchaseTrends