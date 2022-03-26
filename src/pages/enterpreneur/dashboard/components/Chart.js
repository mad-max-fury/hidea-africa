import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";
import { Box, HStack, Select, Text, VStack } from "@chakra-ui/react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export function ChartComponent({ ChartType }) {
  const generateArrayOfYears = () => {
    var max = new Date().getFullYear();
    var min = max - 12;
    var years = [];

    for (var i = max; i >= min; i--) {
      years.push(i);
    }
    return years.reverse();
  };
  const weekly = ["Mon", "Tues", "weds", "Thurs", "Fri", "Sat", "Sun"];
  const monthly = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  const years = generateArrayOfYears();
  const [labelsValue, setLabelsValue] = useState(weekly);
  const [selectText, setSelectText] = useState("weekly");
  let delayed;
  const options = {
    responsive: true,
    radius: 5,
    width: 1,
    hitRadius: 40,
    hoverRadius: 10,

    animation: {
      tension: {
        duration: 1000,
        easing: "linear",
        from: 0.5,
        to: 0.4,
        loop: true,
      },
      onComplete: () => {
        delayed = true;
      },
      delay: (context) => {
        let delay = 0;
        if (context.type === "data" && context.mode === "default" && !delayed) {
          delay = context.dataIndex * 300 + context.datasetIndex * 10;
        }
        return delay;
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          callback: function (value) {
            if (value > 999) {
              return value / 1000 + "K";
            } else {
              return value;
            }
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
        text: "Chart.js Line Chart",
      },
    },
  };

  const labels = labelsValue;

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data:
          // configure for data reuse
          selectText === "weekly"
            ? [300, 4000, 500, 700, 800, 1000, 200]
            : selectText === "monthly"
            ? [300, 4000, 500, 700, 800, 1000, 300, 4000, 500, 700, 800, 1000]
            : [
                300, 4000, 500, 700, 800, 8000, 1000, 300, 4000, 500, 700, 800,
                1000,
              ],
        borderColor: "#FE464B",
        backgroundColor: "#FE464B",
        tension: 0.4,
      },
    ],
  };

  const handleChange = ({ target }) => {
    if (target.value === "weekly") {
      setLabelsValue(weekly);
      setSelectText(target.value);
    }
    if (target.value === "month") {
      setLabelsValue(monthly);
      setSelectText("monthly");
    }
    if (target.value === "year") {
      setLabelsValue(years);
      setSelectText("year");
    }
  };
  return (
    <VStack
      width={"100%"}
      height="100%"
      position={"relative"}
      boxShadow="sm"
      borderRadius={"inherit"}
      bgColor="white"
      padding={"1rem"}
      justifyContent="space-between"
    >
      <HStack height={"4rem"} width="100%" justifyContent={"space-between"}>
        <Text fontWeight={"bold"} fontSize="18px">
          Pay per click overview
        </Text>
        <Select
          width={"fit-content"}
          border="none"
          color={"green.500"}
          fontWeight="bold"
          onChange={handleChange}
        >
          <option value="weekly">Weekly</option>
          <option value="month">Monthly</option>
          <option value="year">Year</option>
        </Select>
      </HStack>
      {
        <ChartType
          height={"100%"}
          backgroundColor="#fff"
          options={options}
          data={data}
        />
      }
    </VStack>
  );
}
