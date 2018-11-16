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
            activeContent.classList.add('active');
        }
    }
}
function edit() {
    // const edit = document.getElementsByClassName('editable')[0];
    // edit.onclick = function(e) {
    //     console.log('success')
    // }
}


setTimeout(tabs, 0);
setTimeout(edit, 0);