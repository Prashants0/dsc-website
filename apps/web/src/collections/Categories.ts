import type { CollectionConfig } from "payload";
import { formatSlug } from "../lib/format-slug";

export const Categories: CollectionConfig = {
  slug: "categories",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug"],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      index: true,
      admin: {
        position: "sidebar",
        description: "Auto-generated from the title if left blank.",
      },
      hooks: {
        beforeValidate: [formatSlug("title")],
      },
    },
  ],
};
