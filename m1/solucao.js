//1
function exer1(end) {
    return "O usuário mora em " + end.cidade + " / " + end.uf + ", no bairro " + end.bairro + ", na rua \"" + end.rua + "\" com nº " + end.numero + "."
}
//2
function pares(x, y) {
    var a = (x % 2 == 0) ? x : x + 1;
    console.log(x + " " + y);
    while (a <= y) {
        console.log(a);
        a += 2;
    }
}
//pares(32, 321);
//3
function temHabilidade(skills) {
    var a = skills.find(e => e == "Javascript");
    if (a) {
        return a.length > 0;
    }
    return false;
}
var skills = ["Javascript", "ReactJS", "React Native"];
temHabilidade(skills); // true ou false
//4
function experiencia(anos) {
    if (anos > 7) {
        console.log("Jedi Master")
    } else if (anos > 3) {
        console.log("Avançado")
    } else if (anos > 1) {
        console.log("Intermediário")
    } else {
        console.log("Iniciante")
    }
}
//var anosEstudo = 7;
//experiencia(anosEstudo);
// De 0-1 ano:
// De 1-3 anos: 
// De 3-6 anos: 
// De 7 acima: Jedi Master
//5
var usuarios = [
    {
        nome: "Diego",
        habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
        nome: "Gabriel",
        habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
];
function mostraDote(users) {
    for(let u of users) {
        console.log("O " + u.nome + " possui as habilidades: " + u.habilidades.join(", "))
    }
}
