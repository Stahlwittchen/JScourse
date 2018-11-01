function order() {
    const order = document.getElementById('order');
    let activeEntity = order.getElementsByClassName('order_entity__item')[0];
    activeEntity.classList.add('active');
    console.log(activeEntity);
    order.onclick = function(e) {
        if(e.target != order){
            activeEntity.classList.remove('active');
            activeEntity = e.target;
            activeEntity.classList.add('active');
            console.log(e.target)
        }
    };
    // const parent = document.getElementById('order'),
    //       button = document.getElementById('sendOrder');
    // let orderData = {},
    //     auth;
    // if(parent) {
    //     parent.onclick = function(e) {
    //         if(e.target != parent){
    //             orderData.date = new Date().toLocaleDateString();
    //             orderData.content = e.target.innerHTML;
    //             orderData.user = auth || 'anonim';
    //         }
    //         console.log(orderData);
    //         return orderData;
    //     };
    //
    //     button.onclick = function(e) {
    //         if (Object.keys(orderData).length ){
    //             const data = orderData;
    //             console.log(data);
    //         }
    //     }
    // }
}
setTimeout(order, 0);
