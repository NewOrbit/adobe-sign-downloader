import { DocumentType } from "./document-type";

const exitWithInfo = () => {
    console.log("Usage:");
    console.log("    adobe-sign-downloader [documentType] [accessToken] [documentId]");
    console.log("");
    console.log("    documentType: 'libraryDocument' or 'agreement'");

    process.exit(1);
};

export default (input: string[]) => {
    if (input.length !== 3) {
        exitWithInfo();
    }

    const [ documentType, accessToken, documentId ] = input;

    if (documentType !== "libraryDocument" && documentType !== "agreement") {
        exitWithInfo();
    }

    return {
        documentType: (documentType as DocumentType),
        accessToken,
        documentId
    };
};
