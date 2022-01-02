import type { VercelRequest, VercelResponse } from "@vercel/node";
import { playerOverviews } from "../data/PlayerOverviews";
import { playerDetails } from "../data/PlayerDetails";
import { isNumber } from "../utils/isNumber";

export default function (req: VercelRequest, res: VercelResponse) {
    if (req.query.playerId && isNumber(req.query.playerId.toString())) {
        res.send({"playerDetails": playerDetails.find(p => p.playerId == +req.query.playerId)});
    } else {
        res.send({"message": "Player with playerId = " + req.query.playerId + " not found!"});
    }
}

