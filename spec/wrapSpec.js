var Wrap = require('../lib/Wrap');

describe("Caso 1: DañoA=0%, DañoB=0%, DañoC=0%, Velocidad Luz=100%", function() {
  it("Deberia tener el resultado: A=100, B=100, C=100, Tiempo Funcionamiento= Infinito", function() {
  	var wrap = new Wrap({
  		danioA: 0,
  		danioB: 0,
  		danioC: 0,
  		porcentajeLuz: 100
  	});

  	wrap.operar();

    expect(wrap.getInyectorA().getFlujoPlasmaGenerado()).toBe(100);
    expect(wrap.getInyectorB().getFlujoPlasmaGenerado()).toBe(100);
    expect(wrap.getInyectorC().getFlujoPlasmaGenerado()).toBe(100);
    expect(wrap.getTiempoFuncionamiento()).toBe('Infinito');

    console.log("Resultado Caso 1:");
    console.log("Flujo Plasma Inyector A: %s", wrap.getInyectorA().getFlujoPlasmaGenerado());
    console.log("Flujo Plasma Inyector B: %s", wrap.getInyectorB().getFlujoPlasmaGenerado());
    console.log("Flujo Plasma Inyector C: %s", wrap.getInyectorC().getFlujoPlasmaGenerado());
    console.log("Tipo Funcionamiento: %s", wrap.getTiempoFuncionamiento());
  });
});

describe("Caso 2: DañoA=0%, DañoB=0%, DañoC=0%, Velocidad Luz=90%", function() {
  it("Deberia tener el resultado: A=90, B=90, C=90, Tiempo Funcionamiento=Infinito", function() {
  	var wrap = new Wrap({
  		danioA: 0,
  		danioB: 0,
  		danioC: 0,
  		porcentajeLuz: 90
  	});

  	wrap.operar();

    expect(wrap.getInyectorA().getFlujoPlasmaGenerado()).toBe(90);
    expect(wrap.getInyectorB().getFlujoPlasmaGenerado()).toBe(90);
    expect(wrap.getInyectorC().getFlujoPlasmaGenerado()).toBe(90);
    expect(wrap.getTiempoFuncionamiento()).toBe('Infinito');

    console.log("Resultado Caso 2:");
    console.log("Flujo Plasma Inyector A: %s", wrap.getInyectorA().getFlujoPlasmaGenerado());
    console.log("Flujo Plasma Inyector B: %s", wrap.getInyectorB().getFlujoPlasmaGenerado());
    console.log("Flujo Plasma Inyector C: %s", wrap.getInyectorC().getFlujoPlasmaGenerado());
    console.log("Tipo Funcionamiento: %s", wrap.getTiempoFuncionamiento());
  });
});

describe("Caso 3: DañoA=0%, DañoB=0%, DañoC=0%, Velocidad Luz=30%", function() {
  it("Deberia tener el resultado: A=30, B=30, C=30, Tiempo Funcionamiento=Infinito", function() {
  	var wrap = new Wrap({
  		danioA: 0,
  		danioB: 0,
  		danioC: 0,
  		porcentajeLuz: 30
  	});

  	wrap.operar();

    expect(wrap.getInyectorA().getFlujoPlasmaGenerado()).toBe(30);
    expect(wrap.getInyectorB().getFlujoPlasmaGenerado()).toBe(30);
    expect(wrap.getInyectorC().getFlujoPlasmaGenerado()).toBe(30);
    expect(wrap.getTiempoFuncionamiento()).toBe('Infinito');

    console.log("Resultado Caso 3:");
    console.log("Flujo Plasma Inyector A: %s", wrap.getInyectorA().getFlujoPlasmaGenerado());
    console.log("Flujo Plasma Inyector B: %s", wrap.getInyectorB().getFlujoPlasmaGenerado());
    console.log("Flujo Plasma Inyector C: %s", wrap.getInyectorC().getFlujoPlasmaGenerado());
    console.log("Tipo Funcionamiento: %s", wrap.getTiempoFuncionamiento());
  });
});

describe("Caso 4: DañoA=20%, DañoB=10%, DañoC=0%, Velocidad Luz=100%", function() {
  it("Deberia tener el resultado: A=90, B=100, C=110, Tiempo Funcionamiento=90", function() {
  	var wrap = new Wrap({
  		danioA: 20,
  		danioB: 10,
  		danioC: 0,
  		porcentajeLuz: 100
  	});

  	wrap.operar();

    expect(wrap.getInyectorA().getFlujoPlasmaGenerado()).toBe(90);
    expect(wrap.getInyectorB().getFlujoPlasmaGenerado()).toBe(100);
    expect(wrap.getInyectorC().getFlujoPlasmaGenerado()).toBe(110);
    expect(wrap.getTiempoFuncionamiento()).toBe(90);

    console.log("Resultado Caso 4:");
    console.log("Flujo Plasma Inyector A: %s", wrap.getInyectorA().getFlujoPlasmaGenerado());
    console.log("Flujo Plasma Inyector B: %s", wrap.getInyectorB().getFlujoPlasmaGenerado());
    console.log("Flujo Plasma Inyector C: %s", wrap.getInyectorC().getFlujoPlasmaGenerado());
    console.log("Tipo Funcionamiento: %s", wrap.getTiempoFuncionamiento());
  });
});

