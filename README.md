# 1. Configure the TypeScript on PC

## Install ts-node and typescript globbely

```
npm install -g typescript ts-node
```

## Configure TypeScript On Project
In this create a file called tsconfig.json
```
tsc --init
```

## Make this Changes on the tsconfig.json

- "outDir": "./dist",
- "rootDir" : "./src"
- "moduleResolution": "node", 

## Install following dependencies & devDependencies

```
npm install express
npm install -dev typescript ts-node nodemon @types/node @types/express 
```

## Create Scripts in package.json

```
 "start": "node dist/index.js", 
 "dev": "nodemon src/index.ts",
 "build": "tsc -p ."
```
#### In this use nodemon when changing the server we don't want to restart the server  in development mode

## Use the scripts with npm run
```
npm run dev // To run in development mode
npm run build // To compile typescript file to js
npm run start // To Run the js file
```
# 2. Add data To the Server

## First https://www.mockaroo.com/ get data file from this

## Then uncomment the following configuration in ts.config file
```
"resolveJsonModule": true, 
```

## Then import data and add to server and resonse the data
```
import data from './data/data.json';

app.get("/", (request: Request, response: Response) => {
  console.log(data);
  response.json(data);
  // response.sendStatus(200);
});
```

# 3. Add Static Route For serving

```
// This is for the public folder on path /
app.use(express.static('public')); //In this we can access any file in the public folder in root directory

// this is for images folder on path images
app.use('/images', express.static('images')); //In this we can access any file in the images folder in root directory
```
