function sortPublications(criteria) {
    const container = document.getElementById('publications');
    const publications = Array.from(container.getElementsByClassName('publication'));

    publications.sort((a, b) => {
        if (criteria === 'author') {
            if (a.getAttribute('data-author') === 'Yupeng Zhou' && b.getAttribute('data-author') !== 'Yupeng Zhou') {
                return -1;
            } else if (a.getAttribute('data-author') !== 'Yupeng Zhou' && b.getAttribute('data-author') === 'Yupeng Zhou') {
                return 1;
            } else {
                return b.getAttribute('data-date') - a.getAttribute('data-date');
            }
        } else if (criteria === 'date') {
            return b.getAttribute('data-date') - a.getAttribute('data-date');
        }
    });

    publications.forEach(pub => {
        container.appendChild(pub);
    });

    document.getElementById('sort-author').classList.toggle('active', criteria === 'author');
    document.getElementById('sort-date').classList.toggle('active', criteria === 'date');
}

document.addEventListener('DOMContentLoaded', function() {
    sortPublications('author');
});
