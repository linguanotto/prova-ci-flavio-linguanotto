# prova-ci-flavio-linguanotto

Este repositório apresenta um projeto simples desenvolvido em TypeScript, configurado com um pipeline de Integração Contínua (CI) utilizando GitHub Actions. O objetivo é demonstrar um fluxo automatizado de instalação, execução de testes e criação de build.

## ✅ Executando o Projeto Localmente

**Instalar dependências**
```bash
npm install
```

**Rodar os testes**
```bash
npm test
```

**Gerar o build**
```bash
npm run build
```

## ✅ Estrutura do Projeto

- **src/** — código-fonte em TypeScript  
- **tests/** — testes unitários desenvolvidos com Jest  
- **.github/workflows/ci.yml** — arquivo de configuração do pipeline de CI  

## ✅ Pipeline de Integração Contínua

O workflow definido em `ci.yml` é acionado automaticamente quando ocorre:

- Push enviado ao branch **main**  
- Pull Request aberto direcionado ao branch **main**

### Etapas executadas pelo pipeline:

1. Checkout do repositório  
2. Instalação das dependências (`npm install`)  
3. Execução dos testes (`npm test`)  
4. Geração do build (`npm run build`)

Se qualquer etapa falhar, o GitHub Actions marca o fluxo como **failed**, garantindo controle contínuo da qualidade do código.

## ✅ Testes Automatizados

A aplicação utiliza Jest para validar a função `soma` por meio de dois cenários:

- Soma de valores positivos  
- Soma envolvendo números negativos  

Esses testes servem para demonstrar o funcionamento básico do pipeline de CI e o processo de validação automática do código.

