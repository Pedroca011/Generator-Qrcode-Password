# Gerador de QR Code e Senhas

Bem-vindo ao **Gerador de QR Code e Senhas**! Este projeto permite criar QR Codes personalizados e gerar senhas seguras para diversas finalidades de forma simples e eficiente.

## Funcionalidades

- **Gerador de QR Code**: Crie QR Codes a partir de links, textos ou outras informações.
- **Gerador de Senhas**: Obtenha senhas seguras com opções de personalização, como tamanho, uso de caracteres especiais, números, letras maiúsculas e minúsculas.

## Tecnologias Utilizadas

- **Frontend**: ReactJS com Tailwind CSS para estilização.
- **Backend**: Node.js com Express para gerenciamento de APIs.
- **Bibliotecas**: 
  - [qrcode](https://www.npmjs.com/package/qrcode) para geração de QR Codes.
  - [crypto](https://nodejs.org/api/crypto.html) para geração de senhas seguras.
- **Design**: Protótipo desenvolvido no Figma.

## Como Rodar o Projeto

### Pré-requisitos
- Node.js instalado ([Baixe aqui](https://nodejs.org/)).
- Gerenciador de pacotes (npm ou yarn).

### Passos para Configuração
1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/qrcode-password-generator.git
   cd qrcode-password-generator
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor:
   ```bash
   npm start
   ```

4. Acesse a aplicação em `http://localhost:3000`.

## Estrutura do Projeto
```
qrcode-password-generator/
├── public/
├── src/
│   ├── components/
│   │   ├── QRCodeGenerator.jsx
│   │   ├── PasswordGenerator.jsx
│   ├── App.jsx
│   ├── index.js
├── package.json
└── README.md
```

## Contribuição

Sinta-se à vontade para contribuir com o projeto. Para isso:
1. Faça um fork do repositório.
2. Crie uma nova branch com sua feature ou correção:
   ```bash
   git checkout -b feature/nome-da-feature
   ```
3. Commit suas alterações:
   ```bash
   git commit -m "Descrição da feature ou correção"
   ```
4. Envie sua branch:
   ```bash
   git push origin feature/nome-da-feature
   ```
5. Abra um Pull Request.

## Licença

Este projeto está sob a licença MIT. Consulte o arquivo [LICENSE](./LICENSE) para mais informações.

---

**Autor:** Pedro Ramos Paraiso
