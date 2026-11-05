// Плавная прокрутка к блоку программы по кнопке «К программе»
document.getElementById('to-program').addEventListener('click', function (event) {
  event.preventDefault();
  document.getElementById('program').scrollIntoView({ behavior: 'smooth' });
});

// Учебная форма: не отправляем данные, просто показываем сообщение
document.getElementById('join-form').addEventListener('submit', function (event) {
  event.preventDefault();
  alert('Спасибо! Это учебный макет — заявка не отправляется.');
});
