function clearCutller(baseFolder){
    const fs = require('fs')
const path = require('path')

const parent = path.join(__dirname,baseFolder)
console.log(parent);

fs.readdir(`${baseFolder}`,(err,files)=>{
    if(err){
        console.log(err);
    }
    else{
        //print all files
        console.log('Files in folder: ',files);

        //Targeting individual files
        files.forEach(file => {
            const ext = path.extname(file);
            const child = path.join(parent,ext);
            
            // console.log(child)
            // Creating folders if not present
            if(!fs.existsSync(child)){
                fs.mkdirSync(child);
                console.log(`Directory ${ext} created!`);
                console.log(`Moving files to ${ext}  folders`);
                const source = path.join(parent,file)
                const destination = path.join(child,file)
                
                fs.rename(source,destination,(err)=>{
                    if(err){
                        console.log(err);
                    }
                    else{
                        console.log("Files moved Successfully!")
                    }
                })
            }
            else{
                console.log(`Moving files to ${ext}  folders`);
                const source = path.join(parent,file)
                const destination = path.join(child,file)
                
                fs.rename(source,destination,(err)=>{
                    if(err){
                        console.log(err);
                    }
                    else{
                        console.log("Files moved Successfully!")
                    }
                })
            }
        });
            
    }
})
}

clearCutller("TEST")