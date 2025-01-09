import chalk from "chalk";

const qrCodePrompt = [
    {
        name: "link",
        description: chalk.yellow("Digite o link para gerar o QR Code: "),
    },
    {
        name: "type",
        description: chalk.yellow("Escolha entre o tipo de QrCode 1-Normal ou 2-Terminal"),
        pattern: /^[1-2]*$/,    
        message: chalk.red.italic("Escolha entre 1 ou 2")
    }
];

export default qrCodePrompt;        