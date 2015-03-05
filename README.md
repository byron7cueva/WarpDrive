# Enterprise warp-drive management software

## Constantes (lib/Constantes)

Este modulo contiene las constantes de la Aplicacion.

* *MAXIMO_FLUJO_PLASMA_INYECTOR:*  Es el maximo de flujo de plasma al cual puede trabajar un Inyector
* *PORCENTAJE_INUTILIZABLE_INYECTOR:* Definine el porcentaje de daño de un inyector, para que este sea conciderado Inutilizable.
* *TIEMPO_MAXIMO_FUNCIONAMIENTO:* Define el tiempo maximo exedido de funcionamiento que tiene un Inyector.
* *PORCENTAJE_REFERENCIA_VELOCIDAD_LUZ:* Define un porcentaje de velocidad de la luz referencia, que tiene relacion con el flujo de plasma realizado.
* *CANTIDAD_REFERENCIA_FLUJO_PLASMA:* Define la cantidad flujo de plasma referencia, que tiene una relacion son la velocida de la luz.


## Clases o Objeto Constructor
### Wrap (lib/Wrap.js)
> Esta clase representa al Motor Wrap de la nave Enterprise warp-drive, el cual es el responsable del funcionamiento de sus tres inyectores, y que estos generen plasma, en un tiempo de trabajo normal o excedido, para satisfacer el porcentaje de la Velocidad de la luz Requerido.

### Propiedades
* *inyectorA:* Instancia del Inyector A.
* *inyectorB:* Instancia del Inyector B.
* *inyectorC:* Instancia del Inyector C.
* *porcentajeLuz:* Es el porcentaje de velocidad de la luz requerido.
* *flujoPlasma:* Es el total de flujo de plasma requerido para trabajar a una velocidad de luz solicitada.

#### Métodos

* *calculaFlujoPlasma():* Permite calcular el flujo de plasma requerido a generar para cumplir con el Porcentaje de la Velocidad de la Luz indicada.
* *getNumInyectoresDisponibles():* Permite obtener el numero de inyectores utilizables, con los cuales dispone el Motor Wrap para trabajar.
* *getMaximoPlasmaFuncionamientoNormal(numInyectores):* Permite obtener el maximo de plasma que puede generar el motor en su trabajo normal, dependiendo del numero de Inyectores disponibles.
* *operar():* Permite iniciar el funcionamiento del Motor Wrap y realice los calculos en un flujo de Trabajo Normal y Excedido, con el fin de abastecer el porcentaje de luz requerido.
* *getTiempoFuncionamiento():* Permite obtener el tiempo de funcionamiento que le resta al Motor Wrap.
* *getFlujoPlasma():* Permite obtener el total de plasma que se debe generar para satisfacer el porcentaje de la velicidad de la luz.
* *getInyectorA():* Permite obtener la instancia del inyector A.
* *getInyectorB():* Permite obtener la instancia del inyector B.
* *getInyectorC():* Permite obtener la instancia del inyector C.
* *getPorcentajeLuz():* Permite obtener el porcentaje de velocidad de la luz a operar el Motor Wrap.

### Inyector (lib/Inyector)
> Esta clase representa a un Inyector del Motor Wrap, el cual genera plasma dependiendo del porcentaje de daño que tenga este, puede gener cantidad de plasma en su flujo de trabajo normal o tambien en tiempo de trabajo excedido. Si genera plasma excedido de su trabajo normal, el tiempo de funcionamiento del Inyector disminuye y por ende el tiempo del Motor Wrap, tambien.

#### Propiedades

* *danio:* Porcentaje de daño del Inyector.
* *flujoPlasmaGenerado:* Total de Flujo de plasma generado por el Inyector.

#### Métodos

* *esUtilizable():* Permite verificar si el Inyector es utilizable.
* *generarPlasma(flujoPlasma):* Hace que el Inyector genere el plasma asignado por el Motor Wrap, este a su vez no puede retornar plasma sobrante que no pueda ser generado, en un tiempo de trabajo normal.
* *getMaximoFlujoPlasmaTrabajoNormal():* Devuelve el maximo de plasma que puede generar el inyector en un flujo de trabajo Normal.
* *getMaximoFlujoPlasmaTrabajoExcedido():* Devuelve el maximo de plasma que puede generar el inyector en un flujo de trabajo excedido.
* *getMinutosFuncionamiento():* Permite obtener el tiempo de funcionamiento restante que tiene el Inyector, despues de haber pasado por un flujo de trabajo excedido.
* *getDanio():* Permite obtener el Porcentaje de daño que tiene el Inyector.
* *getFlujoPlasmaGenerado():* Permite obtener el Flujo de Plasma que ha generado el Inyector.


## Pruebas

Para realizar las prubas se ha utilizado jasmine. El archivo de pruebas se encuentra en spec/wrapSpec.js

### Requerimientos de Instalacion

	Se debe instalar jasmine-node de forma global.
	`sudo npm install -g jasmine-node`

### Correr Test
	`jasmine-node --verbose --junitreport --growl spec`

**Autor:** *Byron Cueva*

