const landmarkCollection = [
    {
        name: "Eiffel Tower",
    },

    {
        name: "Palace of Versailles",
    
    },

    {
        name: "Louvre Museum",
    },

    {
        name: "Notre Dame",
    }
]

export const useLandmark = () => {
    return landmarkCollection.slice()
}
