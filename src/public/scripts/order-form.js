function order() {
    const parent = document.getElementById('order'),
          button = document.getElementById('sendOrder');
    let orderData = {},
        auth;

    parent.onclick = function(e) {
        if(e.target != parent){
            orderData.date = new Date().toLocaleDateString();
            orderData.content = e.target.innerHTML;
            orderData.user = auth || 'anonim';
        }
        console.log(orderData);
        return orderData;
    };

    button.onclick = function(e) {
        if (Object.keys(orderData).length ){
            const data = orderData;
            console.log(data);
        }
    }
}
setTimeout(order, 0);
