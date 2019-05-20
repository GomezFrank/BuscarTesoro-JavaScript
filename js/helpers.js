
//Generar el lugar donde esta el tesoro
let getRandomNumber = size => {
    return Math.floor(Math.random() * size);
}

let getDistance = (e, target) => {
    let diffX = e.offsetX - target.x;
    let diffY = e.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
}

let getDistanceHint = distance => {
    if(distance < 30 ){
        return "Estas muy cerca";
    }else if(distance < 40) {
        return "Ya casi lo encuentras";
    }else if(distance < 60){
        return "Estas Cerca";
    }else if(distance < 100){
        return "Estas lejos";
    }else if(distance < 180){
        return "Estas muy lejos";
    }else {
        return "Estas muy muy lejos"
    }
}