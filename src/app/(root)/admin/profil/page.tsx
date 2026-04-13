"use client";
import SmallIconCard from "@/components/smallIconCard/SmallIconCard";
import UserCard from "@/components/userCard/UserCard";
import ModulesEnseignes from "@/components/modules/ModuleEnseignes";

// Plain Tailwind line chart — no chart.js
const chartData = [
  { month: "Jan", desktop: 186, mobile: 80 },
  { month: "Feb", desktop: 305, mobile: 200 },
  { month: "Mar", desktop: 237, mobile: 120 },
  { month: "Apr", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "Jun", desktop: 214, mobile: 140 },
];

const MAX = 350;
const HEIGHT = 200;

const TrendUpIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

const SimpleLineChart = () => {
  const w = 100 / (chartData.length - 1);
  const toY = (v: number) => HEIGHT - (v / MAX) * HEIGHT;

  const polyline = (key: "desktop" | "mobile", color: string) => {
    const points = chartData
      .map((d, i) => `${i * w}%,${toY(d[key])}`)
      .join(" ");
    return (
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    );
  };

  return (
    <div>
      <div className="flex gap-4 text-sm mb-2">
        <span className="flex items-center gap-1"><span className="w-3 h-3 rounded inline-block bg-blue-500" /> Desktop</span>
        <span className="flex items-center gap-1"><span className="w-3 h-3 rounded inline-block bg-purple-500" /> Mobile</span>
      </div>
      <svg viewBox={`0 0 100 ${HEIGHT}`} preserveAspectRatio="none" className="w-full h-[200px]">
        {polyline("desktop", "#3b82f6")}
        {polyline("mobile", "#a855f7")}
      </svg>
      <div className="flex justify-between text-xs text-gray-400 mt-1">
        {chartData.map((d) => <span key={d.month}>{d.month}</span>)}
      </div>
    </div>
  );
};

const userData = {
  image: "/img/man2.jpg",
  nom: "Manager Dayif",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ad, exercitationem consectetur a beatae nobis culpa tenetur incidunt",
  email: "managerdayif@gmail.com",
  adresse: "Moribabougou",
  date: "January 2025",
  tel: "79994640",
};

export default function ProfilePage() {
  return (
    <div className="w-full mt-16 gap-10 flex flex-col justify-center items-center">
      <div className="flex gap-5 min-h-[calc(100vh-100px)] items-start">
        <div className="flex flex-col gap-5 w-[600px] h-full">
          <UserCard item={userData} />
          <div className="rounded-lg p-6 bg-white shadow-md">
            <h2 className="text-lg font-semibold mb-1">Area Chart - Stacked</h2>
            <p className="text-sm text-gray-500 mb-4">Showing total visitors for the last 6 months</p>
            <SimpleLineChart />
            <div className="mt-4 text-sm text-gray-600 flex items-center gap-1">
              Trending up by 5.2% this month <TrendUpIcon />
            </div>
            <p className="text-xs text-gray-400 mt-1">January - June 2024</p>
          </div>
        </div>
        <div className="flex flex-col gap-5 h-full">
          <div className="flex flex-col gap-5 h-[250px]">
            <div className="flex gap-5">
              <SmallIconCard photoName="/icons/calendarColor.png" stats="90%" name="Attendance" />
              <SmallIconCard photoName="/icons/book.png" stats="3" name="Program" />
            </div>
            <div className="flex h-full gap-5">
              <SmallIconCard photoName="/icons/text-books.png" stats="10" name="Subjects" />
              <SmallIconCard photoName="/icons/teach.png" stats="9" name="Classes" />
            </div>
          </div>
          <div className="bg-userCard rounded-lg">
            <ModulesEnseignes />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10"></div>
    </div>
  );
}
