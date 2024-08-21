const txtarea = document.querySelector(".txtarea_a_encDec");
const mostrar = document.querySelector(".mostrar_encDec");

//ENCRIPTAR
function encriptar(stringEncript){
    let matrizCodigo = [["i", "imes"], ["e", "enter"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncript = stringEncript.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncript.includes(matrizCodigo[i][0])){
            stringEncript = stringEncript.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncript;
}

function btnEncrypt(){
    let textoEncript = encriptar(txtarea.value);
    mostrar.value = textoEncript;
    txtarea.value = "";
    mostrar.style.backgroundImage = 'none';
}

//DESENCRIPTAR
function decrypt(stringDecrypt){
    let matrizCodigo = [["i", "imes"], ["e", "enter"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    for (let i = 0; i < matrizCodigo.length; i++) {
        if(stringDecrypt.includes(matrizCodigo[i][1])){
            stringDecrypt = stringDecrypt.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDecrypt;
}

function btnDecrypt(){
    let textoDecrypt = decrypt(txtarea.value);
    mostrar.value = textoDecrypt;
    txtarea.value = "";
    mostrar.style.backgroundImage = 'none';
}


//FUNCION PARA COPIAR
function copy(){
    navigator.clipboard.writeText(mostrar.value);
}