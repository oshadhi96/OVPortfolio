import { useEffect, useState, useRef } from "react";
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

const CustomXAxisTick = ({ x, y, payload }) => {
  const item = data[payload.index];
  const isHighlight = item?.highlight;

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={-25}
        textAnchor="middle"
        fontSize={12}
        fontWeight={isHighlight ? "700" : "500"}
        fill={isHighlight ? "#2dd4bf" : "#94a3b8"}
      >
        {item.label.map((line, i) => (
          <tspan x={0} dy={i === 0 ? 0 : 14} key={i}>
            {line}
          </tspan>
        ))}
      </text>
    </g>
  );
};

export function SkillsGraph() {
  const [isMobile, setIsMobile] = useState(false);
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [showScrollHint, setShowScrollHint] = useState(true);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Hide scroll hint after user starts scrolling
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => setShowScrollHint(false);
    el.addEventListener("scroll", onScroll, { once: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [isMobile]);

  // Mouse drag-to-scroll on desktop too
  const onMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };
  const onMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    scrollRef.current.scrollLeft = scrollLeft - (x - startX);
  };
  const onMouseUp = () => setIsDragging(false);

  // Desktop: full responsive chart
  if (!isMobile) {
    return (
      <section className="py-20 bg-slate-900/20 border-y border-white/5">
        <div className="container mx-auto max-w-9xl px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-serif italic text-white mb-2">
              Here's the spread of my core skills:
            </h2>
          </div>

          <div className="w-full" style={{ height: 400 }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={data}
                margin={{ top: 60, right: 80, left: 185, bottom: 20 }}
              >
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
                  tick={<CustomXAxisTick />}
                  interval={0}
                />
                <YAxis hide domain={[0, 2]} />
                <ReferenceLine
                  y={1.5}
                  stroke="#334155"
                  strokeDasharray="3 3"
                  label={({ viewBox }) => (
                    <text
                      x={viewBox.x - 10}
                      y={viewBox.y + 4}
                      textAnchor="end"
                      fontSize={12}
                      fill="#94a3b8"
                      fontWeight="500"
                    >
                      I've done enough to lead
                    </text>
                  )}
                />
                <ReferenceLine
                  y={0.5}
                  stroke="#334155"
                  strokeDasharray="3 3"
                  label={({ viewBox }) => (
                    <text
                      x={viewBox.x - 10}
                      y={viewBox.y}
                      textAnchor="end"
                      fontSize={12}
                      fill="#94a3b8"
                      fontWeight="500"
                    >
                      <tspan x={viewBox.x - 10} dy="-0.2em">
                        I know
                      </tspan>
                      <tspan x={viewBox.x - 10} dy="1.2em">
                        enough to hang
                      </tspan>
                    </text>
                  )}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#2dd4bf"
                  strokeWidth={3}
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
              <span className="text-teal-400 font-medium">
                lottie animations
              </span>
              , and{" "}
              <span className="text-teal-400 font-medium">
                content creation
              </span>
              .
            </h3>
          </div>
        </div>
      </section>
    );
  }

  // Mobile: fixed 800px wide chart inside a horizontally scrollable container
  return (
    <section className="py-16 bg-slate-900/20 border-y border-white/5">
      <div className="px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-serif italic text-white mb-2">
            Here's the spread of my core skills:
          </h2>
        </div>
      </div>
      {/* Scroll hint pill */}
      <div
        className="flex justify-center mb-4 transition-opacity duration-500"
        style={{ opacity: showScrollHint ? 1 : 0, pointerEvents: "none" }}
      >
        <div className="flex items-center gap-2 bg-slate-800/80 border border-white/10 rounded-full px-4 py-1.5 text-xs text-slate-400">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
          Scroll to explore
        </div>
      </div>
      {/* Horizontally scrollable chart — full quality, no compression */}
      <div
        ref={scrollRef}
        className="overflow-x-auto overflow-y-hidden pb-2 cursor-grab active:cursor-grabbing"
        style={{
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE
        }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
      >
        {/* Hide scrollbar in webkit */}
        <style>{`.skills-scroll::-webkit-scrollbar { display: none; }`}</style>

        {/* Fixed 820px — same proportions as desktop, fully readable */}
        <div
          style={{ width: 820, height: 360, paddingLeft: 8, paddingRight: 8 }}
        >
          <AreaChart
            width={804}
            height={360}
            data={data}
            margin={{ top: 60, right: 60, left: 175, bottom: 20 }}
          >
            <defs>
              <linearGradient id="colorValueMobile" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2dd4bf" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#2dd4bf" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="name"
              orientation="top"
              axisLine={false}
              tickLine={false}
              tick={<CustomXAxisTick />}
              interval={0}
            />
            <YAxis hide domain={[0, 2]} />
            <ReferenceLine
              y={1.5}
              stroke="#334155"
              strokeDasharray="3 3"
              label={({ viewBox }) => (
                <text
                  x={viewBox.x - 10}
                  y={viewBox.y + 4}
                  textAnchor="end"
                  fontSize={12}
                  fill="#94a3b8"
                  fontWeight="500"
                >
                  I've done enough to lead
                </text>
              )}
            />
            <ReferenceLine
              y={0.5}
              stroke="#334155"
              strokeDasharray="3 3"
              label={({ viewBox }) => (
                <text
                  x={viewBox.x - 10}
                  y={viewBox.y}
                  textAnchor="end"
                  fontSize={12}
                  fill="#94a3b8"
                  fontWeight="500"
                >
                  <tspan x={viewBox.x - 10} dy="-0.2em">
                    I know
                  </tspan>
                  <tspan x={viewBox.x - 10} dy="1.2em">
                    enough to hang
                  </tspan>
                </text>
              )}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#2dd4bf"
              strokeWidth={3}
              fill="url(#colorValueMobile)"
              animationDuration={2000}
            />
          </AreaChart>
        </div>
      </div>
      {/* Fade edges to hint scrollability */}
      <div className="relative pointer-events-none -mt-[360px] h-[360px]">
        <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-[#0a0f1e] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#0a0f1e] to-transparent z-10" />
      </div>
      <div style={{ height: 360 }} /> {/* spacer to compensate for -mt */}
      <div className="text-center mt-8 px-4 max-w-2xl mx-auto">
        <h3 className="text-lg text-slate-300 font-light leading-relaxed">
          I'm also into{" "}
          <span className="text-teal-400 font-medium">coaching teams</span>,{" "}
          <span className="text-teal-400 font-medium">mentoring</span>,{" "}
          <span className="text-teal-400 font-medium">lottie animations</span>,
          and{" "}
          <span className="text-teal-400 font-medium">content creation</span>.
        </h3>
      </div>
    </section>
  );
}
