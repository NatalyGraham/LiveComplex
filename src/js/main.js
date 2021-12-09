$(document).ready(function () {
    let currentFloor = 2;
    let formattedCurrentFloor;
    let homeImg = $('.home-img path');
    let counter = $('.counter-text');
    let btnUp = $('.button-up');
    let btnDown = $('.button-down');

    homeImg.on('mouseover', function () {
        currentFloor = $(this).attr('floor');
        counter.text(currentFloor);
    });

    btnUp.on('click', function () {
        if (currentFloor < 18) {
            currentFloor++;
            formattedCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2,
                useGrouping: false});
            counter.text(formattedCurrentFloor);
            homeImg.removeClass('current-floor');
            $(`[floor=${formattedCurrentFloor}]`).toggleClass('current-floor');
        }

    });

    btnDown.on('click', function () {
        if (currentFloor > 2) {
            currentFloor--;
            formattedCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2,
                useGrouping: false})
            counter.text(formattedCurrentFloor);
            homeImg.removeClass('current-floor');
            $(`[floor=${formattedCurrentFloor}]`).toggleClass('current-floor');
        }

    })

})