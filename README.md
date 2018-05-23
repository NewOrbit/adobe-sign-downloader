# adobe-sign-downloader

This package can be used to download files from Adobe Sign for agreements and library documents.

## Installation

    npm install -g adobe-sign-downloader

## Usage

    adobe-sign-downloader [documentType] [accessToken] [documentId]

    adobe-sign-downloader agreement abc123 def456

`documentType` is the type of document you want to download - either `agreement` or `libraryDocument` (case sensitive).

`accessToken` is your Adobe Sign access token.

`documentId` is the ID of the document you wish to download.

This will create a folder `adobe-sign-downloader` in your current directory, and will place the downloaded PDF there.

## License

Made with :sparkling_heart: by [NewOrbit](https://www.neworbit.co.uk/) in Oxfordshire, and licensed under the [MIT Licence](LICENCE)
