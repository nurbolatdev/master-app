import { useTranslation } from "react-i18next";

import { Placeholder } from "@/components/Placeholder";
import { Screen } from "@/components/Screen";

export default function Page() {
  const { t } = useTranslation();
  return (
    <Screen title={t("specialist.feed")}>
      <Placeholder feature="FEAT-007 Открытая заявка" stage={3} />
    </Screen>
  );
}
