import SetDS from "./set.js";

function testesSet() {
  const set = new SetDS();
  set.add(1);
  console.log(set.values());
  console.log(set.has(1));
  console.log(set.size());
  set.add(2);
  console.log(set.values());
  console.log(set.has(2));
  console.log(set.size());
  set.delete(1);
  console.log(set.values());
  set.delete(2);
  console.log(set.values());
}
//testesSet();
function testesUnion() {
  const setA = new SetDS();
  setA.add(1);
  setA.add(2);
  setA.add(3);
  const setB = new SetDS();
  setB.add(3);
  setB.add(4);
  setB.add(5);
  setB.add(6);
  const unionAB = setA.union(setB);
  console.log(unionAB.values());
}

//testesUnion();

function testeIntersectionSet() {
  const setA = new SetDS();
  setA.add(1);
  setA.add(2);
  setA.add(3);
  const setB = new SetDS();
  setB.add(2);
  setB.add(3);
  setB.add(4);
  const intersectionAB = setA.intersection(setB);
  console.log(intersectionAB.values());
}
//testeIntersectionSet();

function testeDifferenceSet() {
  const setA = new SetDS();
  setA.add(1);
  setA.add(2);
  setA.add(3);
  const setB = new SetDS();
  setB.add(2);
  setB.add(3);
  setB.add(4);
  const differenceAB = setA.difference(setB);
  console.log(differenceAB.values());
}

//testeDifferenceSet();

function testeIsSubset() {
  const setA = new SetDS();
  setA.add(1);
  setA.add(2);
  const setB = new SetDS();
  setB.add(1);
  setB.add(2);
  setB.add(3);
  const setC = new SetDS();
  setC.add(2);
  setC.add(3);
  setC.add(4);
  console.log(setA.isSubsetOf(setB));
  console.log(setA.isSubsetOf(setC));
}
//testeIsSubset();
