(function () {
    const btn = document.getElementById('btn'),
          txt = document.getElementById('text');
    btn.addEventListener('click', function () {
        console.log(txt.value);
        txt.value = '';
    });
})();