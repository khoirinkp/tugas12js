function buah(){
    var buah = ["Pisang", "Jeruk", "Apel", "Mangga"];
    console.log(buah);

    var buah2 = buah.pop();
    console.log(buah);

    var buah3 = buah.shift();
    console.log(buah);
    return buah;
}

buah();