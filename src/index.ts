import getArgs from "./get-args";
import writeFile from "./write-file";
const AdobeSignSdk = require("adobe-sign-sdk");

const args = process.argv.slice(2);
const { documentType, accessToken, documentId } = getArgs(args);

const context = new AdobeSignSdk.Context();
const libraryDocuments = new AdobeSignSdk.LibraryDocumentsApi(context);

libraryDocuments.getCombinedDocument({ accessToken }, documentId)
    .then(a => {
        console.log("about to write");
        writeFile(a, documentId, "libraryDocument");
    });