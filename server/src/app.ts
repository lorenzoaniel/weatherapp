import express from "express";
import env from "./utils/validateEnv";
import cors from "cors";

const app = express();

app.use(
	cors({
		origin: env.ALLOWEDORIGINS,
		credentials: true, //decides when to include  'Access-Control-Allow-Credentials' header indicationg requests can include cookies or auth
	})
);

export default app;
