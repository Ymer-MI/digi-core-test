import { DigiBarChart } from "@digi/arbetsformedlingen-react";

const Chart = () => {
  return (
    <>
      <div style={{ width: "400px", height: "200px" }}>
        <DigiBarChart
          afChartData={{
            data: {
              xValues: [10, 20, 50],
              xValueNames: ["1", "2", "3"],
              series: [{ yValues: [10, 20, 50], title: "Titel" }],
            },
            x: "x",
            y: "y",
            title: "title",
          }}
        ></DigiBarChart>
      </div>
    </>
  );
};

export default Chart;
