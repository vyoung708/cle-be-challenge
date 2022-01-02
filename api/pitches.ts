import type { VercelRequest, VercelResponse } from "@vercel/node";
import { pitches } from "../data/Pitches";
import { isNumber } from "../utils/isNumber";

export default function (req: VercelRequest, res: VercelResponse) {
    if (req.query.playerId && isNumber(req.query.playerId.toString())) {
        res.send({"pitches": pitches.filter(p => p.pitcherId == +req.query.playerId)});
    } else {
        res.send({"message": "Player with playerId = " + req.query.playerId + " not found!"});
    }
}