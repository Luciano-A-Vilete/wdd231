const cYearElement = document.getElementById("currentyear"); 
const lastModElement = document.getElementById("lastModified");

if (cYearElement) {
    const currentYear = new Date().getFullYear();
    cYearElement.textContent = currentYear;
}

//Assignment stated: "You do not need to alter the document.lastModified native format".
if (lastModElement) {
    const modified = new Date(document.lastModified);
    lastModElement.textContent = "last modified: " + modified;
}

