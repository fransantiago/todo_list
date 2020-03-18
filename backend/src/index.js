import Server from "./config/server.config";

const PORT = process.env.APP_PORT || 3333;

Server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
