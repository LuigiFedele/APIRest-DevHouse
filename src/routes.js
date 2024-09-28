import { Router } from 'express';
import multer from 'multer';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../swagger.json';


import uploadConfig from './config/upload';
import SessionController from './controllers/SessionController';
import HouseController from './controllers/HouseController';
import DashboardController from './controllers/DashboardController';
import ReserveController from './controllers/ReserveController';


const routes = new Router();
const upload = multer(uploadConfig);

routes.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//post
routes.post('/sessions', SessionController.store);
routes.post('/houses', upload.single('thumbnail'), HouseController.store);
routes.post('/houses/:house_id/reserve', ReserveController.store);

//get
routes.get('/houses', HouseController.index);
routes.get('/dashboard', DashboardController.show);
routes.get('/reserves', ReserveController.index);

//put
routes.put('/houses/:house_id', upload.single('thumbnail'), HouseController.update);

//delete
routes.delete('/houses', HouseController.destroy);
routes.delete('/reserves/cancel', ReserveController.destroy);

export default routes;
