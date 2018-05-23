import * as fs from "fs";
import * as path from "path";
import { DocumentType } from "./document-type";

// tslint:disable-next-line:no-var-requires
const makeDir = require("make-dir");

export default (buffer: Buffer, name: string, subFolder: DocumentType) => {
    const folderName = path.join("download", subFolder);

    makeDir(folderName)
        .then(folderPath => {
            const filePath = path.join(folderPath, `${name}.pdf`);

            fs.writeFile(filePath, buffer, (err) => {
                if (err) { throw err; }

                console.log(`File saved as '${filePath}'`);
              });
        });
};
