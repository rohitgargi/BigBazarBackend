// import express from 'express';
// import { Application, Response, Request } from 'express';
// const cors = require('cors');

// const fs = require('fs');



// const PORT = 9000;

// const bodyParser = require('body-parser');

// const app: Application = express();
// app.use(cors());



// app.use(bodyParser.json());
// app.use(express.urlencoded({ extended: true }))


// app.use(express.static('public'));

// //const data = require('./src/db/categories.index.get.json');



// app.get('/fetch-category',async(req: Request,res: Response)=>{
//     let data = null;
//     await fs.readFile("./src/db/categories/index.get.json", "utf8", (err:any, jsonString:string) => {
//         if (err) {
//           console.log("File read failed:", err);
//           return;
//         }
//         console.log("File data:", typeof(jsonString));
       
//         res.status(200).json(JSON.parse(jsonString));
//       });
   
// });

// app.get('/fetch-products',async(req: Request,res: Response)=>{
//     // let data = null;
//     // await fs.readFile("./src/db/products/index.get.json", "utf8", (err:any, jsonString:string) => {
//     //     if (err) {
//     //       console.log("File read failed:", err);
//     //       return;
//     //     }      
//     //     const data = JSON.parse(jsonString);
//     //     let filteredData = data;
//     //     console.log("category",req.query['category']);
//     //     if(req.query?.['category']){
//     //         filteredData = [];
//     //         data.filter((val:any)=>{
//     //             if(val.category === req.query['category']){
//     //                 filteredData.push(val);
//     //             }

//     //         })
//     //     }
//     //     res.status(200).json(filteredData);
//     //   });
   
// });

// const httpServer = app.listen(PORT,()=>{
//     console.log("HTTP REST API Server running at http://localhost:"+PORT);
// })


import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
const fs = require('fs');

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.static('public'));

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.get('/fetch-category',async(req: Request,res: Response)=>{
    let data = null;
    await fs.readFile("./src/db/categories/index.get.json", "utf8", (err:any, jsonString:string) => {
        if (err) {
          console.log("File read failed:", err);
          return;
        }
        console.log("File data:", typeof(jsonString));
       
        res.status(200).json(JSON.parse(jsonString));
      });
   
});


app.get('/fetch-products',async(req: Request,res: Response)=>{
    let data = null;
    await fs.readFile("./src/db/products/index.get.json", "utf8", (err:any, jsonString:string) => {
        if (err) {
          console.log("File read failed:", err);
          return;
        }      
        const data = JSON.parse(jsonString);
        let filteredData = data;
        console.log("category",req.query['category']);
        if(req.query?.['category']){
            filteredData = [];
            data.filter((val:any)=>{
                if(val.category === req.query['category']){
                    filteredData.push(val);
                }

            })
        }
        res.status(200).json(filteredData);
      });
   
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
