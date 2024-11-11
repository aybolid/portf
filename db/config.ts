import { defineDb, defineTable, column, NOW } from "astro:db";

const Comment = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    author: column.text(),
    content: column.text(),
    createdAt: column.date({ default: NOW, name: "created_at" }),
    published: column.boolean({ default: false }),
    highlight: column.boolean({ default: false }),
    response: column.text({ optional: true }),
  },
});

export default defineDb({
  tables: { Comment },
});
