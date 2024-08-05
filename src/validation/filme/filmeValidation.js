

export function validarFilme(filmeObj) {
  if (!filmeObj.nome)
    throw new Error("Nome do filme obrigatorio.")
    
  if (!filmeObj.sinopse)
    throw new Error("Nome do filme obrigatorio.")
    
  if (!filmeObj.avaliacao)
    throw new Error("Nome do filme obrigatorio.")
  
  if (isNaN(filmeObj.avaliacao))
    throw new Error("Nome do filme inválida.")
    
  if (!filmeObj.lancamento)
    throw new Error("Nome do filme obrigatorio.")
    
  if (filmeObj.disponivel == undefined)
    throw new Error("Nome do filme obrigatorio.")
    
}

export function validarFilmeUnico(registros) {
  if (registros.length == 0)
    throw new Error("Filme nao encontrado.")
}

export function validarFilmeIgual(registros) {
  if (registros.length > 0)
    throw new Error("Ja existe filme cadastrado com esse nome.")
  
}