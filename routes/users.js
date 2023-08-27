import {
    createuser,
    getuser,
    getuserbyid,
    replaceuser,
    updateuser,
    deleteuser
  } from "../controller/users.js";
  
  import Express from "express";
  const router = Express.Router();
  
  router
    // Create Api--- POST/products
    // It is generally base url or API root , example--google.com/api/v2/
    .post("/", createuser)
  
    // THis below api generaaly is of READ type (GET /products)
    .get("/", getuser)
  
    // To read only 1 product (GET /products/:id)
    .get("/:id", getuserbyid)
  
    // Update Api--- PUT/products/:id(data overwritten & if not mention rest feilds , they will be deleted)
    .put("/:id", replaceuser)
  
    // Update Api--- PATCH/products/:id(data overwritten & only mentions objects will be modified , rest properties will remain same)
    .patch("/:id", updateuser)
  
    // Delete Api--- DELETE/products/:id(batch deletion is not allowed)
    .delete("/:id", deleteuser);
  
  export default router;
  