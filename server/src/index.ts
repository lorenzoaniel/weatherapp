import app from "./app";
import env from "./utils/validateEnv";

const port = env.PORT;

try {
	app.listen(port, () => {
		console.log("server started at " + port);
	});
} catch (error) {
	console.error(error);
}
