import { faker } from "@faker-js/faker";
import { mappable } from "./CustomMap";

// want to make sure user class implements mappable so that we can find type errors here rather than in main file.. so just use implements kind of testing
export class User implements mappable{
name:string
location:{
    lat:number,
    lng:number
}
constructor(){
    this.name=faker.name.firstName()
    this.location={
        lat: parseFloat(faker.address.latitude()),
        lng:parseFloat(faker.address.longitude())
    }
    

}
markerContent():string{
    return `<p>user name is ${this.name}</p>`    
}
}