import "../App.css"
import {LineChart, XAxis, YAxis, Tooltip, Line} from 'recharts';

const PurchaseTrends = ({inventory}) => {
  return (
    <div>
        <h1>Purchase Trends</h1>
        <div>
            <LineChart data={inventory}>
                <YAxis />
                <XAxis />
                <Tooltip />
                <Line type="monotone" dataKey="number_of_tubers" stroke="#8884d8"/>
            </LineChart>
        </div>
    </div>
  )
}

export default PurchaseTrends