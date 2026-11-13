import { Tabs } from "expo-router";
import { useTranslation } from "react-i18next";

import { tabIcon, tabScreenOptions } from "@/components/tabIcon";

/** Tabs of the client mode (vault: «Мобильное — навигация»). */
export default function ClientTabs() {
  const { t } = useTranslation();
  return (
    <Tabs screenOptions={tabScreenOptions}>
      <Tabs.Screen name="index" options={{ title: t("client.home"), tabBarIcon: tabIcon("search-outline") }} />
      <Tabs.Screen name="orders" options={{ title: t("client.orders"), tabBarIcon: tabIcon("receipt-outline") }} />
      <Tabs.Screen name="chats" options={{ title: t("client.chats"), tabBarIcon: tabIcon("chatbubbles-outline") }} />
      <Tabs.Screen name="garage" options={{ title: t("client.garage"), tabBarIcon: tabIcon("car-outline") }} />
      <Tabs.Screen name="profile" options={{ title: t("client.profile"), tabBarIcon: tabIcon("person-outline") }} />
    </Tabs>
  );
}
