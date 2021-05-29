function footwear() {
    let footwear
    let weather = document.getElementById('weather').value;
    switch (weather){
        case "Hot":
            footwear = "Sandals";
            break;
        case "Rain":
            footwear = "Galoshoes";
            break;
        case "Snow":
            footwear = "Boots";
            break;
        default:
            footwear = "Shoes";
    }
    
    document.getElementById('output').innerHTML = footwear;
}