const loading = document.querySelector('.loading');

function displayLoading() {
  loading.classList.add('display');
  setTimeout(() => {
    loading.classList.remove('display');
  }, 5000);
}

function hideLoading() {
  loading.classList.remove('display');
}

export { displayLoading, hideLoading };