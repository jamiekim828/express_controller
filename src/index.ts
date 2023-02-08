import Express from 'express';

import userRouter from './routes/user';
import productRouter from './routes/product';
import orderRouter from './routes/order';

const app = Express();
app.use(Express.json());

// router
app.use('/user', userRouter);
app.use('/product', productRouter);
app.use('/order', orderRouter);

// port adress
const port = 8000;
app.listen(port, () => {
  console.log('yes! server is running');
});
