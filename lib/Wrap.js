var Constantes = require('./Constantes');
var Inyector = require('./Inyector');

/**
* Constructor Representa a un Motor Wrap de la nave Starship Enterprise
* @author Byron Cueva
* @constructor
* @param {Object} config - Configuraciones Iniciales
*/
var Wrap = function(config) {
	config = config || {};

	//Primer Inyector
	this.inyectorA = new Inyector({danio: (config.danioA !== "undefined")? config.danioA:100 });
	//Segundo Inyector
	this.inyectorB = new Inyector({danio: (config.danioB !== "undefined")? config.danioB:100 });
	//Tercer Inyector
	this.inyectorC = new Inyector({danio: (config.danioC !== "undefined")? config.danioC:100 });
	//Porcentaje de velocidad de la luz
	this.porcentajeLuz = config.porcentajeLuz || 0;
	//Flujo de Plasma requerido
	this.flujoPlasma = 0;
}

/**
* Permite calcular el total de flujo plasma necesario a generar para poder obtener un porcentaje de Velocidad de la Luz deseado
*/
Wrap.prototype.calculaFlujoPlasma = function() {
	this.flujoPlasma = (this.getPorcentajeLuz() * Constantes.CANTIDAD_REFERENCIA_FLUJO_PLASMA) / Constantes.PORCENTAJE_REFERENCIA_VELOCIDAD_LUZ;
}

/**
* Permite obtener el numero de inyectores utilizables
* @return {Integer} Numero de Inyectores Disponibles
*/
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

/**
* Permite obtener el total de plasma posible a generar por el el motor en flujo de trabajo normal si minutos de trabajo extra
* @param {Integer} numInyectores - Numero de inyectores disponibles para generar plasma
* @return {Integer} Total Plasma
*/
Wrap.prototype.getMaximoPlasmaFuncionamientoNormal = function(numInyectores) {
	var flujoPlasmaNormal = (this.flujoPlasma > (Constantes.MAXIMO_FLUJO_PLASMA_INYECTOR * numInyectores))? (Constantes.MAXIMO_FLUJO_PLASMA_INYECTOR * numInyectores) : this.flujoPlasma;
	return flujoPlasmaNormal;
}

/**
* Permite lanzar el funcionamiento del Motor Wrap
*/
Wrap.prototype.operar = function() {
	this.calculaFlujoPlasma();
	var maximoCapacidadFlujoPlasma = this.getInyectorA().getMaximoFlujoPlasmaTrabajoExcedido() + this.getInyectorB().getMaximoFlujoPlasmaTrabajoExcedido() + this.getInyectorC().getMaximoFlujoPlasmaTrabajoExcedido();

	//Si el flujo de plasma requerido es menor al flujo de plasma maximo que puede generar el Motor Wrap
	if(this.flujoPlasma <= maximoCapacidadFlujoPlasma) {

		//Trabajo Normal
		var numInyectoreDisponibles = this.getNumInyectoresDisponibles();
		var flujoPlasmaNormal = this.getMaximoPlasmaFuncionamientoNormal(numInyectoreDisponibles);
		var flujoPlasmaAdicional = this.flujoPlasma - flujoPlasmaNormal;

		var flujoPlasmaRepartir = flujoPlasmaNormal / numInyectoreDisponibles;
		var flujoPlasmaSobrante = 0;

		if(this.getInyectorA().esUtilizable()) {
			flujoPlasmaSobrante += this.getInyectorA().generarPlasma(flujoPlasmaRepartir);
		}

		if(this.getInyectorB().esUtilizable()) {
			flujoPlasmaSobrante += this.getInyectorB().generarPlasma(flujoPlasmaRepartir);
		}

		if(this.getInyectorC().esUtilizable()) {
			flujoPlasmaSobrante += this.getInyectorC().generarPlasma(flujoPlasmaRepartir);
		}

		//Trabajo excedido
		flujoPlasmaAdicional += flujoPlasmaSobrante;
		flujoPlasmaRepartir = flujoPlasmaAdicional / numInyectoreDisponibles;

		if(this.getInyectorA().esUtilizable()) {
			this.getInyectorA().generarPlasma(flujoPlasmaRepartir);
		}

		if(this.getInyectorB().esUtilizable()) {
			this.getInyectorB().generarPlasma(flujoPlasmaRepartir);
		}

		if(this.getInyectorC().esUtilizable()) {
			this.getInyectorC().generarPlasma(flujoPlasmaRepartir);
		}
	} else {
		throw "Unable to comply";
	}
}

/**
* Permite obtener el Tiempo de funcionamiento extra en minutos del Motor de Wrap
* @return {Integer} Tiempo Funcionamiento
*/
Wrap.prototype.getTiempoFuncionamiento = function() {
	var tiempo = (this.getInyectorA().getMinutosFuncionamiento() + this.getInyectorB().getMinutosFuncionamiento() + this.getInyectorC().getMinutosFuncionamiento()) / this.getNumInyectoresDisponibles();

	if(tiempo === 0 && this.getInyectorA().getDanio() === 0 && this.getInyectorB().getDanio() === 0 && this.getInyectorC().getDanio() === 0) {
		return 'Infinito';
	}
	return tiempo;
}

/**
* Permite obtener el Flujo de Plasma total requerido
* @return {Integer} Flujo plasma
*/
Wrap.prototype.getFlujoPlasma = function() {
	return this.flujoPlasma;
}

/**
* Permite obtener el Inyector A
* @return {Inyector} Instancia de un Inyector
*/
Wrap.prototype.getInyectorA = function() {
	return this.inyectorA;
}

/**
* Permite obtener el Inyector B
* @return {Inyector} Instancia de un Inyector
*/
Wrap.prototype.getInyectorB = function() {
	return this.inyectorB;
}

/**
* Permite obtener el Inyector C
* @return {Inyector} Instancia de un Inyector
*/
Wrap.prototype.getInyectorC = function() {
	return this.inyectorC;
}

/**
* Permite obtener el Porcentaje de la Velocidad de la Luz
* @return {Integer} Porcentaje Velocidad Luz
*/
Wrap.prototype.getPorcentajeLuz = function() {
	return this.porcentajeLuz;
}

module.exports = Wrap;