const http=require("http")
const fs=require("fs")
const server=http.createServer((req,resp)=>{
    let path="./view/"
    switch (req.url) {
        case "/":
            path=path+"home.html"
            break;
            case "/about":
             path=path+"about.html"   
             break
             
            case "/contact":
             path=path+"contact.html"   
             break
        default:
            path=path+"error.html"
            break;
    }
    fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err);
            
        }else{
            resp.end(data)
        }
    })
})
server.listen(4000,()=>{
    console.log("running");
    
    
})