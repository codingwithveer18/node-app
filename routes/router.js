import {
  createproduct,
  getproduct,
  getproductbyid,
  replaceproduct,
  updateproduct,
  deleteproduct,
} from "../controller/products.js";

import Express from "express";
const router = Express.Router();

router
  // Create Api--- POST/products
  // It is generally base url or API root , example--google.com/api/v2/
  .post("/", createproduct)

  // THis below api generaaly is of READ type (GET /products)
  .get("/", getproduct)

  // To read only 1 product (GET /products/:id)
  .get("/:id", getproductbyid)

  // Update Api--- PUT/products/:id(data overwritten & if not mention rest feilds , they will be deleted)
  .put("/:id", replaceproduct)

  // Update Api--- PATCH/products/:id(data overwritten & only mentions objects will be modified , rest properties will remain same)
  .patch("/:id", updateproduct)

  // Delete Api--- DELETE/products/:id(batch deletion is not allowed)
  .delete("/:id", deleteproduct);

export default router;
