import Auto from "./class-auto.js"

describe("Comandos de movimiento del Auto", () => {
    it("", () => {
      expect(true).toEqual(true);
    });
    it("No se ingreso un comando", () => {
        const auto = new Auto();
        expect(auto.ejecutar("")).toEqual("0,0N");
    });
    it("Se ingresa el comando A para avanzar", () => {
        const auto = new Auto();
        expect(auto.ejecutar("A")).toEqual("0,1N");
    });
    it("Se ingresa el comando AA para avanzar 2 veces", () => {
        const auto = new Auto();
        expect(auto.ejecutar("AA")).toEqual("0,2N");
    });
    it("Se ingresa el comando A repetidas veces", () => {
        const auto = new Auto();
        expect(auto.ejecutar("AAAA")).toEqual("0,4N");
        const auto2 = new Auto();
        expect(auto2.ejecutar("AAAAAAA")).toEqual("0,7N");
        const auto3 = new Auto();
        expect(auto3.ejecutar("AAAAAAAAAA")).toEqual("0,10N");
    });
    it("Se ingresa el comando D para girar a la derecha", () => {
        const auto = new Auto();
        expect(auto.ejecutar("D")).toEqual("0,0E");
    });
    it("Se ingresa el comando DD para girar a la derecha", () => {
        const auto = new Auto();
        expect(auto.ejecutar("DD")).toEqual("0,0S");
    });
    it("Se ingresa el comando DDD para girar a la derecha", () => {
        const auto = new Auto();
        expect(auto.ejecutar("DDD")).toEqual("0,0O");
    });
    it("Se ingresa el comando D cuatro o más veces para girar a la derecha", () => {
        const auto = new Auto();
        expect(auto.ejecutar("DDDD")).toEqual("0,0N");
        const auto2 = new Auto();
        expect(auto2.ejecutar("DDDDDD")).toEqual("0,0S");
    });
    it("Se ingresa el comando DA para girar a la derecha y avanzar", () => {
        const auto = new Auto();
        expect(auto.ejecutar("DA")).toEqual("1,0E");
    });
    it("Se ingresa el comando D varias veces y A una sola vez", () => {
        const auto = new Auto();
        expect(auto.ejecutar("DDA")).toEqual("0,0S");
        const auto2 = new Auto();
        expect(auto2.ejecutar("DDDA")).toEqual("0,0O");
        const auto3 = new Auto();
        expect(auto3.ejecutar("DDDDA")).toEqual("0,1N");
    });
    it("Se ingresa el comando D y A varias veces", () => {
        const auto = new Auto();
        expect(auto.ejecutar("DAAAAAAAAAAA")).toEqual("10,0E");
        const auto2 = new Auto();
        expect(auto2.ejecutar("DDAAAAAAAAAA")).toEqual("0,0S");
        const auto3 = new Auto();
        expect(auto3.ejecutar("DDDAAAAAAAAAA")).toEqual("0,0O");
        const auto4 = new Auto();
        expect(auto4.ejecutar("AAADAAAD")).toEqual("3,3S");
    });
    it("Se ingresa el comando I para girar a la izquierda", () => {
        const auto = new Auto();
        expect(auto.ejecutar("I")).toEqual("0,0O");
    });
    it("Se ingresa el comando II para girar a la izquierda", () => {
        const auto = new Auto();
        expect(auto.ejecutar("II")).toEqual("0,0S");
    });
    it("Se ingresa el comando III para girar a la izquierda", () => {
        const auto = new Auto();
        expect(auto.ejecutar("III")).toEqual("0,0E");
    });
    it("Se ingresa el comando IIII para girar a la izquierda", () => {
        const auto = new Auto();
        expect(auto.ejecutar("IIII")).toEqual("0,0N");
    });
    it("Se ingresa el comando IA varias veces para girar a la izquierda y avanzar", () => {
        const auto = new Auto();
        expect(auto.ejecutar("IIIAIAAI")).toEqual("1,2O");
    });
    it("Se ingresan comandos invalidos junto a comandos existentes para verificar que no sean procesados", () => {
        const auto = new Auto();
        expect(auto.ejecutar("GOKRGAAGND")).toEqual("0,2E");
    });
    it("Se ingresa el limite del grid y la cadena de comandos", () => {
        const auto = new Auto();
        expect(auto.ejecutar("2,3/AADAA")).toEqual("2,2E");
        const auto2 = new Auto();
        expect(auto2.ejecutar("4,3/DAAIA")).toEqual("2,1N");
        const auto3 = new Auto();
        expect(auto3.ejecutar("5,5/AAAAAADAA")).toEqual("2,5E");
    });
    it("Se ingresa el limite del grid, la posicion inicial junto a la orientacion y la cadena de comandos", () => {
        const auto = new Auto();
        expect(auto.ejecutar("5,5/1,1N/AADAAI")).toEqual("3,3N");
        const auto2 = new Auto();
        expect(auto2.ejecutar("20,20/10,10N/AADAAAI")).toEqual("13,12N");
    });
    it("Se ingresa la posicion inicial junto a la orientacion y la cadena de comandos", () => {
        const auto = new Auto();
        expect(auto.ejecutar("3,3E/AADAAI")).toEqual("5,1E");
        const auto2 = new Auto();
        expect(auto2.ejecutar("9,9S/AAAADAAI")).toEqual("7,5S");
    });
    it("Se ingresa el comando J para avanzar dos posiciones a la vez", () => {
        const auto = new Auto();
        expect(auto.ejecutar("J")).toEqual("0,2N");
    });
    it("Se ingresa el comando J junto a otros comandos", () => {
        const auto = new Auto();
        expect(auto.ejecutar("AADJIJJD")).toEqual("2,6E");
    });
 });