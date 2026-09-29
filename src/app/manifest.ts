import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sahupur Village",
    short_name: "Sahupur",
    description: "Discover Sahupur, a beautiful village in Ratanpura Block, Mau District, Uttar Pradesh",
    start_url: "/",
    display: "standalone",
    background_color: "#fefdfb",
    theme_color: "#c0734d",
    orientation: "portrait-primary",
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    categories: ["travel", "education", "lifestyle"],
    lang: "en-IN",
    dir: "ltr",
  };
}