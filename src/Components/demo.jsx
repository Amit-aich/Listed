import React from "react";

import { CiSearch } from "react-icons/ci";
import { BiBell, BiPowerOff, BiUserCircle } from "react-icons/bi";
import { BiHappyAlt } from "react-icons/bi";
import { AiOutlinePieChart } from "react-icons/ai";
import { AiOutlineTags } from "react-icons/ai";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegThumbsUp } from "react-icons/fa";
import { AiOutlineUsergroupDelete } from "react-icons/ai";
import { TbCalendarTime } from "react-icons/tb";
import { AiOutlineRight } from "react-icons/ai";
import { BsTags, BsWallet2 } from "react-icons/bs";
import Chart from "chart.js/auto";
import { useEffect } from "react";
import { useState } from "react";
import TopProductsCard from "./TopProductCard";

function Demo() {
  const [chart, setChart] = useState(null);
  const [month, setMonth] = useState("January");
  const [year, setYear] = useState(2022);

  useEffect(() => {
    // data for the line chart
    const data = {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
      datasets: [
        {
          label: "Guests",
          data: [100, 200, 100, 400],
          fill: false,
          borderColor: "#FF6384",
          tension: 0.1,
        },
        {
          label: "Users",
          data: [200, 500, 400, 500],
          fill: false,
          borderColor: "#36A2EB",
          tension: 0.1,
        },
      ],
    };

    // options for the line chart
    const options = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              stepSize: 100,
            },
          },
        ],
      },
    };

    // create the chart
    const ctx = document.getElementById("activities-chart").getContext("2d");
    const newChart = new Chart(ctx, {
      type: "line",
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
    setMonth(event.target.value);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const [showSidebar, setShowSidebar] = React.useState(false);

  const handleToggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  const logout = () => {
    localStorage.clear();
    window.location.reload();
  }

  return (
    <div className="bg-slate-100 overflow-hidden">
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500   rounded-2xl sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        onClick={handleToggleSidebar}
      >
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className={`fixed top-3  lg:left-4 z-40 w-64 h-[95%] transition-transform ${showSidebar ? "" : "-translate-x-full"
          } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div
          className="h-full px-3 py-4 rounded-2xl overflow-y-auto bg-black"
          onClick={handleToggleSidebar}
        >
          <div className="p-5 flex justify-start">
            <span className="text-white font-bold text-3xl ">Board.</span>
          </div>
          <ul className="space-y-2 font-medium pl-4 flex-grow">
            <li>
              <div className="cursor-pointer flex items-center p-2 text-gray-900   rounded-2xl dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <AiOutlinePieChart /> <span className="ml-3">Dashboard</span>
              </div>
            </li>
            <li>
              <div className=" cursor-pointer flex items-center p-2 text-gray-900   rounded-2xl dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <AiOutlineTags /> <span className="ml-3">Transaction</span>
              </div>
            </li>
            <li>
              <li>
                <div className=" cursor-pointer flex items-center p-2 text-gray-900   rounded-2xl dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <TbCalendarTime />
                  <span className="ml-3">Schedule</span>
                </div>
              </li>
              <div className="cursor-pointer flex items-center p-2 text-gray-900   rounded-2xl dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <HiOutlineUserCircle /> <span className="ml-3">Users</span>
              </div>
            </li>
            <li>
              <div className="cursor-pointer flex items-center p-2 text-gray-900   rounded-2xl dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <IoSettingsOutline /> <span className="ml-3">Settings</span>
              </div>
            </li>
            {/* <li> */}
              {/* <div className="cursor-pointer flex items-center p-2 text-gray-900   rounded-2xl dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"> */}
                {/* <button onClick={logout} className="cursor-pointer flex items-center p-2 text-gray-900   rounded-2xl dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"> <span className="ml-3">Logout</span></button> */}
              {/* </div> */}
            {/* </li> */}
          </ul>
          <div className="text-white  p-7 text-left  grid mt-[30vh] cursor-pointer">
            <span>Help</span>
            <span>Contact us</span>
          </div>
        </div>
      </aside>

      <div className="lg:pl-28 sm:pl-4  pr-7 sm:ml-64">
        <div className="p-3 lg:w-[90%] align-center ">
          <div className="grid lg:grid-cols-2 lg:p-2 lg:gap-5  ">
            <div className=" grid justify-items-start	">
              <span className="font-bold	">Dashboard</span>
            </div>

            <div className=" grid justify-items-end 	">
              <div className="flex">
                <input
                  type="text"
                  placeholder="Search"
                  className=" rounded-l-lg p-2  h-[2rem] "
                />

                <div className="flex items-center justify-center h-[2rem] w-[2rem]  rounded-r-lg bg-white">
                  <CiSearch> </CiSearch>
                </div>
                <div className="p-2 pl-4">
                  {" "}
                  <BiBell />
                </div>
                
                <div className="p-2 pl-4">
                  <BiUserCircle className="w-6 h-6 -mt-1" />
              
                </div>
                

                <div className="p-2 pl-4 h-10 ">
                
                  <BiPowerOff onClick={logout} className="w-10 h-8 cursor-pointer ml-20 -mt-2"/>
              
                </div>
              </div>
              
            </div>
          </div>

          <div className="grid lg:grid-cols-4 sm:grid-cols-2 sm:gris-rows-2 gap-x-11 gap-y-4 mb-4">
            <div className="flex  h-32   rounded-2xl bg-green-100">
              <div className="relative p-3 w-[100%] ">
                <div className="p-5">
                  <BsWallet2 className="absolute right-5 top-4 " />
                  <div className="absolute bottom-4 text-left ">
                    <p>Total Revenues</p>
                    <p className="font-bold text-3xl sm:text-2xl ">$2,129,430</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex  h-32  rounded-2xl bg-orange-100">
              <div className="relative p-3 w-[100%] ">
                <div className="p-5">
                  <BsTags className="absolute right-5  top-4 " />
                  <div className="absolute bottom-4 text-left ">
                    <p>Total Transactions</p>
                    <p className="font-bold text-3xl sm:text-2xl ">1,520</p>
                  </div>
                </div>
              </div>{" "}
            </div>
            <div className="flex h-32  rounded-2xl bg-red-100">
              <div className="relative p-3 w-[100%] ">
                <div className="p-5">
                  <FaRegThumbsUp className="absolute right-5 top-4 " />
                  <div className="absolute bottom-4 text-left ">
                    <p>Total Likes</p>
                    <p className="font-bold text-3xl sm:text-2xl ">9,721</p>
                  </div>
                </div>
              </div>{" "}
            </div>
            <div className="flex  h-32  rounded-2xl bg-indigo-100">
              <div className="relative p-3 w-[100%] ">
                <div className="p-5">
                  <AiOutlineUsergroupDelete className="absolute right-5 top-4 " />
                  <div className="absolute bottom-4 text-left ">
                    <p>Total Users</p>
                    <p className="font-bold text-3xl sm:text-2xl ">892</p>
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>
          <div className="flex items-center justify-center h-72 mb-4  rounded-2xl bg-white">
            <div
              className="activities-card card"
              style={{ height: "14rem", width: "90%" }}
            >
              <div
                className="activities-card-header"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <h2 className="font-bold mt-2">Activities</h2>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <select value={month} onChange={handleMonthChange}>
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                  </select>
                  <input
                    type="number"
                    value={year}
                    onChange={handleYearChange}
                  />
                </div>
              </div>
              <canvas className="h-11 w-full" id="activities-chart" />
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-10 ">
            <div className="flex items-center justify-center  rounded-2xl bg-white h-48 ">
              <TopProductsCard />
            </div>

            <div className="flex  rounded-2xl  bg-white h-48 p-5">
              <div ClassName=" sm:p-6 lg:p-3">
                <div ClassName="sm:flex inline-block h-9 sm:justify-between">
                  <div>
                    <h3 ClassName="lg:text-lg sm:text-sm font-bold  text-gray-900">
                      Today's Schedule
                    </h3>
                  </div>


                </div>

                <ul className="space-y-2">
                  <li>
                    <div

                      className="block text-left h-full border-l-4 border-green-300 "
                    >
                      <span className="font-medium text-sm ml-2  text-slate-800">

                        Meeting with suppliers from Kuta Bali
                      </span>

                      <p className=" text-xs font-medium ml-2 text-gray-300">
                        14:00-15.00
                        <br />
                        at Sunset Road, Kuta Bali
                      </p>
                    </div>
                  </li>

                  <li>
                    <div

                      className="block text-left h-full border-l-4 border-blue-300 "
                    >
                      <span className="font-medium text-sm ml-2  text-slate-800">

                        Check operation at Giga Factory 1
                      </span>

                      <p className=" text-xs font-medium ml-2 text-gray-300">
                        18:00-20.00
                        <br />
                        at Central jakarta
                      </p>
                    </div>
                  </li>


                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Demo;
