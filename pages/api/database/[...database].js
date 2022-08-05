import { MongoClient, ObjectId } from "mongodb";
import { URL } from "url";
import { getToken } from "next-auth/jwt";

const dbName = "tiktokClone";

const secret = process.env.JWT_SECRET;

let collection = null;

let main = async () => {
  let url = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@videos.xpaadu5.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`;
  if (!process.env.USER || !process.env.PASSWORD || !process.env.DATABASE) {
    url = "mongodb://localhost:27017";
    const client = new MongoClient(url);
    await client.connect();
    const db = client.db(dbName);
    collection = db.collection("videos");

    //  const deleteResult = await collection.deleteMany({});
  } else {
    const client = new MongoClient(url);
    let handler = await client.connect();
    let db = handler.db("videos");
    collection = db.collection("videos");
    //   const deleteResult = await collection.deleteMany({});
  }
};

let createPost = async ({
  videoUrl,
  songName,
  imageUrl,
  description,
  user,
  userImage,
}) => {
  if (
    !verifyUrl(videoUrl) ||
    !verifyUrl(imageUrl) ||
    !songName ||
    !user ||
    !description
  )
    return false;
  let schema = {
    videoUrl,
    songName,
    imageUrl,
    description,
    user,
    userImage,
    likes: [],
    comments: [],
  };
  return schema;
};

const verifyUrl = (string) => {
  try {
    new URL(string);
    return true;
  } catch (err) {
    return false;
  }
};

const insertOne = async (schema) => {
  const insertResult = await collection.insertOne(schema);
  return insertResult;
};

const getThree = async () => {
  if (!collection) return false;
  let count = await collection.count();
  let findResult = null;
  if (count <= 3) {
    findResult = await collection.find({}).limit(3).toArray();
  } else {
    findResult = await collection
      .aggregate([{ $sample: { size: 3 } }])
      .toArray();
  }

  return findResult;
};

const updateLikes = async (schema, id) => {
  let updateResult = await collection.updateOne(
    { _id: ObjectId(id) },
    { $set: schema }
  );
  return updateResult;
};
const findVideo = async (videoId) => {
  const findResult = await collection
    .find({ _id: ObjectId(videoId) })
    .toArray();
  return findResult;
};

export default async function handler(req, res) {
  const token = await getToken({ req, secret });
  if (!token) return res.status(401).redirect("/login");

  if (!collection) await main();
  const url = req.query;
  const route = url.database[0];

  if (!route) return res.redirect("/");

  if (req.method === "POST") {
    if (route === "create") {
      const { videoUrl, imageUrl, songName, description, user, userImage } =
        req.body;
      let response = await handleCreate({
        videoUrl,
        imageUrl,
        songName,
        description,
        user,
        userImage,
      });
      if (!response) return res.status(422).json({ error: true });
      res.json({ success: true });
    }

    if (route === "get") {
      let response = await handleGet();
      let { user } = req.body;
      if (!response || !user) return res.status(422).json({ success: false });
      response = response.map((e) => {
        const liked = e.likes.find((j) => j.user === user);

        e.likes = e.likes.length;
        e.liked = liked ? true : false;
        return e;
      });
      //   console.log(response);
      return res.status(200).json({ response });
    }

    if (route === "like") {
      const { user, videoId, liked } = req.body;
      if (!user || !videoId) return res.status(422).json({ error: true });
      let response = handleLike({ user, videoId, liked });
      return res.status(200).json({ success: true });
    }
  }
}

let handleCreate = async ({
  videoUrl,
  imageUrl,
  songName,
  description,
  user,
  userImage,
}) => {
  let response = await createPost({
    videoUrl,
    imageUrl,
    songName,
    description,
    user,
    userImage,
  });
  if (!response) return false;
  let insertResponse = await insertOne(response);
  delete response._id;
  return response;
};

let handleGet = async () => {
  let videoList = await getThree();

  return videoList;
};

let handleLike = async ({ user, videoId, liked }) => {
  let video = await findVideo(videoId);
  if (!video?.length) return false;
  let { likes } = video[0];
  let isLiked = likes?.find((e) => e.user === user);
  if (liked && isLiked) {
    return true;
  } else if (!liked && isLiked) {
    let likes = video[0].likes.filter((e) => e.user !== user);
    video[0].likes = likes;
    let result = await updateLikes(video[0], videoId);
    return true;
  } else if (liked && !isLiked) {
    let newLike = { user };
    video[0].likes = [...likes, newLike];
    let result = await updateLikes(video[0], videoId);
    return true;
  } else {
    return false;
  }
};
