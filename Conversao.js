function convBin() {
    let numBin = document.getElementById("Num")
    let Res = document.getElementById("res")
    let bin = numBin.value
    if(bin != 0 || bin != 1){
        window.alert("Somente números binários zé ruela!")
    }
    if(bin.length <= 16){
        for(i = 0;i < bin.length; i++){
            var binUm = bin[bin.length -1]
            var binDois = bin[bin.length -2]
            var binTres = bin[bin.length -3]
            var binQuatro = bin[bin.length -4]
            var binCinco = bin[bin.length -5]
            var binSeis = bin[bin.length -6]
            var binSete = bin[bin.length -7]
            var binOito = bin[bin.length -8]
            var binNove = bin[bin.length -9]
            var binDez = bin[bin.length -10]
            var binOnze = bin[bin.length -11]
            var binDoze = bin[bin.length -12]
            var binTreze = bin[bin.length -13]
            var binQuatorze = bin[bin.length -14]
            var binQuinze = bin[bin.length -15]
            var binDezesseis = bin[bin.length -16]
            var posIn = 0
            var posDois = 0
            var posTres = 0
            var posQuatro = 0
            var posCinco = 0
            var posSeis = 0
            var posSete = 0
            var posOito = 0
            var posNove = 0
            var posDez = 0
            var posOnze = 0
            var posDoze = 0
            var posTreze = 0
            var posQuatorze = 0
            var posQuinze = 0
            var posDezesseis = 0
            var resultado = 0
            if(binUm === "0" || binUm === "1"){
             posIn = binUm * 2**0
            }
            if(binDois === "0" ||binDois === "1"){
                posDois = binDois * 2**1
            }
            if(binTres === "0" ||binTres === "1"){
                posTres = binTres * 2**2
            }
            if(binQuatro === "0" ||binQuatro === "1"){
                posQuatro = binQuatro * 2**3
            }
            if(binCinco === "0" || binCinco === "1"){
                posCinco = binCinco * 2**4
            }
            if(binSeis === "0" || binSeis === "1"){
                posSeis = binSeis * 2**5
            }
            if(binSete === "0" || binSete ==="1"){
                posSete = binSete * 2**6
            }
            if(binOito === "0" || binOito === "1"){
                posOito = binOito * 2**7
            }
            if(binNove === "0" || binNove === "1"){
                posNove = binNove * 2**8
            }
            if(binDez === "0" || binDez ==="1" ){
                posDez = binDez * 2**9
            }
            if(binOnze === "0" || binOnze === "1"){
                posOnze = binOnze * 2**10
            }
            if(binDoze === "0" || binDoze === "1"){
                posDoze = binDoze * 2**11
            }
            if(binTreze === "0" || binTreze === "1"){
                posTreze = binTreze * 2**12
            }
            if(binQuatorze === "0" || binQuatorze === "1"){
                posQuatorze = binQuatorze * 2**13
            }
            if(binQuinze === "0" || binQuinze === "1"){
                posQuinze = binQuinze * 2**14
            }
            if(binDezesseis === "0" || binDezesseis === "1"){
                posDezesseis = binCinco * 2**15
            }
            
            resultado = posDezesseis + posQuinze + posQuatorze + posTreze + posDoze + posOnze + posDez + posNove + posOito + posSete + posSeis + posCinco + posQuatro + posTres + posDois + posIn
         }
    }
    var rr = resultado
    return Res.innerHTML = `${rr}`
}


