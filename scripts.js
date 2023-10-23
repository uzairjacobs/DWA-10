/**
  * Maximum allowed number.
  * @constant {number}
  */

const MAX_NUMBER = 15

/**
 * Minimum allowed number.
 * @constant {number}
 */

const MIN_NUMBER = -5
/**
 * The number input element.
 * @type {HTMLInputElement}
 */

const number = document.querySelector('[data-key="number"]')


const subtract = document.querySelector('[data-key="subtract"]')
const add = document.querySelector('[data-key="add"')
const reset = document.querySelector('[data-key="reset"]')


/**
 * Event handler for the subtract button click event.
 * @prop {Function} subtractHandler - Event handler for the subtract button click event.
 * @param {Event} event - The click event object.
 */
const subtractHandler = (event) => {
    /**
     * The new value after subtracting one from the current number value.
     * @type {number}
     * @prop {number} newValue - The new value after subtracting one.
     */
    const newValue = parseInt(number.value) - 1;

    number.value = newValue;

    if (newValue <= MIN_NUMBER) {
        subtract.disabled = true;
    } else {
        subtract.disabled = false;
    }
};


const addHandler = () => {
    const newValue = parseInt(number.value) + 1
    number.value = newValue

    if (newValue >= MAX_NUMBER) {
        add.disabled = true
    } else {
        add.disabled = false
    }
}

const resetHandler = () => {
    number.value = 0;
    subtract.disabled = false;
    add.disabled = false;
    alert("Counter has been reset");
}

reset.addEventListener('click', resetHandler)
subtract.addEventListener('click', subtractHandler)
add.addEventListener('click', addHandler)
