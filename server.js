
const contactDb= require("./config/dbConnection");
const express = require("express");
//const { getnews, createnews, updatenews, deletenews } = require("./controller/newsController");
const errorHandler = require("./middleware/errorHandler");

const app = express();
const port = 9000;
//  app.get("/api/news",(req,res)=>{
// 	res.status(200).json({message:"get news"}); });
//  app.get("/api/news/:id",(req,res)=>{
// 	res.status(200).json({message:`${req.params.id}`}); });


//  app.post("/api/news",(req,res)=>{
//  	res.status(200).json({message:"post aconta"});
//  });

// app.put("/api/news",(req,res)=>{
// 	res.status(200).json({message:"update contact"});
//  });
//  app.delete("/api/news",(req,res)=>{
// 	res.status(200).json({message:"delete contact"});
//  });




contactDb();
app.use(express.json());
app.use("/api/news" ,require("./routes/router"));
 app.use(errorHandler);

//app.use(getnews,createnews,updatenews,deletenews);
app.listen(port,()=>{
	console.log(`Server running onn port ${port}`);
})



