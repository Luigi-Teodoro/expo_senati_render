import { Router } from "express";
const router = Router();

router.get("/", (req, res) => res.render('index', { title: "NodeLaptop" }));
router.get("/laptops", (req, res) => res.render('laptops', { title: "Laptops" }));
router.get("/nosotros", (req, res) => res.render('nosotros', { title: "Nosotros" }));
router.get("/contacto", (req, res) => res.render('contacto', { title: "Contacto" }));

export default router;