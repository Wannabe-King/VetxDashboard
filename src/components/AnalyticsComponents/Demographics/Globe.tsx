"use client";

import { useRef } from "react";
import DottedMap from "dotted-map";

interface MapProps {
  dots?: Array<{
    lat: number;
    lng: number;
    label?: string;
    lineColor?: string;
  }>;
}

export function Globe({ dots = [] }: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const map = new DottedMap({ height: 110, grid: "diagonal" });

  const svgMap = map.getSVG({
    radius: 0.16,
    color: "#FFFFFF40",
    shape: "hexagon",
    backgroundColor: "black",
  });

  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  return (
    <>
      <div className="flex-1 min-w-[240px] w-full h-[calc(100%+16px)] rounded-lg overflow-hidden relative font-sans">
        <div className="scale-[1] origin-top-left -rotate-10">
          <div className="h-full w-full rounded-t-full overflow-hidden">
            <img
              src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
              className="pointer-events-none select-none  object-cover"
              alt="world map"
              draggable={true}
            />
          </div>
          <svg
            ref={svgRef}
            viewBox="0 0 800 400"
            className="w-full h-full absolute inset-0 pointer-events-none select-none"
          >
            {dots.map((dot, i) => (
              <g key={`points-group-${i}`}>
                <circle
                  cx={projectPoint(dot.lat, dot.lng).x}
                  cy={projectPoint(dot.lat, dot.lng).y}
                  r="3"
                  fill={dot.lineColor}
                />

                {/* <circle
                  cx={projectPoint(dot.lat, dot.lng).x}
                  cy={projectPoint(dot.lat, dot.lng).y}
                  r="12"
                  fill="none"
                  stroke={dot.lineColor}
                  strokeOpacity="0.5"
                  strokeWidth="1.5"
                >
                  <animate
                    attributeName="r"
                    from="12"
                    to="16"
                    dur="1.5s"
                    begin="0s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="stroke-opacity"
                    from="0.8"
                    to="0.2"
                    dur="1.5s"
                    begin="0s"
                    repeatCount="indefinite"
                  />
                </circle> */}
              </g>
            ))}
          </svg>
        </div>
      </div>

      <div className="hidden absolute bottom-[22px] left-6 bg-black border border-[#1D1D1D] rounded-[20px] h-[30px] lg:flex flex-nowrap gap-8 items-center justify-between px-3.5">
        {dots.map(
          (dot, i) =>
            i !== 2 && (
              <span className="text-sm font-semibold">
                <span
                  className={`inline-block h-3 w-3 rounded-full mr-1`}
                  style={{
                    backgroundColor: dot.lineColor,
                  }}
                ></span>
                {dot.label}
              </span>
            )
        )}
      </div>
    </>
  );
}
