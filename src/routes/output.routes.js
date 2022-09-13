const { verifyToken } = require("../middlewares/auth");
const {
  create,
  get,
  getId,
  update,
  remove,
  getMonth,
} = require("../controllers/output.controller");

exports.outputsRoutes = (app) => {
  app.post("/outputs", verifyToken, create);
  app.get("/outputs", verifyToken, get);
  app.get("/outputs/:id", verifyToken, getId);
  app.put("/outputs/:id", verifyToken, update);
  app.delete("/outputs/:id", verifyToken, remove);
  app.get("/outputs/month/filter/:id", verifyToken, getMonth);
};
