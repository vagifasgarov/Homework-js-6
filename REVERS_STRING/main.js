let a = prompt('Write a word')

function reverseWord(){
    for(var i= a.length;i>=0;i--){
        console.log(a[i])
    }
}
reverseWord(a);