// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import fetch from "node-fetch";

export default async function handler(req, res) {
  const requestResponse = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${1}`
  );
  const response = await requestResponse.json();

  res.status(200).json(response);
}
