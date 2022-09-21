import { Router } from "express";
import {
    deleteMeny,
  deleteUserById,
  getAllUsersWitha,
  getUserById,
  getUsersGreater,
  getUsersless,
  getuserswithsubstr,
  updateMeny,
  updateUserById,
} from "./controller/user.js";

const router = Router();

router.put("/:id", updateUserById);
router.put("/", updateMeny);
router.delete("/:id", deleteUserById);
router.delete("/", deleteMeny);
router.get("/hme", getuserswithsubstr);
router.get("/greater", getUsersGreater);
router.get("/less", getUsersless);
router.get("/:id", getUserById);
router.get("/", getAllUsersWitha);

export default router;
