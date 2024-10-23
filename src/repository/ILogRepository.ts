import { Log } from '../models/logModel';

export interface ILogRepository {
  save(log: Log): Promise<Log>;
}