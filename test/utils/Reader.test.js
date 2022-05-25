const ReadJson = require("./../../lib/utils/Reader");

describe("Prueba de unidad de la clase Reader", () => {
    test("Probando el método readJsonFile", () => {
        const dataBase = ReadJson.readJsonFile("./test/utils/TestBase.json");

        expect(dataBase.length).toBe(5);
    });
});