import { useTranslation } from "react-i18next";

import { Placeholder } from "@/components/Placeholder";
import { Screen } from "@/components/Screen";

export default function Page() {
  const { t } = useTranslation();
  return (
    <Screen title={t("client.garage")}>
      <Placeholder feature="FEAT-019 Гараж клиента" stage={4} />
    </Screen>
  );
}
