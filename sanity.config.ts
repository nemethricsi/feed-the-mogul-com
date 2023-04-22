import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemas } from "./sanity/schemas";

export const config = defineConfig({
  projectId: "wuq9w9ly",
  dataset: "production",
  title: "Mogul Database",
  apiVersion: "2023-04-22",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas },
});
