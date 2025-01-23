<a href="https://flotiq.com/">
    <img src="https://editor.flotiq.com/fonts/fq-logo.svg" alt="Flotiq logo" title="Flotiq" align="right" height="60" />
</a>

Next JS starter for events with Flotiq source
===========================

Kick off your project with this hello-world boilerplate. This starter ships with the main Next JS configuration files you might need to get up and running blazing fast with the blazing fast app generator for React.
Check out live demo: [https://flotiq-nextjs-event-2.netlify.app](https://flotiq-nextjs-event-2.netlify.app) 

## Quick start

1. **Start the project from template using npx**

    ```bash
    git clone https://github.com/flotiq/flotiq-nextjs-event-2.git my-hello-world-starter
    ```
2. **Import example data from starter to Flotiq**
   
   ```bash
   npm i -g flotiq-cli
   cd my-hello-world-starter
   flotiq import .flotiq [flotiqApiKey]
   ```
   _Note: You need to put your Read and write API key as the `flotiqApiKey` for import to work, You don't need any content types in your account._

3. **Configure application**

   The next step is to configure our application to know from where it has to fetch the data.
   Flotiq provides a tool for automatically populating `.env` files with your Flotiq API keys.
   
   ```bash
   npx flotiq-setup
   ```

   After executing this command, a browser window will open with the Flotiq login screen. Upon successful authentication,
   the command will automatically generate appropriately filled .env files for you.
   
   _Note: If there are existing .env files in the project, flotiq-setup may overwrite them._   

4. **Install dependencies**

   Navigate into your new site’s directory and run

   ```bash
   yarn install
   ```
   
5. **Flotiq codegen - install SDK**

   This package simplifies Typescript Fetch API integration for your Flotiq project, tailored to your Flotiq account 
   data.
   
   To install Flotiq SDK you can use flotiq-nextjs-setup CLI, that will not only seemlessly generate SDK for your Next.js project, but will also add content cache revalidation endpoint, handle draft mode for unpublished content on Flotiq and more. To use the flotiq-nextjs-setup CLI simply:
    - install flotiq-nextjs-setup CLI:
        ```bash
        npm install -g flotiq-nextjs-setup
        ```
    - run the setup:
        ```bash
        npx flotiq-nextjs-setup
        ```
   If you want to read more about our flotiq-nextjs-setup CLI, refer to our [Flotiq NextJS docs](https://flotiq.com/docs/Universe/nextjs/nextjs-setup/).

   If instead you prefer to install only Flotiq SDK, manually, do the following steps:
   
   ```bash
   npx flotiq-codegen-ts generate --compiled-js
   ```

   Now, in your project, you can use the `FlotiqApi` class for easy and convenient communication with the Flotiq API.

   ```javascript
      import {FlotiqApi} from '../flotiqApi/index';
      
      const api = new FlotiqApi(apiKey);
   ```
   
   Examples of its usage can be found in the `lib/event.js` file of this project or can be explored in the
   [flotiq-codegen-ts repository](https://github.com/flotiq/flotiq-codegen-ts)

   _Note: If you make any changes (additions or deletions) to the `content type definitions` in your Flotiq account, you will need to rerun `npx flotiq-codegen-ts generate --compiled-js` command._

6. **Start developing.**

   Navigate into your new site’s directory and start it up.

    ```shell
    yarn dev
    ```

7. **Open the source code and start editing!**

   Your site is now running at `http://localhost:3000`!

   Open the `my-hello-world-starter` directory in your code editor of choice and edit `pages/index.js`. Save your changes and the browser will update in real time!

8. **Manage your content using Flotiq editor**

   You can now easily manage your content using [Flotiq editor](https://editor.flotiq.com)
   
   _Note: If you are using `FlotiqApi` generated from `flotiq-codegen-ts` remember to rerun `npx flotiq-codegen-ts generate --compiled-js`
   command after changes (additions or edits) to the `content type definitions` in your Flotiq_

## Deploy

Deploy this starter with one click on [Vercel](https://vercel.com/):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fflotiq%2Fflotiq-nextjs-event-2)

You can also deploy this project to [Heroku](https://www.heroku.com/) in 3 minutes:

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https%3A%2F%2Fgithub.com%2Fflotiq%2Fflotiq-nextjs-event-2)

Or to [Netlify](https://www.netlify.com/):

[![Deploy](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https%3A%2F%2Fgithub.com%2Fflotiq%2Fflotiq-nextjs-event-2)

## Learning Next.js

Looking for more guidance? Full documentation for Next.js lives [on the website](https://nextjs.org/). Here are some places to start:

- **To dive straight into code samples, head [to the Next.js documentation](https://nextjs.org/docs/getting-started).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## Collaborating

If you wish to talk with us about this project, feel free to hop on our [![Discord Chat](https://img.shields.io/discord/682699728454025410.svg)](https://discord.gg/FwXcHnX).

If you found a bug, please report it in [issues](https://github.com/flotiq/flotiq-nextjs-event-2/issues).
