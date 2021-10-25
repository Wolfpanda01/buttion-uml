class Rocket{
constructor(
    fuelType,
    weight,
    power,

){
    this.fuelType = fuelType;
    this.weight = weight;
    this.power = power;
}
launch(){
    alert("launch sequence started");
    return true;
}
landing(){
    alert("landing sequence started");
    return true;
}
detachThuruster(thurusterID){
alert("Thuruster" + thurusterID + "has been detached.");
return true;
}

}
class Mission{
    constructor(
        objective,
        launchDateDay,
        launchDateMonth,
        launchDateyear,
        spaceCraft
    )
}