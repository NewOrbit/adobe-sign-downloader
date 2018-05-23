import getArgs from "./get-args";
import writeFile from "./write-file";
const AdobeSignSdk = require("adobe-sign-sdk");

const args = process.argv.slice(2);
const { documentType, accessToken, documentId } = getArgs(args);

const context = new AdobeSignSdk.Context();
const agreements = new AdobeSignSdk.AgreementsApi(context);
const libraryDocuments = new AdobeSignSdk.LibraryDocumentsApi(context);

// it can either be libraryDocument or agreement - this is checked in getArgs so it's safe to assume here
const getCombinedDocument = (documentType === "libraryDocument") ? libraryDocuments.getCombinedDocument : agreements.getCombinedDocument;
getCombinedDocument({ accessToken }, documentId)
    .then(a => {
        console.log("about to write");
        writeFile(a, documentId, documentType);
    })
    .catch(err => {
        console.log("An error occured when getting the document:")
        console.log(`${err.errorMessage} (${err.apiCode} - ${err.httpCode})`);
    });
