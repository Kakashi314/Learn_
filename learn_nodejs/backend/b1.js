const express=require("express")
const app =express();
let port=80;
app.get('/',(req,res)=>{
    res.send("sdkajdsa")
})
app.get('/about',(req,res)=>{
    res.send("aboyt")
})
app.listen(port,()=>{
    console.log(`port is${port}`)

})