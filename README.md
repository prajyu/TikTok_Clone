# TikTok Clone

## _Full Stack tiktok clone using nextjs_


[<img src="http://res.cloudinary.com/unicodeveloper/image/upload/v1524776764/next-jslogo.svg" align="right" width="80">](https://nextjs.org/)

**TikTok Clone build using next js.**

[![N|APP](https://raw.githubusercontent.com/prajyu/TikTok_Clone/main/public/tiktok.png)](https://tiktokclone-prajyu.vercel.app/)
Click the icon above to access demo app ☝️
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
