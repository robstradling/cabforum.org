import * as bootstrap from 'js/bootstrap';

window.addEventListener('DOMContentLoaded', (event) => {
    new PagefindUI({ 
        element: "#search",  
        baseUrl: document.baseURI,
        autofocus: true,
        showSubResults: true,
        showEmptyFilters: false
    });
});