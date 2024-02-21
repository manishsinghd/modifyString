function modifyString(s) {
    copyOfS=[]
    let result = '';
    let prevModified = false;
    let ascii = []

    for (let i = 0; i < s.length; i++) {
        ascii[i] = s.charCodeAt(i);
    }
    copyOfS=[...ascii]

    for(let j = 0; j< ascii.length; j++){

        if (ascii[j] % 2 === 0 && j!= ascii.length) {

                let modifiedAscii = ascii[j+1] + (ascii[j] % 7);

                if (modifiedAscii > 127 || prevModified) {
                    modifiedAscii = 83;
                }
                if(ascii[j+1] == copyOfS[j+1] ){
                ascii[j+1] = modifiedAscii
                prevModified = true;
                }

            }
        else if (ascii[j] % 2 != 0 && j!=0){
            let modifiedAscii = ascii[j-1] - (ascii[j] % 5);
            if(ascii[j-1] == copyOfS[j-1])
            ascii[j-1] = modifiedAscii
            if (modifiedAscii < 0 || prevModified) {
                modifiedAscii = 83;
            }
            prevModified = false;

        }

    }
     for (let i = 0; i < ascii.length; i++) {
        result += String.fromCharCode(ascii[i]);
    }
     return result;
}

let s = "sHQen}";
console.log("Original string:", s);
console.log("Modified string:", modifyString(s)); // Output: sESekS

