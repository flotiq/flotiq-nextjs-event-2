<a href="https://flotiq.com/">
    <img src="https://editor.flotiq.com/fonts/fq-logo.svg" alt="Flotiq logo" title="Flotiq" align="right" height="60" />
</a>

Next JS starter boilerplate with Flotiq source
===========================

Kick off your project with this hello-world boilerplate. This starter ships with the main Next JS configuration files you might need to get up and running blazing fast with the blazing fast app generator for React.
Check out live demo: [https://flotiq-nextjs-boilerplate.netlify.app](https://flotiq-nextjs-boilerplate.netlify.app) 

## Quick start

1. **Start the project from template using npx**

    ```bash
    git clone https://github.com/flotiq/nextjs-starter-boilerplate.git my-hello-world-starter
    ```
2. **Import example data from starter to Flotiq**
   
   ```bash
   npm i -g flotiq-cli
   cd my-hello-world-starter
   flotiq import . [flotiqApiKey]
   ```
   _Note: You need to put your Read and write API key as the `flotiqApiKey` for import to work, You don't need any content types in your account._

3. **Configure application**

   The next step is to configure our application to know from where it has to fetch the data.

   Copy `.env.dist` as `.env.local`
   
   ```bash
   cp .env.dist .env.local
   ```
 
   and add api key:

    ```
    FLOTIQ_API_KEY=YOUR FLOTIQ API KEY
    ```

4. **Install dependencies**

   Navigate into your new site’s directory and run

   ```bash
   yarn install
   ```
   
5. **Start developing.**

   Navigate into your new site’s directory and start it up.

    ```shell
    yarn dev
    ```

6. **Open the source code and start editing!**

   Your site is now running at `http://localhost:3000`!

   Open the `my-hello-world-starter` directory in your code editor of choice and edit `pages/index.js`. Save your changes and the browser will update in real time!

7. **Manage your content using Flotiq editor**

   You can now easily manage your content using [Flotiq editor](https://editor.flotiq.com)

## Deploy

Deploy this starter with one click on [Vercel](https://vercel.com/):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fflotiq%2Fnextjs-starter-boilerplate)

You can also deploy this project to [Heroku](https://www.heroku.com/) in 3 minutes:

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https%3A%2F%2Fgithub.com%2Fflotiq%2Fnextjs-starter-boilerplate)

Or to [Netlify](https://www.netlify.com/):

[![Deploy](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https%3A%2F%2Fgithub.com%2Fflotiq%2Fnextjs-starter-boilerplate)

## Learning Next.js

Looking for more guidance? Full documentation for Next.js lives [on the website](https://nextjs.org/). Here are some places to start:

- **To dive straight into code samples, head [to the Next.js documentation](https://nextjs.org/docs/getting-started).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## Collaborating

If you wish to talk with us about this project, feel free to hop on our [![Discord Chat](https://img.shields.io/discord/682699728454025410.svg)](https://discord.gg/FwXcHnX).

If you found a bug, please report it in [issues](https://github.com/flotiq/nextjs-starter-boilerplate/issues).
