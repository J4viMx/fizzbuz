const ExplorerService= require("../services/ExplorerService");
const Reader = require("../utils/Reader");

class ExplorerController{

    static getExplorersByMission(mission){
        const explorers = Reader.readJsonFile();
        return ExplorerService.filterByMission(explorers, mission);
    }

    static getExplorersUsernamesByMission(mission){
        const explorers = Reader.readJsonFile();
        return ExplorerService.getExplorersUsernamesByMission(explorers, mission);
    }

    static getExplorersAmonutByMission(mission){
        const explorers = Reader.readJsonFile();
        return ExplorerService.getAmountOfExplorersByMission(explorers, mission);
    }


}



module.exports = ExplorerController;