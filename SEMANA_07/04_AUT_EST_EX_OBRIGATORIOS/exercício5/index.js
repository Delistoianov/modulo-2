function gerar_input() {
    var num = document.querySelector("#numero_alunos").value
    var a = 1
    while (a <= num) {
        var caixas_prova = document.createElement("input")
        caixas_prova.id = `prova${i + 1}`
        caixas_prova.placeholder = `Nota da prova do aluno ${i + 1}`

        var caixas_trabalho = document.createElement("input")
        caixas_trabalho.id = `trabalho${i + 1}`
        caixas_trabalho.placeholder = `Nota do trabalho do aluno ${i + 1}`

        var label = document.createElement("h2")
        label.textContent = `Aluno${i + 1}`
        document.querySelector("#inputs").appendChild(label)
        document.querySelector("#inputs").appendChild(caixas_prova)
        document.querySelector("#inputs").appendChild(caixas_trabalho)
        i += 1

    }

}