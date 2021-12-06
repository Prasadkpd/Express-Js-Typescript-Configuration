import express, {Application, Request, Response} from "express";

const app: Application = express();
const PORT = 3000;

app.get("/", (request: Request, response: Response) => {
  response.send(`a get request on port ${PORT}`);
  // response.sendStatus(200);
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
