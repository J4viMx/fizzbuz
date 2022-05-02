const Reader = require( "../../../lib/utils/Reader.js" );

describe("Puebas a Reader", () => {

    test("Leer el archivo Json", () => { 
        const explorers = Reader.readJsonFile("explorers.json");
        expect(explorers.length).toBe(15);
    });
});