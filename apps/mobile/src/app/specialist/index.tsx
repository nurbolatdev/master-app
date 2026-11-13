import { useTranslation } from "react-i18next";

import { Placeholder } from "@/components/Placeholder";
import { Screen } from "@/components/Screen";

export default function Page() {
  const { t } = useTranslation();
  return (
    <Screen title={t("specialist.dashboard")}>
      <Placeholder feature="FEAT-002 Профиль специалиста · FEAT-003 Верификация" stage={1} />
    </Screen>
  );
}
