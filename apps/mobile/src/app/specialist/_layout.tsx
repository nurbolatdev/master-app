import { Tabs } from "expo-router";
import { useTranslation } from "react-i18next";

import { tabIcon, tabScreenOptions } from "@/components/tabIcon";

/** Tabs of the specialist mode (vault: «Мобильное — навигация»). */
export default function SpecialistTabs() {
  const { t } = useTranslation();
  return (
    <Tabs screenOptions={tabScreenOptions}>
      <Tabs.Screen name="index" options={{ title: t("specialist.dashboard"), tabBarIcon: tabIcon("speedometer-outline") }} />
      <Tabs.Screen name="feed" options={{ title: t("specialist.feed"), tabBarIcon: tabIcon("flash-outline") }} />
      <Tabs.Screen name="orders" options={{ title: t("specialist.orders"), tabBarIcon: tabIcon("construct-outline") }} />
      <Tabs.Screen name="chats" options={{ title: t("specialist.chats"), tabBarIcon: tabIcon("chatbubbles-outline") }} />
      <Tabs.Screen name="profile" options={{ title: t("specialist.profile"), tabBarIcon: tabIcon("person-outline") }} />
    </Tabs>
  );
}
