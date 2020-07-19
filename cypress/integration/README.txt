// Como não havia feito nenhuma automação no CodePen, precisei estudar
// e pesquisar possíveis soluções para o problema de interação com
// os elementos. Então uma das soluções encontradas foi:
//
// obter a página HTML para da aplicação para ser usada no Test Runner.
// Depois se escreve esse texto HTML no documento de teste através do
// método document.write, ignorando assim as restrições do sandbox do iframe.