const values = [
    {
        'str' : 'UC',
        'val' : 65,
        'upb' : 26
    },
    {
        'str' : 'LC',
        'val' : 97,
        'upb' : 26
    },
    {
        'str' : 'num',
        'val' : 48,
        'upb' : 10
    },
    {
        'str' : 'sym',
        'val' : 35,
        'upb' : 4
    }
]

function func(){
    let len = document.getElementById("length").value;
    if(len >= 15){
        alert("Please enter a value smaller than 15");
    }
    else if(len <= 0){
        alert("Please enter a positive integer smaller than 15");
    }
    else{
        let domain = [];
        let inputs = document.getElementsByClassName("inps");
        for (let i = 0; i < inputs.length; i++) {
            if(inputs[i].checked){
                domain.push(inputs[i].value);
            }
        }
        console.log(domain);
        let x = domain.length;
        let res = "";
        console.log(x);
        for (let i = 0; i < len; i++) {
            let ind = Math.floor(Math.random() * 100) % x;
            console.log(i);
            console.log(ind);
            console.log(domain[ind]);
            for(let j = 0; j < 4; j++){
                if(values[j].str === domain[ind]){
                    let ch = String.fromCharCode(Math.floor(Math.random() * 1000) % values[j].upb + values[j].val);
                    res += ch;
                    break;
                }
            }
        }
        console.log(res);
        document.getElementById("pw").value = res;
    }
}   


function copytext(){
    var copyText = document.getElementById("pw");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
}

document.getElementById("regen").addEventListener("click", func)
document.getElementById("Copy-text").addEventListener("click", copytext);