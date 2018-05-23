import { DocumentType } from "./document-type";

// tslint:disable-next-line:no-var-requires
const AdobeSignSdk = require("adobe-sign-sdk");

export default (documentType: DocumentType) => {
    const context = new AdobeSignSdk.Context();

    // we can assume that it's either library document or agreement as that's checked elsewhere
    const api =
        (documentType === "libraryDocument")
        ? new AdobeSignSdk.LibraryDocumentsApi(context)
        : new AdobeSignSdk.AgreementsApi(context);

    return api.getCombinedDocument;
};
