const express = require("express");
const app = express();

const PORT = 5000;

app.use(cors({
origin:["https://deploy-mern-1whq.vercel.app"],
methods:["POST","GET"],
credentials:true,
}));
app.get('/',(req,res)=>{

  res.send("<h2>free tibet</h2>")
})


app.listen(PORT, ()=>{
  console.log(`server listening to ${PORT}`);
})