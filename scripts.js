// Cotação das moedas do dia
const USD = 4.87
const EUR = 5.32
const GBP = 6.08

// Obtendo os elementos
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

// Manipulando o input amount para receber somente números

amount.addEventListener("input", () => {
    const hasCaractersRegex = /\D+/g
    amount.value = amount.value.replace(hasCaractersRegex, "")
})

//Capturando o evento de submit do formulário
form.onsubmit = (event) => {
    event.preventDefault()

    switch (currency.value) {
        case "USD":
            convertCurrency(amount.value, USD, "US$")
            break

            case "EUR":
                convertCurrency(amount.value, EUR, "€")     
                break

                case "GBP":
                convertCurrency(amount.value, GBP, "£")
                break
    }
}

// Função para converter a moeda

function convertCurrency(amount, price, symbol) {
    try {
        // Exibindo a cotação da moeda selecionada
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`


        // Calcula o total
        let total = amount * price


        // Verifica se o resultado não é um número
        if(isNaN(total)) {
            return alert("Por favor, digite o valor corretamente para converter")
        }

        // Formata o valor total para remover o R$
        total = formatCurrencyBRL(total).replace("R$", "")


        //Exibe o resultado total
        result.textContent = `${total} Reais`


        // Aplica a classe show-result que exibe o footer com o resultado
        footer.classList.add("show-result")

    } catch (error) {
        
        // Remove a classe do footer ocultando ele da tela
        footer.classList.remove("show-result")

        console.log(error)
        alert("Não foi possível converter. Tente novamente")
    }
}

// Formata a moeda em Real Brasileiro na descrição do footer
function formatCurrencyBRL(value) {
    // Converte para número o valor para utilizar o toLocalString para formatar no padrão BRL (R$ 00,00)
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })
}





