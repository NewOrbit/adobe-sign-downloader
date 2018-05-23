import getArgs from "./get-args";
import * as fs from "fs";
const AdobeSignSdk = require("adobe-sign-sdk");

const args = process.argv.slice(2);
const { documentType, accessToken, documentId } = getArgs(args);

const context = new AdobeSignSdk.Context();
const libraryDocuments = new AdobeSignSdk.LibraryDocumentsApi(context);

libraryDocuments.getCombinedDocument({ accessToken }, documentId)
    .then(a => {
        console.log("about to write");
        fs.writeFile(`${documentId}.pdf`, a, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
          });
    });