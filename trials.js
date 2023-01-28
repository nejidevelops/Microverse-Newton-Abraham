'use strict';

// Newton's solution
// Cats and A mouse solution
function catAndMouse(x,y,z){
    let catAPosition = Math.abs(z - x);
    let catBPosition = Math.abs(z - y);

    if(catAPosition < catBPosition){
        return "Cat A";
    }
    else if(catBPosition < catAPosition){
        return "Cat B";
    }
    else{
        return "Mouse C";
    }
}



// Abraham's solution