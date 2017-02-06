const fs = require('fs')

// 异步文件的删除
fs.unlink("./toDelete.txt", (err)=>{
    if(err) {
        console.log('delete file error %s', err);
    }else{
        console.log("success delete file toDelete.txt");
    }
});

// 同步文件删除操作方式 try-catch 执行同步文件删除
// fs.unlinkSync('./toDelete.txt');
// console.log("success delete file content");

console.log("over")