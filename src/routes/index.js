import { Router } from "express";
const router = Router();
router.get("/", (req, res) => res.render("index", { title: "Home" }));
router.get("/meetpet", (req, res) =>
  res.render("meet_pet", { title: "Meet Your Pet" })
);
router.get("/weather", (req, res) =>
  res.render("weather", { title: "WeatherApp" })
);

export default router;
