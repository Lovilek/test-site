document.addEventListener('DOMContentLoaded', function() {
    // Обработка отправки формы
    var form = document.getElementById('contact-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        var name = document.getElementById('name').value;
        alert('Спасибо за ваше сообщение, ' + name + '!');
    });

    // Плавная прокрутка
    var navLinks = document.querySelectorAll('.nav-links a');

    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', function(e) {
            e.preventDefault();
            var targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
});
