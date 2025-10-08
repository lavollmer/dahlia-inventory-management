import "../App.css"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const TubersByVariety = ({ inventory }) => {

    return (
        <>
            <div>
                <div>
                    <BarChart data={inventory}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="number_of_tubers" fill="#82ca9d" />
                    </BarChart >
                </div>
                <div>
                    if (!inventory || inventory.length === 0) return <p>No data available.</p>;
                </div>
            </div>
        </>
    )
}

export default TubersByVariety