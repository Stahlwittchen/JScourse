function tabs() {
    const parent = document.getElementsByClassName('tabs')[0];
    let activeTab = document.getElementsByClassName('tabs__item')[0],
        activeContent = document.getElementsByClassName('tabs__content__item')[0];

    activeTab.classList.add('active');
    activeContent.classList.add('active');
    parent.onclick = function(e) {
        if (e.target != parent) {
            activeTab.classList.remove('active');
            activeContent.classList.remove('active');

            activeTab = e.target;
            activeTab.classList.add('active');
            let index = Array.prototype.indexOf.call(parent.children,activeTab);
            activeContent = document.getElementsByClassName('tabs__content__item')[index];
            console.log(activeContent)
            activeContent.classList.add('active');
        }
    }
};
setTimeout(tabs, 0);
//
// function order() {
//     if(order){
//         const order = document.getElementById('order');
//         let activeEntity = order.getElementsByClassName('order_entity__item')[0];
//         let entityDetail = document.getElementsByClassName('entity-details__item')[0];
//         const btn = document.getElementById('sendOrder');
//         let orderData = {};
//
//         activeEntity.classList.add('active');
//         entityDetail.classList.add('active');
//         order.onclick = function(e) {
//             if(e.target != order){
//                 activeEntity.classList.remove('active');
//                 entityDetail.classList.remove('active');
//                 activeEntity = e.target;
//                 let entityName = activeEntity.innerText;
//                 activeEntity.classList.add('active');
//                 entityDetail = document.getElementsByClassName(entityName)[0]
//                 entityDetail.classList.add('active');
//
//
//
//                 orderData.date = new Date().toLocaleDateString();
//                 orderData.title = e.target.innerHTML;
//                 orderData.user = 'anonim';
//
//             }
//             console.log(orderData);
//             return orderData;
//         };
//
//         btn.onclick = function(e) {
//             if (Object.keys(orderData).length ){
//                 const data = orderData;
//                 console.log(data);
//             }
//         }
//         function repeateEveryMonday() {
//             let d = new Date();
//             d.setDate(d.getDate() + (1 + 7 - d.getDay()) % 7);
//             console.log(d);
//         };
//         repeateEveryMonday();
//     }
// }
// setTimeout(order, 0);