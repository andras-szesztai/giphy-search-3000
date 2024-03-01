# Welcome to Giphy Search 3000

## Prerequisites

1. You need to generate an API key from [Giphy Developers Portal](https://developers.giphy.com/), when your key is ready, add it to an `.env` file in the root dir (see example file).
2. You either need to have `node` (at least 18) or `docker` installed on your machine, please follow instructions described below accordingly.

## Running the project locally with node

1. Clone this repository to your machine, `cd` into it and run `npm ci`. This will install all packages you need in place to run this project.
2. When the installation finished successfully, you can run `npm run dev`, which will open the app on port 3000 (you can update that in the `vite.config.ts` file).

## Running the project locally using docker

1. Clone this repository to your machine, `cd` into it.
2. Make sure you have Docker Desktop running, in your terminal you can run `docker build . -t "giphy-search-3000"` (you can name the image to your liking).
3. When the composing finished, you can run `docker run -d -p 3000:3000 giphy-search-3000` (you can update port in the `vite.config.ts` file). You can access the running app on port 3000.
