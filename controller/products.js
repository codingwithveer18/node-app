// import { readFileSync } from 'fs';
//   // const index = readFileSync("index.html", "utf-8");
//   const data = JSON.parse(readFileSync("data.json", "utf-8"));
//   const products = data.roducts;
import model from "../model/products.js";
const Product = model;
// REST API
//  C (CREATE)    R (READ)    U(UPDATE)     D (DELETE)
const createproduct = async (req, res) => {
  // console.log(req.body);
  // products.push(req.body);
  const product = new Product(req.body);
  // product.title = "MI A3";
  // product.description = "mera phone";
  // product.rating = "10";
  // product.save((err, doc) => {
  //   console.log(err, doc);
  // });
  await product.save(res.status(201).json(req.body));
};
const getproduct = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};
const getproductbyid = async (req, res) => {
  const id = req.params.id; //+ is used to convert string to number
  // const prdt = products.find((p) => p.id === id);
  const products = await Product.findById(id);
  res.json(products);
};
const replaceproduct = async (req, res) => {
  const ID = req.params.id; //+ is used to convert string to number
  // const prdtIndex = products.findIndex((p) => p.id === ID);
  // products.splice(prdtIndex, 1, { ...req.body, id: ID });
  // splice implementation --(Kis index par change , kitne elements ko delete krna h , put new object)
  // {...req.body,id:ID}-it is basically the spread operator  where  all properties of req.body will come and will spread and id will add to it (id is from the url)
  try {
    const product = await Product.findOneAndReplace({ _id: ID }, req.body, {
      new: true,
    });
    res.status(201).json(product);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};
const updateproduct =async (req, res) => {
  const ID = req.params.id;
  // const prdtIndex = products.findIndex((p) => p.id === ID);
  // const prdt = products[prdtIndex];
  // products.splice(prdtIndex, 1, { ...prdt, ...req.body });
  // IN THIS SPLICE {...prdt,...req.body} ,  first prdt content will be use and the ...req.body will use to oerwrote the parameters passed in the body.
  try {
    const product = await Product.findOneAndUpdate({ _id: ID }, req.body, {
      new: true,
    });
    res.status(201).json(product);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};
const deleteproduct = async (req, res) => {
  const ID = req.params.id;
  // const prdtIndex = products.findIndex((p) => p.id === ID);
  // const prdt = products[prdtIndex];
  // products.splice(prdtIndex, 1);
  // res.status(201).json(prdt);
  try {
    const product = await Product.findOneAndDelete({ _id: ID});
    res.status(201).json(product);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

export {
  createproduct,
  getproduct,
  getproductbyid,
  replaceproduct,
  updateproduct,
  deleteproduct,
};
