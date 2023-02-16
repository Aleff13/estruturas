//O javascript possui um limite com relação a chamadas recursivas

//geralmente o erro lançado é algo como "Maximum Call Stack Size Exceeded"

let i = 0;

function rescursive() {
    i++;
    rescursive()
}

try {
    rescursive()
} catch (ex) {
    console.log("i = " + i + 'error: ' + ex)
}