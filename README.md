# TikTok Clone

## _Full Stack tiktok clone using nextjs_

[![N|NEXT.js](https://camo.githubusercontent.com/affcb4d381c3f7305bd0598b9d426c17fdfc2bd7cd7f45352001834ab25f66bc/687474703a2f2f7265732e636c6f7564696e6172792e636f6d2f756e69636f646576656c6f7065722f696d6167652f75706c6f61642f76313532343737363736342f6e6578742d6a736c6f676f2e737667)](https://nextjs.org/)

TikTok Clone build using next js.

## Features

- Upload videos.
- Google Authentication
- Watch and like them

## Tech

- [Next js](https://nextjs.org/) - The React Framework
  for Production
- [Mognodb](https://www.mongodb.com/) - No SQL database

## Installation

TikTok Clone requires [Node.js](https://nodejs.org/) to run.

prequisites:

- node.js
- npm
- next.js
- mongodb (driver)

Create a &nbsp; `.env`&nbsp; file

```
GOOGLE_CLIENT_ID=XXXXXXXXXXXXXX // Obtain google client id to make google auth work
GOOGLE_CLIENT_SECRET=XXXXXXXXXXXXXX // Obtain google client secret to make google auth work
NEXTAUTH_URL=http://localhost:3000/ // Change this to your deployed url in production
JWT_SECRET=XXXXXXXXXXXXXX // A random string to use in JWT
```

Install the dependencies and start the server.

```sh
git clone https://github.com/prajyu/TikTok-Clone.git
cd TikTok-Clone
npm i
npm run dev
```

For production environments...

edit the &nbsp; `.env` &nbsp; file and add these three enviornment variables

```
USER=XXXXXXXXXXXXXX // Mongo DB credentials
PASSWORD=XXXXXXXXXXXXXX // Mongo DB credentials
DATABASE=XXXXXXXXXXXXXX // Mongo DB credentials
```

```sh
npm run build
npm start
```

Verify the deployment by navigating to your server address in
your preferred browser.

```sh
localhost:3000
```

## License

MIT
