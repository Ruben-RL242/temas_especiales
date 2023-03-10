// const router = require('express').Router();
const express = require('express');
const router = express.Router();

const { faker } = require('@faker-js/faker/locale/es_MX');

const DEFAULT_LIMIT = 20;

function boolean(probt){
  n100=Math.floor(Math.random()*100+1);
  if(n100<=probt) {
    n3 = true;
  }else {
    n3 = false;  
  }
  return n3;
}

function registros(req,res){
  const limit = req.query.limit || DEFAULT_LIMIT;

  const students = [];
  const n100 =Math.floor(Math.random()*100+1);

  for (let i = 0; i < limit; i++) {
    const student = {
      id: `0000${i + 1}`,
      name: faker.name.firstName(),
      lastName: faker.name.lastName(),
      age: Math.floor(Math.random() * (60-18)+18),
      grade: Math.floor(Math.random() * (10 - 1)+1),
      email: faker.internet.email(),
      is_regular: boolean(60),
      becado: boolean(20)
    };
    
    students.push(student);
  }

  res.send(students);
}

function becados(req,res){
  const limit = req.query.limit || DEFAULT_LIMIT,students = [], consulta = [],n100 =Math.floor(Math.random()*100+1);

  for (let i = 0; i < limit; i++) {
    const student = {
      id: `0000${i + 1}`,name: faker.name.firstName(),lastName: faker.name.lastName(),age: Math.floor(Math.random() * (60-18)+18),grade: Math.floor(Math.random() * (10 - 1)+1),email: faker.internet.email(),is_regular: boolean(60),becado: boolean(20)
    };
    
    students.push(student);
  }

  for (let i=0; i< students.length; i++){
    if (students[i].becado == true){
      consulta.push(students[i]);
    }
  }

  res.send(consulta);
}

function mayores(req,res){
  const limit = req.query.limit || DEFAULT_LIMIT,students = [], consulta = [],n100 =Math.floor(Math.random()*100+1);

  for (let i = 0; i < limit; i++) {
    const student = {
      id: `0000${i + 1}`,name: faker.name.firstName(),lastName: faker.name.lastName(),age: Math.floor(Math.random() * (60-18)+18),grade: Math.floor(Math.random() * (10 - 1)+1),email: faker.internet.email(),is_regular: boolean(60),becado: boolean(20)
    };
    
    students.push(student);
  }

  for (let i=0; i< students.length; i++){
    if (students[i].age > 50){
      consulta.push(students[i]);
    }
  }

  res.send(consulta);
}

function intervaloAge(req,res){
  const limit = req.query.limit || DEFAULT_LIMIT,students = [], consulta = [],n100 =Math.floor(Math.random()*100+1);

  for (let i = 0; i < limit; i++) {
    const student = {
      id: `0000${i + 1}`,name: faker.name.firstName(),lastName: faker.name.lastName(),age: Math.floor(Math.random() * (60-18)+18),grade: Math.floor(Math.random() * (10 - 1)+1),email: faker.internet.email(),is_regular: boolean(60),becado: boolean(20)
    };
    
    students.push(student);
  }

  for (let i=0; i< students.length; i++){
    if (students[i].age > 25 && students[i].age < 29 ){
      consulta.push(students[i]);
    }
  }

  res.send(consulta);
}

router.get('/', (req, res) => {
  registros(req,res);
});


router.get('/becados', (req, res) => {
  becados(req,res);
});

router.get('/Mayor20', (req, res) => {
  mayores(req,res);
});

router.get('/InterAge', (req, res) => {
  intervaloAge(req,res);
});

module.exports = router;