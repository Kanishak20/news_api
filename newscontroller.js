const asyncHandler = require("express-async-handler");
const getnews = asyncHandler(async (req,res)=>{
    res.status(200).json({message:"get all news"});
});
// const getContact =asyncHandler(async (req,res)=>{
//     res.status(200).json({message:${req.params.id}});
// });

const getAllnews = asyncHandler(async (req, res) => {
    const contacts = await news.find({});
    res.status(200).json(news);
});

const getnew = asyncHandler(async (req, res) => {
    const news = await news.findById(req.params.id);
    if (!news) {
        res.status(404);
        throw new Error("news not found");
    }
    res.status(200).json(news);
});


const createnews =asyncHandler(async(req,res)=>{
    console.log(" the request body is:",req.body);
    const {name,email,phone}= req.body;
    if(!name ||!email || !phone){
        res.status(400);
        throw new Error ("All fields are mandatory!");
    }
    const news =await news.Create({
        name,
        email,
        phone,
    });
  //  res.status(200).json({message:"add a contacts"});
  res.status(201).json(contact);
});


// const updatenews =asyncHandler(async(req,res)=>{
//     res.status(200).json({message:"update news"});
// });
// const deleteContact =asyncHandler(async(req,res)=>{
//     res.status(200).json({message:"delete news"});
// });


const updatenews = asyncHandler(async(req,res)=>{
    const news = await news.findById(req.params.id);
    if(!news)
    {
        res.status(404);
        throw new Error("news not Found");
    }
    const updatedContact = await news.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );
    res.status(200).json(updatednews)
});



const deleteNews= asyncHandler(async(req,res)=>{
    const news = await news.findById(req.params.id);
    if(!news){
        res.status(404);
        throw new Error("news not Found");
    }
    await news.deleteOne({});
    res.status(200).json(news);
});

module.exports ={getContacts,getContact,createContact,updateContact,deleteContact};