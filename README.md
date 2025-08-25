Projeto de Formulário Javascript Anhanguera
1. Introdução
Formulário simples utilizando conteúdo aprendido em aula para validar e-mail, apresentar mensagem de erro e salvar caso o e-mail seja inserido corretamente. Material utilizado condiz aos conhecimentos passados em sua maior parte na primeira aula introduzindo funções, variáveis, validações if/else, envio de “alert”, foi utilizado adição de classes, geração html para salvar os e-mails em tabela de maneira temporária tambem foi utilizado regex1 que ao pesquisar foi o método mais indicado para realizar a validação do e-mail.
OBS: Não foi possível utilizar o site playcode.io pois mesmo após tentar apagar o projeto e criar novamente ainda estava requirindo que comprasse a versão pro que não possui limite de linha. Devido a isso o projeto foi feito em Visual Studio Code e testado utilizando a extensão LiveServer. 
2. Estrutura HTML
O HTML define a interface básica do projeto utilizando tambem classes e id para identificar cada “div” no javascript tambem foi inserido a tabela vazia onde ficaram os e-mails salvos e o “onclick=()” para iniciar a função de validação:
 
3. Estilos CSS
Personalização Básica para o Projeto inputs e sessões:
  
4. Funcionalidades em JavaScript
O JavaScript é o núcleo do projeto. Ele é responsável por:
- Capturar os elementos do HTML e interagir com eles.
- Validar os e-mails utilizando expressões regulares (Regex).
- Adicionar novos e-mails à lista.
- Editar e excluir e-mails cadastrados.
- Atualizar dinamicamente a tabela exibida ao usuário.

Referências Externas:
1https://horadecodar.com.br/como-validar-email-com-javascript/

