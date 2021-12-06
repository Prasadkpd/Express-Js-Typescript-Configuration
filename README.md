# Configure the TypeScript on PC

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

