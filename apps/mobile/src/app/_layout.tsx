import "@/i18n";

import { QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { ModeProvider } from "@/lib/mode/mode";
import { createQueryClient } from "@/lib/query/queryClient";

export default function RootLayout() {
  const [queryClient] = useState(createQueryClient);
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <ModeProvider>
          <StatusBar style="dark" />
          {/* Auth guard (Stack.Protected) arrives with sign-in in F0-5 / F0-8. */}
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="login" />
            <Stack.Screen name="client" />
            <Stack.Screen name="specialist" />
          </Stack>
        </ModeProvider>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}
