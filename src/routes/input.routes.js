const { verifyToken } = require("../middlewares/auth");
const {
  create,
  get,
  getId,
  update,
  remove,
  getMonth,
} = require("../controllers/input.controller");

exports.inputRoutes = (app) => {
  app.post("/input", verifyToken, create);
  app.get("/input", verifyToken, get);
  app.get("/input/:id", verifyToken, getId);
  app.put("/input/:id", verifyToken, update);
  app.delete("/input/:id", verifyToken, remove);
  app.get("/input/month/filter/:id", verifyToken, getMonth);
};
