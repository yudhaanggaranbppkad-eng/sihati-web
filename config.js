/**
 * SiHATI Web Configuration
 * 
 * File ini berisi konfigurasi untuk menghubungkan frontend web
 * dengan Google Apps Script backend yang sudah ada.
 */

const CONFIG = {
    /**
     * URL Google Apps Script Web App
     * 
     * Cara mendapatkan URL:
     * 1. Buka Google Apps Script project Anda
     * 2. Klik Deploy → New deployment
     * 3. Select type: Web app
     * 4. Execute as: Me
     * 5. Who has access: Anyone
     * 6. Copy URL yang diberikan
     * 
     * Format: https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
     */
    APPS_SCRIPT_URL: 'https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec',

    /**
     * Timeout untuk request (milliseconds)
     * Default: 30 detik
     */
    TIMEOUT: 30000,

    /**
     * App Info
     */
    APP_NAME: 'SiHATI',
    APP_VERSION: '2.0.0',
    APP_DESCRIPTION: 'Sistem Honorarium Terintegrasi Kabupaten Grobogan',

    /**
     * Session Configuration
     */
    SESSION_KEY: 'sihatiToken',
    USER_KEY: 'sihatiUser',
    SESSION_DURATION: 7200, // 2 jam dalam detik (sesuai dengan TTL di Auth.gs)

    /**
     * External Links
     */
    LINKS: {
        DOCS: 'https://docs.google.com/document/d/1_Ysef7boMwDuQyf6Bl-3HWaPmJZdH_a3Ju_GQ8zpADA/edit?usp=sharing',
        YOUTUBE: 'https://youtube.com/playlist?list=PLvj0sRQMcSx3WL_TTcHog7g1YmHEgKVm3&si=uiJU7y46Ms3fVTX2',
        FAQ: 'https://sites.google.com/view/sihati-faq/home',
        FEEDBACK: 'https://forms.gle/cAJGrPKEdVB56hnZ7',
        WHATSAPP: 'https://wa.me/6285869140160'
    },

    /**
     * Logo URL
     */
    LOGO_URL: 'https://i.imgur.com/Jcf9CIW.png'
};

/**
 * Helper function untuk validasi token
 */
function isTokenValid() {
    const token = localStorage.getItem(CONFIG.SESSION_KEY);
    if (!token) return false;
    
    // TODO: Implementasi validasi token dengan backend
    // Untuk sementara return true jika token ada
    return true;
}

/**
 * Helper function untuk get user info
 */
function getUserInfo() {
    const userStr = localStorage.getItem(CONFIG.USER_KEY);
    if (!userStr) return null;
    
    try {
        return JSON.parse(userStr);
    } catch (e) {
        console.error('Error parsing user info:', e);
        return null;
    }
}

/**
 * Helper function untuk logout
 */
function doLogout() {
    localStorage.removeItem(CONFIG.SESSION_KEY);
    localStorage.removeItem(CONFIG.USER_KEY);
    window.location.href = 'login.html';
}

// Export untuk digunakan di file lain
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
