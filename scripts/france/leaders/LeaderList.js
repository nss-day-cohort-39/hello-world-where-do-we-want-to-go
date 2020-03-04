import { useLeader } from "./LeaderDataProvider.js"
import Leader from "./leaders.js"


const LeaderList = () => {

    const contentElement = document.querySelector(".leader_list")
    
    const leaderObjectArray = useLeader()

    for (const leaderObject of leaderObjectArray) {
     const leaderHTMLRepresentation= Leader(leaderObject)

     contentElement.innerHTML += leaderHTMLRepresentation
    }
    
    }

    export default LeaderList