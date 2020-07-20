let {getRows} =  require("./lib/gsutil.js");
let {genBatFile, genSqlFile} = require("./lib/genFile4Loader.js");

let fs = require('fs');
let outputPath = "./out";


// create output folder
if(!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath)
}

(async () => {

    const rows = await getRows('1U1oYnzfVtUfWavnDZPYXDqjGwydKuFo7UnuLq0o9wVE',0)
    console.log(rows.length); // 2

    rows.map(f=>{
        genBatFile(f);
        genSqlFile(f);
    })


})();

