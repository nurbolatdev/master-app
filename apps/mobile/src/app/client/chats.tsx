import { useTranslation } from "react-i18next";

import { Placeholder } from "@/components/Placeholder";
import { Screen } from "@/components/Screen";

export default function Page() {
  const { t } = useTranslation();
  return (
    <Screen title={t("client.chats")}>
      <Placeholder feature="FEAT-008 Чат" stage={3} />
    </Screen>
  );
}
