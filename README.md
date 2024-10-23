# WhatsJet

Serviço de envio de mensagens automatizadas usando a API de WhatsApp
## Principais tecnologias usadas

 - [Docker](https://www.docker.com/)
 - [NodeJS](https://nodejs.org/en)
 - [Express](https://expressjs.com/pt-br/)
 - [Bull](https://github.com/OptimalBits/bull)
 - [RabbitMQ](https://www.rabbitmq.com/tutorials)
 - [Postgres](https://www.postgresql.org/)
 - [Sentry](https://sentry.io/welcome/)
 - [Whatsapp-web.js](https://wwebjs.dev)
 

## Requisitos
#### Softwares
- Editor: Ex: VSCODE
- NodeJS 22.1.0 ou Maior
- Docker + Docker compose


#### Variáveis de Ambiente

Para rodar este projeto, você precisará adicionar as seguintes variáveis de ambiente ao seu arquivo .env. Copie o arquivo .env.example e renomeie-o como .env, inserindo suas credenciais.


## Instalação

Siga as etapas abaixo para instalar e rodar o projeto:

1. *Clone o repositório*

   ```bash
   git clone https://github.com/AlmeidaB/whatsjet.git
   ```
   
   ```bash
   cd whatsjet
   ```

3. *Suba os serviços no docker**

   ```bash
   docker compose up -d  (ou comando semelhante da sua plataforma)
   ```

4. *instale as dependencias*

   ```bash
   npm install
   ```

5. *Execute o projeto**

   ```bash
   npm run start
   ```

4. *Sincronização com seu whatsapp*

   ```bash
   Aguarde nosso QR no console e escaneie com o seu telefone, haverá uma mensagem de confirmação no console
   ```
## Referencia para chamadas a API

#### enviar mensagem

http
  POST /send-message
```

| Parameter | Type     | Description                   |
| :-------- | :------- | :---------------------------  |
| phone     |  string  | *Required*. Telefone Whatsapp |
| message   |  string  | *Required*. Mensagem          |
