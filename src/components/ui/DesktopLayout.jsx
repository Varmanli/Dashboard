//hooks
import React, { useMemo } from "react";
// charts
import BarChart from "../chart/BarChart";
import SemiCircleChart from "../chart/SemiCircleChart";
import LineChart from "../chart/LineChart";
import MultiLayerDoughnutChart from "../chart/MultiLayerDoughnutChart";
import MultiBarChart from "../chart/MultiBarChart";
import DoughnutChart from "../chart/DoughnutChart";
// configs chart
import {
  barChartOptions,
  doughnutOptions,
  lineChartConfig,
  multiBarOptions,
  multiLayerDoughnutChartOptions,
  semiCircleChartOptions,
} from "../../utils/chartConfig";
// data chart
import {
  barChartData,
  doughnutChartColors,
  doughnutChartData,
  lineChartData,
  lineChartTabColors,
  multiChartTabsData,
  multiLayerDoughnutChartData,
  semiCirclePercentages,
  semiCircletabs,
} from "../../utils/chartData";
// ui
import Card from "./Card";

function DesktopLayout() {
  const chartConfigs = [
    {
      title: "Chart 1",
      description: "Description",
      className: "w-[48%] lg:w-[25.79%]",
      details: true,
      component: (
        <SemiCircleChart
          data={semiCirclePercentages}
          config={semiCircleChartOptions}
          tabs={semiCircletabs}
        />
      ),
    },
    {
      title: "Chart 2",
      description: "Description",
      className: "w-[48%] lg:w-[28.79%]",
      details: true,
      component: <BarChart data={barChartData} options={barChartOptions} />,
    },
    {
      title: "Chart 3",
      description: "Description",
      className: "md:w-[100%] lg:w-[41%]",
      details: true,
      component: (
        <LineChart
          chartData={lineChartData}
          chartConfig={lineChartConfig}
          tabColors={lineChartTabColors}
        />
      ),
    },
    {
      title: "Chart 4",
      description: "Description",
      className: "md:w-[48%] lg:w-[25.29%] relative",
      details: true,
      component: (
        <MultiLayerDoughnutChart
          data={multiLayerDoughnutChartData}
          options={multiLayerDoughnutChartOptions}
        />
      ),
      actions: (
        <div className="absolute flex items-center gap-4 top-6 right-[50px]">
          <button>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.5 0C8.53757 0 11 2.46243 11 5.5C11 6.83879 10.5217 8.06586 9.72656 9.01962L13.8536 13.1464C14.0488 13.3417 14.0488 13.6583 13.8536 13.8536C13.68 14.0271 13.4106 14.0464 13.2157 13.9114L13.1464 13.8536L9.01962 9.72656C8.06586 10.5217 6.83879 11 5.5 11C2.46243 11 0 8.53757 0 5.5C0 2.46243 2.46243 0 5.5 0ZM5.5 1C3.01472 1 1 3.01472 1 5.5C1 7.98528 3.01472 10 5.5 10C7.98528 10 10 7.98528 10 5.5C10 3.01472 7.98528 1 5.5 1Z"
                fill="#424242"
              />
            </svg>
          </button>
          <button>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.5 3L16.5428 3.00182L16.6281 3.01661L16.691 3.03779L16.767 3.07719L16.8221 3.11759L16.8824 3.17788L16.9112 3.21534L16.9533 3.2886L16.9834 3.37186L16.9979 3.45421L17 3.5V9.5C17 9.77614 16.7761 10 16.5 10C16.2545 10 16.0504 9.82312 16.0081 9.58988L16 9.5V4.706L4.706 16H9.5C9.74546 16 9.94961 16.1769 9.99194 16.4101L10 16.5C10 16.7455 9.82312 16.9496 9.58988 16.9919L9.5 17L3.47964 16.9996L3.4112 16.9921L3.30896 16.9622L3.23299 16.9228L3.17786 16.8824L3.11758 16.8221L3.08884 16.7847L3.04674 16.7114L3.01661 16.6281L3.01109 16.605C3.00383 16.5713 3 16.5361 3 16.5L3.00546 16.5739L3.00182 16.5428L3 10.5C3 10.2239 3.22386 10 3.5 10C3.74546 10 3.94961 10.1769 3.99194 10.4101L4 10.5V15.292L15.292 4H10.5C10.2545 4 10.0504 3.82312 10.0081 3.58988L10 3.5C10 3.22386 10.2239 3 10.5 3Z"
                fill="#424242"
              />
            </svg>
          </button>
          <button>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.91075 7.38266C2.28004 6.24053 2.88839 5.19213 3.69109 4.30364C3.82683 4.15339 4.03978 4.09984 4.23044 4.16802L6.14873 4.85392C6.6688 5.03977 7.24107 4.76883 7.42692 4.24875C7.4452 4.19762 7.45927 4.14507 7.469 4.09173L7.83446 2.08573C7.8708 1.88627 8.02398 1.7285 8.22227 1.6863C8.80246 1.5628 9.39734 1.5 10 1.5C10.6023 1.5 11.1968 1.56273 11.7767 1.68607C11.9749 1.72824 12.1281 1.88591 12.1645 2.08529L12.531 4.09165C12.6301 4.63497 13.1509 4.9951 13.6942 4.89601C13.7476 4.88627 13.8002 4.87219 13.8512 4.85395L15.7696 4.16802C15.9602 4.09984 16.1732 4.15339 16.3089 4.30364C17.1116 5.19213 17.72 6.24053 18.0893 7.38266C18.1516 7.57534 18.0915 7.78658 17.9371 7.91764L16.3823 9.23773C15.9613 9.5952 15.9098 10.2263 16.2673 10.6473C16.3024 10.6887 16.3409 10.7271 16.3823 10.7623L17.9371 12.0824C18.0915 12.2134 18.1516 12.4247 18.0893 12.6173C17.72 13.7595 17.1116 14.8079 16.3089 15.6964C16.1732 15.8466 15.9602 15.9002 15.7696 15.832L13.8513 15.1461C13.3312 14.9602 12.759 15.2312 12.5731 15.7512C12.5548 15.8024 12.5408 15.8549 12.531 15.9085L12.1645 17.9147C12.1281 18.1141 11.9749 18.2718 11.7767 18.3139C11.1968 18.4373 10.6023 18.5 10 18.5C9.39734 18.5 8.80246 18.4372 8.22227 18.3137C8.02398 18.2715 7.8708 18.1137 7.83446 17.9143L7.46902 15.9084C7.36993 15.365 6.84916 15.0049 6.30583 15.104C6.25241 15.1137 6.19987 15.1278 6.14881 15.1461L4.23044 15.832C4.03978 15.9002 3.82683 15.8466 3.69109 15.6964C2.88839 14.8079 2.28004 13.7595 1.91075 12.6173C1.84845 12.4247 1.90852 12.2134 2.06289 12.0824L3.61773 10.7623C4.03872 10.4048 4.09021 9.77373 3.73274 9.35274C3.69759 9.31135 3.65913 9.27288 3.61775 9.23775L2.06289 7.91764C1.90852 7.78658 1.84845 7.57534 1.91075 7.38266ZM2.9713 7.37709L4.26499 8.47546C4.34778 8.54576 4.42471 8.62269 4.49501 8.70548C5.20995 9.54746 5.10697 10.8096 4.26497 11.5246L2.9713 12.6229C3.26335 13.4051 3.6848 14.1322 4.21623 14.7751L5.81221 14.2044C5.91449 14.1679 6.01958 14.1397 6.12643 14.1202C7.21307 13.922 8.25462 14.6423 8.45281 15.729L8.75678 17.3975C9.16465 17.4655 9.58 17.5 10 17.5C10.4197 17.5 10.8348 17.4656 11.2424 17.3976L11.5472 15.7289C11.5667 15.6221 11.5949 15.517 11.6314 15.4147C12.0031 14.3746 13.1477 13.8327 14.1879 14.2044L15.7838 14.7751C16.3152 14.1322 16.7367 13.4051 17.0287 12.6229L15.735 11.5245C15.6522 11.4542 15.5753 11.3773 15.505 11.2945C14.7901 10.4525 14.8931 9.1904 15.7351 8.47544L17.0287 7.37709C16.7367 6.59486 16.3152 5.86783 15.7838 5.22494L14.1878 5.79559C14.0855 5.83214 13.9804 5.8603 13.8736 5.87979C12.787 6.07796 11.7454 5.3577 11.5473 4.27119L11.2424 2.60235C10.8348 2.53443 10.4197 2.5 10 2.5C9.58 2.5 9.16465 2.53448 8.75678 2.60249L8.45279 4.27105C8.43331 4.37791 8.40515 4.48299 8.3686 4.58527C7.99689 5.62542 6.85236 6.1673 5.81213 5.79556L4.21623 5.22494C3.6848 5.86783 3.26335 6.59486 2.9713 7.37709ZM7.50001 10C7.50001 8.61929 8.6193 7.5 10 7.5C11.3807 7.5 12.5 8.61929 12.5 10C12.5 11.3807 11.3807 12.5 10 12.5C8.6193 12.5 7.50001 11.3807 7.50001 10ZM8.50001 10C8.50001 10.8284 9.17159 11.5 10 11.5C10.8284 11.5 11.5 10.8284 11.5 10C11.5 9.17157 10.8284 8.5 10 8.5C9.17159 8.5 8.50001 9.17157 8.50001 10Z"
                fill="#424242"
              />
            </svg>
          </button>
        </div>
      ),
    },
    {
      title: "Chart 5",
      description: "Description",
      className: "md:w-[48%] lg:w-[26.29%]",
      details: true,
      component: (
        <DoughnutChart
          dataSets={doughnutChartData}
          colors={doughnutChartColors}
          options={doughnutOptions}
        />
      ),
    },
    {
      title: "Chart 6",
      description: "Description",
      className: "md:w-[100%] lg:w-[44%]",
      details: false,
      component: (
        <MultiBarChart
          tabsData={multiChartTabsData}
          options={multiBarOptions}
        />
      ),
    },
  ];
  return (
    <div className="flex flex-wrap gap-4 py-2 pl-2 w-[81vw] lg:w-[82vw] border border-l h-[calc(100vh-113px)] custom-scroll overflow-y-auto">
      {chartConfigs.map(
        (
          { title, description, className, details, component, actions },
          index
        ) => (
          <Card
            key={index}
            title={title}
            description={description}
            className={className}
            details={details}
          >
            {actions && actions}
            {component}
          </Card>
        )
      )}
    </div>
  );
}

export default DesktopLayout;
