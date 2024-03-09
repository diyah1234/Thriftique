function showAddItem() {
    hideAllSections();
    document.getElementById('add-item-section').style.display = 'block';
}

function showExistingItems() {
    hideAllSections();
    document.getElementById('existing-items-section').style.display = 'block';
}

function showSellingHistory() {
    hideAllSections();
    document.getElementById('selling-history-section').style.display = 'block';
}

function hideAllSections() {
    var sections = document.getElementsByClassName('dashboard-section');
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
    }
}
