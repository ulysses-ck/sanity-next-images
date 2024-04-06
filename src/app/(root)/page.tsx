import React from "react";
import { client } from "../../../sanity/lib/client";
import Image from "next/image";
import { ImageType } from "../../../sanity.types";
import type { Image as ImageSanityType } from "sanity";
import { urlForImage } from "../../../sanity/lib/image";

export default async function Page(): Promise<React.ReactNode> {
  const imagesTypes = await client.fetch(`*[_type == "imageType"]`);
  return (
    <main className="min-h-screen bg-white text-black flex flex-col">
      <h1 className="text-2xl text-center w-full">Memes Sanity Nextjs</h1>
      <section className="flex flex-col items-center gap-4 p-1">
        {imagesTypes.map((imageType: ImageType) => (
          <article
            key={imageType._id}
            className="w-[65%] h-auto shadow-md rounded-md border border-gray-900 shadow-black"
          >
            <h2 className="text-1xl p-2">{imageType.imageTitle}</h2>
            <Image
              className="w-full h-full rounded-bottom-md"
              width={900}
              height={900}
              src={urlForImage(imageType.imageFile?.asset as ImageSanityType)}
              alt={imageType.altText ?? ""}
            />
          </article>
        ))}
      </section>
    </main>
  );
}
