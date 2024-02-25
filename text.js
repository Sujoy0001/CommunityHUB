var textArray = ['C++', 'PYTHON', 'JAVA','DNS','HTML','CSS','JAVASCRIPT', 'C']; // Array of texts
            var textIndex = 0;
            var textElement = document.querySelector('.text-animation');

            function typeText() {
            if (textIndex >= textArray.length) {
                textIndex = 0;
            }
            var currentText = textArray[textIndex];
            var typingSpeed = 300; // Typing speed in milliseconds

            var i = 0;
            var interval = setInterval(function() {
                if (i < currentText.length) {
                textElement.textContent += currentText[i];
                i++;
                } else {
                clearInterval(interval);
                setTimeout(deleteText, typingSpeed);
                }
            }, typingSpeed);
            }

            function deleteText() {
            var currentText = textElement.textContent;
            var deletingSpeed = 80; // Deleting speed in milliseconds

            var i = currentText.length = 1; 
            var interval = setInterval(function() {
                if (i >= 0) {
                textElement.textContent = currentText.substring(0, i);
                i--;
                } else {
                clearInterval(interval);
                setTimeout(function() {
                    textElement.textContent = ''; // Clear the text content
                    textIndex++; // Move to the next text
                    typeText(); // Start typing the next text
                }, deletingSpeed);
                }
            }, deletingSpeed);
        }
        typeText();



        