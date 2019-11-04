const App = () => {
    console.log('app')
}

export const add = (string) => {
    var re = new RegExp('[^0-9\-]+', 'g');
    string = string.replace(re, ',')
    const array = string.split(',')
    let sum = 0
    array.forEach(element => {
        let number = parseInt(element)
        if (Number.isInteger(number)) {
            if (number < 0) {
                throw new Error('negatives not allowed: ' + number)
            } else if (number <= 1000) {
                sum += number
            }
        }        
    });
    return sum
}

export default App