/// <reference types="react" />
declare module "ProgressRing" {
    import * as React from "react";
    interface Props {
        caps?: "butt" | "round";
        children?: React.ReactNode;
        lineWidth?: number;
        percent?: number;
        progressColor?: string;
        size?: number;
        spin?: boolean;
        trackColor?: string;
        transitionDuration?: number;
    }
    export function ProgressRing({ caps, children, lineWidth, percent, progressColor, size, spin, trackColor, transitionDuration }: Props): JSX.Element;
}
