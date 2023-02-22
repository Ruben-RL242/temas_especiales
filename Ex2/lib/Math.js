class Math {
    /**
     * add
     * @param {number} a the first number to add
     * @param {number} b the second number to add 
     * @returns {number} the sum of a and b
     */
    add (a, b) {
      if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('both numbers must be type number')
      }
      return a + b;
    }
  
    /**
     * sumArr
     * @param {Array<number>} arr the array of numbers to add
     */
    sumArr (arr) {
        let total=0;
        for(let i = 0; i < arr.length; i++) total+=arr[i];
        return total;
    }

    /**
     * avgArr
     * @param {Array<number>} arr the array of numbers to average
     */
    avg (arr){
        let total=0;
        for(let i = 0; i < arr.length; i++) total+=arr[i];
        return total/arr.length;
    }

    /**
     * uniquesArr
     * @param {Array<number>} arr the array of numbers to average
     */
    uniques (arr){
        const unicos = [];

        for(let i = 0; i < arr.length; i++) {
 
            const elemento = arr[i];
 
            if (!unicos.includes(arr[i])) {
                unicos.push(elemento);
            }
        }
        return unicos;
    }
  }
  
  module.exports = Math;