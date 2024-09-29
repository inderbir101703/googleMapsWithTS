import { faker } from "@faker-js/faker";
import { mappable } from "./CustomMap";
export  class Company implements mappable{
    companyName:string;
    catchPhrase:string;
    location:{
        lat:number;
        lng:number;
    }
    // here we are just defining type of locaiton so in constructor we need to define location first... if do locaiton.lat=lat in constructor will give error

    constructor(){
        this.companyName=faker.company.name();

        this.catchPhrase=faker.company.catchPhrase();
        this.location={
            lat:parseFloat(faker.address.latitude()),
            lng:parseFloat(faker.address.longitude())
        }
    }
    markerContent():string{
        return `<h1>user name is ${this.companyName}<h1/>
        <h2>${this.catchPhrase}</h2>`    
    }
}