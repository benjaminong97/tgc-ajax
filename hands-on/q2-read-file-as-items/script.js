//read contents - print to console

async function run() {
    let items = await axios.get('items.txt')
    let itemsData = items.data
    console.log(itemsData)
    let itemsList = itemsData.split(',')
    console.log(itemsList)
    document.querySelector('#load').addEventListener('click', function(){
        let fruitList = document.querySelector('#fruit-list')
        for (fruit of itemsList) {
            item = document.createElement('li')
            item.innerHTML = fruit
            fruitList.appendChild(item)
        }
    })
}
run()
//add each fruit into an unordered list