import { Client, MessageMedia } from 'whatsapp-web.js';
import qrcode from 'qrcode-terminal';

const client = new Client({});

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true, });
});

client.on('ready', () => {
    console.log('WhatsApp pronto!');
});

client.on('authenticated', () => {
    console.log('Autenticado!');
});

client.on('auth_failure', () => {
    console.error('Falha na autenticação.');
});

export const sendMessageWhatsapp = async (to: string, message: string) => {
    const chatId = `${to}@c.us`;
    await client.sendMessage(chatId, message);
};

client.initialize();
