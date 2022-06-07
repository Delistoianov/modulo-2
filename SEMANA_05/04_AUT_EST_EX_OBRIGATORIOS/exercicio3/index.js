
function bubbleSort(numbers) {
    for (let j = 0; j < numbers.length; j++) {
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] > numbers[i + 1]) {
                let temp = numbers[i]
                numbers[i] = numbers[i + 1]
                numbers[i + 1] = temp
            }
        }
    }

    return numbers
}


function binarySearch(arr, x) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] === x) return mid;
        else if (arr[mid] < x)
            start = mid + 1;
        else
            end = mid - 1;
    }
}


function resultado() {
    let lista = []
    let string = document.querySelector('#lista').value
    let valorFoco = parseInt(string.split(' ')[1])
    for (let i = 0; i < string.split(' ')[0].length; i++) {
        lista.push(parseInt(string.split(' ')[0][i]))
    }

    document.querySelector("#ordenação").innerHTML = `
    Lista ordenada: ${bubbleSort(lista)} <br>
    Index do valor foco na lista ordenada: ${binarySearch(lista, valorFoco)}
    `
}