export default async function sitemap() {
  const baseUrl = "https://example.com";
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
  ];
}


