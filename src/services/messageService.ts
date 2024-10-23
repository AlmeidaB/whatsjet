import { IMessageDTO } from 'dtos/message';
import { sendMessageWhatsapp } from 'lib/whatsapp';
import { Log } from 'models/logModel';
import { LogRepository } from 'repository/implements/LogRepository';

export class MessageService {
  private logRepository: LogRepository;

  constructor(logRepository: LogRepository) {
    this.logRepository = logRepository;
  }

  async sendMessage(messageData: IMessageDTO): Promise<void> {
      await sendMessageWhatsapp(messageData.phone, messageData.message);
      const log = new Log();
      log.phone = messageData.phone;
      log.message = messageData.message;
      log.status = 'success';
      await this.logRepository.save(log);
  }
}
