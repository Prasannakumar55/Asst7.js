let Alphabet = ['a','b','c','a','d','e','e','c','f','b'];

let X = (new Set (Alphabet));

    console.log(X);


const Y = ['a','b','c','a','d','e','e','c','f','b'];

    const count = {};
    Y.map((Z) => {
        count[Z] = (count[Z] || 0)+1; 
    });
    console.log (count);


 