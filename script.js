// what is necessary to create a hex color number?
    // STEP 1:
        // you have to take each rgb color part
        // and change it from hexadecimal to hex
    // STEP 2:
        // you have to take each individual red, green, and blue hex part
        // and add them together to create a 6 digit hex color number
    // STEP 3:
        // A: you have to take the user data inputs from the form fields
        // B: prevent the data values from being greater than 255
        // C: and utilize step 2's function structure to create the conversion
        // D: take the coversion color and display it on the screen 

    // ADDITIONAL ADJUSTMENT:
        // Since it is hard to see the color preview if the hex color is for example white,
        // we can create a dynamic border color so we can make sure we see the 
        // color preview well.
    
    // STEP 4: Show a pop up message
        // A: take a div element to push a message into and activate a css class
        // B: deactivate the css class to hide the message div
    // STEP 5: copy button
        // A: take the div element rgbColor value and assign it a variable
        // B: copy the variable to the clipboard and fire the message div


// STEP 1:
function rgbComponentToHex(rgbColorPart) {
    let hexPart = rgbColorPart.toString(16);
        // hex values
        // 0 = 0, 1 = 1, 2 = 2, 3 = 3, 4 = 4, 5 = 5, 6 = 6, 7 = 7, 8 = 8, 
        // 9 = 9, A = 10, B = 11, C = 12, D = 13, E = 14, F = 15
    return hexPart.length == 1 ? "0" + hexPart : hexPart;
        // if hex length is equal to 1, if so add an extra 0 in front plus the hex digit
        // otherwise if the hex digit is 2 spaces, then just return the hex digits
            // example: decimal 10 = hex A, and the length of A equals 1,
            // hex color parts require 2 digits, 
            // so you need to pad it with a 0 at the beginnging
            // so the hex part result is 0A
}

//STEP 2:
function rgbToHex(REDrgbColorPart, GREENrgbColorPart, BLUErgbColorPart) {
    return (
        "#" + 
        rgbComponentToHex(REDrgbColorPart) + 
        rgbComponentToHex(GREENrgbColorPart) + 
        rgbComponentToHex(BLUErgbColorPart)
    );
}

//STEP 3:
function convertToHex() {
    //A: user data input values from form
    let red = document.getElementById("red").value;
    let green = document.getElementById("green").value;
    let blue = document.getElementById("blue").value;

    // Check if any of the input fields are empty
    if (red === "" || green === "" || blue === "") {
        showPopup("Please enter RGB values.");
        return; // Exit the function without converting
    }

    // Parse the input values to integers
    red = parseInt(red) || 0;
    green = parseInt(green) || 0;
    blue = parseInt(blue) || 0;

        // B: Ensure values do not exceed 255
        if (red > 255) {
            red = 255;
            document.getElementById("red").value = 255; // Auto-correct input field
        }
        if (green > 255) {
            green = 255;
            document.getElementById("green").value = 255; // Auto-correct input field
        }
        if (blue > 255) {
            blue = 255;
            document.getElementById("blue").value = 255; // Auto-correct input field
        }

    // C: utilizes step 2's function structure
    let hexColor = rgbToHex(red, green, blue);

    // D: display the hex color on the screen
    document.getElementById("hexColor").textContent = hexColor;
    document.getElementById("colorPreview").style.backgroundColor = hexColor;

    //ADDITIONAL ADJUSTMENT
    // Calculate the total RGB value
    let totalRGB = red + green + blue;
    // Set the border color based on the total RGB value
    if (totalRGB >= 600) {
        document.getElementById("colorPreview").style.border = "5px double #000000"; // Black border
    } else {
        document.getElementById("colorPreview").style.border = "5px double #e1e1e1"; // Gray border
    }
}

///////////////////////////////////
// STEP 4:
// function for popup copy message
function showPopup(message) {
    let popup = document.getElementById("popup");
    popup.textContent = message;
    popup.classList.add("show");

    setTimeout(() => {
        popup.classList.remove("show");
    }, 3000); // Popup will disappear after 3 seconds
}

///////////////////////////////////
// STEP 5:
// Function to copy RGB color to clipboard
function copyHEX() {
    let hexColor = document.getElementById("hexColor").textContent;
    navigator.clipboard.writeText(hexColor).then(() => {
        showPopup("HEX color copied to clipboard!");
    }).catch(err => {
        showPopup("Failed to copy: " + err);
    });
}



 


