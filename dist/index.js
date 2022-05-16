"use strict";
// import express from 'express';
// import { Application, Response, Request } from 'express';
// const cors = require('cors');
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const fs = require('fs');
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(express_1.default.static('public'));
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});
app.get('/fetch-category', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let data = null;
    yield fs.readFile("./src/db/categories/index.get.json", "utf8", (err, jsonString) => {
        if (err) {
            console.log("File read failed:", err);
            return;
        }
        console.log("File data:", typeof (jsonString));
        res.status(200).json(JSON.parse(jsonString));
    });
}));
app.get('/fetch-products', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let data = null;
    yield fs.readFile("./src/db/products/index.get.json", "utf8", (err, jsonString) => {
        var _a;
        if (err) {
            console.log("File read failed:", err);
            return;
        }
        const data = JSON.parse(jsonString);
        let filteredData = data;
        console.log("category", req.query['category']);
        if ((_a = req.query) === null || _a === void 0 ? void 0 : _a['category']) {
            filteredData = [];
            data.filter((val) => {
                if (val.category === req.query['category']) {
                    filteredData.push(val);
                }
            });
        }
        res.status(200).json(filteredData);
    });
}));
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
