

class ExplorerService{
    static filterByMission(explorers, mission){
        const explorerByMission = explorers.filter((explorer) => explorer.mission == mission);
        return explorerByMission;
    }

    static getAmountOfExplorersByMission(explorers, mission){
        const explorersInNodeToGetUsernames = explorers.filter((explorer) => explorer.mission == mission);
        return explorersInNodeToGetUsernames.length;
    }

    static getExplorersUsernamesByMission(explorers, mission){
        const explorersInNodeToGetUsernames = explorers.filter((explorer) => explorer.mission == mission);
        const usernamesInNode = explorersInNodeToGetUsernames.map((explorer) => explorer.githubUsername);
        
        return usernamesInNode;
    }

}


module.exports = ExplorerService;