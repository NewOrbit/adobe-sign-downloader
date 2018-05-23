# @neworbit/adobe-sign-downloader

This package can be used to download `.pdf` files from Adobe Sign for agreements and library documents.

## Installation

You will need to [associate @neworbit packages with the NewOrbit MyGet registry](https://github.com/NewOrbit/development-guidelines/blob/master/how-to/npm/associate-%40neworbit-packages-with-myget.md) first.

    npm install -g @neworbit/adobe-sign-downloader

## Usage

    adobe-sign-downloader [documentType] [accessToken] [documentId]

    adobe-sign-downloader agreement abc123 def456

### `documentType`

`documentType` is the type of document you want to download - either `agreement` or `libraryDocument` (case sensitive).

### `accessToken`

`accessToken` is your Adobe Sign access token.

### `documentId`

`documentId` is the ID of the document you wish to download.
