const express = require('express');
const router = express.Router();
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()
 
router.get('/', async function(req, res, next) {
  const page = req.query.page ? parseInt(req.query.page) : 1;
  const take = req.query.take ? parseInt(req.query.take) : 10;
  const skip = req.query.skip ? parseInt(req.query.skip) : (page-1)*take;
  const all = await prisma.movies.findMany()
  const movies = await prisma.movies.findMany({
      skip,
      take,
  });
  res.send({
    data: movies,
    pagination : {
        count : all.length, // Total des enregistrements
        page: page,
        take: take,   // Nombre d'éléments sélectionnés
        skip: skip   // Décalage à partir duquel on prend les  données
    }
  });
});



 
module.exports = router;
