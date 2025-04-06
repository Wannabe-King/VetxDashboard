import { useEffect, useState } from "react";
import DropDown from "../UI/DropDown";
import { categoryList, daysFilter, graphData } from "../../mocks/dummyData";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const mergeData = (data1: any, data2: any) => {
  const temp = [];
  temp.push(data1);

  if (data2.name) {
    temp.push(data2);
  }
  return temp;
};

const getFilteredData = (data: any[], selectedDate: number) => {
  const rangeMap: { [key: number]: number } = {
    0: 1,
    1: 1,
    2: 7,
    3: 7,
    4: 7,
    5: 30,
  };

  const days = rangeMap[selectedDate] || 30;
  return data.slice(-days); // last N days
};

const GraphComponent = () => {
  const [selectedMetric, setSelectedMetric] = useState<any>(categoryList[0].id);
  const [selectedDate, setSelectedDate] = useState<any>(daysFilter[5].id);
  const [comparisonMetric, setComparisonMetric] = useState<any>(null);

  const [ticks, setTicks] = useState<string[]>([]);

  const selectedMetricItem = categoryList.find(
    (item) => item.id === selectedMetric
  );
  const comparisonMetricItem = categoryList.find(
    (item) => item.id === comparisonMetric
  );

  const data1: any = selectedMetricItem
    ? // @ts-ignore
      graphData[selectedMetricItem.title]
    : { name: "", data: [] };

  const data2: any = comparisonMetricItem
    ? // @ts-ignore
      graphData[comparisonMetricItem.title]
    : { name: "", data: [] };

  const totalValueData1 = data1.data.reduce(
    (acc: any, cur: any) => acc + cur.value,
    0
  );

  const formattedTotalData1 =
    totalValueData1 >= 1000
      ? `${(totalValueData1 / 1000).toFixed(2)}K`
      : `${totalValueData1}`;

  const totalValueData2 = comparisonMetric
    ? data2.data.reduce((acc: any, cur: any) => acc + cur.value, 0)
    : null;

  const formattedTotalData2 =
    totalValueData2 >= 1000
      ? `${(totalValueData2 / 1000).toFixed(2)}K`
      : `${totalValueData2}`;

  const filteredData1 = {
    ...data1,
    data: getFilteredData(data1.data, selectedDate),
  };

  const filteredData2 = comparisonMetric
    ? {
        ...data2,
        data: getFilteredData(data2.data, selectedDate),
      }
    : { name: "", data: [] };

  const chartData = mergeData(filteredData1, filteredData2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setTicks(["Mar 1", "Mar 10", "Mar 20", "Mar 30"]);
      } else {
        setTicks(["Mar 1", "Mar 5", "Mar 10", "Mar 15", "Mar 20", "Mar 25", "Mar 30"]);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <div className="bg-black relative border border-[#1D1D1D] rounded-[8px] py-3 px-4 flex-1 min-h-[173px]">
      <div className="flex gap-1">
        <DropDown
          className="min-w-[120px]"
          itemList={categoryList}
          selectedValue={selectedMetric}
          onChange={(value: React.SetStateAction<any>) => {
            setSelectedMetric(value);
            if (comparisonMetric === value) setComparisonMetric(null);
          }}
        />

        <DropDown
          className="min-w-[108px]"
          itemList={daysFilter}
          selectedValue={selectedDate}
          onChange={(value: React.SetStateAction<any>) => {
            setSelectedDate(value);
          }}
        />

        <DropDown
          className="min-w-[120px]"
          itemList={categoryList.filter((item) => item.id !== selectedMetric)}
          selectedValue={comparisonMetric}
          onChange={(value: React.SetStateAction<any>) => {
            setComparisonMetric(value);
          }}
        />
      </div>

      <div className="flex gap-6 max-lg:mt-3 max-lg:mb-7">
        <div>
          <div className="flex items-center gap-4">
            <h3 className="text-[24px] lg:text-[32px] font-extrabold">
              {formattedTotalData1}
            </h3>
            <span className="flex flex-col">
              <p className="text-xs text-[#01754F] font-semibold">+469%</p>
              <p className="text-xs text-[#555555] font-semibold ">(897)</p>
            </span>
          </div>
        </div>
        {comparisonMetric && (
          <div className=" flex items-center flex-nowrap">
            <span className="bg-[#1D1D1D] h-[24px] w-[1px] inline-block mr-2"></span>
            <span className="bg-[#C36DEE] h-2 w-2 rounded-full inline-block mr-2"></span>
            <div className="inline-flex items-center gap-4">
              <h3 className="text-[24px] lg:text-[32px] font-extrabold">
                {formattedTotalData2}
              </h3>
              <span className="flex flex-col">
                <p className="text-xs text-[#01754F] font-semibold">+180%</p>
                <p className="text-xs text-[#555555] font-semibold ">(497)</p>
              </span>
            </div>
          </div>
        )}
      </div>

      <ResponsiveContainer width={"100%"} height={180}>
        <LineChart margin={{ top: 0, right: 0, left: -16, bottom: 6 }}>
          <XAxis
            dataKey="date"
            type="category"
            allowDuplicatedCategory={false}
            ticks={ticks}
            tickLine={false}
            tick={{ dy: 6 }}
            padding={{ left: 8, right: 8 }}
          />

          <YAxis
            dataKey="value"
            tickFormatter={(value) => {
              if (value >= 1000) return `${(value / 1000).toFixed(1)}k`;
              return value;
            }}
            axisLine={false}
            tickLine={false}
            domain={[200, 2000]}
            ticks={[200, 400, 800, 1200, 1600, 2000]}
            tick={{ dx: -14 }}
          />

          <Tooltip
            contentStyle={{ backgroundColor: "#111", borderColor: "#333" }}
          />
          <Line
            dataKey="value"
            data={chartData[0].data}
            name={chartData[0].name}
            key={chartData[0].name}
            stroke="#ffffff"
            strokeWidth={2}
            dot={false}
          />

          {comparisonMetric && (
            <Line
              dataKey="value"
              data={chartData[1].data}
              name={chartData[1].name}
              key={chartData[1].name}
              stroke="#a855f7"
              strokeWidth={2}
              dot={false}
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraphComponent;
