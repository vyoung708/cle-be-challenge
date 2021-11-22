import { VercelRequest, VercelResponse } from "@vercel/node";
import { pitches } from "../data/Pitches"

export default (request: VercelRequest, response: VercelResponse) => {
  response.status(200).send(pitches);
};