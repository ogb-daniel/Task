//@ts-nocheck
if (recipe == 'SPANISH') {
    fudge = SPANISH_FUDGE;
    amt = base * fudge ;
    sugar = 2 * bottom(amt) + top(amt) * 1.17;
 } else if (recipe == 'FRENCH') {
    fudge = FRENCH_FUDGE;
    amt = base * fudge;
    sugar = 2 * bottom(amt) + top(amt) * 1.17;
    chocolate = 7; 
 } else if(recipe == 'ENGLISH'){
    fudge = ENGLISH_FUDGE;
    amt = base * fudge;
    sugar = 2 * bottom(amt) + top(amt) * 1.17;
 }else {
    fudge = 1;
    amt = base;
    sugar = 2 * bottom(amt) + top(amt) * 1.17;
 }
 