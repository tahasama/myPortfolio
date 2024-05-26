const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream } = require("fs");
const path = require("path");

// Define your routes here
const routes = [
  { url: "/", changefreq: "monthly", priority: 1.0 },

  // Add more routes as needed
];

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: "https://www.codebytaha.com" });
  const writeStream = createWriteStream(
    path.join(__dirname, "public", "sitemap.xml")
  );

  sitemap.pipe(writeStream);

  routes.forEach((route) => sitemap.write(route));
  sitemap.end();

  await streamToPromise(sitemap);
  console.log("Sitemap generated successfully!");
}

generateSitemap().catch(console.error);
