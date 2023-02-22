//accordion
const accardionItems = [...document.querySelectorAll('.accordion .img-container')];
let activeCard = accardionItems[0];

accardionItems.forEach((item) => {
  item.addEventListener('click', (e) => {
    activeCard.classList.remove('active');
    activeCard = item;
    activeCard.classList.add('active');
  });
});
const asyncPostCall = async (mail) => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: 'My post title',
        body: mail,
        status: 'success',
      }),
    });
    const data = await response.json();
    document.querySelector('.strelka_a').addEventListener('click', function () {
      swal('Success!!!', 'You have successfully subscribed to the email newsletter', 'success');
    });
  } catch (error) {
    console.log(error);
  }
};
const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (form.classList.contains('valid')) {
    asyncPostCall(document.getElementById('email').value);
  } else {
    document.querySelector('.strelka_a').addEventListener('click', function () {
      swal(
        'NO Success!!!',
        'You have not successfully subscribed to the email newsletter',
        'error',
      );
    });
  }
});
document.querySelector('.strelka_a').addEventListener('click', (e) => {
  if (form.classList.contains('valid')) {
    asyncPostCall(document.getElementById('email').value);
  } else {
    document.querySelector('.strelka_a').addEventListener('click', function () {
      swal(
        'NO Success!!!',
        'You have not successfully subscribed to the email newsletter',
        'error',
      );
    });
  }
});
