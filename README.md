# Tall Man Games

Game-portfolio for Tall Man Games - easy, intuitive boardgames

# Development

`yarn dev` - start dev server

# Deployment

Git push it, which is connected to Netlify (will deploy main branch)
Netlify will deploy it after running `yarn build && yarn export`

# About this site

- API into Trello board for cards that describe the games (https://css-tricks.com/using-trello-as-a-super-simple-cms/)
- Uses SSG for the index page (static page rendered with current content)
- Trello uses `Live` / `Stage` labels to preview content in dev / production site
- Webhook from Trello to update Netlify on list-change
- NextJS & Sass
