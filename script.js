
// Small JS for smooth scrolling and mobile fallback (keeps it simple)
document.addEventListener('click', function(e){
  if(e.target.tagName === 'A' && e.target.getAttribute('href') && e.target.getAttribute('href').startsWith('#')){
    e.preventDefault();
    var id = e.target.getAttribute('href').slice(1);
    var el = document.getElementById(id);
    if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
  }
});
