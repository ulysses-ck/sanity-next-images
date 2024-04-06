import { defineField, defineType } from "sanity";

export const imageType = defineType({
  name: "imageType",
  title: "Images",
  type: "document",
  fields: [
    defineField({
      name: "imageFile",
      title: "Image File",
      type: "image",
      options: {
        hotspot: true,
      },
      // more on detail about image type: https://www.sanity.io/docs/image-type
    }),
    defineField({
      name: "altText",
      title: "Alt Text",
      type: "string",
    }),
    defineField({
      name: "imageTitle",
      title: "Image Title",
      type: "string",
    }),
  ],
});
