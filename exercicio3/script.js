let nacionalidade = prompt("Escreva aqui a sua nacionalidade.").toLowerCase()


if (nacionalidade === "brasileira" || nacionalidade === "argentina" || nacionalidade === "uruguaia" || nacionalidade === "chilena" || nacionalidade === "colombiana"){
    console.log(nacionalidade)
}

else {console.log("nacionalidade não encontrada")}