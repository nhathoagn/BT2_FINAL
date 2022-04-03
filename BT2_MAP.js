const  fs = require('fs').promise;
const path = require('path')

const  result = [];

async function loop_dir(dir) {
        fs.readdir(dir).map( async file =>{
       const filePath = path.join(dir, file);
       const stats = await fs.stat(filePath);
       if (stats.isDirectory()) {
           await loop_dir(filePath);
           await delay(1000);
       } else {
           result.push( await readFile(filePath))
       }
   })
}

async function readFile(filePath) {
    let reg_txt = /^.*\.(txt)$/.exec(filePath);
    if (reg_txt != null) {
        return await fs.readFile(filePath, {encoding: 'utf8', flags: 'r'})
    }
}

async function main() {
    const dir = './folder-parent/'
    await loop_dir(dir)
    console.log(result)
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

// (async () => main())()
// console.log(result)
main()