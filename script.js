document.addEventListener('DOMContentLoaded', function () {
    var addSectionButton = document.getElementById('add-section-button');
    var generatedCodeContainer = document.getElementById('generated-code');

    addSectionButton.addEventListener('click', function () {
        var sectionTitle = document.getElementById('section-title').value.trim();
        var sectionContent = document.getElementById('section-content').value.trim();
        var sectionImage = document.getElementById('section-image').value.trim();

        if (sectionTitle.length === 0 || sectionContent.length === 0) {
            alert('Please enter section title and content.');
            return;
        }

        var sectionCode = generateSectionCode(sectionTitle, sectionContent, sectionImage);
        appendCode(sectionCode);
    });

    function generateSectionCode(title, content, image) {
        var sectionCode = `<section>\n`;
        sectionCode += `\t<h2>${title}</h2>\n`;
        sectionCode += `\t<p>${content}</p>\n`;
        if (image.length > 0) {
            sectionCode += `\t<img src="${image}" alt="${title}">\n`;
        }
        sectionCode += `</section>\n\n`;
        return sectionCode;
    }

    function appendCode(code) {
        generatedCodeContainer.innerText += code;
    }
});
