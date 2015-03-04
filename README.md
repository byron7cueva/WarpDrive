# Enterprise warp-drive management software
## Clases o Objeto Constructor
### Wrap
> Esta clase representa al Motor Wrap de la nave Enterprise warp-drive, el cual es el responsable del funcionamiento de sus tres inyectores, y que estos generen plasma, en un tiempo de trabajo normal o excedido, para satisfacer el porcentaje de la Velocidad de la luz Requerido.

#### Métodos

Objeto Constructor

### Inyector
> Esta clase representa a un Inyector del Motor Wrap, el cual genera plasma dependiendo del porcentaje de daño que tenga este, puede gener cantidad de plasma en su flujo de trabajo normal o tambien en tiempo de trabajo excedido. Si genera plasma excedido de su trabajo normal, el tiempo de funcionamiento del Inyector disminuye y por ende el tiempo del Motor Wrap, tambien.

#### Propiedades

*danio:* Porcentaje de daño del Inyector.
*flujoPlasmaGenerado:* Total de Flujo de plasma generado por el Inyector.

#### Métodos

*esUtilizable():* Permite verificar si el Inyector es utilizable.
*generarPlasma(flujoPlasma):* Hace que el Inyector genere el plasma asignado por el Motor Wrap, este a su vez no puede retornar plasma sobrante que no pueda ser generado, en un tiempo de trabajo normal.
*getMaximoFlujoPlasmaTrabajoNormal():* Devuelve el maximo de plasma que puede generar el inyector en un flujo de trabajo Normal.
*getMaximoFlujoPlasmaTrabajoExcedido():* Devuelve el maximo de plasma que puede generar el inyector en un flujo de trabajo excedido.
*getMinutosFuncionamiento():* Permite obtener el tiempo de funcionamiento restante que tiene el Inyector, despues de haber pasado por un flujo de trabajo excedido.
*getDanio():* Permite obtener el Porcentaje de daño que tiene el Inyector.
*getFlujoPlasmaGenerado():* Permite obtener el Flujo de Plasma que ha generado el Inyector.


## Requerimnientos de Instalacion
	`sudo npm install -g jasmine-node`
## Correr Test
	`jasmine-node --verbose --junitreport --growl spec`

**autor:** *Byron Cueva*

