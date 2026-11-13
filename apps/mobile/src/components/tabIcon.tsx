import Ionicons from "@expo/vector-icons/Ionicons";
import type { ComponentProps } from "react";
import type { ColorValue } from "react-native";

import { colors } from "@/theme";

type IconName = ComponentProps<typeof Ionicons>["name"];

export function tabIcon(name: IconName) {
  return function TabIcon({ color }: { color: ColorValue }) {
    return <Ionicons name={name} size={26} color={typeof color === "string" ? color : colors.textMuted} />;
  };
}

export const tabScreenOptions = {
  headerShown: false,
  tabBarActiveTintColor: colors.primary,
  tabBarInactiveTintColor: colors.textMuted,
  tabBarLabelStyle: { fontSize: 12, fontWeight: "600" as const },
};
