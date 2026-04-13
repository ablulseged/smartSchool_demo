import React from "react";
import "./statistique.css";

// Plain Tailwind bar chart — no external chart library
const chartData = [
  { label: "Jan", students: 400, teachers: 240, classes: 240 },
  { label: "Feb", students: 300, teachers: 139, classes: 221 },
  { label: "Mar", students: 200, teachers: 980, classes: 229 },
  { label: "Apr", students: 278, teachers: 390, classes: 200 },
  { label: "May", students: 189, teachers: 480, classes: 218 },
  { label: "Jun", students: 239, teachers: 380, classes: 250 },
  { label: "Jul", students: 349, teachers: 430, classes: 300 },
];

const MAX = 1000;

const BarGroup = ({ values }: { values: { value: number; color: string }[] }) => (
  <div className="flex items-end gap-[2px]">
    {values.map((v, i) => (
      <div
        key={i}
        className="w-3 rounded-t"
        style={{
          height: `${(v.value / MAX) * 120}px`,
          backgroundColor: v.color,
          minHeight: "4px",
        }}
      />
    ))}
  </div>
);

const SimpleChart = () => (
  <div className="mt-4">
    {/* Legend */}
    <div className="flex gap-4 mb-3 text-sm">
      <span className="flex items-center gap-1"><span className="w-3 h-3 rounded inline-block" style={{ background: "rgba(75,192,192,1)" }} /> Students</span>
      <span className="flex items-center gap-1"><span className="w-3 h-3 rounded inline-block" style={{ background: "rgba(153,102,255,1)" }} /> Teachers</span>
      <span className="flex items-center gap-1"><span className="w-3 h-3 rounded inline-block" style={{ background: "rgba(255,159,64,1)" }} /> Classes</span>
    </div>
    {/* Bars */}
    <div className="flex items-end gap-3">
      {chartData.map((d) => (
        <div key={d.label} className="flex flex-col items-center gap-1">
          <BarGroup
            values={[
              { value: d.students, color: "rgba(75,192,192,0.9)" },
              { value: d.teachers, color: "rgba(153,102,255,0.9)" },
              { value: d.classes, color: "rgba(255,159,64,0.9)" },
            ]}
          />
          <span className="text-xs text-gray-500">{d.label}</span>
        </div>
      ))}
    </div>
  </div>
);

const Statistique: React.FC = () => {
  return (
    <div className="statistique">
      <h2>Statistics</h2>
      <div className="gridStat">
        <div className="gridenf">
          <h3 className="font-bold text-lg">Number of Programs</h3>
          <p id="traitCourriers" className="text-2xl">1</p>
        </div>
        <div className="gridenf">
          <h3 className="font-bold text-lg">Number of Students</h3>
          <p id="urgentCourriers" className="text-2xl">1220</p>
        </div>
        <div className="gridenf">
          <h3 className="font-bold text-lg">Number of Classes</h3>
          <p id="readCourriers" className="text-2xl">1</p>
        </div>
        <div className="gridenf">
          <h3 className="font-bold text-lg">Pending Requests</h3>
          <p id="standCourriers" className="text-2xl">0</p>
        </div>
      </div>
      <p className="font-semibold text-gray-600 mt-4">School Statistics</p>
      <SimpleChart />
    </div>
  );
};

export default Statistique;
