import React, { useState, useEffect } from 'react';
// import css from './Components/Top.css';
import Chart from 'chart.js/auto';

const TopProductsCard = () => {
  const [chart, setChart] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  useEffect(() => {
    // data for the pie chart
    const data = {
      labels: ['Basic tees', 'Custom short Pants', 'Super Hoodies'],
      datasets: [{
        data: [30, 20, 10, 40],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
      }]
    };

    // options for the pie chart
    const options = {
      responsive: true,
      maintainAspectRatio: false,
    
    };

    // create the chart
    const ctx = document.getElementById('top-products-chart').getContext('2d');
    const newChart = new Chart(ctx, {
      type: 'pie',
      data: data,
      options: options,
     

    });

    // set the chart state
    setChart(newChart);

    // cleanup function to destroy the chart when the component unmounts
    return () => {
      newChart.destroy();
    };
  }, []);

  const handleMonthChange = (event) => {
    setSelectedMonth(parseInt(event.target.value));
  };

  const handleYearChange = (event) => {
    setSelectedYear(parseInt(event.target.value));
  };

  return (
    <div className="top-products-card card" style={{ height: '9rem', width: '20rem',}}>
      <div className="top-products-card-header" style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h2 className='font-bold lg:text-sm sm:text-xs'>Top Products</h2>
        <div className='lg:text-sm sm:text-xs' style={{justifyContent: 'space-between'}}>
          <select className='text-xs font-thin text-slate-700' value={selectedMonth} onChange={handleMonthChange} style={{ marginRight: '0.5rem' }}>
            <option value={0}>January</option>
            <option value={1}>February</option>
            <option value={2}>March</option>
            <option value={3}>April</option>
            <option value={4}>May</option>
            <option value={5}>June</option>
            <option value={6}>July</option>
            <option value={7}>August</option>
            <option value={8}>September</option>
            <option value={9}>October</option>
            <option value={10}>November</option>
            <option value={11}>December</option>
          </select>
          <select className='text-xs font-thin text-slate-700' value={selectedYear} onChange={handleYearChange}>
            <option value={2020}>2020</option>
            <option value={2021}>2021</option>
            <option value={2022}>2022</option>
          </select>
        </div>
      </div>
      <canvas className='flex-inline' id="top-products-chart" style={{ width: '100%', height: '90%' }} />
    </div>
  );
};

export default TopProductsCard;
