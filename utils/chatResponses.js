module.exports = {

  whatIsYourName: {
    name: 'Chama no zap',
    title: 'Identificação do nome do usuário',
    message: 'Opa, tudo bem? Temos, sim! Poderia me dizer seu nome pra gente começar anotar seu pedido?',
    fail: 'Seu número não pode conter números e símbolos especiais :(. Por favor, digite novamente',
    next: 'confirmPhoneNumber'
  },
  confirmPhoneNumber: {
    name: 'Chama no zap',
    title: 'Confirmar número de telefone',
    message: 'Beleeza :), então me envie seu número pra eu te avisar quando o pedido estiver saindo',
    next: 'whatIsYourCep',
  },
  whatIsYourCep: {
    name: 'Chama no zap',
    title: 'Identificação da área macro do usuário',
    message: ', já anotei o seu pedido. Pra fazer a entrega, vou precisar do seu CEP, poderia me informar?',
    next: 'whatIsYourComplement',

  },
  whatIsYourComplement: {
    name: 'Chama no zap',
    title: 'Identificação da área micro do usuário',
    message: 'Pode me dizer qual o complemento do seu endereço? Se é casa, apartamento ou outro tipo?',
    next: 'whatIsYourHouseNumber',
  },
  whatIsYourHouseNumber: {
    name: 'Chama no zap',
    title: 'Identificação da área micro do usuário',
    message: 'E qual o número da casa que o pedido vai ser entregue?',
    next: 'none'
  },
  // listQuantity: {
  //   title: 'Identificação de quantidade',
  //   message: 'Agora que você já escolheu seus produtos, digite a quantidade para cada um deles',
  //   fail: ''
  // },
};