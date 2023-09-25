import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../../Util/Util";
import { PieChart, Pie, Cell, Legend, Tooltip, Label } from 'recharts';

const Statistics = () => {

    const donations=useLoaderData();
    const [donations2,setDonations]=useState([])
    useEffect(()=>{
        const storedDonation=getStoredDonation();
        if (donations){
            const donationDone=donations.filter(donation=>storedDonation.includes(donation.id))
            setDataLength(donationDone.length)
        }
    },[])
    const [datalength,setDataLength]=useState(4)
console.log(datalength)
        // Define your data
        const data = [
          { name: 'Total Donation', value: 12 },
          { name: 'Your Donation', value: datalength },
        ];
        const colors = ['#0088FE', '#00C49F'];
      
        return (
           
          <PieChart width={400} height={400}>

          <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={150}
        fill="#8884d8"
      >

      {/* Define custom colors for the slices */}
      {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index]} />
        ))}

            {/* <Label
            position="inside"
            value={({ entry }) => `${(entry * 100).toFixed(2)}%`}
            fontSize={12}
            fill="white"
          /> */}


      </Pie>

      <Label
          position="center"
          value={`${data[0].value}%`}
          fill="white"
          fontSize={16}
        />

      
            {/* Add a tooltip for data points */}
            <Tooltip />
      
            {/* Add a legend */}
            <Legend />
          </PieChart>

       
    );
};

export default Statistics;