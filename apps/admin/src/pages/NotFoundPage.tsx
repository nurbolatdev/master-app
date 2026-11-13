import { Link } from "@tanstack/react-router";

export function NotFoundPage() {
  return (
    <div className="space-y-3">
      <h1 className="text-3xl font-extrabold">Страница не найдена</h1>
      <Link to="/" className="font-semibold text-primary">
        На дашборд
      </Link>
    </div>
  );
}
