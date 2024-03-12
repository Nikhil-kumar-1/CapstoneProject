import express from "express";
import {
  getAllJobs,
  getMyJobs,
  postJob,
} from "../controllers/jobController.js";
import { isAuthorized } from "../middlewares/auth.js";
const router = express.Router();

router.get("/getAll", getAllJobs);
router.post("/post", isAuthorized, postJob);
router.get("/getmyjobs", isAuthorized, getMyJobs);
export default router;
