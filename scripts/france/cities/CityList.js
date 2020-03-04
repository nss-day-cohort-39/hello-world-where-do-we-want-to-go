import { useCity } from "./CityDataProvider.js"
import City from "./cities.js"


const CityList = () => {

    const contentElement = document.querySelector(".city_list")
    
    const cityObjectArray = useCity()

    for (const cityObject of cityObjectArray) {
     const cityHTMLRepresentation= City(cityObject)

     contentElement.innerHTML += cityHTMLRepresentation
    }
    
    }

    export default CityList