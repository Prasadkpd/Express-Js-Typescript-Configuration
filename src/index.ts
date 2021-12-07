import express, {Application, NextFunction, Request, Response} from "express";
import data from './data/data.json';
const app: Application = express();
const PORT = 3000;

// This is for the public folder on path /
app.use(express.static('public'));

// this is for images folder on path images
app.use('/images', express.static('images'));

app.get("/", (request: Request, response: Response) => {
  console.log(data);
  response.json(data);
  // response.sendStatus(200);
});

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

app.post('/new', (request: Request, response: Response) => {
  response.send(`a post request with /new route on port ${PORT}`);
    // response.sendStatus(200);  
});

app.put("/put", (request: Request, response: Response) => {
  response.send(`a put request with /new route on port ${PORT}`)
});

app.delete("/delete", (request: Request, response: Response) => {
  response.send(`a delete request with /new route on port ${PORT}`)
});

app.listen(PORT, () => {
  console.log(`Your server is running on port ${PORT}`);
});
