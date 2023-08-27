import { readFileSync } from 'fs';
  // const index = readFileSync("index.html", "utf-8");
  const data = JSON.parse(readFileSync("data.json", "utf-8"));
  const products = data.products;
  // REST API
  //  C (CREATE)    R (READ)    U(UPDATE)     D (DELETE)
  const createproduct = (req, res) => {
    console.log(req.body);
    products.push(req.body);
    res.status(201).json(req.body);
  };
  const getproduct = (req, res) => {
    res.json(products);
  };
  const getproductbyid = (req, res) => {
    const id = +req.params.id; //+ is used to convert string to number
    const prdt = products.find((p) => p.id === id);
    res.json(prdt);
  };
  const replaceproduct = (req, res) => {
    const ID = +req.params.id; //+ is used to convert string to number
    const prdtIndex = products.findIndex((p) => p.id === ID);
    products.splice(prdtIndex, 1, { ...req.body, id: ID });
    // splice implementation --(Kis index par change , kitne elements ko delete krna h , put new object)
    // {...req.body,id:ID}-it is basically the spread operator  where  all properties of req.body will come and will spread and id will add to it (id is from the url)
    res.status(201).json();
  };
  const updateproduct = (req, res) => {
    const ID = +req.params.id;
    const prdtIndex = products.findIndex((p) => p.id === ID);
    const prdt = products[prdtIndex];
    products.splice(prdtIndex, 1, { ...prdt, ...req.body });
    // IN THIS SPLICE {...prdt,...req.body} ,  first prdt content will be use and the ...req.body will use to oerwrote the parameters passed in the body.
    res.status(201).json();
  };
  const deleteproduct = (req, res) => {
    const ID = +req.params.id;
    const prdtIndex = products.findIndex((p) => p.id === ID);
    const prdt = products[prdtIndex];
    products.splice(prdtIndex, 1);
    res.status(201).json(prdt);
  };

  export {
    createproduct,
    getproduct,
    getproductbyid,
    replaceproduct,
    updateproduct,
    deleteproduct
  };
