import Auto from "./class-auto.js"

describe("Comandos de movimiento del Auto", () => {
    const auto = new Auto();
    it("", () => {
      expect(true).toEqual(true);
    });
    it("No se ingreso un comando", () => {
        expect(auto.ejecutar("")).toEqual("0,0N");
    });
    it("Se ingresa el comando A para avanzar", () => {
        expect(auto.ejecutar("A")).toEqual("0,1N");
    });
    it("Se ingresa el comando AA para avanzar 2 veces", () => {
        expect(auto.ejecutar("AA")).toEqual("0,2N");
    });
    it("Se ingresa el comando A repetidas veces", () => {
        expect(auto.ejecutar("AAAA")).toEqual("0,4N");
        expect(auto.ejecutar("AAAAAAA")).toEqual("0,7N");
    });
    it("Se ingresa el comando D para girar a la derecha", () => {
        expect(auto.ejecutar("D")).toEqual("0,0E");
    });
 });
