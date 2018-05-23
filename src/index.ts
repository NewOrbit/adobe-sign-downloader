import getArgs from "./get-args";

const args = process.argv.slice(2);
const { documentType, accessToken, documentId } = getArgs(args);

console.log(documentType, accessToken, documentId);