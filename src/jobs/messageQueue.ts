import Bull from 'bull';
import { LogRepository } from 'repository/implements/LogRepository';
import { MessageService } from 'services/messageService';
import * as Sentry from '@sentry/node';

const redisConfig = {
  host: process.env.REDIS_HOST,
  port: Number(process.env.REDIS_PORT),
};

const messageQueue = new Bull('messageQueue', {
  redis: redisConfig,
});

const logRepository = new LogRepository();
const messageService = new MessageService(logRepository);

messageQueue.process(async (job) => {
  const { phone, message } = job.data;
  await messageService.sendMessage({ phone, message });
});

messageQueue.on('failed', (job, err) => {
  const maxAttempts = job.opts.attempts || 1;
  console.log(`Job ID: ${job.id} falhou na tentativa ${job.attemptsMade} de ${maxAttempts}. Tentando novamente...`);
  if (job.attemptsMade === maxAttempts) {
    Sentry.captureException(err);
  }
});

export default messageQueue;
