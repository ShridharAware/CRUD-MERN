const express = require("express");
const userRoute = require("../routes/user.route");
const router = express.Router();
const defaultRoutes = [
  {
    path: "/create",
    route: userRoute,
  },
  {
    path: "/users",
    route: userRoute,
  },
  {
    path: "/update",
    route: userRoute,
  },
  {
    path: "/delete",
    route: userRoute,
  },
];
defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});
module.exports = router;
