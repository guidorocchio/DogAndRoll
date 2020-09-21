var express = require('express');
var router = express.Router();

/* GET home page. */

const productos = [
  {
    marca:"Vital Can",
    nombre: "Gato Adulto",
    imagen: "/images/trash/balancedGato.webp",
    precios: [{kg: "10kg", precio: "$700"},{kg: "10kg", precio: "$700"}, {kg: "8kg", precio: "$600"}],

  },
  {
    marca:"Vital Can",
    nombre: "Balanced Gato Adulto",
    imagen: "/images/trash/balancedGato.webp",
    precios: [{kg: "10kg", precio: "$1500"}, {kg: "8kg", precio: "$700"}],
  },
  {
    marca:"Vital Can",
    nombre: "Balanced Gato Senior",
    imagen: "/images/trash/balancedGatoSenior.png",
    precios: [{kg: "10kg", precio: "$1500"}, {kg: "8kg", precio: "$700"}],
  },
  {
    marca:"Vital Can",
    nombre: "Balanced Adulto Mediano",
    imagen: "/images/trash/balancedMediano.png",
    precios: [{kg: "10kg", precio: "$1500"}, {kg: "8kg", precio: "$700"}],
  },
  {
    marca:"Vital Can",
    nombre: "Balanced Cachorro Mediano",
    imagen: "/images/trash/balancedCachorroMediano.png",
    precios: [{kg: "10kg", precio: "$1500"}, {kg: "8kg", precio: "$700"}],
  },
  {
    marca:"Royal Canin",
    nombre: "Club Performance Adulto X 20KG",
    imagen: "/images/trash/performance.png",
    precios: [{kg: "10kg", precio: "s"}, {kg: "8kg", precio: "d"}],
  },
  {
    marca:"Estampa",
    nombre: "Tradicional",
    imagen: "/images/trash/estampa.webp",
    precios: [{kg: "10kg", precio: "s"}, {kg: "8kg", precio: "d"}],
  },
  {
    marca:"Excellent",
    nombre: "Formula",
    imagen: "/images/trash/formula.webp",
    precios: [{kg: "10kg", precio: "$500"}, {kg: "8kg", precio: "$1005"}],
  },

  {
    marca:"Gati",
    nombre: "Gati",
    imagen: "/images/trash/gati.webp",
    precios: [{kg: "10kg", precio: "$500"}, {kg: "8kg", precio: "$1005"}],
  },

  {
    marca:"Infinity",
    nombre: "Adulto",
    imagen: "/images/trash/infinity.webp",
    precios: [{kg: "10kg", precio: "$500"}, {kg: "8kg", precio: "$1005"}],
  },
  {
    marca:"Infinity",
    nombre: "Cachorro",
    imagen: "/images/trash/infinityC.webp",
    precios: [{kg: "10kg", precio: "$500"}, {kg: "8kg", precio: "$1005"}],
  },
  {
    marca:"Old Prince",
    nombre: "Dermadefense",
    imagen: "/images/trash/OldPrince.webp",
    precios: [{kg: "10kg", precio: "$500"}, {kg: "8kg", precio: "$1005"}],
  },
  {
    marca:"Old Prince",
    nombre: "Cachorro Mediano",
    imagen: "/images/trash/oldPrinceCachorro.png",
    precios: [{kg: "10kg", precio: "$500"}, {kg: "8kg", precio: "$1005"}],
  },
  {
    marca:"Raza",
    nombre: "Adultos",
    imagen: "/images/trash/Raza.webp",
    precios: [{kg: "10kg", precio: "$500"}, {kg: "8kg", precio: "$1005"}],
  },
  {
    marca:"Royal Canin",
    nombre: "Maxi Adult",
    imagen: "/images/trash/maxiAdult.png",
    precios:[{kg: "10kg", precio: "$500"}, {kg: "8kg", precio: "$1005"}],
  },
  {
    marca:"Royal Canin",
    nombre: "Mini Adult",
    imagen: "/images/trash/miniAdult.png",
    precios: [{kg: "10kg", precio: "$500"}, {kg: "8kg", precio: "$1005"}],
  }
 
]






router.get('/', function(req, res, next) {
  res.render('index', {productos});
});

module.exports = router;
