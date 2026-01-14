import HashTable from "./hash.js";

const hashTable = new HashTable();

console.log("TESTE 1: Inserção Básica e Strings");
hashTable.put("Sergio", "Estudante");
hashTable.put("Rafael", "Estudante");
hashTable.put("Igo", "Professor");

console.log("O que Sergio é? ", hashTable.get("Sergio"));
console.log("Tamanho da tabela:", hashTable.size());
console.log("--------------------------------------------------");

console.log("TESTE 2: Objetos como Chave (JSON Stringify)");
// Aqui provamos que sua função defaultToString está funcionando
const userA = { id: 1, nome: "Ana" };
const userB = { id: 2, nome: "Beto" }; // Objeto diferente

hashTable.put(userA, "Cliente VIP");
hashTable.put(userB, "Cliente Regular");

console.log("Busca User A:", hashTable.get(userA));
console.log("Busca User B:", hashTable.get(userB));
console.log("--------------------------------------------------");

console.log(" TESTE 3: A Batalha dos Hashs (Anagramas)");
//comparar o método antigo (loselose) com o novo (djb2)
// usando palavras que têm as mesmas letras (Anagramas)

const palavra1 = "amor";
const palavra2 = "roma";

console.log(
  `Palavra: ${palavra1} | Loselose: ${hashTable.loseloseHashCode(
    palavra1
  )} | DJB2: ${hashTable.djb2HashCode(palavra1)}`
);
console.log(
  `Palavra: ${palavra2} | Loselose: ${hashTable.loseloseHashCode(
    palavra2
  )} | DJB2: ${hashTable.djb2HashCode(palavra2)}`
);

if (hashTable.djb2HashCode(palavra1) !== hashTable.djb2HashCode(palavra2)) {
  console.log("SUCESSO: DJB2 gerou hashs diferentes para anagramas!");
} else {
  console.log("FALHA: Houve colisão.");
}
