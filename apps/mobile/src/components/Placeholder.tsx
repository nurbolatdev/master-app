import { useTranslation } from "react-i18next";
import { StyleSheet, Text, View } from "react-native";

import { colors, fontSize, radius, spacing } from "@/theme";

/** Card for a screen that is not built yet: which feature and stage bring it. */
export function Placeholder({ feature, stage }: { feature: string; stage: number }) {
  const { t } = useTranslation();
  return (
    <View style={styles.card} testID="placeholder">
      <Text style={styles.feature}>{feature}</Text>
      <Text style={styles.text}>{t("common.stage0", { stage })}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.m,
    borderWidth: 1,
    borderColor: colors.line,
    padding: spacing.l,
    gap: spacing.xs,
  },
  feature: { fontSize: fontSize.small, fontWeight: "700", color: colors.primary },
  text: { fontSize: fontSize.body, color: colors.textMuted },
});
