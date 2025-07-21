const bookMap =new Map();
bookMap.set("Phython","Available");
bookMap.set("Java","Checked Out");
bookMap.set("C++","Available");

const hasJava = bookMap.has("java");
console.log("Is java in the labrary?"+hasJava);

const pythonStatus=bookMap.get("python");
console.log("Pthon book status:"+pythonStatus);

console.log("Library collection:");
for(const [key, value] of bookMap){
    console.log(key+":"+value);
}
