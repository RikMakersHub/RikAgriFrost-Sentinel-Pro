/**
 * RikMakersHub Pro Architecture Systems
 * JavaScript Clipboard Event Handler for Code Engine Copy
 */

document.addEventListener('DOMContentLoaded', () => {
    const copyButton = document.querySelector('.copy-btn');
    const codeElement = document.querySelector('.code-body code');

    if (copyButton && codeElement) {
        copyButton.addEventListener('click', () => {
            const codeText = codeElement.innerText;

            // Execute asynchronous clipboard transfer via standard API
            navigator.clipboard.writeText(codeText).then(() => {
                // Store structural layout states
                const originalText = copyButton.innerText;
                
                // Toggle active visual feedback cues
                copyButton.innerText = 'Copied!';
                copyButton.style.borderColor = '#22c55e';
                copyButton.style.color = '#22c55e';
                
                // Revert interface indicators after defined timeout window
                setTimeout(() => {
                    copyButton.innerText = originalText;
                    copyButton.style.borderColor = '#334155';
                    copyButton.style.color = '#94a3b8';
                }, 2000);
                
            }).catch(err => {
                console.error('Core Pipeline Copy Exception: ', err);
            });
        });
    }
});
