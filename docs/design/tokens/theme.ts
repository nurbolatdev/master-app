// Master APP design tokens — generated from docs/design/tokens/tokens.json. Do not edit by hand.
// Usage: const c = colors[scheme]; StyleSheet values come only from this file.

export type ColorScheme = "light" | "dark";

const light = {
  /** Фон экрана (brand-bg из логотипа). Под картой не виден. */
  bg: "#f6f5f4",
  /** Карточки, нижние шторки, поля ввода, таб-бар. */
  surface: "#ffffff",
  /** Вложенные блоки: строка цены, фон чипов, пузырь входящего сообщения. */
  surface2: "#efedeb",
  /** Разделители и рамки карточек (декоративные, не границы контролов). */
  border: "#e4e2df",
  /** Граница полей ввода и чекбоксов: 3:1 к surface в обеих темах. */
  borderStrong: "#8c8c94",
  /** Основной текст и иконки (brand-ink). 17:1 на surface. */
  ink: "#18181b",
  /** Вторичный текст: подписи, мета (расстояние, время). ≥7:1 на surface. */
  ink2: "#52525b",
  /** Плейсхолдеры и неактивные табы. ≥4.5:1 на surface, только не для важного. */
  ink3: "#66666e",
  /** Основная кнопка по умолчанию (чёрная). Красный бережём для срочного и главного CTA. */
  action: "#18181b",
  /** Текст и иконка на action. */
  onAction: "#ffffff",
  /** Фирменный красный: SOS, главный CTA экрана, плашка APP, активный пин. Белый текст на нём 4.8:1. Не больше одного красного CTA на экран. */
  brand: "#dc2626",
  /** Нажатое состояние brand. */
  brandPress: "#b91c1c",
  /** Текст и иконки на brand. */
  onBrand: "#ffffff",
  /** Красный текст и иконки на surface: ошибки, «Отменить», цена со скидкой. 6.5:1 / 6.3:1. */
  brandText: "#b91c1c",
  /** Фон ошибки и SOS-баннера; brand-text поверх. */
  brandTint: "#fee2e2",
  /** Готово, «Мастер на месте», зелёный пункт осмотра, «Онлайн». Всегда с иконкой. */
  success: "#15803d",
  /** Фон успешных бейджей и баннеров. */
  successTint: "#dcfce7",
  /** Внимание: «Занят», жёлтый пункт осмотра (требует проверки). Всегда с иконкой. */
  warning: "#b45309",
  /** Фон предупреждений. */
  warningTint: "#fef3c7",
  /** Только доверие: значок «Проверен», ссылки. Синий отличается от красного по светлоте — не путается с ошибкой. */
  trust: "#1d4ed8",
  /** Фон бейджа «Проверен администратором». */
  trustTint: "#dbeafe",
  /** Звёзды рейтинга. Рядом всегда число (4.8), цвет не несёт смысла один. */
  star: "#d97706",
  /** Затемнение под модалкой и развёрнутой шторкой. */
  scrim: "rgba(24, 24, 27, 0.48)",
  /** Заглушка карты до загрузки тайлов (2GIS/Яндекс). */
  mapBg: "#e9e6e1",
} as const;

const dark = {
  /** Фон экрана (brand-bg из логотипа). Под картой не виден. */
  bg: "#0f0f11",
  /** Карточки, нижние шторки, поля ввода, таб-бар. */
  surface: "#18181b",
  /** Вложенные блоки: строка цены, фон чипов, пузырь входящего сообщения. */
  surface2: "#232327",
  /** Разделители и рамки карточек (декоративные, не границы контролов). */
  border: "#2e2e33",
  /** Граница полей ввода и чекбоксов: 3:1 к surface в обеих темах. */
  borderStrong: "#6b6b75",
  /** Основной текст и иконки (brand-ink). 17:1 на surface. */
  ink: "#fafafa",
  /** Вторичный текст: подписи, мета (расстояние, время). ≥7:1 на surface. */
  ink2: "#a1a1aa",
  /** Плейсхолдеры и неактивные табы. ≥4.5:1 на surface, только не для важного. */
  ink3: "#8b8b94",
  /** Основная кнопка по умолчанию (чёрная). Красный бережём для срочного и главного CTA. */
  action: "#fafafa",
  /** Текст и иконка на action. */
  onAction: "#18181b",
  /** Фирменный красный: SOS, главный CTA экрана, плашка APP, активный пин. Белый текст на нём 4.8:1. Не больше одного красного CTA на экран. */
  brand: "#dc2626",
  /** Нажатое состояние brand. */
  brandPress: "#b91c1c",
  /** Текст и иконки на brand. */
  onBrand: "#ffffff",
  /** Красный текст и иконки на surface: ошибки, «Отменить», цена со скидкой. 6.5:1 / 6.3:1. */
  brandText: "#f87171",
  /** Фон ошибки и SOS-баннера; brand-text поверх. */
  brandTint: "#3b1414",
  /** Готово, «Мастер на месте», зелёный пункт осмотра, «Онлайн». Всегда с иконкой. */
  success: "#4ade80",
  /** Фон успешных бейджей и баннеров. */
  successTint: "#0f2a1a",
  /** Внимание: «Занят», жёлтый пункт осмотра (требует проверки). Всегда с иконкой. */
  warning: "#fbbf24",
  /** Фон предупреждений. */
  warningTint: "#2e2410",
  /** Только доверие: значок «Проверен», ссылки. Синий отличается от красного по светлоте — не путается с ошибкой. */
  trust: "#60a5fa",
  /** Фон бейджа «Проверен администратором». */
  trustTint: "#13213d",
  /** Звёзды рейтинга. Рядом всегда число (4.8), цвет не несёт смысла один. */
  star: "#fbbf24",
  /** Затемнение под модалкой и развёрнутой шторкой. */
  scrim: "rgba(0, 0, 0, 0.64)",
  /** Заглушка карты до загрузки тайлов (2GIS/Яндекс). */
  mapBg: "#1f1f23",
} as const;

