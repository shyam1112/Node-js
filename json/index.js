const fs=require("fs");
const data={
    name:"Raju",
    age:15,
    gender:"male"
}
const jsonData=JSON.stringify(data);
fs.writeFile("json1.json",jsonData,(err)=>{
    console.log("Done");
})

fs.readFile("json1.json","utf-8",(err,data)=>{
    const orgData=JSON.parse(data);
    console.log(orgData);
})