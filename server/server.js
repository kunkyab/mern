const express = require("express");
const app = express();

const PORT = 5000;

app.use(cors({
origin:["https://mern-server-ebpmzq5ql-tenzinkunkyabs-projects.vercel.app/"],
methods:["POST","GET"],
credentials:true,
}));
app.get('/',(req,res)=>{

  res.send("<h2>free tibet</h2>")
})


app.listen(PORT, ()=>{
  console.log(`server listening to ${PORT}`);
})