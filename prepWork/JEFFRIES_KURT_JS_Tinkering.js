function displayIfchildIsAbleToRideTheRollerCoaster(heightToCheck){
    if(heightToCheck > 52){
        console.log('Get on that ride, kiddo!')
    } else {
        console.log('Sorry kiddo, maybe next year.')
    }
}
let childHeight = 53;
displayIfchildIsAbleToRideTheRollerCoaster(childHeight);