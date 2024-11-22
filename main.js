let numbers = [];

function addToArray() {
    const input = document.getElementById('inputNumber');
    const value = Number(input.value);
    if (!isNaN(value)) {
        numbers.push(value);
        updateArrayDisplay();
    }
    input.value = '';
}

function clearArray() {
    numbers = [];
    updateArrayDisplay();
    document.getElementById('result').innerHTML = '';
}

function updateArrayDisplay() {
    document.getElementById('arrayDisplay').innerText = `Mảng hiện tại: [${numbers.join(', ')}]`;
}

function sumPositive() {
    const sum = numbers.filter(n => n > 0).reduce((a, b) => a + b, 0);
    showResult(`Tổng các số dương: ${sum}`);
}

function countPositive() {
    const count = numbers.filter(n => n > 0).length;
    showResult(`Số lượng số dương: ${count}`);
}

function findMin() {
    const min = Math.min(...numbers);
    showResult(`Số nhỏ nhất: ${min}`);
}

function findMinPositive() {
    const positiveNumbers = numbers.filter(n => n > 0);
    const minPositive = positiveNumbers.length ? Math.min(...positiveNumbers) : 'Không có số dương';
    showResult(`Số dương nhỏ nhất: ${minPositive}`);
}

function findLastEven() {
    const lastEven = numbers.slice().reverse().find(n => n % 2 === 0);
    showResult(`Số chẵn cuối cùng: ${lastEven !== undefined ? lastEven : -1}`);
}

function swapValues() {
    const pos1 = prompt('Nhập vị trí thứ nhất:');
    const pos2 = prompt('Nhập vị trí thứ hai:');
    if (pos1 < numbers.length && pos2 < numbers.length) {
        [numbers[pos1], numbers[pos2]] = [numbers[pos2], numbers[pos1]];
        updateArrayDisplay();
        showResult(`Mảng sau khi đổi chỗ: [${numbers.join(', ')}]`);
    } else {
        showResult('Vị trí không hợp lệ.');
    }
}

function sortArray() {
    numbers.sort((a, b) => a - b);
    updateArrayDisplay();
    showResult(`Mảng sau khi sắp xếp: [${numbers.join(', ')}]`);
}

function findFirstPrime() {
    const isPrime = num => {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    };
    const firstPrime = numbers.find(isPrime);
    showResult(`Số nguyên tố đầu tiên: ${firstPrime !== undefined ? firstPrime : -1}`);
}

function countIntegers() {
    const realArray = prompt('Nhập mảng số thực (cách nhau bởi dấu phẩy):').split(',').map(Number);
    const integerCount = realArray.filter(n => Number.isInteger(n)).length;
    showResult(`Số lượng số nguyên trong mảng số thực: ${integerCount}`);
}

function comparePosNeg() {
    const posCount = numbers.filter(n => n > 0).length;
    const negCount = numbers.filter(n => n < 0).length;
    if (posCount > negCount) {
        showResult('Số lượng số dương nhiều hơn số âm.');
    } else if (posCount < negCount) {
        showResult('Số lượng số âm nhiều hơn số dương.');
    } else {
        showResult('Số lượng số dương và số âm bằng nhau.');
    }
}

function showResult(message) {
    document.getElementById('result').innerText = message;
}
