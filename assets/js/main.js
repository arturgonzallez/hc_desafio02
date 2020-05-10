getUrl('https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72')
  .then(data => showRoom(data)); 

function showRoom(data) {
    var room = '';
    var i = 1;
    for(var x of data) {
        var itemRoom = `
            <div id="${i}" class="item">
            <img src="${x.photo.replace('xx_large', 'medium')}" alt="" class="center" />
            <span class="item-title">${x.name}</span>
            <span class="item-description">${x.property_type}</span>
            <span class="item-price">Preço: R$ ${x.price}/dia</span>
            </div>
        `;
        i++;

        if ((i / 4) % 0) {
            itemRoom = itemRoom + '</div><div id="list-result">';
        }

        room = room + itemRoom;

        console.log(x);
    }

    document.getElementById('list-result').innerHTML = room;
}