import { Router } from 'express';
import { MessageController } from '../controllers/messageController';

const messageRoutes = Router();

const messageController = new MessageController()
messageRoutes.post('/send-message', messageController.sendMessage);

export default messageRoutes;