function footwear() {
    let footwear
    let weather = document.getElementById('weather').value;
    switch (weather){
        case "hot":
            footwear = "Sandals";
            break;
        case "rain":
            footwear = "Galoshoes";
            break;
        case "snow":
            footwear = "Boots";
            break;
        default:
            footwear = "Shoes";
    }
    
    document.getElementById('output').innerHTML = footwear;
}