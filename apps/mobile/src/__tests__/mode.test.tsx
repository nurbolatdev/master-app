import { describe, expect, it } from "@jest/globals";
import { act, render, screen } from "@testing-library/react-native";
import { Text } from "react-native";

import { homeOf, ModeProvider, otherMode, useMode } from "@/lib/mode/mode";

function Probe() {
  const { mode, setMode } = useMode();
  return (
    <Text testID="mode" onPress={() => setMode(otherMode(mode))}>
      {mode}
    </Text>
  );
}

describe("mode", () => {
  it("switches between client and specialist", () => {
    expect(otherMode("client")).toBe("specialist");
    expect(otherMode("specialist")).toBe("client");
    expect(homeOf("specialist")).toBe("/specialist");
  });

  it("starts as client and can switch", async () => {
    await render(
      <ModeProvider>
        <Probe />
      </ModeProvider>,
    );
    expect(screen.getByTestId("mode")).toHaveTextContent("client");
    await act(async () => {
      screen.getByTestId("mode").props.onPress();
    });
    expect(screen.getByTestId("mode")).toHaveTextContent("specialist");
  });
});
