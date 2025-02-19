import parallax from './components/parallax.js';
import updateCurrentYear from './helpers/date_updater.js';
import loader from './helpers/loader.js';
import resetToHome from './helpers/reload_page.js';

loader();
resetToHome();
updateCurrentYear();
parallax();
