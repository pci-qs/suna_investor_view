import http from '../http-common.js'

class TradingUnitDataService
{
    getTradingUnits(id)
    {
        return http.get("/simulationResult", {
            params: {
                id:id
            }
        })
    }
    getIDs()
    {
        return http.get("/SimulationResult/names")
    }
}

export default new TradingUnitDataService()