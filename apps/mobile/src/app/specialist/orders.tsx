import { useTranslation } from "react-i18next";

import { Placeholder } from "@/components/Placeholder";
import { Screen } from "@/components/Screen";

export default function Page() {
  const { t } = useTranslation();
  return (
    <Screen title={t("specialist.orders")}>
      <Placeholder feature="FEAT-006 Заказы · FEAT-009 Отчёт осмотра" stage={3} />
    </Screen>
  );
}
