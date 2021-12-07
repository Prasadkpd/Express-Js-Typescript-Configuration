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

# 4. Routing Parameters

```
app.get('/item/:id', (request: Request, response: Response) => {
  console.log(request.params.id); // Get the parameter id in the request
  let user = Number(request.params.id); //Convert the string to Number format
  console.log(user);
  console.log(data[user]);
  response.send(data[user]);
});
```
# 5. Route Handlers
You can provide multiple callback functions that behave like middleware to handle a request. The only exception is that these callbacks might invoke next('route') to bypass the remaining route callbacks. You can use this mechanism to impose pre-conditions on a route, then pass control to subsequent routes if there’s no reason to proceed with the current route.

```
app.get('/item/:id', (request: Request, response: Response, next:NextFunction) => {
  console.log(request.params.id); // Get the parameter id in the request
  let user = Number(request.params.id); //Convert the string to Number format
  console.log(user);
  console.log(data[user]);
  response.send(data[user]);
  next();
}, (response: Response, request: Request) => {
  //In this can make a function before or after a request
  console.log('Did you get the right data');
});
```

# 6. Routing Common methods

- Method	             Description
- res.download()	     Prompt a file to be downloaded.
- res.end()	          End the response process.
- res.json()	         Send a JSON response.
- res.jsonp()	        Send a JSON response with JSONP support.
- res.redirect()	     Redirect a request.
- res.render()	       Render a view template.
- res.send()	         Send a response of various types.
- res.sendFile()	     Send a file as an octet stream.
- res.sendStatus()	   Set the response status code and send its string representation as the response body.
