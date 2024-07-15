import { NextApiRequest, NextApiResponse } from "next";

let applications: Array<any> = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const application = req.body;
    applications.push(application);
    res.status(201).json(application);
  } else if (req.method === "GET") {
    res.status(200).json(applications);
  } else if (req.method === "DELETE") {
    const { id } = req.body;
    applications = applications.filter((app) => app.id !== id);
    res.status(204).end();
  } else {
    res.setHeader("Allow", ["GET", "POST", "DELETE"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
