const initializeDetailButtonEvents = () => {
    // CAN'T TOUCH THIS - START
    const allCloseButtons = document.querySelectorAll(".button--close")

    for (const btn of allCloseButtons) {
        btn.addEventListener("click", theEvent => {
            const dialogElement = theEvent.target.parentNode
            dialogElement.close()
        }
        )
    }

   
    // CAN'T TOUCH THIS - END


    // You will be writing code below this line

    // Show France's details when the button is clicked
    document.querySelector("#button--france").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--france")
            theDialog.showModal()
        }
    )

    // Show Italy's details when the button is clicked
    document.querySelector("#button--italy").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--italy")
            theDialog.showModal()
        }
    )

     // Show Japans's details when the button is clicked
     document.querySelector("#button--japan").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--japan")
            theDialog.showModal()
        }
    )

    // Show Ireland's details when the button is clicked
    document.querySelector("#button--ireland").addEventListener(
        "click",
        theClickEvent => {
            const theDialog = document.querySelector("#details--ireland")
            theDialog.showModal()
        }
    )

    
}
initializeDetailButtonEvents()

export default initializeDetailButtonEvents