console.log("index");
const arr = [1, 3, 2, 2, 6, 1, 5, 4, 2, 3, 4];
const unicos = [];

        for(var i = 0; i < arr.length; i++) {
 
            const elemento = arr[i];
 
            if (!unicos.includes(arr[i])) {
                unicos.push(elemento);
            }
        }
        console.log(unicos)
        console.log(arr)