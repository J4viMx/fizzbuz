const FizzbuzzService = require("../../../lib/services/FizzbuzzService");



describe("Puebas Explorer Service", () => {

    test("Comprobar  Score 1", () => {
        const explorer1= {name: "Explorer1", score: 1};
        const explorerTest = FizzbuzzService.applyValidationInExplorer(explorer1);
        expect(explorerTest.trick).toBe(1);
    });
    test("Comprobar  Score 3", () => {
        const explorer3= {name: "Explorer3", score: 3};
        const explorerTest = FizzbuzzService.applyValidationInExplorer(explorer3);
        expect(explorerTest.trick).toBe("FIZZ");
    });
    test("Comprobar  Score 5", () => {
        const explorer5= {name: "Explorer5", score: 5};
        const explorerTest = FizzbuzzService.applyValidationInExplorer(explorer5);
        expect(explorerTest.trick).toBe("BUZZ");
    });
    test("Comprobar  Score 15", () => {
        const explorer15= {name: "Explorer15", score: 15};
        const explorerTest = FizzbuzzService.applyValidationInExplorer(explorer15);
        expect(explorerTest.trick).toBe("FIZZBUZ");
    });

      

    });