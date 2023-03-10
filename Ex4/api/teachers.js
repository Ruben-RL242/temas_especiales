const express = require('express'), router = express.Router(),{ faker } = require('@faker-js/faker/locale/es_MX');

function registros(req,res){
  const limit = req.query.limit || DEFAULT_LIMIT;

  const teachers = [];

  for (let i = 0; i < limit; i++) {
    const teacher = {
      id: `0000${i + 1}`,
      name: faker.name.firstName(),
      age: Math.floor(Math.random() * (90-25)+25),
      gender: faker.name.sex(),
      email: faker.internet.email(),
      phone: faker.phone.number(),
      address: faker.address.street() + faker.address.country() + faker.address.zipCode()
    };
    
    teachers.push(teacher);
  }

  res.send(teachers);
}

function intervaloAge(req,res){
  const limit = req.query.limit || DEFAULT_LIMIT, teachers = [],consulta=[];

  for (let i = 0; i < limit; i++) {
    const teacher = {
      id: `0000${i + 1}`,name: faker.name.firstName(),age: Math.floor(Math.random() * (90-25)+25),gender: faker.name.sex(),email: faker.internet.email(),phone: faker.phone.number(),address: faker.address.street() + faker.address.country() + faker.address.zipCode()
    };
    
    teachers.push(teacher);
  }

  for (let i=0; i< teachers.length; i++){
    if (teachers[i].age > 25 && teachers[i].age < 29 ){
      consulta.push(teachers[i]);
    }
  }

  res.send(consulta);
}

function id(req,res){
  const teachers = [],consulta=[], id = req.query.id;

  for (let i = 0; i < 100; i++) {
    const teacher = {
      id: `0000${i + 1}`,name: faker.name.firstName(),age: Math.floor(Math.random() * (90-25)+25),gender: faker.name.sex(),email: faker.internet.email(),phone: faker.phone.number(),address: faker.address.street() + faker.address.country() + faker.address.zipCode()
    };
    
    teachers.push(teacher);
  }

  for (let i=0; i< teachers.length; i++){
    if (teachers[i].id === id ){
      consulta.push(teachers[i]);
    }
  }

  res.send(consulta);
}

function FirstLetterName(req,res){
  const teachers = [],consulta=[], firstLetter = req.query.firstLetter;

  for (let i = 0; i < 100; i++) {
    const teacher = {
      id: `0000${i + 1}`,name: faker.name.firstName(),age: Math.floor(Math.random() * (90-25)+25),gender: faker.name.sex(),email: faker.internet.email(),phone: faker.phone.number(),address: faker.address.street() + faker.address.country() + faker.address.zipCode()
    };
    
    teachers.push(teacher);
  }

  for (let i=0; i< teachers.length; i++){
    const Letter=teachers[i].name.charAt(0);
    if (Letter === firstLetter ){
      consulta.push(teachers[i]);
    }
  }

  res.send(consulta);
}



router.get('/', (req, res) => {
  registros(req,res);
});

router.get('/InterAge', (req, res) => {
  intervaloAge(req,res);
});

router.get('/id', (req, res) => {
  id(req,res);
});

router.get('/firstletter', (req, res) => {
  FirstLetterName(req,res);
});


module.exports = router;