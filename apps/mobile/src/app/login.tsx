import { useRouter } from "expo-router";
import { useTranslation } from "react-i18next";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Button } from "@/components/Button";
import { homeOf, useMode } from "@/lib/mode/mode";
import { colors, fontSize, spacing } from "@/theme";

/** Screen «Вход» (FEAT-001). Google and e-mail sign-in arrive in F0-5 / F0-6. */
export default function Login() {
  const { t } = useTranslation();
  const router = useRouter();
  const { mode } = useMode();
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <Text style={styles.title}>{t("login.title")}</Text>
        <Text style={styles.subtitle}>{t("login.subtitle")}</Text>
      </View>
      <View style={styles.actions}>
        <Button label={t("login.google")} disabled />
        <Button label={t("login.email")} variant="secondary" disabled />
        <Text style={styles.note}>{t("login.soon")}</Text>
        <Button label={t("login.continue")} onPress={() => router.replace(homeOf(mode))} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg, padding: spacing.xl, justifyContent: "space-between" },
  header: { marginTop: spacing.xxl * 2, gap: spacing.s },
  title: { fontSize: 34, fontWeight: "800", color: colors.text },
  subtitle: { fontSize: fontSize.subtitle, color: colors.textMuted },
  actions: { gap: spacing.m },
  note: { fontSize: fontSize.small, color: colors.textMuted, textAlign: "center" },
});
