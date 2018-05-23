import * as fs from "fs";
import * as path from "path";
const makeDir = require('make-dir');

export default (buffer: Buffer, name: string) => {
    makeDir("download")
        .then(folderPath => {
            const filePath = path.join(folderPath, `${name}.pdf`);
            
            fs.writeFile(filePath, buffer, (err) => {
                if (err) throw err;
        
                console.log(`File saved as '${filePath}'`);
              });
        });
};
