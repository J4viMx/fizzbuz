const Reader = require( "../../../lib/utils/Reader.js" )
const explorers = Reader.readJsonFile("explorers.json")

const ExplorerService = require("../../../lib/services/ExplorerService")


describe("Puebas Explorer Service", () => {

    test('Metodo filterByMission', () => { 
        const filterByMission = ExplorerService.filterByMission(explorers, "node")
        expect(filterByMission.length).toBe(10)
     })
     
     test('Metodo getAmountOfExplorersByMission', () => { 
         const getAmountOfExplorersByMission = ExplorerService.getAmountOfExplorersByMission(explorers, "node")
         expect(getAmountOfExplorersByMission).toBe(10)
      })

     test('Metodo getExplorersUsernamesByMission', () => { 
         const getExplorersUsernamesByMission = ExplorerService.getExplorersUsernamesByMission(explorers, "node")
         expect(getExplorersUsernamesByMission[0]).toBe(explorers[0].githubUsername)
      })

      

    });