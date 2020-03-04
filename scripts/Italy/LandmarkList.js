import { useLandmarks } from "./LandmarkDataProvider.js";
import Landmark from "./landmark.js";

const LandmarkList = () => {

const contentElement = document.querySelector(".landmark__list")

const arrayOfLandmarkObjects = useLandmarks()

for (const landmarkObject of arrayOfLandmarkObjects) {

    const HTMLRepresentationOfLandmark = Landmark(landmarkObject)

    contentElement.innerHTML += HTMLRepresentationOfLandmark
}
}

export default LandmarkList