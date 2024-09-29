// /// <reference types="@types/google.maps" />
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";
// import { Company } from "./Company";
 import { User } from "./User";

// const company=new Company()
// console.log(user,'testing',company)
// const modifiedMap=new CustomMap('map')
// modifiedMap.addMarker(user)

document.addEventListener('DOMContentLoaded', () => {
    const customMap = new CustomMap('map');
    
 
    const user=new User()
    const company=new Company()
    console.log('added')
    customMap.addMarker(user); // Add marker after map is initialized
    customMap.addMarker(company)
    console.log('added2')
});