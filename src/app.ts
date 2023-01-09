import express from 'express';
import ErrorHandler from './Middlewares/ErrorHandler';
import carRoutes from './Routes/Cars';
import motoRoutes from './Routes/Motorcycle';

const app = express();
app.use(express.json());
app.use(carRoutes);
app.use(motoRoutes);
app.use(ErrorHandler.handle);

export default app;
