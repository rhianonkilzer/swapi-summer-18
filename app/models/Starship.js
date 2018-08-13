

export default class Starship{
    constructor(reqData){
            this.name = reqData.name
            this.model = reqData.model
            this.manufacturer = reqData.manufacturer
            this.costInCredits = reqData.cost_in_credits
            this.length = reqData.length
            this.maxAtmospheringSpeed = reqData.max_atmosphering_speed
            this.crew = reqData.crew
            this.passengers = reqData.passengers
            this.cargoCapacity = reqData.cargo_Capacity
            this.consumables = reqData.consumables
            this.hyperdriveRating = reqData.hyperdrive_rating
            this.mglt = reqData.mglt
            this.starshipClass = reqData.starship_class
            this.pilots = reqData.pilots
            this.url = reqData.url
          
        
    
    }
}
