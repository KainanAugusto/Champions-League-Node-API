import { Router } from "express";
import * as PlayerController from "./controllers/players-controller";
import * as ClubController from "./controllers/clubs-controller";

const router = Router();

router.get("/players", PlayerController.getPlayers);
router.post("/players",PlayerController.postPlayer);
router.patch("/players/:id", PlayerController.updatePlayer);
router.delete("/players/:id", PlayerController.deletePlayer);
router.get("/players/:id", PlayerController.getPlayerById);

router.get("/clubs", ClubController.getClubs);

export default router;