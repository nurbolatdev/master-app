import type { LucideIcon } from "lucide-react";
import { BadgeCheck, BookOpen, Flag, LayoutDashboard, Receipt, UserCog, Wrench } from "lucide-react";

/** Sections of the admin panel (vault: «Админка — разделы»). */
export interface Section {
  path: string;
  title: string;
  description: string;
  feature: string;
  icon: LucideIcon;
}

export const sections: readonly Section[] = [
  {
    path: "/",
    title: "Дашборд",
    description: "Специалисты, заказы и заявки за период, очередь верификации, открытые жалобы",
    feature: "FEAT-012",
    icon: LayoutDashboard,
  },
  {
    path: "/verifications",
    title: "Верификация",
    description: "Очередь проверки специалистов по трём уровням: одобрить или отклонить с причиной",
    feature: "FEAT-003",
    icon: BadgeCheck,
  },
  {
    path: "/specialists",
    title: "Специалисты",
    description: "Поиск, профиль, значки, заказы и отзывы, скрыть из каталога",
    feature: "FEAT-002",
    icon: Wrench,
  },
  {
    path: "/users",
    title: "Пользователи",
    description: "Поиск, бан и разбан с причиной",
    feature: "FEAT-012",
    icon: UserCog,
  },
  {
    path: "/orders",
    title: "Заказы",
    description: "Поиск по статусу и участнику, история статусов, разбор споров",
    feature: "FEAT-006",
    icon: Receipt,
  },
  {
    path: "/complaints",
    title: "Жалобы",
    description: "Жалобы на специалистов, клиентов и отзывы",
    feature: "FEAT-012",
    icon: Flag,
  },
  {
    path: "/reference",
    title: "Справочники",
    description: "Города, категории, ориентиры цен",
    feature: "FEAT-004",
    icon: BookOpen,
  },
];

export function sectionByPath(path: string): Section | undefined {
  return sections.find((s) => s.path === path);
}
