import { Request, Response } from 'express';
import messageQueue from '../jobs/messageQueue';
import { onlyNumbers } from 'utils/onlyNumbers';


export class MessageController {


  async sendMessage(req: Request, res: Response): Promise<any> {
    const { phone, message } = req.body;

    try {
      messageQueue.add({ phone: onlyNumbers(phone), message },
        {
          delay: 5000,
          attempts: 2,
          backoff: 2500,
        });
      res.status(200).json({ message: 'Mensagem enfileirada com sucesso' });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao enfileirar mensagem' });
    }
  }
}
