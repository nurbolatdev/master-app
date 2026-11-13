import type { ReactNode } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { colors, fontSize, spacing } from "@/theme";

export function Screen({ title, children }: { title: string; children?: ReactNode }) {
  return (
    <SafeAreaView style={styles.safe} edges={["top"]}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text accessibilityRole="header" style={styles.title}>
          {title}
        </Text>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },
  content: { padding: spacing.l, gap: spacing.m },
  title: { fontSize: fontSize.title, fontWeight: "800", color: colors.text },
});
