/*
Class Calculator = 
string = '5 + 5 x 10 / 2'
operator = (+, -, /, x)

pakai get / set utk property
method history(nunjukin semua string), clearHistory(hapus semua string), showResult(hasil operator) ;
pakai Private utk property. ( propertynya apa ? )
*/

class Calculator {
    
    #input = 0
    #history = []
    #historyValue = []

    get input() {
        return this.#input
    }

    set input(val){
        this.#input = val
        this.#history.push(val)
        this.#historyValue.push(this.getResult())
    }

    myHistory(){
        let arrSoal = this.#history;
        let arrJawaban = this.#historyValue;
        let arrGabungan = [];

        for(let i = 0; i < arrSoal.length; i++) {
            arrGabungan.push(`${arrSoal[i]} = ${arrJawaban[i]}`)
        }
        return arrGabungan;
    }

    clearHistory(){
        this.#history.splice(0,this.#history.length);
        this.#history = [];
    }
    
    getResult() {
        let result = eval(this.#input);
        return result;
    }
}

const viewing = new Calculator();

//Calculator Test
viewing.input = "4+4*2"
viewing.input = '5+5*4'
console.log(viewing.input);
console.log(viewing.getResult());
console.log(viewing.myHistory());
viewing.clearHistory();

viewing.input = "7+7*9"
viewing.input = '2*5-4'
console.log(viewing.myHistory());
