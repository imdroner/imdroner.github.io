[...document.querySelectorAll('a')]
    .filter(link => link.hostname != window.location.hostname)
    .forEach(link => link.target = '_blank')