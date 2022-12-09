const form = document.getElementById('generate-form');
const qr = document.getElementById('qrcode');

const onGenerateSubmit = (e) => {
  e.preventDefault();

  clearUI();

  const url = document.getElementById('url').value;
  const size = document.getElementById('size').value;

  console.log('url -> :', url);
  console.log('size -> :', size);

  if (url === '') {
    alert('please enter a URL');
  } else {
    showSpinner();
    setTimeout(() => {
      hideSpinner();
      generateQRCode(url, size);
    }, 3000);
  }
};

const generateQRCode = (url, size) => {
  const qrcode = new QRCode('qrcode', {
    text: url,
    width: size,
    height: size,
  });
};

const showSpinner = () => {
  document.getElementById('spinner').style.display = 'block';
};

const hideSpinner = () => {
  document.getElementById('spinner').style.display = 'none';
};

const clearUI = () => {
  qr.innerHTML = '';
};

const createSaveBtn = (saveUrl) => {
  //---
}

hideSpinner();

form.addEventListener('submit', onGenerateSubmit);
