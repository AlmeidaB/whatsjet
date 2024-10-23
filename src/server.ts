import "reflect-metadata";

import express from 'express';
import { AppDataSource } from './config/database';
import messageRoutes from './routes/messageRoutes';
import { initSentry } from './config/sentry';
import { createChannel } from './config/rabbitmq';
import { startMessageConsumer } from './consumers/messageConsumer';
import "./lib/whatsapp"

initSentry();

const app = express();
app.use(express.json());

app.use('/', messageRoutes);

AppDataSource.initialize()
  .then(async () => {
    const channel = await createChannel();
    startMessageConsumer(channel);
    app.listen(process.env.PORT, () => {
      console.log(`Servidor: ${process.env.PORT}`);
    });
  })
  .catch((error) => console.log('Erro:', error));
