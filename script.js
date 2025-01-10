function showIntro(index) {
    const intros = document.querySelectorAll('.intro');
    intros[index].style.display = intros[index].style.display === 'block' ? 'none' : 'block';
}
