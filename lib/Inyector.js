//Variable privada que contiene la informacion del flujo de plasma maximo que puede generar un Inyector durante un trabajo normal en mg/s
var maximoFlujoPlasma = 100;

//Variable privada que contiene el porcentaje de daño maximo que puede tener un Inyector para que este ya no funcione
var porcentajeInutilizable = 100;

//Variable privada que indica el tiempo (minutos) maximo de funcionamiento adicional que puede tener un inyector
var tiempoMaximoFuncionamiento = 100;

/**
* Constructor Representa a un Inyector de Plasma que regulan la energía del reactor de antimateria
* @author Byron Cueva
* @constructor
* @param {Object} config - Configuracion inicial del objeto del tipo {danio:%danio}
*/
var Inyector = function(config) {
	config = config || {};

	//Porcentaje de Daño que tiene el Inyector
	this.danio = config.danio || 0;
	//Flujo Plasma generado por el Inyector
	this.flujoPlasmaGenerado = 0;
};

/**
* Constante con el Valor del maximo flujo de plasma que puede generar un Inyector durante un trabajo normal
*/
Inyector.prototype.MAXIMO_FLUJO_PLASMA = maximoFlujoPlasma;

/**
* Permite saber si el Inyector es utilizable
* @return {Boolean} True es Utilizable, False no es Utilizable
*/
Inyector.prototype.esUtilizable = function() {
	if(this.getDanio() < porcentajeInutilizable) {
		return true;
	}
	return false;
}

/**
* Permite generar el plasma asignado por el motor wrap
* @param {Integer} flujoPlasma - Flujo plasma asignado para generarlo
* @return {Integer} Flujo de plasma sobrante, si esque el Inyector presenta un porcentaje de daño y esta en un flujo normal de inyeccion de plasma
*/
Inyector.prototype.generarPlasma = function(flujoPlasma) {
	if((this.flujoPlasmaGenerado + flujoPlasma) < this.getMaximoGeneraFlujoPlasma()) {
		if(this.flujoPlasmaGenerado < this.getMaximoNormalGeneraFlujoPlasma()) {
			this.flujoPlasmaGenerado += flujoPlasma - this.getDanio();
			return this.getDanio();
		} else {
			this.flujoPlasmaGenerado += flujoPlasma;
			return 0;
		}
	} else {
		throw 'No se puede generar mas plasma';
	}
}

/**
* Permite obtener el Maximo de Flujo de Plasma que puede generar el Inyector en un trabajo normal
* @return {Integer} Flujo Plasma
*/
Inyector.prototype.getMaximoNormalGeneraFlujoPlasma = function() {
	return maximoFlujoPlasma - this.getDanio();
}

/**
* Permite obtener el Maximo Flujo de Plasma que puede generar el Inyector en un trabajo por encima de su capacidad
* @return {Integer} Flujo Plasma
*/
Inyector.prototype.getMaximoGeneraFlujoPlasma = function() {
	if(this.esUtilizable()) {
		return maximoFlujoPlasma - this.getDanio() + maximoFlujoPlasma;
	}
	return 0;
}

/**
* Permite obtener los minutos de funcionamiento que le sobran al Inyector
* @return {Integer} Minutos de Funcionamiento
*/
Inyector.prototype.getMinutosFuncionamiento = function() {
	if(this.esUtilizable() && this.getFlujoPlasmaGenerado() > this.getMaximoNormalGeneraFlujoPlasma()) {
		var plasmaExedido = this.getFlujoPlasmaGenerado() - this.getMaximoNormalGeneraFlujoPlasma();
		return tiempoMaximoFuncionamiento - plasmaExedido;
	}
	return 0;
}

/**
* Permite obtener el porcentaje de daño que tiene el Inyector
* @return {Integer} Porcentaje de daño del Inyector
*/
Inyector.prototype.getDanio = function() {
	return this.danio;
}

/**
* Permite obtener el total de flujo de plasma generado por el Inyector
* @return {Integer} Flujo Plasma
*/
Inyector.prototype.getFlujoPlasmaGenerado = function() {
	return this.flujoPlasmaGenerado;
}

module.exports = Inyector;