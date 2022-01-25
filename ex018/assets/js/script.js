const data = new Date;
const titulo = document.querySelector('.container');
const numSemana = data.getDay(); // dia da semana
const numMes = data.getMonth(); // mes 
const ano = data.getFullYear(); // ano
const diadomes = data.getDate(); // dia do mes 
let hora = data.getHours(); // hora
let minutos = data.getMinutes(); // minutos

const diaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sabado'];
const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

let horaotm = hora >= 10 ? hora : `0${hora}`;
let minutosotm = minutos >= 10 ? minutos : `0${minutos}`;


titulo.innerHTML = `${diaSemana[numSemana]}, ${diadomes} de ${meses[numMes]} de ${ano} <br> ${horaotm}:${minutosotm}`;


