import { useRouter } from "expo-router";
import { useTranslation } from "react-i18next";

import { homeOf, otherMode, useMode } from "@/lib/mode/mode";

import { Button } from "./Button";

export function ModeSwitch() {
  const { t } = useTranslation();
  const router = useRouter();
  const { mode, setMode } = useMode();
  const next = otherMode(mode);
  return (
    <Button
      variant="secondary"
      label={t(next === "client" ? "mode.switchToClient" : "mode.switchToSpecialist")}
      onPress={() => {
        setMode(next);
        router.replace(homeOf(next));
      }}
    />
  );
}
