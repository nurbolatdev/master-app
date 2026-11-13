import { useTranslation } from "react-i18next";

import { ModeSwitch } from "@/components/ModeSwitch";
import { Placeholder } from "@/components/Placeholder";
import { Screen } from "@/components/Screen";

export default function Profile() {
  const { t } = useTranslation();
  return (
    <Screen title={t("client.profile")}>
      <ModeSwitch />
      <Placeholder feature="FEAT-001 Вход и аккаунт · FEAT-013 Локализация" stage={0} />
    </Screen>
  );
}
