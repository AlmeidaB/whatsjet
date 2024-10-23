import amqplib, { Channel } from 'amqplib';

const RABBITMQ_URL = `amqp://${process.env.RABBITMQ_USER}:${process.env.RABBITMQ_PASSWORD}@${process.env.RABBITMQ_HOST}`;

export async function createChannel(): Promise<Channel> {
  const connection = await amqplib.connect(RABBITMQ_URL!);
  const channel = await connection.createChannel();
  return channel;
}
