# Enterprise warp-drive management software
## Clases o Objeto Constructor
### Wrap
> Esta clase representa al Motor Wrap de la nave Enterprise warp-drive, el cual es el responsable del funcionamiento de sus tres inyectores, y que estos generen plasma, en un tiempo de trabajo normal o excedido, para satisfacer el porcentaje de la Velocidad de la lus Requerido.

#### Metodos

Objeto Constructor

### Inyector
> Esta clase representa a un Inyector del Motor Wrap, el cual genera plasma dependiendo del porcentaje de daño que tenga este, puede gener cantidad de plasma en su flujo de trabajo normal o tambien en tiempo de trabajo excedido. Si genera plasma excedido de su trabajo normal, el tiempo de funcionamiento del Inyector disminuye y por ende el tiempo del Motor Wrap, tambien.

#### Metodos

*esUtilizable():* Permite verificar si el Inyector es utilizable.


## Requerimnientos de Instalacion
	`sudo npm install -g jasmine-node`
## Correr Test
	`jasmine-node --verbose --junitreport --growl spec`

**autor:** *Byron Cueva*

