const valueInputNode = document.querySelector('.js__value-input')
const currencySelectorNode = document.querySelector('.js__currency-select')
const outputNode = document.querySelector('.js__output')

function getInput() {
	return {
		uah: Number(valueInputNode.value),
		currency: currencySelectorNode.value,
	}
}
function render(result) {
	outputNode.innerText = result
}
valueInputNode.addEventListener('input', function () {
	const result = convert(getInput())

	render(result)
})
currencySelectorNode.addEventListener('change', function () {
	const result = convert(getInput())

	render(result)
})
