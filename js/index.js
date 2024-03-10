import data from './data.json' assert { type: 'json' };

let root = document.getElementById("root");

data.forEach(e => {
    root.innerHTML += `
    <div class="col-sm-6 col-lg-4">
    <a href="base/${e.title}" class="card">
        <div class="card-header card-img-top">
            <img src="../base/${e.title}/${e.img}" class="card-header-cover" alt="${e.title}">
            <div class="card-header-overlay">
                <img src="images/eye.svg" class="card-header-icon" alt="eye.svg">
            </div>
        </div>
        <div class="card-body">
            <h2 class="title-theme">${e.title}</h2>
        </div>
    </a>
    </div>
    `;
});

$('.card-header-cover').mouseenter(function () {
    $(this).css('top', '-' + ($(this).outerHeight() - $(this).parent().outerHeight()) + 'px');
});

$('.card-header-cover').mouseleave(function () {
    $(this).css('top', 0);
});

$("#cbAnimation").on("click", function () {
    if ($("#cbAnimation:checkbox:checked").length)
        $('.card-header-overlay').addClass('d-none');
    else
        $('.card-header-overlay').removeClass('d-none');
});