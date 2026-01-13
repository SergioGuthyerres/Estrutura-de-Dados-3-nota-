export default class Dictionary {
constructor(toStrFn = defaultToString) {
this.toStrFn = toStrFn; // {1}
this.table = {}; // {2}
}
}

export function defaultToString(item) {
if (item === null) {
return 'NULL';
} else if (item === undefined) {
return 'UNDEFINED';
} else if (typeof item === 'string' || item instanceof String) {
return `${item}`;
}
return item.toString(); // {1}

//Métodos 
size() {
return Object.keys(this.table).length;
}

isEmpty() {
return this.size() === 0;
}

isEmpty() {
return this.size() === 0;
}

toString() {
if (this.isEmpty()) {
return '';
}
const valuePairs = this.keyValues();
let objString = `${valuePairs[0].toString()}`; // {1}
for (let i = 1; i < valuePairs.length; i++) {
objString = `${objString},${valuePairs[i].toString()}`; // {2}
}
return objString; // {3}
}

}
