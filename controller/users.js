import { readFileSync } from 'fs';
  // const index = readFileSync("index.html", "utf-8");
  import path from 'path';
  const data = JSON.parse(readFileSync(path.resolve("data.json"), "utf-8"));
  const users = data.users;
  // REST API
  //  C (CREATE)    R (READ)    U(UPDATE)     D (DELETE)
  const createuser = (req, res) => {
    console.log(req.body);
    users.push(req.body);
    res.status(201).json(req.body);
  };
  const getuser = (req, res) => {
    res.json(users);
  };
  const getuserbyid = (req, res) => {
    const id = +req.params.id; //+ is used to convert string to number
    const usr = users.find((p) => p.id === id);
    res.json(usr);
  };
  const replaceuser = (req, res) => {
    const ID = +req.params.id; //+ is used to convert string to number
    const usrIndex = users.findIndex((p) => p.id === ID);
    users.splice(usrIndex, 1, { ...req.body, id: ID });
    // splice implementation --(Kis index par change , kitne elements ko delete krna h , put new object)
    // {...req.body,id:ID}-it is basically the spread operator  where  all properties of req.body will come and will spread and id will add to it (id is from the url)
    res.status(201).json();
  };
  const updateuser = (req, res) => {
    const ID = +req.params.id;
    const usrIndex = users.findIndex((p) => p.id === ID);
    const usr = users[usrIndex];
    users.splice(usrIndex, 1, { ...usr, ...req.body });
    // IN THIS SPLICE {...usr,...req.body} ,  first usr content will be use and the ...req.body will use to oerwrote the parameters passed in the body.
    res.status(201).json();
  };
  const deleteuser = (req, res) => {
    const ID = +req.params.id;
    const usrIndex = users.findIndex((p) => p.id === ID);
    const usr = users[usrIndex];
    users.splice(usrIndex, 1);
    res.status(201).json(usr);
  };

  export {
    createuser,
    getuser,
    getuserbyid,
    replaceuser,
    updateuser,
    deleteuser
  };
