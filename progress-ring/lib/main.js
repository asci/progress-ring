// src/ProgressRing.tsx
import {
  createElement
} from "react";
function ProgressRing({
  caps = "round",
  children,
  lineWidth = 10,
  percent = 50,
  progressColor = "tomato",
  size = 200,
  spin = false,
  trackColor = "#eaeaea",
  transitionDuration = 200
}) {
  const halfSize = size / 2;
  const radius = halfSize - lineWidth / 2;
  const circleLength = radius * 2 * Math.PI;
  return /* @__PURE__ */ createElement("div", {
    style: {
      width: size,
      height: size,
      display: "flex",
      placeContent: "center",
      placeItems: "center"
    }
  }, /* @__PURE__ */ createElement("svg", {
    height: size,
    width: size,
    style: {
      position: "absolute",
      animation: spin ? "animation-rotate 2s linear infinite" : void 0
    },
    shapeRendering: "geometricPrecision"
  }, /* @__PURE__ */ createElement("g", {
    style: {
      transformOrigin: `${halfSize}px ${halfSize}px`,
      transform: "rotate(-90deg)"
    }
  }, /* @__PURE__ */ createElement("circle", {
    cx: halfSize,
    cy: halfSize,
    r: radius,
    stroke: trackColor,
    strokeWidth: lineWidth,
    fill: "none"
  }), /* @__PURE__ */ createElement("circle", {
    cx: halfSize,
    cy: halfSize,
    r: radius,
    style: {
      transition: transitionDuration > 0 ? `${transitionDuration}ms stroke-dashoffset` : void 0,
      strokeDashoffset: circleLength * (1 - percent / 100)
    },
    fill: "none",
    strokeDasharray: circleLength,
    strokeWidth: lineWidth,
    stroke: progressColor,
    strokeLinecap: caps
  }))), children ? /* @__PURE__ */ createElement("div", {
    style: {zIndex: 1}
  }, children) : null);
}
export {
  ProgressRing
};
