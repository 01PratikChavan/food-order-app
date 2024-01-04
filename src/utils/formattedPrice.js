export function formattedPrice(number){
    return number.toLocalString('en-US' , {
        style:'currency' ,
        currency:'USD'
    })
}