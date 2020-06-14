const {it} = require('./framwork');
const {expect} = require('./framwork');
const saludar = require('./app');

console.log(saludar('Platzi'));


it('Validar saludo', () => {
  expect(saludar('Platzi')).toBe('Hola Platzi');
});