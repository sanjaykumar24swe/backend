const route = express.Router()
const user = require('./models/user.js')
route.post("/question",async(req,res)=>{
  const {question,name} = req.body;
  try{
   const newUser = await user.findOne({name});
   newUser.questions.push(question);
   await newUser.save();
  }
  catch(e)
  {
    console.log(e)
  }
})
route.post("/:name",async(req,res)=>{
    const {name} = req.body;
    try{
    user.create({
        name
    })
}catch(e){
console.log(e.message);
}
 })
 module.export = router;