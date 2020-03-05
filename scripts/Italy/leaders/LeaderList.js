import { useLeaders } from "./LeaderDataProvider.js"
import Leader from "./leader.js"

const LeaderList = () => {

const contentElement = document.querySelector(".head__state")

const arrayOfLeaderObjects = useLeaders()

for (const leaderObject of arrayOfLeaderObjects) {

    const HTMLRepresentationOfLeader = Leader(leaderObject)

    contentElement.innerHTML += HTMLRepresentationOfLeader
}
}

export default LeaderList