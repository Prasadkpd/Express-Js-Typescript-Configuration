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
#### Use the scripts with npm run

