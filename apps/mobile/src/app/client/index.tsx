import { useTranslation } from "react-i18next";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

import { Button } from "@/components/Button";
import { Placeholder } from "@/components/Placeholder";
import { Screen } from "@/components/Screen";
import { useCategories } from "@/lib/api/catalog";
import { ApiError } from "@/lib/api/client";
import { colors, fontSize, radius, spacing } from "@/theme";

/**
 * Screen «Главная» (FEAT-005). For now it shows the categories from the live API —
 * the first end-to-end check: mobile → openapi-fetch → Spring Boot → PostgreSQL.
 */
export default function ClientHome() {
  const { t, i18n } = useTranslation();
  const categories = useCategories();

  return (
    <Screen title={t("client.home")}>
      <Text style={styles.section}>{t("client.categories")}</Text>
      {categories.isPending ? <ActivityIndicator color={colors.primary} /> : null}
      {categories.isError ? (
        <View style={styles.error}>
          <Text style={styles.errorText}>
            {categories.error instanceof ApiError ? t(`errors.${categories.error.code}`) : t("common.error")}
          </Text>
          <Button label={t("common.retry")} variant="secondary" onPress={() => categories.refetch()} />
        </View>
      ) : null}
      {categories.data?.map((c) => (
        <View key={c.id} style={styles.card}>
          <Text style={styles.cardTitle}>{i18n.language === "kk" ? c.nameKk : c.nameRu}</Text>
        </View>
      ))}
      <Placeholder feature="FEAT-005 Каталог и карта" stage={2} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  section: { fontSize: fontSize.subtitle, fontWeight: "700", color: colors.text },
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.m,
    borderWidth: 1,
    borderColor: colors.line,
    padding: spacing.l,
  },
  cardTitle: { fontSize: fontSize.body, fontWeight: "600", color: colors.text },
  error: { gap: spacing.s },
  errorText: { color: colors.danger, fontSize: fontSize.body },
});
