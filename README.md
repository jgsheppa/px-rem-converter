# Px/Rem

## Setup

Clone this repository to your local machine. Once the code is on your machine, open it with your preferred IDE.
Then run

    yarn install

Once yarn is finished installing, you can either run the application in your browser with

    yarn start

or you can load the `manifest.json` file into your browser extensions.

To build a production version of this application, run

    yarn build

This command will also trigger the script `buildPackage.js` which will create two .zip files: one for Firefox and another for Chrome.

## Node

I built this application using `node` version `v14.18.1`, so this version, any later version, or the most recent stable version should work.

## OS

This application was built and tested on a macOS with Big Sur, version 11.6.1.

## Styling

I took inspiration from the Github color schemes, particularly their colorblind light and dark modes.
