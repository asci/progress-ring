import * as React from "react";
import "./styles.css";
import { ProgressRing } from "./ProgressRing";

// Showreel
export default function App() {
  const [percent, setPercent] = React.useState(50);

  return (
    <div className="App">
      <div className="controls">
        <button onClick={() => setPercent(0)}>Set zero</button>
        <button onClick={() => setPercent(Math.random() * 100)}>
          Set Random Percent
        </button>
        <button onClick={() => setPercent(100)}>Set full</button>
      </div>
      <div className="examples">
        <div style={{ display: "flex", placeItems: "center" }}>
        <div style={{ fontSize: 14, position: "absolute", transform: "translateX(calc(-100% - 6px)" }}>
            {Math.round(percent)}%
          </div>
          <ProgressRing
            percent={percent}
            size={16}
            lineWidth={3}
            caps="butt"
            progressColor="deepskyblue"
          />
        </div>
        <ProgressRing percent={percent} size={200} lineWidth={20}>
          <div style={{ fontSize: 50 }}>{Math.round(percent)}%</div>
        </ProgressRing>
        <ProgressRing
          percent={percent}
          size={150}
          lineWidth={20}
          spin={false}
          caps="butt"
          progressColor="gold"
        >
          <div
            style={{
              fontSize: 25,
              fontWeight: "bold",
              fontVariantNumeric: "tabular-nums"
            }}
          >
            {percent < 99
              ? `0:${Math.round((percent / 100) * 60)
                  .toString()
                  .padStart(2, "0")}`
              : "1:00"}
          </div>
        </ProgressRing>

        <ProgressRing
          percent={percent}
          size={80}
          lineWidth={40}
          progressColor="orange"
          caps="butt"
          transitionDuration={0}
        >
          <div style={{ fontSize: 20 }}>{Math.round(percent)}%</div>
        </ProgressRing>
        <ProgressRing
          percent={percent}
          spin={true}
          size={170}
          lineWidth={10}
          progressColor="#409FFF"
        >
          <div
            style={{
              fontSize: 60,
              lineHeight: 0.9,
              display: "flex",
              alignItems: "top"
            }}
          >
            {Math.round(percent)}
            <span
              style={{
                fontSize: 20,
                lineHeight: 1,
                color: "#BABCBF"
              }}
            >
              %
            </span>
          </div>
        </ProgressRing>
        <ProgressRing
          percent={percent}
          size={160}
          lineWidth={16}
          progressColor="#FA3885"
          trackColor="rgba(246, 45, 125, 0.15)"
        >
          <ProgressRing
            percent={100 - percent}
            size={120}
            lineWidth={16}
            progressColor="#94EF00"
            trackColor="rgba(148, 239, 0, 0.15)"
          >
            <ProgressRing
              percent={percent}
              size={80}
              lineWidth={16}
              progressColor="rgba(55, 229, 207, 1)"
              trackColor="rgba(55, 229, 207, 0.15)"
            ></ProgressRing>
          </ProgressRing>
        </ProgressRing>
      </div>
    </div>
  );
}
