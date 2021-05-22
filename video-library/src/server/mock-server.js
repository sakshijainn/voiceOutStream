
import { createServer, Model, RestSerializer } from "miragejs";
import videosInfo from "../database/videosInfo"
export default function setupMockServer() {
  createServer({
    serializers: {
      application: RestSerializer
    },

    models: {
      user: Model
    },

    routes() {
      this.namespace = "api";
      this.timing = 3000;
      this.resource("videos");
    },

    seeds(server) {
      server.create("video", { ...videosInfo });
    }
  });
}