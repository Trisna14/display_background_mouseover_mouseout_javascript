const btn_display = document.getElementsByClassName('btn-display')[0];

btn_display.addEventListener ('mouseover', (e) => {

        btn_display.childNodes[1].classList.add('show')
        console.log(btn_display.childNodes[1]);
    });

btn_display.addEventListener ('mouseout', (e) => {

    console.log('ok');
    btn_display.childNodes[1].classList.remove('show')
});