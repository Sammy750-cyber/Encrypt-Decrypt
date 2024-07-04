let inputText = document.getElementById("inputText"),
    outputText = document.getElementById("outputText"),
    btn = document.getElementById("btn"),
    method = document.getElementById("method"),
    info = document.getElementById("info"),
    countRate = document.getElementById("countRate");
let count = 0;

function encrypt() {
    let inText = inputText.value;
    while (countRate.value > count) {
        inputText.value = btoa(inputText.value)
        count += 1;
    }
    outputText.value = inputText.value;
    setTimeout((() => {
        count = 0;
        countRate.value = 0;
        inputText.value = inText;
    }))
};

function reverse(str) {
    let stack = [];
    for (i = 0; i < str.length; i++) {
        stack.push(str[i]);
    };
    let reversedText = "";
    while (stack.length > 0) {
        reversedText += stack.pop();
    };
    outputText.value = reversedText;
};

method.addEventListener("change", () => {
    btn.innerText = method.value;
});

function decrypt() {
    let inText = inputText.value;
    while (countRate.value > count) {
        inputText.value = atob(inputText.value);
        count += 1;
    };
    outputText.value = inputText.value;
    setTimeout((() => {
        count = 0;
        countRate.value = 0;
        inputText.value = inText;
    }));
};

btn.addEventListener("click", () => {
    if (!inputText.value) {
        alert("pls enter valid text");
    } else {
        if (method.value == 'Decrypt') {
            try {
                decrypt();
            } catch (error) {
                outputText.value = error;
            };
        } else if (method.value == "Reverse") {
            try {
                reverse(inputText.value);
            } catch (error) {
                outputText.value = error;
            };
        } else {
            try {
                encrypt();
            } catch (error) {
                outputText.value = error;
            };
        };
        // alert(inputText.value + countRate.value)
    };
});