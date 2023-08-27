// now to import lib.js using CJS
// const lib = require('./lib.js')
// IMPORTING USING ES
// import { sum, diff } from "./lib.js";
// console.log(sum, diff);
// console.log(sum(3, 4), diff(4, 3));
// console.log("HII");
// import { readFileSync } from "fs";
// import { createServer } from "http";
// const demo = { age: 10 };
// const server = createServer((req, res) => {
//   //(request , response) -> format to be followed and it's a callback function
//   console.log(req.url);

//   if (req.url.startsWith("/product")) {
//     const id = req.url.split("/")[2];
//     const product = products.find((p) => p.id === +id); //+ will change string to number
//     res.setHeader("Content-Type", "text/html");
//     let modified = index
//       .replace("**title**", product.title)
//       .replace("**url**", product.thumbnail)
//       .replace("**price**", product.price)
//       .replace("**rating**", product.rating)
//       .replace("**discount**", product.discountPercentage)
//       .replace("**description**", product.description);
//     res.end(modified);
//     return;
//   }

//   // NOW MAKING CUSTOM CASES FOR API ENDPOINTS or ROUTING
//   switch (req.url) {
//     case "/":
//       res.setHeader("Content-Type", "text/html"); //-- to to define content/file as HTML or JSON
//       res.end(index);
//       break;
//     case "/data":
//       res.setHeader("Content-Type", "application/json");
//       res.end(JSON.stringify(data));
//       break;
//     default:
//       res.writeHead(404, "NT FOUND"); //to ouput the custom status
//       res.end();
//   }
//   console.log("server started");
//   //   res.setHeader("CHECKER", "VALUE");
//   //   res.end(JSON.stringify(demo));-- to convert json file to string format
//   //   res.end("<h1>hello</h1>"); --- used to show html
// });
// server.listen(8080);

import Express from "express";
import router from "./routes/router.js";
import routers from "./routes/users.js";
const server = Express();
import morgan from "morgan";
// MIDDLEWARE
// _Application level middleware example_
// server.use((req, res, next) => {
//   console.log(
//     req.method,
//     req.ip,
//     req.hostname,
//     new Date(),
//     req.get("User-Agent")
//   );
//   next();
// });
// route level middleware
// authentiocation on whole thing
// const auth = (req, res, next) => {
//   // console.log(req.query);
//   if (req.body.password == "123") {
//     next();
//   } else {
//     res.sendStatus(401);
//   }
// };
// server.use(auth);

// body parser -- now by default i express (express.json()) , used to understand body as json
//server.use(Express.static("public")); //--use for static hosting
// third party middleware
// server.use(morgan("dev"));
server.use(morgan("combined"));
server.use(Express.json());

// direct routing is not suggested for higher level application , for that we will use express.route
server.use("/products", router);
server.use("/users", routers);
// this / will act as routing --
// example
// localhost:8080/p/products/1 & if i write / api then the link will be localhost:8080/api/products/1

//LIST OF API's METHODS WE ARE GOING TO USE
// API - ENDPOINT
// example of url parameter -- here :id is variabe and product is fixed
// server.get("/product/:id", (req, res) => {
//   res.json({ type: "GET" });
// });

// if want to apply auth to specific path, we will give auth obj to the server path
// server.get("/", (req, res) => {
//   console.log(req.params);
//   res.json({ type: "GET" });
// });
// server.post("/", (req, res) => {
//   res.json({ type: "POST" });
// });
// server.put("/", (req, res) => {
//   res.json({ type: "PUT" });
// });
// server.delete("/", (req, res) => {
//   res.json({ type: "DELETE" });
// });
// server.patch("/", (req, res) => {
//   res.json({ type: "PATCH" });
// });

// server.get("/", (req, res) => {
//   // res.send("<h1>HELLO</h1>"); // display hello as a text in html
//   //res.sendFile("/Users/yadav/Desktop/node-app/index.html");
//   // res.json(products)
//   // res.sendStatus(200);
//   // or can also send status as
//   res.status(200).send("<h1>HELLO</h1>");
// });
server.listen(8080);
