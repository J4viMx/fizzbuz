

class FizzbuzzService{

    static applyValidationInExplorer(explorer){

        if(  explorer.score % 5 === 0 && explorer.score % 3 === 0 ){
            explorer.trick = "FIZZBUZZ";
        } else if( explorer.score % 5 === 0  ){
            explorer.trick = "BUZZ";

        }else if( explorer.score % 3 === 0  ){
            explorer.trick = "FIZZ";
        } else {
            explorer.trick = explorer.score;
        }
        return explorer; 
    }


    static applyValidationInNumber(number){
        
        let resultado;
           
        if(  number % 5 === 0 && number % 3 === 0 ){
            resultado = "FIZZBUZZ";
        } else if( number % 5 === 0  ){
            resultado = "BUZZ";

        }else if( number % 3 === 0  ){
            resultado = "FIZZ";
        } else {
            resultado = number;
        }
        return resultado; 
    }

}


module.exports = FizzbuzzService;