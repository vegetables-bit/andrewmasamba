const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

<script>
  function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
  }

  if (bar) {
    bar.addEventListener('click', () =>{
        navnavLinks.classList.add('active');
    })
}

if (bar) {
    close.addEventListener('click', () =>{
        navnavLinks.classList.remove('active');
    })
}
</script>