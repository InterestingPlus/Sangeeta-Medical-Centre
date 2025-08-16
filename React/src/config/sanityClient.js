// src/sanityClient.ts
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const token =
  "skno9HTs1HgG3QUDd2hyX0KVKucYSJyDx1s7s4727CR2mnff8xhNGlZHJk0DeJGqQG1zptmrFUjckUXjX0X0u4MYv7w5BOzVGBDUerw81qMmihE0e3NGTlh2pjNUUlKDSov6YCMmbR6csALc00oOdBQGcYtlWgWG2m8EaFNz7psAwhVr0CA8";

export const client = createClient({
  projectId: "bgi7wgiz",
  dataset: "production",
  useCdn: false,
  apiVersion: "2023-07-17",
});

export const secureClient = createClient({
  projectId: "bgi7wgiz",
  dataset: "production",
  token,
  useCdn: false,
  apiVersion: "2023-07-17",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
