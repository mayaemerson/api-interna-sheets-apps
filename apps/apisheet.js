// Objeto para armazenar os IDs das planilhas
const planilhas = {
  cadastro: '1XC0y6I8avo1yECUTHUIeAxmK3ljKi1NAqf1eeZKlF0A',
  vendas: '12nEJM-qNzsosmTXjbZwi-9PPwmPX5E2NgtRtLAsYOfo',
  inventario: '1yNAbGcJ0i4CGpin_NhdRjeHXPwfFVnXwPFnVO-n94I4'
}

//Objeto para armazenar os nomes das abas
const abasClientes = {
  clientes: 'Clientes'
}

//Índices das colunas para maior clareza
const colunasClientes = {
  ID: 1,
  NOME: 2,
  SOBRENOME: 3,
  EMAIL: 4,
  GENERO:5,
  TELEFONE: 6
}

// Classe para encapsular as operações da planilha
class PlanilhaManager {
  constructor(planilhaId, abaNome) {
    this.sheet = this.obterAba(planilhaId, abaNome)
  }


obterAba(id, name) {
  const planilha = SpreadsheetApp.openById(id)
  return planilha.getSheetByName(name)
}

getDados(row, colinit, qtcol) {
  const lastRow = this.sheet.getLastRow()
  if ( lastRow < row) {
    console.log('Não existem dados na base que possam ser acessados.')
    return []
  }
  return this.sheet.getRange(row, colinit, lastRow - row + 1, qtcol).getValues()
}


pushDados(array) {
  this.sheet.appendRow(array)
}

updateRowById(idCliente, updates) {
  const data = this.sheet.getDataRange().getValues()
  const rowIndex = data.findIndex(row => row[colunasClientes.ID - 1] === idCliente)
  if(rowIndex === -1) {
    console.error(`Cliente com ID ${idCliente} não encontrado.`)
    return
  }
  const sheetRow = rowIndex + 1
  const currentValues = this.sheet.getRange(sheetRow, 1, 1, this.sheet.getLastColumn()).getValues()[0]

  Object.keys(updates).forEach(col => {
    const colIndex = parseInt(col) - 1
    currentValues[colIndex] = updates[col]
  })
  
  this.sheet.getRange(sheetRow, 1, 1, currentValues.length).setValues([currentValues])
  console.log(`Cliente com ID ${idCliente} foi editado com sucesso.`)
}

deleteRowBuId(idCliente) {
  const data = this.sheet.getDataRange().getValues()
  const rowIndex = data.findIndex(row => row[colunasClientes.ID - 1] === idCliente)
  if(rowIndex === -1) {
    console.error(`Cliente com ID ${idCliente} não encontrado.`)
    return
  }

  this.sheet.deleteRow(rowIndex + 1)
  console.log(`Cliente com ID ${idCliente} foi excluido com sucesso. `)
}

} //Fim PlanilhaManager

// Funções  para testar 

function getCliente() {
  const manager = new PlanilhaManager(planilhas.cadastro, abasClientes.clientes)
  const dados = manager.getDados(2, colunasClientes.ID, 6)
  console.log(dados)
}


function pushCliente() {
  const manager =  new PlanilhaManager(planilhas.cadastro, abasClientes.clientes)
  const novoCliente = ['5878', 'Maria', 'Oliveira', 'maira@email.com','Famele', '123-456-7890']
  manager.pushDados(novoCliente)
}

function editarCliente() {
  const manager = new PlanilhaManager(planilhas.cadastro, abasClientes.clientes)
  const idCliente = 5878
  const updates = {
    [colunasClientes.NOME]: 'Carlos',
    [colunasClientes.SOBRENOME]: 'Santos',
    [colunasClientes.GENERO]: 'Male'
  }
  manager.updateRowById(idCliente,updates)
}

function deleteClliente() {
  const manager = new PlanilhaManager(planilhas.cadastro, abasClientes.clientes)
  const idCliente  = 5878
  manager.deleteRowBuId(idCliente)
}
























