/* eslint-disable camelcase */
/* eslint-disable no-case-declarations */
require('dotenv').config()
import http from 'http'
import { Client } from '@notionhq/client'

// This is Typescript  interface for the shape of the object we will
// create based on our database to send to the React app
// When the data is queried it will come back in a much more complicated shape, so our goal is to
// simplify it to make it easy to work with on the front end
interface NotionContent {
  title: string;
  contentArr?: string[];
  // metadata?: string;
  fileUrl?: string;
  // type:
}

// The dotenv library will read from your .env file into these values on `process.env`
const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID
const NOTION_SECRET = process.env.NOTION_SECRET

// Will provide an error to users who forget to create the .env file
// with their Notion data in it
if (!NOTION_DATABASE_ID || !NOTION_SECRET) {
  throw Error('Must define NOTION_SECRET and NOTION_DATABASE_ID in env')
}

// Initializing the Notion client with your secret
const notion = new Client({
  auth: NOTION_SECRET
})

const host = 'localhost'
const port = 8000

// Require an async function here to support await with the DB query
const server = http.createServer(async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')

  switch (req.url) {
    case '/':
      // Query the database and wait for the result
      const query = await notion.databases.query({
        database_id: NOTION_DATABASE_ID
      })

      // We map over the complex shape of the results and return a nice clean array of
      // objects in the shape of our `NotionContent` interface
      const resultsArr: NotionContent[] = query.results.map((row: any) => {
        // row represents a row in our database and the name of the column is the
        // way to reference the data in that column
        const titleCell = row.properties.Title.title[0].plain_text

        const contentCell = row.properties.Content
        // const fileUrl = results['Files & media']?.files[0]?.file.url


        // console.log('contentCell', contentCell)

        // Depending on the column "type" we selected in Notion there will be different
        // data available to us (URL vs Date vs text for example) so in order for Typescript
        // to safely infer we have to check the `type` value.  We had one text and one url column.
        const isTitle = titleCell.type === 'rich_text'

        // const isContent = urlCell.type === 'url'

        // Verify the types are correct
        // if (isTitle) {
        // Pull the string values of the cells off the column data
        console.log('titleCell>>', titleCell)
        const title = titleCell
        // const url = urlCell.url ?? ''

        const contentArr = contentCell.rich_text.map((item: any) => item.plain_text) 
        console.log('contentArr', contentArr)
        // Return it in our `NotionContent` shape
        return { title, contentArr }
        // }

        // If a row is found that does not match the rules we checked it will still return in the
        // the expected shape but with a NOT_FOUND title
        // return { title: 'NOT_FOUND' }
      })

      console.log('resultsArr>>', resultsArr)

      res.setHeader('Content-Type', 'application/json')
      res.writeHead(200)
      res.end(JSON.stringify(resultsArr))
      break

    default:
      res.setHeader('Content-Type', 'application/json')
      res.writeHead(404)
      res.end(JSON.stringify({ error: 'Resource not found' }))
  }
})

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`)
})