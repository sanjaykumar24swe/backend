const route = express.Router()
const user = require('./models/user.js')
route.post("/question",async(req,res)=>{
  const {question,name} = req.body;
  try{
   const newUser = await user.findOne({name});
   newUser.questions.push(question);
   await newUser.save();
   res.send({sucess:true})
  }
  catch(e)
  {
    console.log(e.message)
    res.send(e.message)
  }
})
route.post("/:name",async(req,res)=>{
    const {name} = req.body;
    try{
    await user.create({
        name
    })
    res.send({sucess:true});
}catch(e){
console.log(e.message);
res.send(e.message)
}
 })
 route.get("/fetch",async(req,res)=>{
    const {name} = req.body;
    try{
        const newUser = await user.findOne({name});
        res.send(newUser);
    }
    catch(e)
    {
        console.log(e.message)
        res.send(e.message)
    }
 })
 module.export = route;