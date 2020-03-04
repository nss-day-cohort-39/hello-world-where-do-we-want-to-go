const cityCollection = [
    {
        name: "Rome",
    },

    {
        name: "Florence",
    
    },

    {
        name: "Venice",
        
    },

    {
        name: "Milan",

    },
]

export const useCity = () => {
    return cityCollection.slice()
}