function tabs() {
    const parent = document.getElementsByClassName('tabs')[0];
    if (!parent) {
        return false
    }

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
function showHiddenText() {
    const hiddenText = document.getElementsByClassName('hidden-text');
    for (let i = 0;  i < hiddenText.length; i++){
        hiddenText[i].onclick = function () {
            hiddenText[i].classList.toggle('active');
        }
    }
}

setTimeout(tabs, 0);

setTimeout(showHiddenText, 0);

