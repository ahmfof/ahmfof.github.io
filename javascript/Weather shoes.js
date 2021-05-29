function footwear() {
    let footwear
    let weather = document.getElementById('weather').value;
    switch (weather){
        case "hot":
            footwear = "sandals";
            break;
        case "rain":
            footwear = "galoshoes";
            break;
        case "snow":
            footwear = "boots";
            break;
        default:
            footwear = "shoes";
    }
    
    document.getElementById('output').innerHTML = footwear;
}