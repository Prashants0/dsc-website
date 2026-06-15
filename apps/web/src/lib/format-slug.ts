import type { FieldHook } from "payload";

export const slugify = (val: string): string =>
  val
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");

/**
 * beforeValidate hook that derives a slug from `fallback` (e.g. "title")
 * when the slug field is left empty, and normalises any manual entry.
 */
export const formatSlug =
  (fallback: string): FieldHook =>
  ({ data, value }) => {
    if (typeof value === "string" && value.length > 0) {
      return slugify(value);
    }
    const fallbackData = data?.[fallback];
    if (typeof fallbackData === "string" && fallbackData.length > 0) {
      return slugify(fallbackData);
    }
    return value;
  };
