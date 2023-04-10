import Auto from "./class-auto.js"

describe("Comandos de movimiento del Auto", () => {
    it("", () => {
      const auto = new Auto();
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
    });
    it("Se ingresa el comando D para girar a la derecha", () => {
        const auto = new Auto();
        expect(auto.ejecutar("D")).toEqual("0,0E");
    });
    it("Se ingresa el comando D para girar a la derecha", () => {
        const auto = new Auto();
        expect(auto.ejecutar("DD")).toEqual("0,0S");
    });
 });
