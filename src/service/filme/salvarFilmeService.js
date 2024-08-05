  import { salvarFilme, consultarFilmesPorNome } from "../../repository/filmeRepository.js";
  import { validarFilme, validarFilmeIgual } from "../../validation/filme/filmeValidation.js";


  export default async function salvarFilmeService(filmeObj) {
    //validacao de campos obrigatorios
    validarFilme(filmeObj);

    //busca filmes com o mesmo nome
    //valida se existe filme com o mesmo nome
    let registros = await consultarFilmesPorNome(filmeObj.nome)
    validarFilmeIgual(registros);


    //logica de negocio
    let id = await salvarFilme(filmeObj);

    return id;
  }