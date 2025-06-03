const typed = new Typed('.multiple-text',{
    strings : ['Fronted Developer','Web Designer','Backend Developer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});
document.getElementById('alertButton').addEventListener('click', () => {
    alert('Thank you for clicking me..!!!');
  });