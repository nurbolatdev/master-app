import { Pressable, StyleSheet, Text } from "react-native";

import { colors, fontSize, radius, spacing, touchTarget } from "@/theme";

interface Props {
  label: string;
  onPress?: () => void;
  variant?: "primary" | "secondary";
  disabled?: boolean;
}

export function Button({ label, onPress, variant = "primary", disabled = false }: Props) {
  const primary = variant === "primary";
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled }}
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [
        styles.base,
        primary ? styles.primary : styles.secondary,
        (pressed || disabled) && styles.dim,
      ]}
    >
      <Text style={[styles.label, { color: primary ? colors.surface : colors.primary }]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    minHeight: touchTarget,
    borderRadius: radius.m,
    paddingHorizontal: spacing.l,
    alignItems: "center",
    justifyContent: "center",
  },
  primary: { backgroundColor: colors.primary },
  secondary: { backgroundColor: colors.primarySoft },
  dim: { opacity: 0.6 },
  label: { fontSize: fontSize.body, fontWeight: "700" },
});
