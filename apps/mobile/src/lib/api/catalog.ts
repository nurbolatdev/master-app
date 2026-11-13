import type { Category } from "@master-app/api-types";
import { useQuery } from "@tanstack/react-query";

import { ApiError, api, toApiError } from "./client";

export async function fetchCategories(): Promise<Category[]> {
  let result;
  try {
    result = await api.GET("/api/v1/categories");
  } catch {
    throw new ApiError("network");
  }
  if (result.error !== undefined || result.data === undefined) throw toApiError(result.error);
  return result.data;
}

export function useCategories() {
  return useQuery({ queryKey: ["categories"], queryFn: fetchCategories, staleTime: 60 * 60 * 1000 });
}
