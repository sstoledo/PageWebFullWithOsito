import express from "express"

interface Options{

  port:number;


}


export class AppRoutes{

  //Atributtes
  private readonly app = express();
  private readonly port: number;

  constructor({port}:Options){
    this.port = port;
  };

  public start(){
    //MIDDLEWARES
    this.app.use(express.json());
    this.app.use(express.urlencoded({extended: false}));

    //ROUTES
    



    //SERVER
    this.app.listen(this.port);

  }

}