import getArgs from "./get-args";
import writeFile from "./write-file";
import getEndpoint from "./get-endpoint";

const args = process.argv.slice(2);
const { documentType, accessToken, documentId } = getArgs(args);

const getCombinedDocument = getEndpoint(documentType);
getCombinedDocument({ accessToken }, documentId)
    .then(a => {
        console.log("about to write");
        writeFile(a, documentId, documentType);
    })
    .catch(err => {
        console.log("An error occured when getting the document:");
        console.log(`${err.errorMessage} (${err.apiCode} - ${err.httpCode})`);
    });
