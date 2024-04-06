import { type SchemaTypeDefinition } from "sanity";
import { imageType } from "./schemaType/imageType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [imageType],
};
