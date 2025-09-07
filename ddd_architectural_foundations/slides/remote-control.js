/**
 * Logic Remote Control Handler for DDD & Architectural Styles Slide Deck
 */

(function() {
    // Reference to navigation buttons
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    // Remote Control Event Handling
    function initRemoteControl() {
        // Listen for keyboard remote events (additional keys)
        document.addEventListener('keydown', (e) => {
            // Page Up/Down are common in presentation remotes
            if (e.key === 'PageDown') {
                e.preventDefault();
                nextBtn.click();
            } else if (e.key === 'PageUp') {
                e.preventDefault();
                prevBtn.click();
            }
        });
        
        // Custom remote control events
        window.addEventListener('remotecontrol', function(e) {
            if (e.detail && e.detail.action === 'next') {
                nextBtn.click();
            } else if (e.detail && e.detail.action === 'prev') {
                prevBtn.click();
            }
        });
        
        console.log('Remote control initialized');
    }
    
    // Public API for remote control actions
    window.triggerRemoteAction = function(action) {
        const event = new CustomEvent('remotecontrol', { 
            detail: { action: action } 
        });
        window.dispatchEvent(event);
    };
    
    // Initialize when DOM is fully loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initRemoteControl);
    } else {
        initRemoteControl();
    }
})();
