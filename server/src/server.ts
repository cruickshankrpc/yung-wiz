/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
require("dotenv").config();
import http from "http";
import { Client } from "@notionhq/client";
const fs = require("fs");
const path = require("path");

// This is Typescript  interface for the shape of the object we will
// create based on our database to send to the React app
// When the data is queried it will come back in a much more complicated shape, so our goal is to
// simplify it to make it easy to work with on the front end
interface NotionContent {
  title: string;
  contentArr?: string[];
  fileUrl?: string;
  link?: string;
  audioUrl?: string;
}

const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID;
const NOTION_SECRET = process.env.NOTION_SECRET;

if (!NOTION_DATABASE_ID || !NOTION_SECRET) {
  throw Error("Must define NOTION_SECRET and NOTION_DATABASE_ID in env");
}

// Initializing the Notion client with your secret
const notion = new Client({
  auth: NOTION_SECRET,
});

const host = "localhost";
const port = 8000;

// Path to CRA build folder
const buildPath = path.join(__dirname, "../front-end/build");

// Require an async function here to support await with the DB query
const server = http.createServer(async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  switch (req.url) {
    case "/":
      // Query the database and wait for the result
      const query = await notion.databases.query({
        database_id: NOTION_DATABASE_ID,
      });

      // We map over the complex shape of the results and return a nice clean array of
      // objects in the shape of our `NotionContent` interface
      const resultsArr: NotionContent[] = query.results.map((row: any) => {
        // row represents a row in our database and the name of the column is the
        // way to reference the data in that column
        const title = row.properties.Title.title[0].plain_text;

        const contentArr = row.properties.Content.rich_text.map(
          (item: any) => item.plain_text,
        );

        const fileUrl = row.properties["Files & media"].files[0]?.file?.url;

        let audioUrl;

        if (row.properties.Type.select?.name === "audio") {
          audioUrl = row.properties["Files & media"].files[0]?.file?.url;
        }

        const link = row.properties.Link?.rich_text[0]?.plain_text;

        // Return it in our `NotionContent` shape
        return { title, contentArr, fileUrl, link, audioUrl };
      });

      res.setHeader("Content-Type", "application/json");
      res.writeHead(200);
      res.end(JSON.stringify(resultsArr));
      break;

    default:
      res.setHeader("Content-Type", "application/json");
      res.writeHead(404);
      res.end(JSON.stringify({ error: "Resource not found" }));
  }
  // --- Frontend (CRA + React Router) ---
  let filePath = path.join(buildPath, req.url);

  // If request is for root or a React Router route → serve index.html
  if (!fs.existsSync(filePath) || fs.lstatSync(filePath).isDirectory()) {
    filePath = path.join(buildPath, "index.html");
  }

  // Detect content type (basic)
  let ext = path.extname(filePath);
  let contentType = "text/html";
  if (ext === ".js") contentType = "text/javascript";
  else if (ext === ".css") contentType = "text/css";
  else if (ext === ".json") contentType = "application/json";
  else if (ext === ".png") contentType = "image/png";
  else if (ext === ".jpg" || ext === ".jpeg") contentType = "image/jpeg";

  res.writeHead(200, { "Content-Type": contentType });
  fs.createReadStream(filePath).pipe(res);
});

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
