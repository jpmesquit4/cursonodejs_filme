
import salvarFilmeService from "../service/filme/salvarFilmeService.js";
import consultarFilmesService from "../service/filme/consultarFilmesService.js";
import consultarFilmesPorIDService from "../service/filme/consultarFilmePorIDService.js";
import alterarFilmeService from "../service/filme/alterarFilmeService.js";
import deletarFilmeService from "../service/filme/deletarFilmeService.js";
import alterarCapaFilmeService from "../service/filme/alterarCapaFilmeService.js";

import multer from "multer";

import { Router } from "express";

const endpoints = Router();

endpoints.post('/filme', async (req, resp) => {

  try {
    
    let filmeObj = req.body;
    let id = await salvarFilmeService(filmeObj);


    resp.send({
      id: id
    })

  }
  catch (err) {
    logError(err);
    resp.status(400).send(criarErro(err))
  }

	
  
})

endpoints.get("/filme", async (req, resp) => {
    try {
      let nome = req.query.nome;
      let linhas = await consultarFilmesService(nome);


      resp.send(linhas);
    }
    catch (err) { 
      logError(err);
      resp.status(400).send(criarErro(err));
    }


})

endpoints.get('/filme/:id', async (req, resp) => {

  try {
    let id = req.params.id;

    let filme = await consultarFilmesPorIDService(id);

    resp.send(filme)


  }
  catch (err) {
    logError(err);
    resp.status(400).send(criarErro(err));
  }


})

endpoints.put('/filme/:id', async (req, resp) => {

  try {
    let filmeObj = req.body;
    let id = req.params.id;

    await alterarFilmeService(filmeObj, id);

    resp.status(204).send()


  }
  catch (err) {
    logError(err);
    resp.status(400).send(criarErro(err));
  }


})

endpoints.delete('/filme/:id', async (req, resp) => {

  try {
    
    let id = req.params.id;

    await deletarFilmeService(id);

    resp.status(204).send()

  }
  catch (err) {
    logError(err);
    resp.status(400).send(criarErro(err));
  }

})

let uploadCapa = multer({ dest: './storage/capa' }); 

endpoints.put('/filme/:id/imagem', uploadCapa.single('imagem'), async (req, resp) => {

  try {
    let id = req.params.id;
    let caminho = req.file.path;

    await alterarCapaFilmeService(id, caminho);

    resp.status(204).send()


  }
  catch (err) {
    logError(err);
    resp.status(400).send(criarErro(err));
  }


})

export default endpoints;