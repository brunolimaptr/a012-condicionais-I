
let idade = prompt("Qual a sua idade?")
let terminouEM = prompt("Terminou o ensino medio?")
let CursandoalgumaFaculdade = confirm("Está cursando alguma faculdade?")


if (idade >= 18){
    console.log("É maior de idade!")
}

else if (idade < 18){
    console.log("É menor de idade!")
}

else{console.log("Dado invalido!")}

if (terminouEM === "sim"){
    console.log("Terminou o ensino médio!")
    
}

else if(terminouEM === "nao"){
    console.log("Não terminou o ensino médio!")
    
}

else{console.log("Dado invalido!")}

if (!CursandoalgumaFaculdade){
    console.log("Não está na faculdade!")
}

else {console.log("Está na faculdade!")}