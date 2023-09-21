$(document).ready(() => {
    $('#search-field').hide(); //hide the container with id of search-field
    $('.search-btn').click((e) => {//perform a toggle action when the anthor tag with class search-btn is clicked
        e.preventDefault(); //prevent the default action of the anchor tag
        $('#search-field').toggle();
    })
})