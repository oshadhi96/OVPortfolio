import { motion } from "motion/react";
import { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Front-End Engineering",
    value: 0.8,
    label: ["Front-End", "Engineering"],
  },
  { name: "Product Strategy", value: 1.3, label: ["Product", "Strategy"] },
  { name: "UX Research", value: 1.0, label: ["UX", "Research"] },
  { name: "UX Design", value: 1.7, label: ["UX", "Design"], highlight: true },
  { name: "UI Design", value: 1.7, label: ["UI", "Design"], highlight: true },
  { name: "Brand Design", value: 0.6, label: ["Brand", "Design"] },
  { name: "Graphic Design", value: 1.0, label: ["Graphic", "Design"] },
  { name: "Digital Marketing", value: 1.5, label: ["Digital", "Marketing"] },
];

const CustomXAxisTick = ({ x, y, payload, isMobile }) => {
  const item = data[payload.index];
  const isHighlight = item?.highlight;
  const fontSize = isMobile ? 9 : 12;
  const lineHeight = isMobile ? 11 : 14;

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={isMobile ? -18 : -25}
        textAnchor="middle"
        fontSize={fontSize}
        fontWeight={isHighlight ? "700" : "500"}
        fill={isHighlight ? "#2dd4bf" : "#94a3b8"}
      >
        {item.label.map((line, i) => (
          <tspan x={0} dy={i === 0 ? 0 : lineHeight} key={i}>
            {line}
          </tspan>
        ))}
      </text>
    </g>
  );
};

export function SkillsGraph() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Left margin must be wide enough for the longest label: "I've done enough to lead"
  // At ~12px font, that's roughly 160px. Right needs room for the last tick label.
  const chartMargin = isMobile
    ? { top: 50, right: 50, left: 80, bottom: 10 }
    : { top: 60, right: 80, left: 185, bottom: 20 };

  const refLabelFontSize = isMobile ? 9 : 12;

  return (
    <section className="py-20 bg-slate-900/20 border-y border-white/5">
      <div className="container mx-auto max-w-9xl px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-serif italic text-white mb-2">
            Here's the spread of my core skills:
          </h2>
        </div>

        <div className="w-full" style={{ height: isMobile ? 280 : 400 }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={chartMargin}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2dd4bf" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#2dd4bf" stopOpacity={0} />
                </linearGradient>
              </defs>

              <XAxis
                dataKey="name"
                orientation="top"
                axisLine={false}
                tickLine={false}
                tick={(props) => (
                  <CustomXAxisTick {...props} isMobile={isMobile} />
                )}
                interval={0}
              />

              <YAxis hide domain={[0, 2]} />

              {/* "Lead" reference line — label sits INSIDE the chart to the left */}
              <ReferenceLine
                y={1.5}
                stroke="#334155"
                strokeDasharray="3 3"
                label={({ viewBox }) => {
                  const { x, y } = viewBox;
                  return (
                    <text
                      x={x - 10}
                      y={y + 4}
                      textAnchor="end"
                      fontSize={refLabelFontSize}
                      fill="#94a3b8"
                      fontWeight="500"
                    >
                      {isMobile ? "Lead" : "I've done enough to lead"}
                    </text>
                  );
                }}
              />

              {/* "Hang" reference line */}
              <ReferenceLine
                y={0.5}
                stroke="#334155"
                strokeDasharray="3 3"
                label={({ viewBox }) => {
                  const { x, y } = viewBox;
                  return (
                    <text
                      x={x - 10}
                      y={y}
                      textAnchor="end"
                      fontSize={refLabelFontSize}
                      fill="#94a3b8"
                      fontWeight="500"
                    >
                      {isMobile ? (
                        <tspan x={x - 10} dy="0">
                          Hang
                        </tspan>
                      ) : (
                        <>
                          <tspan x={x - 10} dy="-0.2em">
                            I know
                          </tspan>
                          <tspan x={x - 10} dy="1.2em">
                            enough to hang
                          </tspan>
                        </>
                      )}
                    </text>
                  );
                }}
              />

              <Area
                type="monotone"
                dataKey="value"
                stroke="#2dd4bf"
                strokeWidth={isMobile ? 2 : 3}
                fill="url(#colorValue)"
                animationDuration={2000}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="text-center mt-12 max-w-2xl mx-auto">
          <h3 className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed">
            I'm also into{" "}
            <span className="text-teal-400 font-medium">coaching teams</span>,{" "}
            <span className="text-teal-400 font-medium">mentoring</span>,{" "}
            <span className="text-teal-400 font-medium">lottie animations</span>
            , and{" "}
            <span className="text-teal-400 font-medium">content creation</span>.
          </h3>
        </div>
      </div>
    </section>
  );
}
