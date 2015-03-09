var express = require('express');
var router = express.Router();
var casos = require('../model/casos.json');
var Warp = require('../../lib/Warp');

router.get('/', function(req, res) {
	res.send(casos);
});

router.post('/', function(req, res) {
	var warp = new Warp({
		danioA: parseInt(req.body.danioA),
		danioB: parseInt(req.body.danioB),
		danioC: parseInt(req.body.danioC),
		porcentajeLuz: parseInt(req.body.porcentajeLuz)
	});

	warp.operar();

	var result = {
		 plasmaA: warp.getInyectorA().getFlujoPlasmaGenerado(),
		 plasmaB: warp.getInyectorB().getFlujoPlasmaGenerado(),
		 plasmaC: warp.getInyectorC().getFlujoPlasmaGenerado(),
		 tiempo: warp.getTiempoFuncionamiento()
	};

	res.send(result);
});

module.exports = router;