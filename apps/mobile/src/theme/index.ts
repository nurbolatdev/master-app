// Design tokens. Placeholders until the brand and design system are decided (vault: «Дизайн — MOC»).
export const colors = {
  primary: "#1F5FD6",
  primarySoft: "#E3ECFC",
  accent: "#F59E0B",
  bg: "#F7F8FA",
  surface: "#FFFFFF",
  text: "#111827",
  textMuted: "#6B7280",
  line: "#E5E7EB",
  danger: "#B42318",
  success: "#127A3E",
} as const;

export const spacing = { xs: 4, s: 8, m: 12, l: 16, xl: 24, xxl: 32 } as const;

export const radius = { s: 8, m: 12, l: 16 } as const;

export const fontSize = { small: 13, body: 16, subtitle: 18, title: 24 } as const;

/** Minimum touch target (vault: «Мобильное — стек и структура»). */
export const touchTarget = 48;
