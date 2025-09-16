// Peso/Capacidade do gás
const weight1 = 13
const weight2 = 45

// capturando os elementos do formulário para manipular
const form = document.querySelector("form")
const usageTime = document.getElementById("usage-time")
const burnerConsumption = document.getElementById("burner-consumption")
const price = document.getElementById("price")
const capacity = document.getElementById("capacity")
const footer = document.querySelector("footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

// manipulando o input para receber somente números
usageTime.addEventListener("input", () => {
  const noDigits = /[^0-9.,]/g
  usageTime.value = usageTime.value.replace(noDigits, "")
})

burnerConsumption.addEventListener("input", () => {
  const noDigits = /[^0-9.]/g
  burnerConsumption.value = burnerConsumption.value.replace(noDigits, "")
})

price.addEventListener("input", () => {
  const noDigits = /[^0-9.,]/g
  price.value = price.value.replace(noDigits, "")
})

// capturando o evento de submit do formulário
form.onsubmit = (event) => {
  event.preventDefault()

  switch (capacity.value) {
    case "13KG":
      calculateConsume(
        usageTime.value,
        burnerConsumption.value,
        weight1,
        price.value
      )
      break
    case "45KG":
      calculateConsume(
        usageTime.value,
        burnerConsumption.value,
        weight2,
        price.value
      )
      break
  }
}

// função para calcular o valor
function calculateConsume(usageTime, burnerConsumption, weight, price) {
  try {
    description.textContent = `Gasto em R$ (reais) em ${usageTime} minutos de uso:`
    let resultTotal = (((usageTime / 60) * burnerConsumption) / weight) * price
    resultTotal = convertCurrencyBRL(resultTotal)
    result.textContent = `${resultTotal}`
    footer.classList.add("show-results")
  } catch (error) {
    footer.classList.remove("show-results")
  }
}

function convertCurrencyBRL(value) {
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
}
