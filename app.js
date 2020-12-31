

$homeButton = document.querySelector('#homebutton');
$projectsButton = document.querySelector('#projectsbutton');
$contactButton = document.querySelector('#contactbutton');

$home = document.querySelector('#home');
$projects = document.querySelector('#projects');
$contact = document.querySelector('#contact');

$homeButton.addEventListener('click', () => {
    $home.classList.toggle('hidden', false);
    $projects.classList.toggle('hidden', true);
    $contact.classList.toggle('hidden', true);
})

$projectsButton.addEventListener('click', () => {
    $home.classList.toggle('hidden', true);
    $projects.classList.toggle('hidden', false);
    $contact.classList.toggle('hidden', true);
})

$contactButton.addEventListener('click', () => {
    $home.classList.toggle('hidden', true);
    $projects.classList.toggle('hidden', true);
    $contact.classList.toggle('hidden', false);
})