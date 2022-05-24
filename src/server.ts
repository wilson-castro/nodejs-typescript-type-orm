import express from 'express';
import { router } from './routes';
import swaggerUI from "swagger-ui-express";

import swaggerFile from "./swagger.json";

import { categoriesRoutes } from './routes/categories.routes';
import { specificationRoutes } from './routes/specifications.routes';

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));

app.use(router);

app.listen(3333);