describe("Caso 5: DañoA=0%, DañoB=0%, DañoC=100%, Velocidad Luz=80%", function() {
  it("Deberia tener el resultado: A=120, B=120, C=0, Tiempo Funcionamiento=80", function() {
  	var wrap = new Wrap({
  		danioA: 0,
  		danioB: 0,
  		danioC: 100,
  		porcentajeLuz: 80
  	});

  	wrap.operar();

    expect(wrap.getInyectorA().getFlujoPlasmaGenerado()).toBe(120);
    expect(wrap.getInyectorB().getFlujoPlasmaGenerado()).toBe(120);
    expect(wrap.getInyectorC().getFlujoPlasmaGenerado()).toBe(0);
    expect(wrap.getTiempoFuncionamiento()).toBe(80);

    console.log("Resultado Caso 5:");
    console.log("Flujo Plasma Inyector A: %s", wrap.getInyectorA().getFlujoPlasmaGenerado());
    console.log("Flujo Plasma Inyector B: %s", wrap.getInyectorB().getFlujoPlasmaGenerado());
    console.log("Flujo Plasma Inyector C: %s", wrap.getInyectorC().getFlujoPlasmaGenerado());
    console.log("Tipo Funcionamiento: %s", wrap.getTiempoFuncionamiento());
  });
});

describe("Caso 6: DañoA=0%, DañoB=0%, DañoC=0%, Velocidad Luz=150%", function() {
  it("Deberia tener el resultado: A=150, B=150, C=150, Tiempo Funcionamiento=50", function() {
  	var wrap = new Wrap({
  		danioA: 0,
  		danioB: 0,
  		danioC: 0,
  		porcentajeLuz: 150
  	});

  	wrap.operar();

    expect(wrap.getInyectorA().getFlujoPlasmaGenerado()).toBe(150);
    expect(wrap.getInyectorB().getFlujoPlasmaGenerado()).toBe(150);
    expect(wrap.getInyectorC().getFlujoPlasmaGenerado()).toBe(150);
    expect(wrap.getTiempoFuncionamiento()).toBe(50);

    console.log("Resultado Caso 6:");
    console.log("Flujo Plasma Inyector A: %s", wrap.getInyectorA().getFlujoPlasmaGenerado());
    console.log("Flujo Plasma Inyector B: %s", wrap.getInyectorB().getFlujoPlasmaGenerado());
    console.log("Flujo Plasma Inyector C: %s", wrap.getInyectorC().getFlujoPlasmaGenerado());
    console.log("Tipo Funcionamiento: %s", wrap.getTiempoFuncionamiento());
  });
});

describe("Caso 7: DañoA=0%, DañoB=0%, DañoC=30%, Velocidad Luz=140%", function() {
  it("Deberia tener el resultado: A=150, B=150, C=120, Tiempo Funcionamiento=50", function() {
  	var wrap = new Wrap({
  		danioA: 0,
  		danioB: 0,
  		danioC: 30,
  		porcentajeLuz: 140
  	});

  	wrap.operar();

    expect(wrap.getInyectorA().getFlujoPlasmaGenerado()).toBe(150);
    expect(wrap.getInyectorB().getFlujoPlasmaGenerado()).toBe(150);
    expect(wrap.getInyectorC().getFlujoPlasmaGenerado()).toBe(120);
    expect(wrap.getTiempoFuncionamiento()).toBe(50);

    console.log("Resultado Caso 7:");
    console.log("Flujo Plasma Inyector A: %s", wrap.getInyectorA().getFlujoPlasmaGenerado());
    console.log("Flujo Plasma Inyector B: %s", wrap.getInyectorB().getFlujoPlasmaGenerado());
    console.log("Flujo Plasma Inyector C: %s", wrap.getInyectorC().getFlujoPlasmaGenerado());
    console.log("Tipo Funcionamiento: %s", wrap.getTiempoFuncionamiento());
  });
});

describe("Caso 8: DañoA=20%, DañoB=50%, DañoC=40%, Velocidad Luz=170%", function() {
  it("Deberia tener el resultado: Unable to comply, Tiempo Funcionamiento=0", function() {
  	var wrap = new Wrap({
  		danioA: 20,
  		danioB: 50,
  		danioC: 40,
  		porcentajeLuz: 170
  	});

  	try {
  		wrap.operar();
  	} catch(e) {
  		expect(e).toBe("Unable to comply");
  	} finally {
  		console.log("Resultado Caso 8:");
    	console.log("Tipo Funcionamiento: %s", wrap.getTiempoFuncionamiento());
  	}

  });
});