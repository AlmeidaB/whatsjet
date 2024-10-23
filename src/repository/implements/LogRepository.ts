import { ILogRepository } from '../ILogRepository';
import { Log } from '../../models/logModel';
import { AppDataSource } from '../../config/database';

export class LogRepository implements ILogRepository {
  private repository = AppDataSource.getRepository(Log);

  async save(log: Log): Promise<Log> {
    return this.repository.save(log);
  }
}
