export function setupCounter(element) {
  let counter = 100
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `Count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter - 1))
  setCounter(counter)
}
