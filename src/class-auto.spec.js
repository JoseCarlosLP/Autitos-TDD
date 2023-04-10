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
        expect(auto3.ejecutar("AAAAAAAAAA")).toEqual("0,9N");
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
        expect(auto.ejecutar("DAAAAAAAAAAA")).toEqual("9,0E");
        const auto2 = new Auto();
        expect(auto2.ejecutar("DDAAAAAAAAAA")).toEqual("0,0S");
        const auto3 = new Auto();
        expect(auto3.ejecutar("DDDAAAAAAAAAA")).toEqual("0,0O");
        const auto4 = new Auto();
        expect(auto4.ejecutar("AAADAAAD")).toEqual("3,3S");
    });
 });
