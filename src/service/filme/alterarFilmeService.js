import { alterarFilme } from "../../repository/filmeRepository.js";
import { validarFilme } from "../../validation/filme/filmeValidation.js";


export default async function alterarFilmeService(filmeObj, id) {
  validarFilme(filmeObj);

  let registros = await alterarFilme(filmeObj, id);
  if (registros == 0)
    throw new Error("Nenhum filme alterado.")
  
}