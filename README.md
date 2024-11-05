# 📊 Google Sheets API Interna com Apps Script

</br >
<div align="center">

[![YouTube](https://img.shields.io/badge/YouTube-Watch-red?logo=youtube)](https://youtu.be/sTRHRNNXFEw)
[![JavaScript](https://img.shields.io/badge/JavaScript-Code-yellow?logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Clasp](https://img.shields.io/badge/Clasp-Google%20Apps%20Script-blue?logo=google)](https://github.com/google/clasp)
[![Google Sheets](https://img.shields.io/badge/Google%20Sheets-Spreadsheet-green?logo=google-sheets)](https://developers.google.com/sheets)
[![Node.js](https://img.shields.io/badge/Node.js-Backend-339933?logo=node.js)](https://nodejs.org)
[![Apps Script](https://img.shields.io/badge/Google%20Apps%20Script-Docs-blue?logo=google)](https://developers.google.com/apps-script)

</div>
</br >


### 📝 Descrição

Este projeto cria uma API interna para o Google Sheets utilizando Google Apps Script e JavaScript ES6 para realizar operações CRUD (leitura, inserção, edição e exclusão de dados). A estrutura modular e escalável facilita o gerenciamento de dados diretamente no Apps Script, tornando o projeto ideal para automações no Google Sheets.

### Uso
#### Operações CRUD:
- Leitura (GET): Obtenha dados da planilha.
- Inserção (Push): Adicione novos dados na planilha.
- Edição: (updateRowById): Atualize dados específicos na planilha.
- Exclusão: (eleteRowBuId): Remova registros com base em ID da planilha.

### Principal do código

[![JavaScript](https://img.shields.io/badge/JavaScript-Code-yellow?logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Apps Script](https://img.shields.io/badge/Google%20Apps%20Script-Docs-blue?logo=google)](https://developers.google.com/apps-script)

```javascript
// JavaScript - Definição dos Métodos da Classe PlanilhaManager
PlanilhaManager(planilhaId, abaNome)
obterAba(id, name)
getDados(row, colinit, qtcol)
pushDados(array)
updateRowById(idCliente, updates)
deleteRowById(idCliente)

```

###  Uso
```javascript
// Exemplo 1: getDados(row, colinit, qtcol)
function getCliente() {
  const manager = new PlanilhaManager(planilhas.cadastro, abasClientes.clientes)
  const dados = manager.getDados(2, colunasClientes.ID, 6) 
  console.log(dados) // Retorna dados do intervalo especificado em forma de matriz
}
// Recebe: `row` (linha inicial), `colinit` (coluna inicial), `qtcol` (quantidade de colunas a ler).
// Retorna: Uma matriz com os dados.

// Exemplo 2: pushDados(array)
function pushCliente() {
  const manager = new PlanilhaManager(planilhas.cadastro, abasClientes.clientes)
  const novoCliente = ['1002', 'Carlos', 'Almeida', 'carlos@email.com', 'Male', '987-654-3210']
  manager.pushDados(novoCliente) // Insere uma nova linha com dados do cliente
}
// Recebe: `array` com dados do cliente.
// Resultado: Adiciona uma nova linha no final da planilha.

// Exemplo 3: updateRowById(idCliente, updates)
function editarCliente() {
  const manager = new PlanilhaManager(planilhas.cadastro, abasClientes.clientes)
  const idCliente = 1002
  const updates = {
    [colunasClientes.NOME]: 'Carlos Henrique',
    [colunasClientes.EMAIL]: 'carlos.henrique@email.com'
  }
  manager.updateRowById(idCliente, updates) // Atualiza apenas os campos especificados
}
// Recebe: `idCliente` e `updates` (colunas e valores a atualizar).
// Resultado: Atualiza os campos especificados na linha do `idCliente`.

// Exemplo 4: deleteRowById(idCliente)
function deleteCliente() {
  const manager = new PlanilhaManager(planilhas.cadastro, abasClientes.clientes)
  const idCliente = 1002
  manager.deleteRowById(idCliente) // Exclui a linha do cliente especificado
}
// Recebe: `idCliente` para identificar a linha.
// Resultado: Remove a linha correspondente ao `idCliente`.

```
</br >

Este projeto é escalável porque centralizamos toda a manipulação de dados em uma única classe, PlanilhaManager, e seus métodos. Isso significa que, para qualquer operação (leitura, inserção, edição ou exclusão), basta instanciar PlanilhaManager e chamar o método correspondente. Essa abordagem simplifica o código e facilita a expansão para novas planilhas ou operações, pois qualquer mudança ou adição é feita diretamente nos métodos da classe, mantendo o restante do projeto organizado e fácil de manter.

</br >

# Para você usar o código e só cópiar o código da  pasta apisheet.js e colar no seu projeto apps script 

# Opção abaixo para usar EDE externa.

### 🚀 Requisitos para clonar o projeto apps com editor (Se sua preferência e editar o projeto em uma EDE).

[![Clasp](https://img.shields.io/badge/Clasp-Google%20Apps%20Script-blue?logo=google)](https://github.com/google/clasp)

```
Para clonar o projeto no git e o processo normal de clone.
Para clonar o projeto do apps script com editor tem que usar o clasp.
Node 21.7.1
Conta Google para acessar o Google Sheets e o Apps Script
Clasp https://github.com/google/clasp
Para logar no clasp rode  npm run login - intrução no package.json
Para clonar o projeto do apps primeiro substitua o id do projeto do apps no package.json no clone pelo id do seu projeto, depois e só rodar npm run clone, assim vai ser criada a conexão apps script com seu editor.
Obs.: Vai ser criando um .clasp.json  que ele deve aparecer dentro da pasta apps ele tem que ser movido para raiz do projeto.
```
</br>
<div align="center">

[![YouTube](https://img.shields.io/badge/YouTube-Watch-red?logo=youtube)](https://youtu.be/sTRHRNNXFEw)

</div># api-interna-sheets-apps
