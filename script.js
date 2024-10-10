
function setTitle(newTitle) {
    const titleElement = document.getElementById('title');
    if (titleElement) {
        titleElement.textContent = newTitle || 'Welcome to the Customizable Page';
    }
}


function setDescription(newDescription) {
    const descriptionElement = document.getElementById('description');
    if (descriptionElement) {
        descriptionElement.textContent = newDescription || 'Use the console to customize the page.';
    }
}


function setBackgroundColor(color) {
    const bodyElement = document.body;
    if (bodyElement) {
        bodyElement.style.backgroundColor = color || '';
    }
}
function setTheme(theme) {
    const bodyElement = document.body;
    if (bodyElement) {
        if (theme === 'dark') {
            bodyElement.classList.add('dark-theme');
            bodyElement.classList.remove('light-theme');
        } else if (theme === 'light') {
            bodyElement.classList.add('light-theme');
            bodyElement.classList.remove('dark-theme');
        }
    }
}


function setFontColor(color) {
    const bodyElement = document.body;
    if (bodyElement) {
        bodyElement.style.color = color || '';
    }
}

