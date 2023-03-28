import { cleanEnv } from "envalid";
import { port, str, url } from "envalid/dist/validators";
import "dotenv/config"; //used to load env vars from env file

export default cleanEnv(process.env, {
	ALLOWEDORIGINS: str(url()),
	PORT: port(),
});
