import con from "./connection.js";

export async function salvarFilme(filme) {
	let comando = `
    INSERT INTO tb_filme(nm_filme, ds_sinopse, vl_avaliacao, dt_lancamento, bt_disponivel)
    value (?, ?, ?, ?, ?);
	`
  let resposta = await con.query(comando, [filme.nome, filme.sinopse, filme.avaliacao, filme.lancamento, filme.disponivel])

  let info = resposta[0];
  let idFilme = info.insertId;
  return idFilme;

}

export async function consultarFilmes(nome) {
  let comando = `
  select 	id_filme      id,
	        nm_filme 	    filme,
          vl_avaliacao	avaliacao,
          dt_lancamento	lancamento,
          bt_disponivel	disponivel
  from	  tb_filme
  where	  nm_filme like ?
  `

  let resposta = await con.query(comando, ['%' + nome + '%']);
  let linhas = resposta[0];

  return linhas;
}

export async function consultarFilmesPorNome(nome) {
  let comando = `
  select 	id_filme      id,
	        nm_filme 	    nome,
          vl_avaliacao	avaliacao,
          dt_lancamento	lancamento,
          bt_disponivel	disponivel
  from	  tb_filme
  where	  nm_filme = ?
  `

  let resposta = await con.query(comando, [nome]);
  let linhas = resposta[0];

  return linhas;
}

export async function consultarFilmesPorId(id) {
  let comando = `
  select 	id_filme      id,
	        nm_filme 	    nome,
          ds_sinopse    sinopse,
          vl_avaliacao	avaliacao,
          dt_lancamento	lancamento,
          bt_disponivel	disponivel,
          img_filme     img
  from	  tb_filme
  where	  id_filme = ?
  `

  let resposta = await con.query(comando, [id]);
  let linhas = resposta[0];

  return linhas;
}

export async function alterarFilme(filme, id) {
  let comando = `
  UPDATE 	tb_filme
  SET	    nm_filme = ?,
          ds_sinopse = ?,
          vl_avaliacao = ?,
          dt_lancamento = ?,
	        bt_disponivel = ?
  WHERE 	id_filme = ?
  `

  let resposta = await con.query(comando, [filme.nome, filme.sinopse, filme.avaliacao, filme.lancamento, filme.disponivel, id]);
  let linhas = resposta[0];
  let linhasAfetadas = linhas.affectedRows;

  return linhasAfetadas;
}

export async function deletarFilme(id) {
  let comando = `
  DELETE FROM tb_filme WHERE id_filme = ?
  `

  let resposta = await con.query(comando, [id]);
  let linhas = resposta[0];
  let linhasAfetadas = linhas.affectedRows;

  return linhasAfetadas;
}


export async function alterarCapaFilme(id, caminho) {
  let comando = `
  UPDATE 	tb_filme
  SET	    img_filme = ?
  WHERE 	id_filme = ?
  `

  let resposta = await con.query(comando, [caminho, id]);
  let linhas = resposta[0];
  let linhasAfetadas = linhas.affectedRows;

  return linhasAfetadas;
}


