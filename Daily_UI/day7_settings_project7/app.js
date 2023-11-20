// Function to update the display based on user settings
function updateDisplay() {
    const lightThemeRadio = document.getElementById('light-theme');
    const darkThemeRadio = document.getElementById('dark-theme');
    const enableTwoFactorCheckbox = document.getElementById('enable-two-factor');
    const anonymousBrowsingCheckbox = document.getElementById('anonymous-browsing');
    const enableSoundCheckbox = document.getElementById('enable-sound');
    const notificationsCheckbox = document.getElementById('notifications');
    const wifiCheckbox = document.getElementById('wifi');
    const screenTimeCheckbox = document.getElementById('screen-time');

    // Check the theme preference and update the display
    document.body.classList.toggle('dark-theme', darkThemeRadio.checked);

    // Check other settings and update the display
    // Example: document.getElementById('element-id').style.property = 'value';
}

// Function to save settings to localStorage
function saveSettings() {
    const settings = {
        theme: document.querySelector('input[name="theme"]:checked').value,
        enableTwoFactor: document.getElementById('enable-two-factor').checked,
        anonymousBrowsing: document.getElementById('anonymous-browsing').checked,
        enableSound: document.getElementById('enable-sound').checked,
        notifications: document.getElementById('notifications').checked,
        wifi: document.getElementById('wifi').checked,
        screenTime: document.getElementById('screen-time').checked,
    };

    localStorage.setItem('settings', JSON.stringify(settings));
}

// Function to load settings from localStorage
function loadSettings() {
    const settings = JSON.parse(localStorage.getItem('settings')) || {};

    // Set the theme based on the loaded settings
    const themeRadio = document.getElementById(settings.theme || 'light-theme');
    themeRadio.checked = true;

    // Set other settings based on the loaded settings
    document.getElementById('enable-two-factor').checked = settings.enableTwoFactor || false;
    document.getElementById('anonymous-browsing').checked = settings.anonymousBrowsing || false;
    document.getElementById('enable-sound').checked = settings.enableSound || false;
    document.getElementById('notifications').checked = settings.notifications || false;
    document.getElementById('wifi').checked = settings.wifi || false;
    document.getElementById('screen-time').checked = settings.screenTime || false;

    // Update the display based on the loaded settings
    updateDisplay();
}

// Event listeners for input changes
document.querySelectorAll('input[name="theme"]').forEach((radio) => {
    radio.addEventListener('change', () => {
        updateDisplay();
        saveSettings();
    });
});

document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
        saveSettings();
    });
});

// Load settings when the page is loaded
loadSettings();
