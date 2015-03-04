var maximoFlujoPlasma = 100;
var porcentajeInutilizable = 100;
var tiempoMaximoFuncionamiento = 100;

var Inyector = function(config) {

	config = config || {};
	this.danio = config.danio || 0;
	this.flujoPlasmaGenerado = 0;
};

Inyector.prototype.MAXIMO_FLUJO_PLASMA = maximoFlujoPlasma;

Inyector.prototype.getDanio = function() {
	return this.danio;
}

Inyector.prototype.esUtilizable = function() {
	if(this.getDanio() < porcentajeInutilizable) {
		return true;
	}

	return false;
}

Inyector.prototype.addFlujoPlasmaGenerado = function(flujoPlasma) {
	this.flujoPlasmaGenerado += flujoPlasma;
}

Inyector.prototype.getFlujoPlasmaGenerado = function() {
	return this.flujoPlasmaGenerado;
}

Inyector.prototype.getMaximoNormalGeneraFlujoPlasma = function() {
	return maximoFlujoPlasma - this.getDanio();
}

Inyector.prototype.getMaximoGeneraFlujoPlasma = function() {
	if(this.esUtilizable()) {
		return maximoFlujoPlasma - this.getDanio() + maximoFlujoPlasma;
	}
	return 0;
}

Inyector.prototype.getMinutosFuncionamiento = function() {
	if(this.esUtilizable() && this.getFlujoPlasmaGenerado() > this.getMaximoNormalGeneraFlujoPlasma()) {
		var plasmaExedido = this.getFlujoPlasmaGenerado() - this.getMaximoNormalGeneraFlujoPlasma();
		return tiempoMaximoFuncionamiento - plasmaExedido;
	}
	return 0;
}

module.exports = Inyector;