import { ejecutar } from "./ControladorAuto";

describe("Comandos de movimiento del Auto", () => {
    it("", () => {
      expect(true).toEqual(true);
    });
    it("No se ingreso un comando", () => {
        expect(ejecutar("")).toEqual("0,0N");
    });
    it("Se ingresa el comando A para avanzar", () => {
        expect(ejecutar("A")).toEqual("0,1N");
    });
    it("Se ingresa el comando AA para avanzar 2 veces", () => {
        expect(ejecutar("AA")).toEqual("0,2N");
    });
 });
