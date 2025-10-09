import "../App.css"
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from 'recharts';

const TubersByVariety = ({ inventory }) => {
    if (!inventory || inventory.length === 0) return <p>No data available.</p>;
    return (
        <>
            <div>
                <h1>Tubers By Variety</h1>
                <div>
                    <BarChart width={600} height={300} data={inventory} barCategoryGap={40} barGap={5}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis allowDecimals={false} />
                        <Tooltip />
                        <Bar dataKey="number_of_tubers" fill="#82ca9d" />
                    </BarChart >
                </div>
            </div>
        </>
    )
}

export default TubersByVariety