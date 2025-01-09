# Gerador de QR Code e Senhas

Bem-vindo ao **Gerador de QR Code e Senhas**! Este projeto permite criar QR Codes diretamente no terminal e gerar senhas seguras utilizando configurações especificadas no arquivo `.env`.

## Funcionalidades

- **Gerador de QR Code no Terminal**: Utiliza a biblioteca [qrcode-terminal](https://www.npmjs.com/package/qrcode-terminal) para exibir QR Codes diretamente no console.
- **Gerador de Senhas**: Cria senhas seguras com base nas configurações definidas no arquivo `.env`, permitindo personalização como tamanho e tipos de caracteres.

## Tecnologias Utilizadas

- **Node.js**: Plataforma principal para execução do projeto.
- **Bibliotecas**: 
  - [qrcode-terminal](https://www.npmjs.com/package/qrcode-terminal) para geração de QR Codes no terminal.
  - Configurações de senha gerenciadas via arquivo `.env`.

## Como Rodar o Projeto

### Pré-requisitos
- Node.js instalado ([Baixe aqui](https://nodejs.org/)).
- Gerenciador de pacotes (npm ou yarn).
- Arquivo `.env` configurado.

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

3. Configure o arquivo `.env` com as opções desejadas para a geração de senhas (exemplo incluído no repositório).

4. Execute o projeto:
   ```bash
   node index.js
   ```

## Estrutura do Projeto
```
qrcode-password-generator/
├── src/
│   ├── index.js
│   ├── utils/
│   │   ├── generateQRCode.js
│   │   ├── generatePassword.js
├── .env
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
