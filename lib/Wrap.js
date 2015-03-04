var Inyector = require('./Inyector');
var porcentajeLuzRef = 100;
var flujoPlasmaRef = 300;
var numInyectores = 3;

var Wrap = function(config) {
	config = config || {};

	this.inyectorA = new Inyector({danio: (config.danioA !== "undefined")? config.danioA:100 });
	this.inyectorB = new Inyector({danio: (config.danioB !== "undefined")? config.danioB:100 });
	this.inyectorC = new Inyector({danio: (config.danioC !== "undefined")? config.danioC:100 });
	this.porcentajeLuz = config.porcentajeLuz || 0;
	this.flujoPlasma = 0;
}

Wrap.prototype.calculaFlujoPlasma = function() {
	this.flujoPlasma = (this.getPorcentajeLuz() * flujoPlasmaRef) / porcentajeLuzRef;
}

Wrap.prototype.getNumInyectoresDisponibles = function() {
	var num = 0;
	if(this.getInyectorA().esUtilizable()) {
		num++;
	}
	if(this.getInyectorB().esUtilizable()) {
		num++;
	}
	if(this.getInyectorC().esUtilizable()) {
		num++;
	}
	return num;
}

Wrap.prototype.getPlasmaNormal = function(numInyectores) {
	var flujoPlasmaNormal = (this.flujoPlasma > (Inyector.prototype.MAXIMO_FLUJO_PLASMA * numInyectores))? (Inyector.prototype.MAXIMO_FLUJO_PLASMA * numInyectores) : this.flujoPlasma;
	return flujoPlasmaNormal;
}

Wrap.prototype.operar = function() {
	this.calculaFlujoPlasma();
	var maximoCapacidadFlujoPlasma = this.getInyectorA().getMaximoGeneraFlujoPlasma() + this.getInyectorB().getMaximoGeneraFlujoPlasma() + this.getInyectorC().getMaximoGeneraFlujoPlasma();

	if(this.flujoPlasma <= maximoCapacidadFlujoPlasma) {
		var numInyectoreDisponibles = this.getNumInyectoresDisponibles();
		var flujoPlasmaNormal = this.getPlasmaNormal(numInyectoreDisponibles);
		var flujoPlasmaAdicional = this.flujoPlasma - flujoPlasmaNormal;

		var flujoPlasmaRepartir = flujoPlasmaNormal / numInyectoreDisponibles;
		var flujoPlasmaSobrante = 0;

		if(this.getInyectorA().esUtilizable()) {
			flujoPlasmaSobrante += this.getInyectorA().getDanio();
			this.getInyectorA().addFlujoPlasmaGenerado(flujoPlasmaRepartir - this.getInyectorA().getDanio());
		}

		if(this.getInyectorB().esUtilizable()) {
			flujoPlasmaSobrante += this.getInyectorB().getDanio();
			this.getInyectorB().addFlujoPlasmaGenerado(flujoPlasmaRepartir - this.getInyectorB().getDanio());
		}

		if(this.getInyectorC().esUtilizable()) {
			flujoPlasmaSobrante += this.getInyectorC().getDanio();
			this.getInyectorC().addFlujoPlasmaGenerado(flujoPlasmaRepartir - this.getInyectorC().getDanio());
		}

		flujoPlasmaAdicional += flujoPlasmaSobrante;
		flujoPlasmaRepartir = flujoPlasmaAdicional / numInyectoreDisponibles;

		if(this.getInyectorA().esUtilizable()) {
			this.getInyectorA().addFlujoPlasmaGenerado(flujoPlasmaRepartir);
		}

		if(this.getInyectorB().esUtilizable()) {
			this.getInyectorB().addFlujoPlasmaGenerado(flujoPlasmaRepartir);
		}

		if(this.getInyectorC().esUtilizable()) {
			this.getInyectorC().addFlujoPlasmaGenerado(flujoPlasmaRepartir);
		}
	} else {
		throw "Unable to comply";
	}
}

Wrap.prototype.getTiempoFuncionamiento = function() {
	var tiempo = (this.getInyectorA().getMinutosFuncionamiento() + this.getInyectorB().getMinutosFuncionamiento() + this.getInyectorC().getMinutosFuncionamiento()) / this.getNumInyectoresDisponibles();

	if(tiempo === 0 && this.getInyectorA().getDanio() === 0 && this.getInyectorB().getDanio() === 0 && this.getInyectorC().getDanio() === 0) {
		return 'Infinito';
	}
	return tiempo;
}

Wrap.prototype.getFlujoPlasma = function() {
	return this.flujoPlasma;
}

Wrap.prototype.getInyectorA = function() {
	return this.inyectorA;
}

Wrap.prototype.getInyectorB = function() {
	return this.inyectorB;
}

Wrap.prototype.getInyectorC = function() {
	return this.inyectorC;
}

Wrap.prototype.setPorcentajeLuz = function(porcentajeLuz) {
	this.porcentajeLuz = porcentajeLuz;
}

Wrap.prototype.getPorcentajeLuz = function() {
	return this.porcentajeLuz;
}

module.exports = Wrap;