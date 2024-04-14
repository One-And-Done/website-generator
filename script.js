document.addEventListener('DOMContentLoaded', function () {
    var generateButton = document.getElementById('generate-button');
    var generatedCodeContainer = document.getElementById('generated-code');
    var previewFrame = document.getElementById('preview-frame');

    generateButton.addEventListener('click', function () {
        var websiteContent = document.getElementById('website-content').value.trim();

        if (websiteContent.length === 0) {
            alert('Please enter website content.');
            return;
        }

        var generatedCode = generateWebsiteCode(websiteContent);
        generatedCodeContainer.innerText = generatedCode;
        updatePreview(generatedCode);
    });

    function generateWebsiteCode(content) {
        var generatedCode = `<!DOCTYPE html>\n<html lang="en">\n<head>\n`;
        generatedCode += `\t<meta charset="UTF-8">\n`;
        generatedCode += `\t<meta name="viewport" content="width=device-width, initial-scale=1.0">\n`;
        generatedCode += `\t<title>Generated Website</title>\n`;
        generatedCode += `</head>\n<body>\n`;
        generatedCode += `\t${content}\n`;
        generatedCode += `</body>\n</html>`;
        return generatedCode;
    }

    function updatePreview(code) {
        var previewDocument = previewFrame.contentDocument || previewFrame.contentWindow.document;
        previewDocument.open();
        previewDocument.write(code);
        previewDocument.close();
    }
});
