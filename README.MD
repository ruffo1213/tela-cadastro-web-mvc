[ x ] Configurar o ambiente de desenvolvimento web (pode utilizar o setup-node-js) criar uma pasta chamada tela-cadastro-web-mvc
[ x ] Criar um arquivo README.MD e adicionar esse checklist no arquivo e sempre que completar uma tarefa, volte para marcar a caixa como feito
[ x ] Após criar a pasta, alterar o name, description e author no package.json
[ x ] Deletar referências do git na pasta rm -rf .git
[ x ] Criar a view da página de login (cadastro.ejs)
[ x ] Criar o controller  e função exibirPaginaDeCadastro para exibir a página de cadastro
[ x ] Configurar a rota /cadastro apontando para a função de exibirPaginaDeCadastro do controller
[ x ] Adicionar atributo action="/criar-conta" method="post" no form do cadastro
[ x ] Criar a função criarConta no controller cadastroController e colocar console.log(request.body), para verificar o que está vindo na requisição
[ x ] Configurar a rota /criar-conta apontando para a função de criarConta do controller cadastroController
[ x ] Estilizar a página de cadastro conforme o protótipo.