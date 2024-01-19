let a = prompt('Write a word')
let b = prompt("Select letter from word")
function findLetter(){
    for(var i =0; i<a.length;i++){
        if(a[i] === b){
            console.log(`letter ${b} in ${i+1} position`)
            
        } 
    }
    
}

    findLetter()