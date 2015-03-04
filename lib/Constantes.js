//Variable privada que contiene la informacion del flujo de plasma maximo que puede generar un Inyector durante un trabajo normal en mg/s
const MAXIMO_FLUJO_PLASMA_INYECTOR = 100;
//Variable privada que contiene el porcentaje de daño maximo que puede tener un Inyector para que este ya no funcione
const PORCENTAJE_INUTILIZABLE_INYECTOR = 100;
//Variable privada que indica el tiempo (minutos) maximo de funcionamiento adicional que puede tener un inyector
const TIEMPO_MAXIMO_FUNCIONAMIENTO = 100;
//Variable privada Porcentaje de la Velocidad de la Luz de referencia con respecto al flujo de plasma
const PORCENTAJE_REFERENCIA_VELOCIDAD_LUZ = 100;
//Variable privada Total de flujo de plasma  de referencia con respecto al porcentaje de velocidad de la Luz
const CANTIDAD_REFERENCIA_FLUJO_PLASMA = 300;

module.exports = {
    MAXIMO_FLUJO_PLASMA_INYECTOR: MAXIMO_FLUJO_PLASMA_INYECTOR,
    PORCENTAJE_INUTILIZABLE_INYECTOR: PORCENTAJE_INUTILIZABLE_INYECTOR,
    TIEMPO_MAXIMO_FUNCIONAMIENTO: TIEMPO_MAXIMO_FUNCIONAMIENTO,
    PORCENTAJE_REFERENCIA_VELOCIDAD_LUZ: PORCENTAJE_REFERENCIA_VELOCIDAD_LUZ,
    CANTIDAD_REFERENCIA_FLUJO_PLASMA: CANTIDAD_REFERENCIA_FLUJO_PLASMA
};