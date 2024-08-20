function exibirPaginaDeCadastro(request, response) {
    return response.render('cadastro.ejs');
}

function  criarConta(request, response) {
    console.log(request.body);
    return response.redirect("/cadastro")
}

module.exports = {
    exibirPaginaDeCadastro,
    criarConta
   
}


