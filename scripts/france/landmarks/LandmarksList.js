import { useLandmark } from "./LandmarkDataProvider.js"
import Landmark from "./landmarks.js"


const LandmarkList = () => {

    const contentElement = document.querySelector(".landmark_list")
    
    const landmarkObjectArray = useLandmark()

    for (const landmarkObject of landmarkObjectArray) {
     const landmarkHTMLRepresentation= Landmark(landmarkObject)

     contentElement.innerHTML += landmarkHTMLRepresentation
    }
    
    }

    export default LandmarkList