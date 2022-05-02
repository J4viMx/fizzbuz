const ExplorerController = require("../../../lib/controllers/ExplorerController");
const Reader = require( "../../../lib/utils/Reader.js" );
const explorers = Reader.readJsonFile("explorers.json");


describe("Pruebas de la clase ExplorerService", () => {
    test("metodo getExplorersByMission", () => {
        const explorersByMission =ExplorerController.getExplorersByMission("node");
        expect(explorersByMission.length).toBe(10);
    });

    test("metodo getExplorersUsernamesByMission", () => {
        const explorersUsernamesByMission =ExplorerController.getExplorersUsernamesByMission( "node");
        expect(explorersUsernamesByMission[0]).toBe(explorers[0].githubUsername);
    });
    test("metodo getExplorersAmonutByMission", () => {
        const amountOfExplorersByMission =ExplorerController.getExplorersAmonutByMission( "node");
        expect(amountOfExplorersByMission).toBe(10);
    });
});