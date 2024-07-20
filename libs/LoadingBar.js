class LoadingBar {
    constructor(options) {
        this.domElement = document.createElement("div");
        this.domElement.style.position = 'fixed';
        this.domElement.style.top = '0';
        this.domElement.style.left = '0';
        this.domElement.style.width = '100%';
        this.domElement.style.height = '100%';
        this.domElement.style.background = '#800080'; // Changed background color to purple
        this.domElement.style.opacity = '0.7';
        this.domElement.style.display = 'flex';
        this.domElement.style.alignItems = 'center';
        this.domElement.style.justifyContent = 'center';
        this.domElement.style.flexDirection = 'column'; // Stack elements vertically
        this.domElement.style.zIndex = '1111';

        // Create the text element
        const text = document.createElement("div");
        text.textContent = "Let's get ready to explore Virtual Reality";
        text.style.color = '#fff';
        text.style.fontSize = '18px';
        text.style.fontWeight = 'bold';
        text.style.marginBottom = '20px'; // Space between text and progress bar
        text.style.textAlign = 'center'; // Center text
        this.domElement.appendChild(text);

        // Create the progress bar base
        const barBase = document.createElement("div");
        barBase.style.background = '#aaa';
        barBase.style.width = '50%';
        barBase.style.minWidth = '250px';
        barBase.style.borderRadius = '10px';
        barBase.style.height = '15px';
        this.domElement.appendChild(barBase);

        // Create the progress bar
        const bar = document.createElement("div");
        bar.style.background = '#22a';
        bar.style.width = '0'; // Initial width
        bar.style.borderRadius = '10px';
        bar.style.height = '100%';
        barBase.appendChild(bar);
        this.progressBar = bar;

        document.body.appendChild(this.domElement);
    }

    set progress(delta) {
        const percent = delta * 100;
        this.progressBar.style.width = `${percent}%`;
    }

    set visible(value) {
        if (value) {
            this.domElement.style.display = 'flex';
        } else {
            this.domElement.style.display = 'none';
        }
    }
}

export { LoadingBar };
