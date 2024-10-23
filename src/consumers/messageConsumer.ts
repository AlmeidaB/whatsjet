import { Channel } from 'amqplib';
import { LogRepository } from '../repository/implements/LogRepository';
import { MessageService } from '../services/messageService';
import { IMessageDTO } from '../dtos/message';

const queue = 'messageQueue';

export async function startMessageConsumer(channel: Channel) {
  
  const logRepository = new LogRepository();
  const messageService = new MessageService(logRepository);

  channel.assertQueue(queue, { durable: true });

  channel.consume(queue, async (msg) => {
    if (msg) {
      const messageData: IMessageDTO = JSON.parse(msg.content.toString());
      try {
        await messageService.sendMessage(messageData);
        channel.ack(msg);
      } catch (error) {
        console.error('Erro ao processar mensagem:', error);
      }
    }
  });
}
