require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const authRoute = require("./router/auth");
const contactRoute = require("./router/contact");
const connectToDB = require("./db");
const errorMiddleware = require("./middlewares/error-middleware");
const services = require("./controller/service-controller");
const adminRoute = require("./router/admin-router");
const path = require("path");
var MongoClient = require("mongodb").MongoClient;



app.use(cors({
  origin:["https://at-frontend.vercel.app"],
  methods:["POST","GET","PUT","PATCH","DELETE"],
  credentials:true,
}));
app.get("/",(req,res)=>{
  res.json("Hello manish");
})
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/data", services);
app.use("/api/admin", adminRoute);



app.use(errorMiddleware);
// step2 hosting
const PORT=3001;

connectToDB().then(() => {
  app.listen(PORT, () => {
    console.log(`server started at post ${PORT}`);
  });
});
