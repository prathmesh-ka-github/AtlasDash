<p align="center">
    <img src="./AtlasDashMainLogo.png" />
    <br>
    A fun fast-paced multiplayer co-op geography quiz game
<p/>

⚠️ **Note:** AtlasDash is currently under active development. Server-side infrastructure is still in progress, and a public beta will not be available until the backend goes live. Stay tuned for updates.


## About
AtlasDash is a fast-paced, browser-based geography game. No matter if you are a middle schooler, highschooler or just a curious mind and map enthusiast AtlasDash is made for you! The premise is simple: a country name appears, and you have to find it on the world map — as quickly as possible, with 60 seconds on the clock.

What starts as an easy warm-up quickly becomes a test of real geographic knowledge. Can you tell Chad from Niger at a glance? Do you know exactly where Kyrgyzstan sits? AtlasDash separates the casual map-gazers from the true geography nerds.

With an instant-feedback scoring system (+5 for correct, −1 for wrong), every click matters. There's no room to guess recklessly — precision and speed both count. The 60-second format keeps sessions short and replayable, making it easy to jump in for a quick round or lose an hour chasing a higher score.

Whether you're studying for a geography exam, killing time, or just want to prove you're the smartest person in the room about world maps — AtlasDash has you covered.

## Multiplayer Co-op and Classroom mode

AtlasDash goes beyond solo play with a built-in co-op multiplayer mode. Team up with a friend or classmate and combine your geography knowledge to chase a higher score together. Designed with education in mind, AtlasDash features a dedicated Classroom System that lets an entire class compete simultaneously. Teams of two go head-to-head against other pairs in the same classroom, making it a perfect tool for teachers who want to turn a geography lesson into a competitive, engaging experience.

<p align="center">
    <img src="./Map.png" />
<p/>


## How to Play

1. A **country name** appears on the bottom panel
2. **Identify and Click the correct country** on the world map
3. Score points and keep going until time's up


## Scoring

| Action | Points |
|---|---|
| ✅ Correct answer | **+5** |
| ❌ Incorrect answer | **−1** |
| ⏱️ Time limit | **60 seconds** |


## Features

- Interactive world map
-  Instant score feedback
- 60-second countdown timer
- Auto-advancing questions
- Full world country coverage
- solo play
- Multiplayer option
- Co-op mode

## Built With

- MongoDB
- ExpressJS
- NextJS
- NodeJS
- TailwindCSS

## Getting Started

```bash
# Clone the repository
git clone https://github.com/prathmesh-ka-github/atlasdash.git

# --- Server Side ---

# Navigate to server dir
cd atlasdash/server

# Install dependencies
npm install

# Run server
node run server



# --- Client Side ---

# Navigate to client dir
cd atlasdash/client

# Install dependencies
npm install

# Start the app
npm run dev
```
## Scripts

```
Client - 
    - dev: next dev
    - build: next build
    - start: next start
    - lint: eslint

Server -

    - server: nodemon server.js
    - test: node test.js
```


## Dependencies -
```
Client - 
    next: 16.1.6
    postcss: ^8.5.8
    react: 19.2.3
    react-dom: 19.2.3

Server - 
    - express: ^5.2.1
    - nodemon: ^3.1.14

```
## Dev Dependencies
```
Client -
    @tailwindcss/postcss: ^4.2.1
    @types/node: ^20
    @types/react: ^19
    @types/react-dom: ^19
    eslint: ^9
    eslint-config-next: 16.1.6
    tailwindcss: ^4.2.1
    typescript: ^5
```

## Contribute
1. Fork this repository.
1. Create your own branch.
1. Commit changes.
1. Submit a pull request.

your code will be reviewed and request will be merged!

note: Please refer to the DevDocs.md and follow the guide while contributing.

## License
This project is licensed under the MIT License.

Checkout [LICENSE.md](https://github.com/prathmesh-ka-github/AtlasDash/blob/main/LICENSE.md) for more info.


## Appreciation <3
Give this repo a star! Submit issues if you find bugs! 