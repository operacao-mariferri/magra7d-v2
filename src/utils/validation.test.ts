import test from 'node:test';
import assert from 'node:assert/strict';
import {
  formatPhone,
  isValidName,
  isValidEmail,
  isValidPhone,
} from './validation.ts';

test('formatPhone formats Brazilian numbers with 10 or 11 digits', () => {
  assert.equal(formatPhone('11987654321'), '(11) 98765-4321');
  assert.equal(formatPhone('1134567890'), '(11) 3456-7890');
  assert.equal(formatPhone('1198'), '(11) 98');
});

test('isValidName validates Brazilian full or first names', () => {
  assert.equal(isValidName('Mariana'), true);
  assert.equal(isValidName('M'), false);
  assert.equal(isValidName('   '), false);
});

test('isValidEmail validates emails correctly', () => {
  assert.equal(isValidEmail('teste@dominio.com.br'), true);
  assert.equal(isValidEmail('usuario@gmail.com'), true);
  assert.equal(isValidEmail('invalido'), false);
  assert.equal(isValidEmail('invalido@'), false);
  assert.equal(isValidEmail('@dominio.com'), false);
});

test('isValidPhone checks length of 10 or 11 digits', () => {
  assert.equal(isValidPhone('(11) 98765-4321'), true);
  assert.equal(isValidPhone('(21) 3456-7890'), true);
  assert.equal(isValidPhone('11987654321'), true);
  assert.equal(isValidPhone('12345'), false);
  assert.equal(isValidPhone(''), false);
});
