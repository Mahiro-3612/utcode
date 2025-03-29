import { format } from "date-fns";
import { emojify } from "node-emoji";
import { derivative } from "mathjs";

console.log(format(new Date(), "yyyy年MM月dd日"));
console.log(emojify("I :heart: :coffee:!"));
console.log(derivative("log(x, e)", "x").toString());
