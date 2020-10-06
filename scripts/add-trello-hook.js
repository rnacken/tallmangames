// Get any environment variables we need
require("dotenv").config();
const fetch = require("node-fetch");

const { TRELLO_LIST_ID, TRELLO_TOKEN, TRELLO_KEY } = process.env;

const netlify_url = process.argv.slice(2)[0];

const body = {
  description: "Netlify build hook",
  callbackURL: netlify_url,
  idModel: TRELLO_LIST_ID,
};

fetch(
  `https://api.trello.com/1/tokens/${TRELLO_TOKEN}/webhooks/?key=${TRELLO_KEY}`,
  {
    method: "post",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  }
)
  .then((res) => res.json())
  .then((json) => console.log(json));
