import * as React from "react";
import { render, screen } from "@testing-library/react";
import { ProgressRing } from "../ProgressRing";

describe("ProgressRing component", () => {
  it("renders children", async () => {
    const testMessage = "hello";
    render(<ProgressRing>{testMessage}</ProgressRing>);

    // query* functions will return the element or null if it cannot be found
    // get* functions will return the element or throw an error if it cannot be found
    expect(screen.queryByText(testMessage)).toBeDefined();
  });
});
