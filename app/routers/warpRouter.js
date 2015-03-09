var express = require('express');
var router = express.Router();
var casos = require('../model/casos.json');
var Warp = require('../../lib/Warp');

router.get('/', function(req, res) {
	res.send(casos);
});

router.get('/:danioA/:danioB/:danioC/:porcentajeLuz', function(req, res) {
	var warp = new Warp({
		danioA: parseInt(req.params.danioA),
		danioB: parseInt(req.params.danioB),
		danioC: parseInt(req.params.danioC),
		porcentajeLuz: parseInt(req.params.porcentajeLuz)
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