export const colors = { light, dark } as const;
export type ColorToken = keyof typeof light;

/** Spacing scale, dp. space[4] = 16. */
export const space = {1: 4, 2: 8, 3: 12, 4: 16, 5: 20, 6: 24, 8: 32, 12: 48} as const;

export const radius = {sm: 6, md: 12, lg: 16, xl: 24, full: 999} as const;

export const size = {
  /** Минимальная тач-цель (Android 48dp, iOS 44pt). Иконка 24 + отступы. */
  tap: 48,
  /** Высота основных кнопок и полей ввода — удобно в перчатках и на ходу. */
  control: 52,
  /** Иконки в бейджах и мета-строках. */
  iconSm: 16,
  /** Стандартные иконки (Lucide, обводка 2px). */
  icon: 24,
  /** Аватар мастера в карточке. */
  avatar: 56,
  /** Плавающая SOS-кнопка на карте. */
  sos: 64,
  /** Высота таб-бара без safe area. */
  tabbar: 64,
} as const;

export const fontFamily = {
  display700: "Unbounded_700Bold",
  display800: "Unbounded_800ExtraBold",
  sans400: "Inter_400Regular",
  sans500: "Inter_500Medium",
  sans600: "Inter_600SemiBold",
  sans700: "Inter_700Bold",
} as const;

/** Text styles. On Android pick weight by family name, not fontWeight. */
export const typography = {
  /** Онбординг, сплэш, пустые экраны. Не больше одного на экран. Sample: «Помощь рядом» */
  display: { fontFamily: fontFamily.display800, fontSize: 30, lineHeight: 36, letterSpacing: -0.3 },
  /** Заголовок экрана (крупный, в шапке). Sample: «Осмотр перед покупкой» */
  title: { fontFamily: fontFamily.display700, fontSize: 22, lineHeight: 28 },
  /** Итоговая цена и цена «от» на карточке мастера. Sample: «15 000 ₸» */
  price: { fontFamily: fontFamily.display700, fontSize: 20, lineHeight: 24, fontVariant: ["tabular-nums" as const] },
  /** Заголовок секции и шторки. Sample: «Ближайшие мастера» */
  heading: { fontFamily: fontFamily.sans700, fontSize: 18, lineHeight: 24 },
  /** Имя мастера, название услуги в карточке. Sample: «Ержан Сапаров» */
  subheading: { fontFamily: fontFamily.sans600, fontSize: 16, lineHeight: 22 },
  /** Основной текст. Минимум для читаемых абзацев. Sample: «Проверю кузов толщиномером и сделаю компьютерную диагностику.» */
  body: { fontFamily: fontFamily.sans400, fontSize: 16, lineHeight: 24 },
  /** Мета-информация, подписи под полями. Sample: «1,2 км · приедет за 15 мин» */
  bodySm: { fontFamily: fontFamily.sans400, fontSize: 14, lineHeight: 20 },
  /** Текст кнопок, чипов, табов-сегментов. Sample: «Заказать осмотр» */
  label: { fontFamily: fontFamily.sans600, fontSize: 15, lineHeight: 20 },
  /** Бейджи, подписи таб-бара, время в чате. Не меньше 12px. Sample: «Проверен · 127 отзывов» */
  caption: { fontFamily: fontFamily.sans500, fontSize: 12, lineHeight: 16 },
  /** Надзаголовки в верхнем регистре, шаги визарда. Sample: «ШАГ 2 ИЗ 3» */
  overline: { fontFamily: fontFamily.sans700, fontSize: 11, lineHeight: 14, letterSpacing: 0.66, textTransform: "uppercase" as const },
} as const;

/** Shadows. iOS uses shadow*, Android uses elevation. Dark theme: no card shadow (surface is lighter than bg). */
export const shadow = {
  card: { light: { shadowColor: "#18181B", shadowOpacity: 0.08, shadowRadius: 3, shadowOffset: { width: 0, height: 1 }, elevation: 1 }, dark: {} },
  float: { light: { shadowColor: "#18181B", shadowOpacity: 0.16, shadowRadius: 24, shadowOffset: { width: 0, height: 8 }, elevation: 8 }, dark: { shadowColor: "#000000", shadowOpacity: 0.5, shadowRadius: 24, shadowOffset: { width: 0, height: 8 }, elevation: 8 } },
  sheet: { light: { shadowColor: "#18181B", shadowOpacity: 0.12, shadowRadius: 24, shadowOffset: { width: 0, height: -4 }, elevation: 16 }, dark: { shadowColor: "#000000", shadowOpacity: 0.5, shadowRadius: 24, shadowOffset: { width: 0, height: -4 }, elevation: 16 } },
} as const;

/** Motion, ms. Respect reduced motion: AccessibilityInfo.isReduceMotionEnabled(). */
export const motion = { press: 120, fast: 150, base: 200, slow: 250 } as const;

export const zIndex = {mapControls: 10, sheet: 20, tabbar: 30, modal: 40, toast: 50} as const;

/** Minimum touch target, dp. */
export const touchTarget = size.tap;
