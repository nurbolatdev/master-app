import { useTranslation } from "react-i18next";

import { Placeholder } from "@/components/Placeholder";
import { Screen } from "@/components/Screen";

export default function Page() {
  const { t } = useTranslation();
  return (
    <Screen title={t("client.orders")}>
      <Placeholder feature="FEAT-006 Заказ специалисту · FEAT-007 Открытая заявка" stage={3} />
    </Screen>
  );
}
