'use strict';
const cardElement = document.querySelector('.card');
const resultElement = document.getElementById('result');
const lengthElement = document.getElementById('length');
const copyElement = document.getElementById('copy');
const lettersElement = document.getElementById('letters');
const numbersElement = document.getElementById('numbers');
const symbolsElement = document.getElementById('symbols');
const range = document.querySelector('.val');
const btn = document.querySelector('.btn');
let lengthOfPassword = lengthElement.value;

const changePasswordStrength = () => {
  if (lengthOfPassword < 8) {
    resultElement.style.border = '2px solid red';
  } else if (lengthOfPassword >= 8 && lengthOfPassword < 12) {
    resultElement.style.border = '2px solid orange';
  } else if (lengthOfPassword > 12) {
    resultElement.style.border = '2px solid green';
  }
};

const generateRandomPassword = () => {
  const letters = lettersElement.checked
    ? 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    : '';
  const numbers = numbersElement.checked ? '0123456789' : '';
  const symbols = symbolsElement.checked ? '!@#$%^&*()~' : '';
  const charSet = `${letters}${numbers}${symbols}`;
  let password = '';

  if (charSet.length === 0) {
    password = `Cannot generate password without any characters`;
  }

  for (let i = 0; i < lengthOfPassword; i++) {
    const element = charSet[Math.floor(Math.random() * charSet.length)];
    password += element;
  }

  resultElement.textContent = password;
  changePasswordStrength();
};

lengthElement.addEventListener('change', (e) => {
  lengthOfPassword = e.target.value;
  generateRandomPassword();
  range.textContent = e.target.value;
});

btn.addEventListener('click', generateRandomPassword);

generateRandomPassword();
