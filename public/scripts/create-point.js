function populateUFs() {
    const ufSelect = document.querySelector('select[name=uf]');
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
    .then(res => res.json())
    .then(states => {
        for(state of states) {
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }
    })
}
populateUFs()
function getCities(event) {
    const citySelect = document.querySelector('select[name=city]');
    const stateInput = document.querySelector('input[name=state]');
    const ufValue = event.target.value
    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text
    citySelect.disabled = true
    citySelect.innerHTML = `<option value>Aguarde...</option>`
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`
    fetch(url).then(res => res.json())
    .then(cities => {
        citySelect.innerHTML = `<option value="0">Selecione a cidade</option>`
        for(city of cities) {
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }
        citySelect.disabled = false
    })
}
document
    .querySelector('select[name=uf]')
    .addEventListener('change', getCities)
// Itens de coleta
// Pegar todos os li's
const itemsToColect = document.querySelectorAll('.items-grid li');
for (let item of itemsToColect) {
    item.addEventListener('click', handleSelectedItem)
}
const collectedItems = document.querySelector('input[name=items]')
let selectedItems = []
function handleSelectedItem(event) {
    const itemLi = event.target
    itemLi.classList.toggle('selected')
    const itemId = itemLi.dataset.id
    const alredySelected = selectedItems.findIndex(item => {
        const itemFound = item == itemId
        return itemFound
    })
    if(alredySelected >= 0) {
        const filteredItems = selectedItems.filter( item => {
            const itemIsDiferent = item != itemId
            return itemIsDiferent
        });
        selectedItems = filteredItems
    } else {
        selectedItems.push(itemId)
    }
    collectedItems.value = selectedItems
}