/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/preloads/view-preload.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/constants/files.ts":
/*!********************************!*\
  !*** ./src/constants/files.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.FILES = exports.WEBUI_URL_SUFFIX = exports.WEBUI_BASE_URL = exports.WEBUI_PROTOCOL = exports.DIRECTORIES = void 0;
const settings_1 = __webpack_require__(/*! ./settings */ "./src/constants/settings.ts");
exports.DIRECTORIES = ['adblock', 'extensions', 'storage'];
exports.WEBUI_PROTOCOL = 'narada';
exports.WEBUI_BASE_URL =  true
    ? 'http://localhost:4445/'
    : undefined;
exports.WEBUI_URL_SUFFIX = exports.WEBUI_BASE_URL.startsWith('http')
    ? '.html'
    : '';
exports.FILES = {
    'settings.json': settings_1.DEFAULT_SETTINGS,
    'window-data.json': {},
};


/***/ }),

/***/ "./src/constants/settings.ts":
/*!***********************************!*\
  !*** ./src/constants/settings.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_SETTINGS = exports.DEFAULT_SEARCH_ENGINES = void 0;
const electron_1 = __webpack_require__(/*! electron */ "electron");
exports.DEFAULT_SEARCH_ENGINES = [
    {
        name: 'DuckDuckGo',
        url: 'https://duckduckgo.com/?q=%s',
        keywordsUrl: '',
        keyword: 'duckduckgo.com',
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAACT1BMVEUAAAD/gFXfWjbeWTPfWDTeWDTeWDPfYDXfWDPeWTT/bUngWDPfWTPfWDPjWTfeWTTjWzPeWTTeWDPkelzrnojvr53ywLLibEvxuKj77en66OPyvq/urJrrm4XgYj/ws6P88/HvsqHjdFbfYT/jclP65uHywrThaUjmgmf88e/rmoTlfmLxuKnxvK7tpZLibk/mhWruqZf88e7////3187haEfpk3v43NX88u/rmoPgZELywbPgY0H1zsP88/DmgWX43NT87+zgZ0XvsaDoj3bf5e7Gz+D2+PvW3em2wtjks6nwt6fN1eT9+ffgZUP0yr/5+vzv8vehsM3H0OHrnonywLNkfaxRbqL3+ftVcaSKncDxuqvurZuntdB+k7r+/v/eWjPmdinumx3wnxvlcyrojXT//vb/99P/87z2v1r0rRb8ywz90gr6xQ7ha0v//vj+5nP90w/90Qr1shXpgyXeWzP+42X90AvxphnzqRjypxnsjSLhZi/+42T3uRLuq5n//O/2uyL0rxbriSLsjiHwoRr7yg3iaC7niW/icFHiZy7zrBf5whD3uhLumR3jdlf66uXqlH3zxrrYXDTdWTPso4/d8da136bq9uX99fPeXDjcWTSkhzxquEa4dznlf2PB5LRlvEZmvUeHyXNuvlVouUh7qkKohTzmg2ffXjv+/fzG5rpas0ZkvEajiDz54NrQ68dftU1atEZit06npl+ApUKrgjvzx7vp9uV3xFy24Kj4/Pb55N/eWTXdeVfus6H77+v44Nr44Nn54tz76uYtKC1GAAAAEnRSTlMABkeVv9nzGJbxB4L0xy7jLfK6UobZAAACRklEQVQ4y4VT9XsTQRC9aKMEJsnFrb0kTbDSoUWKF5eixa24HO4Eihco7i6Lu7u35Q/jbu/2uLQfH/PTzs7bmdk3bzhOM4PRZLZYrRazyWjgOlqJzQ5en5/n/T4v2G0l7cIOpysQDIUj0VgsGgmHggGX01H03B1PJFOloFppKpkoc+uSdPII6UwWdJbNpAVPZ+29pzyXh67duvfo+ReSz5V71BwOt5CrAOhViYi9BQ1RkRPcSh/OeDovXVRVVfdB7NuvP0PE0nEnLeBK1Mj+gIFIbdBghsgkXHIRWyBJ+xuCqg0dxjpNBmwSf/ZgrewNxxEjR8nx0WPGshSpoN3AGSFE/z8Ox7MUE+oYHyEwciZvmDoTESdNpvEpU6tZirDXxJmnRei5HnH6jJkyYNbsOQwQ8Zk5iz9Kz3MR582nGRZgPSxsWLR4CUDUb+GsfIwClrIOli1fsXLValFc0yBRwVs1wFolvG79BlGyjZs2b5G54rtoJaCSAraK27bv2FnYpdzJJcw+pUlQiNwtNuqGKjfJvgl7KGDvPnF/4cDBQ41Nh9VvMqLgiNLE0ebCseNNJ042M6IkqlMUUKcATukqUKq1YcFpCjijkxUdljzuDPXPUoA8+nPn9eNmgoELePHSZbxy9dr1Gzep6NJlTr3k4BbeJnfu3rv/gJCHRZKTRPtIEi08fvKUkGeEPCfkRZFoFdnXZOHlK0Jev3n77j35UCx7dXFqP376/OUr4rfvP362Wxy2er9aWtvaWlt+d1y9/y/vv9f/DzYRmYvARwKBAAAAAElFTkSuQmCC',
    },
    {
        name: 'Google',
        url: 'https://www.google.com/search?q=%s',
        keywordsUrl: 'http://google.com/complete/search?client=chrome&q=%s',
        keyword: 'google.com',
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAACDVBMVEUAAAD+/v7+/v79/f39/f39/f39/f39/f3+/v7+/v79/f39/f39/f39/f3+/v7////9/f39/f39/f39/f3+/v7+/v79/f39/f3+/v7+/v79/f39/f3////+/v79/f3////9/f3+/v7+/v79/f39/f39/f3+/v7////9/f3+/v79/f39/f39/f3////9/f3////+/v7////85uT1pZ7wdGrsVUjqRjjqRTfsU0bvcmj1oZr85OL85+XxgXjqRDbqQzXxf3b3urXrSz7rTD/4v7r1p6DyioHuZVn0m5P3tK73ta/0m5TuZlryjob//v7rSj3tXFD5zMj5y8fsWEzzlIz0kG3vbGH+8vL+9fT+9t37uQfxdyD98O7934b7vAX1kxXrSTT3uLP8zUb5riH/+/v7whz801lChfS/1fv7vQf93H2lxfqfwfn80liqyPr8zkfkwi76/fve6v3B1/v934iztSE8qFCw3byox/rn8P7+9t/2vAmGsDM0qFNGsGLs9+/z9/5UkPVgmfaPx4JcuXXw+fL6/P93p/epyPrm9Oo+rFtMsmfC5cza7+BjsahChfH2+f634MJUtm6Nzp+q2rer27iV0qVkvHs1qFQ3oHdBiePD2Pyj2LE1pWA+jsq54cQ+rFw3qVab0rHn9et7xo82qVRnvn7X7t2h169swIJJsWU4qlZGsGNlvX3Y7t5rzgcKAAAAMXRSTlMADlqcy+367Fknn/f2nSUKjfz7iwkm1dIkMuvqMAuKD/UNV5nI+VYMmiOH09AI6CIvZ7+SkQAAAe5JREFUOMtjYIADRiZmFlY2NnYWZg5GBkzAycVtCAc8vHxo0vwCgoYoQEhYBFleVMwQA4hLIOQlpcBCRsYmpmbmFpZW1mCutAxcP1jextbOHgrsHGzAKqBmyILNd3SyRwLOLmBbIO4QALFd7VGBG9gWObD/QO53hAi7e3h6efsAGb5+EL+ALOECOc8fJB0QCHF/UHAIzCvMDAzyoPAJBcmHhcOEI+B+VVBkYAJSkVHR9vamMYZYgBIDM5CMjYuLT0jEJm+ozMACJJPi4uKSU7AqUGFgBZKpQAVpUJF0BMgABRYDG5DMBCrIwlSQDeSq4lOQA1bADrUiF1NBHtgKkCPzgQoKCpHdVgRSUAx2JMibJXFxpWXlyAoqQAoqwd7kAJJV1TW1tXX1CPmGRqB8E4ilxsDIA6Saa4GgpRUm39YOMqADFNTqDAy8QLqzC6Siuwci39vXD5RvnABkagBjk08IyJhYCwaTJk+ZOm36jNqZs9LTZwOF2TRBCUIYpGtOLQqYOw8UCIZakCSvDWLPX4CsYOEikJiOLiRRSkiDeIuXLIXLL1sOEtHThyVrGbAKw84VK1etXrhm7bR1YK6eASJjSIhjRrSOPnLWEpETQpVm09JFy50SzAoIaQUNTSz5W1FJWUVaVVVaRVlNHSEKACBb24XRQm7rAAAAAElFTkSuQmCC',
    },
    {
        name: 'Bing',
        url: 'https://www.bing.com/search?q=%s',
        keywordsUrl: '',
        keyword: 'bing.com',
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAA3NCSVQICAjb4U/gAAAANlBMVEUAfX3k8/MAiop7trYAgoL6//8AdXULhIT///+exMQ4l5ew0dFLoaG929v0+/vQ5+eVwsIcjo4kKiufAAAAZElEQVQYlY2QyQ6AMAhEpy0Fuqr//7NWo108OQcSHsMSICJEMoSWR8sLQNCCD/A/AEALYFMy3+wFQdWkg0aLNaoaMM3gbQaV3eVww9HKajL60KbqmJ61QrvXBPQ7WrCRp0vXB5xZ6wZZjwmZbQAAAABJRU5ErkJggg==',
    },
    {
        name: 'Yahoo!',
        url: 'https://search.yahoo.com/search?p=%s',
        keywordsUrl: '',
        keyword: 'yahoo.com',
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAA3NCSVQICAjb4U/gAAABnklEQVQokZWSPUyTYRSFn/t+rTX9EFp/SICwqIumMUwaJxdlYHAgBJwMCa5sLMaITizGARYSNTGROOAAokMHYggLBBIGCIHESBggwfJTQGgLL/3e61CxVWOa3ukO59xz7z1HOmWBSspUhAZCZREZdSfoGSQqprzCgQa945dHT5qef7mSVVdUCFQtapCICGBVAzSE1MUjibvngOSrrTDyixCoXm+P3u6Ipb7akcdbBlp6LzQ2nZ14nW7uugjsb+Qnh/fOSwiQTllQRZC3mgAeyWIO915vAA9l8Z0mgKEn68m+dEE8BIiQ0WD20+7N+/HWwUu5Hw6YGdu99zSmeeyh+9i3U316rRR8cKqx2nB/6lomHdicizeEu2X5zoua/e/5Dy+36ynsX/JWI7K2efxtJnP1lu/jrc5lE93Rtp56YH36eGUq550yim/1McPPNgr9WH9q6XPWHuj2ql2ZOjK/5/9lXN4qkE0HE0N7MbwH1fMGqvCkiC8hHKFdA41A8s2mjzEiNXj/Wiml4TtUZ3E+JiL/TcAfK1WJKRuWitP6EzoWnEvW4UekAAAAAElFTkSuQmCC',
    },
    {
        name: 'Ecosia',
        url: 'https://www.ecosia.org/search?q=%s',
        keywordsUrl: '',
        keyword: 'ecosia.org',
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAylJREFUOI1Nk01sVFUYhp9z7r1zO1NK25ShtkxmSqE0VisWf0KbatkQ0USnEhPiwh+SGgkkLowQ6EKKWGgTNi4ICxtQMNFEMG1iMBqURKNMgtYwtKkUq20tFFoYxjudmc7ce+5xgdZ+2zfPu3m/R7Ds9P44oGOoYg9uoQ2IACaaG1jWMDJwDNNMiCODS4xYgg90gqFP4nk7/a1dyOZWCFffD527MDYMX5+CRecCwtr6X4lYgnEv6ujGLeKNwzjeON/+keTjiTBKCxrLVxBfH+Op2jD68+OIy0NTWKV14sgghu7uBJMPdHXjDrGnj/6fL1NMvc71tM25+QaigRlGnRzvX5tjau4W255/CSPtVIjZa+097U1nhD4Qh0VH03uexO2zdP+imSpGsKTHm2suEK89Q8EvI6dWEJJTmIEXWBs7idnzMixmn5Yo9yjtO/hLC1p/qCCjwqw0XJ4ovcGW8DdkvBqUH8IWPp6Oks0P8fdCAv+ZLvAKb0vcQhvNm/ny+gwNpkQIjRQeu+pPYwnNWKYJV5sAGMJDimrS6S/QjY+DKrZItFrtV0boqBxgQ/Aeed8iaqeIhS4hhKZ5ZRJLuBS1yW+ZjdhGDuVeRVeWAyIi0WitIWQoDj/4Hg+HZpnIV7MnOcBsPgZA0EzRO/4Wxye3c2pyF8l0C4YGwJdI4yZz09glLVhinptuGbZUjOVqmMnHsKXDuZmdjGZrcVSQT+ceQ5mPIu7eBpiWBEouyl+/Y1XVc7wz2o/jBZFoTOFTai6QV2Us+JqQ9JBocn6OhppnYeRHMAOJ+zPm04p3z8rTsw77hq8SswMoLVgXvIMpFFeyayiVLvOuxyt1EQ5tfgS644C5VuJrKK/az4l9vNpUz7FNDzFRcMn6HqPZKq4srEbrAr8XinSti3KorQX94UEwjU+QYvLfV34RDP8jQlWvsbufW8EKvhr/k5FUGuVrNlSUsW19HfW2RA/0IKaTCQi0ir7BZTJ1d4L291LI9PFkp2RTB6yqASnh3h0YuQTffwYloRN47BZHl8n0v87bQShwCwdRbgdaPQBCIEQKI/ATpr0XA0Tv0BLzDxefVnicNn0wAAAAAElFTkSuQmCC',
    },
    {
        name: 'Ekoru',
        url: 'https://www.ekoru.org/?ext=narada&q=%s',
        keywordsUrl: 'http://ac.ekoru.org/?ext=narada&q=%s',
        keyword: 'ekoru.org',
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAA3NCSVQICAjb4U/gAAABTVBMVEVHcEwGoc4fq68HodEirbQ/v78RmcxNsqIupbJOsVAZocIHntchqb0KoNgZqL0LoNk2r38HoNYaq71Ss0VVt1BZtEJUsj+fyjtuwGUXms8Poc0HnNMFpM8JotISoMgRn9UQn9EInNVdulhyuUIYqLMHp8p4vUAZo8mKxD4Gn9YNpcsGoNSMxj8Wq751uj8Fpdo0r3sFpNwsrotUtEiTyk1SsjtSskVQtWJItGmMxTyHxUgmsLAsqaI0q4kOmNQ9sG4yr4Jvu0krsakcpbRjuk6Dwz0KqMtBsm4Upr6AwkBCsW4NqMcurpM9sHaUyFhwvEdIsVSSylUwsKWizkqkzkBdt0lct0Iqrq5fuER/wT6Bwj8lrbNwwHC21UNPt4cPpMRIt49Zu38Up7szspglrKdEtHc8solGt5BavH5OuIB3xFqAxVMFp9hAsn9lv3FSuK/uAAAAaHRSTlMA/P6dPgQPCxUwIcYubZRWYLpdQthwTGn6GlGl9O6AOefX9SDzzpbvtqz54uCdRvjxyfuV2Thg9+166sJzeVmu3Mrw2tqi27Xz0W+p6aJdu4mYolKqrX+WyVqKgrEqx/bYvP///////rhNcOkAAAD4SURBVBiVJY9VQ8IAGAC/jSUrxpKUkO4uu7u7XQPq/3904r3dvR0AACGUKghSKQkkLFgS3612s9lG47HgwtPosKPSPfViw2D8QomoLFFhvpbE6HUjQAJXHqrsxPU8d4un9w8EaFm3wcnPuFiszs2adCJCw1HCXrWOQ3Z3hoZPy/Bl9+9nT+T1GZk9dI+PDD8oV/PHV+3mEs9Pc6FlaHx3nvURgNal8tM9P7TMB+xjPNK6L9S5mQttA2dk+tibrn+y9YwRWOUhwpgyTWAYQW+a8egKCxBNOLLSk+52HCRAEv4LziUsezCwLSQW+b/F15hUoZBKJ6k/+wXyrSm5N9MsrwAAAABJRU5ErkJggg==',
    },
];
exports.DEFAULT_SETTINGS = {
    theme: 'narada-light',
    darkContents: false,
    shield: true,
    multrin: true,
    animations: true,
    bookmarksBar: false,
    suggestions: true,
    themeAuto: true,
    searchEngines: exports.DEFAULT_SEARCH_ENGINES,
    searchEngine: 0,
    startupBehavior: {
        type: 'empty',
    },
    warnOnQuit: false,
    version: 2,
    downloadsDialog: false,
    downloadsPath: electron_1.remote
        ? electron_1.remote.app.getPath('downloads')
        : electron_1.app
            ? electron_1.app.getPath('downloads')
            : '',
    doNotTrack: true,
    topBarVariant: 'default',
};


/***/ }),

/***/ "./src/preloads/chrome-webstore.ts":
/*!*****************************************!*\
  !*** ./src/preloads/chrome-webstore.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.injectChromeWebstoreInstallButton = void 0;
exports.injectChromeWebstoreInstallButton = () => {
    const baseUrl = 'https://clients2.google.com/service/update2/crx?response=redirect&acceptformat=crx2,crx3&prodversion=%VERSION&x=id%3D%ID%26installsource%3Dondemand%26uc';
    const ibText = 'Add to Wexond';
    const ibTemplate = '<div role="button" class="dd-Va g-c-wb g-eg-ua-Uc-c-za g-c-Oc-td-jb-oa g-c" aria-label="' +
        ibText +
        '" tabindex="0" style="user-select: none;"><div class="g-c-Hf"><div class="g-c-x"><div class="g-c-R  webstore-test-button-label">' +
        ibText +
        '</div></div></div></div>';
    function waitForCreation(selector, callback) {
        const element = document.querySelector(selector);
        if (element != null) {
            callback(element);
        }
        else {
            setTimeout(() => {
                waitForCreation(selector, callback);
            }, 50);
        }
    }
    waitForCreation('.h-F-f-k.F-f-k', (element) => {
        element.addEventListener('DOMNodeInserted', (event) => {
            if (event.relatedNode != element)
                return;
            setTimeout(() => {
                // eslint-disable-next-line @typescript-eslint/no-use-before-define
                new InstallButton(event.target.querySelector('.h-e-f-Ra-c.e-f-oh-Md-zb-k'));
            }, 10);
        });
    });
    document.addEventListener('DOMNodeInserted', (event) => {
        setTimeout(() => {
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
            Array.from(document.getElementsByClassName('a-na-d-K-ea')).forEach((el) => {
                el.parentNode.removeChild(el);
            });
        }, 10);
    });
    function installPlugin(id, version = navigator.userAgent.match(/(?<=Chrom(e|ium)\/)\d+\.\d+/)[0]) {
        window.location.href = baseUrl
            .replace('%VERSION', version)
            .replace('%ID', id);
    }
    function InstallButton(wrapper, id = document.URL.match(/(?<=\/)(\w+)(\?|$)/)[1]) {
        if (wrapper == null)
            return;
        wrapper.innerHTML += ibTemplate;
        this.DOM = wrapper.children[0];
        /* Styling */
        this.DOM.addEventListener('mouseover', () => {
            this.DOM.className =
                'dd-Va g-c-wb g-eg-ua-Uc-c-za g-c-0c-td-jb-oa g-c g-c-l';
        });
        this.DOM.addEventListener('mouseout', () => {
            this.DOM.className = 'dd-Va g-c-wb g-eg-ua-Uc-c-za g-c-Oc-td-jb-oa g-c';
        });
        this.DOM.addEventListener('mousedown', () => {
            this.DOM.className =
                'dd-Va g-c-wb g-eg-ua-Uc-c-za g-c-Oc-td-jb-oa g-c g-c-Xc g-c-Sc-ci g-c-l g-c-Bd';
        });
        this.DOM.addEventListener('mouseup', () => {
            this.DOM.className =
                'dd-Va g-c-wb g-eg-ua-Uc-c-za g-c-0c-td-jb-oa g-c g-c-l';
        });
        this.DOM.addEventListener('click', () => {
            installPlugin(id);
        });
    }
};


/***/ }),

/***/ "./src/preloads/constants/form-fill.ts":
/*!*********************************************!*\
  !*** ./src/preloads/constants/form-fill.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.formFieldFilters = void 0;
exports.formFieldFilters = {
    type: /text|email|password/i,
    name: /login|username|email|password|name|fname|mname|lname|phone|mobile|address|city|country/i,
    menu: /login|username|email|password|name|mname|lname|phone|mobile|address/i,
};


/***/ }),

/***/ "./src/preloads/constants/index.ts":
/*!*****************************************!*\
  !*** ./src/preloads/constants/index.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./form-fill */ "./src/preloads/constants/form-fill.ts"), exports);


/***/ }),

/***/ "./src/preloads/models/auto-complete.ts":
/*!**********************************************!*\
  !*** ./src/preloads/models/auto-complete.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoComplete = void 0;
const electron_1 = __webpack_require__(/*! electron */ "electron");
const form_1 = __webpack_require__(/*! ./form */ "./src/preloads/models/form.ts");
const utils_1 = __webpack_require__(/*! ../utils */ "./src/preloads/utils/index.ts");
const view_preload_1 = __webpack_require__(/*! ../view-preload */ "./src/preloads/view-preload.ts");
class AutoComplete {
    constructor() {
        this.forms = [];
        this.visible = false;
        this.loadForms = () => {
            const forms = utils_1.searchElements(document, 'form');
            this.forms = forms.map((el) => new form_1.Form(el));
        };
        this.onWindowMouseDown = () => {
            this.hide();
        };
        requestAnimationFrame(() => {
            electron_1.ipcRenderer.on(`form-fill-update-${view_preload_1.windowId}`, (e, data, persistent) => {
                if (!this.currentForm)
                    return;
                this.currentForm.insertData(data, persistent);
                if (data && persistent) {
                    this.currentForm.data = data;
                }
            });
        });
    }
    hide() {
        if (this.visible) {
            this.visible = false;
            electron_1.ipcRenderer.send(`form-fill-hide-${view_preload_1.windowId}`);
        }
    }
}
exports.AutoComplete = AutoComplete;
exports.default = new AutoComplete();


/***/ }),

/***/ "./src/preloads/models/form.ts":
/*!*************************************!*\
  !*** ./src/preloads/models/form.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Form = void 0;
const electron_1 = __webpack_require__(/*! electron */ "electron");
const constants_1 = __webpack_require__(/*! ../constants */ "./src/preloads/constants/index.ts");
const utils_1 = __webpack_require__(/*! ../utils */ "./src/preloads/utils/index.ts");
const form_fill_1 = __webpack_require__(/*! ~/utils/form-fill */ "./src/utils/form-fill.ts");
const auto_complete_1 = __webpack_require__(/*! ./auto-complete */ "./src/preloads/models/auto-complete.ts");
const view_preload_1 = __webpack_require__(/*! ../view-preload */ "./src/preloads/view-preload.ts");
class Form {
    constructor(ref) {
        this.changedFields = [];
        this.tempFields = [];
        this.onFormSubmit = () => {
            const username = this.usernameField.value;
            const password = this.passwordField.value;
            const sameUsername = this.data && username === this.data.fields.username;
            const samePassword = this.data && password === this.data.fields.password;
            if (!username.length || (sameUsername && samePassword))
                return;
            electron_1.ipcRenderer.send(`credentials-show-${view_preload_1.windowId}`, {
                username,
                password,
                content: samePassword ? 'update' : 'save',
            });
        };
        this.onFieldFocus = (e) => {
            const field = e.target;
            const rects = field.getBoundingClientRect();
            auto_complete_1.default.currentForm = this;
            auto_complete_1.default.visible = true;
            electron_1.ipcRenderer.send(`form-fill-show-${view_preload_1.windowId}`, {
                width: rects.width,
                height: rects.height,
                x: Math.floor(rects.left),
                y: Math.floor(rects.top),
            }, field.getAttribute('name'), field.value);
        };
        this.onFieldInput = (e) => {
            auto_complete_1.default.hide();
            const target = e.target;
            const index = this.changedFields.indexOf(target);
            if (index === -1) {
                this.changedFields.push(target);
            }
            else if (!target.value.length) {
                this.changedFields.splice(index, 1);
            }
        };
        this.ref = ref;
        this.load();
    }
    load() {
        for (const field of this.fields) {
            const { menu } = constants_1.formFieldFilters;
            const isNameValid = menu.test(field.getAttribute('name'));
            if (field instanceof HTMLInputElement && isNameValid) {
                field.addEventListener('focus', this.onFieldFocus);
                field.addEventListener('input', this.onFieldInput);
            }
        }
        this.ref.addEventListener('submit', this.onFormSubmit);
    }
    get fields() {
        const id = this.ref.getAttribute('id');
        const inside = utils_1.searchElements(this.ref, 'input, select');
        const outside = utils_1.searchElements(document, `input[form=${id}], select[form=${id}]`);
        return [...inside, ...outside].filter((el) => this.validateField(el));
    }
    validateField(field) {
        const { name, type } = constants_1.formFieldFilters;
        const isNameValid = name.test(field.getAttribute('name'));
        const isTypeValid = type.test(field.getAttribute('type')) ||
            field instanceof HTMLSelectElement;
        return utils_1.isVisible(field) && isNameValid && isTypeValid;
    }
    insertData(data, persistent = false) {
        for (const field of this.fields) {
            const autoComplete = this.ref.getAttribute('autocomplete');
            if (autoComplete !== 'off') {
                const changed = this.changedFields.indexOf(field) !== -1;
                const temp = this.tempFields.indexOf(field) !== -1;
                const value = data
                    ? form_fill_1.getFormFillValue(field.getAttribute('name'), data)
                    : '';
                if (!field.value.length || !changed) {
                    field.value = value || '';
                    if (!temp) {
                        this.tempFields.push(field);
                    }
                }
                if (value && persistent && !changed) {
                    this.changedFields.push(field);
                }
            }
        }
        if (!data && !persistent) {
            this.clearTemp();
        }
    }
    clearTemp() {
        for (const field of this.tempFields) {
            if (this.changedFields.indexOf(field) === -1) {
                field.value = '';
            }
        }
        this.tempFields = [];
    }
    get usernameField() {
        return this.fields.find((r) => {
            const name = r.getAttribute('name');
            return name === 'username' || name === 'login' || 'email';
        });
    }
    get passwordField() {
        return this.fields.find((r) => {
            const typeAttr = r.getAttribute('type');
            const name = r.getAttribute('name');
            return typeAttr === 'password' && name === 'password';
        });
    }
}
exports.Form = Form;


/***/ }),

/***/ "./src/preloads/utils/dom.ts":
/*!***********************************!*\
  !*** ./src/preloads/utils/dom.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.searchElements = exports.isVisible = void 0;
exports.isVisible = (el) => {
    return el.offsetHeight !== 0;
};
exports.searchElements = (el, query) => {
    return Array.from(el.querySelectorAll(query));
};


/***/ }),

/***/ "./src/preloads/utils/index.ts":
/*!*************************************!*\
  !*** ./src/preloads/utils/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./dom */ "./src/preloads/utils/dom.ts"), exports);


/***/ }),

/***/ "./src/preloads/view-preload.ts":
/*!**************************************!*\
  !*** ./src/preloads/view-preload.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.windowId = void 0;
const electron_1 = __webpack_require__(/*! electron */ "electron");
const auto_complete_1 = __webpack_require__(/*! ./models/auto-complete */ "./src/preloads/models/auto-complete.ts");
const themes_1 = __webpack_require__(/*! ~/utils/themes */ "./src/utils/themes.ts");
const files_1 = __webpack_require__(/*! ~/constants/files */ "./src/constants/files.ts");
const chrome_webstore_1 = __webpack_require__(/*! ./chrome-webstore */ "./src/preloads/chrome-webstore.ts");
const tabId = electron_1.ipcRenderer.sendSync('get-webcontents-id');
exports.windowId = electron_1.ipcRenderer.sendSync('get-window-id');
const goBack = () => {
    electron_1.ipcRenderer.invoke(`web-contents-call`, {
        webContentsId: tabId,
        method: 'goBack',
    });
};
const goForward = () => {
    electron_1.ipcRenderer.invoke(`web-contents-call`, {
        webContentsId: tabId,
        method: 'goForward',
    });
};
window.addEventListener('mouseup', (e) => {
    if (e.button === 3) {
        e.preventDefault();
        goBack();
    }
    else if (e.button === 4) {
        e.preventDefault();
        goForward();
    }
});
let beginningScrollLeft = null;
let beginningScrollRight = null;
let horizontalMouseMove = 0;
let verticalMouseMove = 0;
const resetCounters = () => {
    beginningScrollLeft = null;
    beginningScrollRight = null;
    horizontalMouseMove = 0;
    verticalMouseMove = 0;
};
function getScrollStartPoint(x, y) {
    let left = 0;
    let right = 0;
    let n = document.elementFromPoint(x, y);
    while (n) {
        if (n.scrollLeft !== undefined) {
            left = Math.max(left, n.scrollLeft);
            right = Math.max(right, n.scrollWidth - n.clientWidth - n.scrollLeft);
        }
        n = n.parentElement;
    }
    return { left, right };
}
document.addEventListener('wheel', (e) => {
    verticalMouseMove += e.deltaY;
    horizontalMouseMove += e.deltaX;
    if (beginningScrollLeft === null || beginningScrollRight === null) {
        const result = getScrollStartPoint(e.deltaX, e.deltaY);
        beginningScrollLeft = result.left;
        beginningScrollRight = result.right;
    }
});
electron_1.ipcRenderer.on('scroll-touch-end', () => {
    if (horizontalMouseMove - beginningScrollRight > 150 &&
        Math.abs(horizontalMouseMove / verticalMouseMove) > 2.5) {
        if (beginningScrollRight < 10) {
            goForward();
        }
    }
    if (horizontalMouseMove + beginningScrollLeft < -150 &&
        Math.abs(horizontalMouseMove / verticalMouseMove) > 2.5) {
        if (beginningScrollLeft < 10) {
            goBack();
        }
    }
    resetCounters();
});
if (false) {}
const postMsg = (data, res) => {
    window.postMessage({
        id: data.id,
        result: res,
        type: 'result',
    }, '*');
};
const hostname = window.location.href.substr(files_1.WEBUI_BASE_URL.length);
if ( true &&
    window.location.host === 'chrome.google.com') {
    chrome_webstore_1.injectChromeWebstoreInstallButton();
}
const settings = electron_1.ipcRenderer.sendSync('get-settings-sync');
if (window.location.href.startsWith(files_1.WEBUI_BASE_URL) ||
    window.location.protocol === 'narada-error:') {
    (async function () {
        const w = await electron_1.webFrame.executeJavaScript('window');
        w.settings = settings;
        w.require = (id) => {
            if (id === 'electron') {
                return { ipcRenderer: electron_1.ipcRenderer };
            }
            return undefined;
        };
        if (window.location.pathname.startsWith('//network-error')) {
            w.theme = themes_1.getTheme(w.settings.theme);
            w.errorURL = await electron_1.ipcRenderer.invoke(`get-error-url-${tabId}`);
        }
        else if (hostname.startsWith('history')) {
            w.getHistory = async () => {
                return await electron_1.ipcRenderer.invoke(`history-get`);
            };
            w.removeHistory = (ids) => {
                electron_1.ipcRenderer.send(`history-remove`, ids);
            };
        }
        else if (hostname.startsWith('newtab')) {
            w.getTopSites = async (count) => {
                return await electron_1.ipcRenderer.invoke(`topsites-get`, count);
            };
        }
    })();
}
else {
    (async function () {
        if (settings.doNotTrack) {
            const w = await electron_1.webFrame.executeJavaScript('window');
            Object.defineProperty(w.navigator, 'doNotTrack', { value: 1 });
        }
    })();
}
if (window.location.href.startsWith(files_1.WEBUI_BASE_URL)) {
    window.addEventListener('DOMContentLoaded', () => {
        if (hostname.startsWith('settings'))
            document.title = 'Settings';
        else if (hostname.startsWith('history'))
            document.title = 'History';
        else if (hostname.startsWith('bookmarks'))
            document.title = 'Bookmarks';
        else if (hostname.startsWith('extensions'))
            document.title = 'Extensions';
        else if (hostname.startsWith('newtab')) {
            document.title = 'New tab';
        }
    });
    window.addEventListener('message', async ({ data }) => {
        if (data.type === 'storage') {
            const res = await electron_1.ipcRenderer.invoke(`storage-${data.operation}`, Object.assign({ scope: data.scope }, data.data));
            postMsg(data, res);
        }
        else if (data.type === 'credentials-get-password') {
            const res = await electron_1.ipcRenderer.invoke('credentials-get-password', data.data);
            postMsg(data, res);
        }
        else if (data.type === 'save-settings') {
            electron_1.ipcRenderer.send('save-settings', { settings: data.data });
        }
    });
    electron_1.ipcRenderer.on('update-settings', async (e, data) => {
        const w = await electron_1.webFrame.executeJavaScript('window');
        if (w.updateSettings) {
            w.updateSettings(data);
        }
    });
    electron_1.ipcRenderer.on('credentials-insert', (e, data) => {
        window.postMessage({
            type: 'credentials-insert',
            data,
        }, '*');
    });
    electron_1.ipcRenderer.on('credentials-update', (e, data) => {
        window.postMessage({
            type: 'credentials-update',
            data,
        }, '*');
    });
    electron_1.ipcRenderer.on('credentials-remove', (e, data) => {
        window.postMessage({
            type: 'credentials-remove',
            data,
        }, '*');
    });
}


/***/ }),

/***/ "./src/renderer/constants/colors.ts":
/*!******************************************!*\
  !*** ./src/renderer/constants/colors.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BLUE_GRAY_500 = exports.DEEP_ORANGE_500 = exports.ORANGE_500 = exports.AMBER_500 = exports.YELLOW_500 = exports.LIME_500 = exports.LIGHT_GREEN_500 = exports.GREEN_500 = exports.TEAL_500 = exports.LIGHT_BLUE_500 = exports.CYAN_500 = exports.INDIGO_500 = exports.DEEP_PURPLE_500 = exports.PURPLE_500 = exports.PINK_500 = exports.RED_500 = exports.BLUE_300 = exports.BLUE_500 = void 0;
exports.BLUE_500 = '#21b0f3';
exports.BLUE_300 = '#64B5F6';
exports.RED_500 = '#F44336';
exports.PINK_500 = '#E91E63';
exports.PURPLE_500 = '#9C27B0';
exports.DEEP_PURPLE_500 = '#673AB7';
exports.INDIGO_500 = '#3F51B5';
exports.CYAN_500 = '#00BCD4';
exports.LIGHT_BLUE_500 = '#03A9F4';
exports.TEAL_500 = '#009688';
exports.GREEN_500 = '#4CAF50';
exports.LIGHT_GREEN_500 = '#8BC34A';
exports.LIME_500 = '#CDDC39';
exports.YELLOW_500 = '#FFEB3B';
exports.AMBER_500 = '#FFC107';
exports.ORANGE_500 = '#FF9800';
exports.DEEP_ORANGE_500 = '#FF5722';
exports.BLUE_GRAY_500 = '#607D8B';


/***/ }),

/***/ "./src/renderer/constants/themes.ts":
/*!******************************************!*\
  !*** ./src/renderer/constants/themes.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.darkTheme = exports.lightTheme = void 0;
const colors_1 = __webpack_require__(/*! ./colors */ "./src/renderer/constants/colors.ts");
exports.lightTheme = {
    'titlebar.backgroundColor': '#d4d4d4',
    'addressbar.backgroundColor': '#fff',
    'addressbar.textColor': '#000',
    'toolbar.backgroundColor': '#f8f8f8',
    'toolbar.bottomLine.backgroundColor': 'rgba(0, 0, 0, 0.12)',
    'toolbar.lightForeground': false,
    'toolbar.separator.color': 'rgba(0, 0, 0, 0.12)',
    'tab.selected.textColor': '#000',
    'tab.textColor': `rgba(0, 0, 0, 0.7)`,
    'control.backgroundColor': 'rgba(0, 0, 0, 0.08)',
    'control.hover.backgroundColor': 'rgba(0, 0, 0, 0.1)',
    'control.valueColor': '#000',
    'control.lightIcon': false,
    'switch.backgroundColor': 'rgba(0, 0, 0, 0.16)',
    'dialog.backgroundColor': '#fff',
    'dialog.separator.color': 'rgba(0, 0, 0, 0.12)',
    'dialog.textColor': '#000',
    'dialog.lightForeground': false,
    'searchBox.backgroundColor': '#fff',
    'searchBox.lightForeground': false,
    'pages.backgroundColor': '#fff',
    'pages.lightForeground': false,
    'pages.textColor': '#000',
    'dropdown.backgroundColor': '#fff',
    'dropdown.backgroundColor.translucent': 'rgba(255, 255, 255, 0.7)',
    'dropdown.separator.color': 'rgba(0, 0, 0, 0.12)',
    'pages.navigationDrawer1.backgroundColor': '#f5f5f5',
    'pages.navigationDrawer2.backgroundColor': '#fafafa',
    accentColor: colors_1.BLUE_500,
    backgroundColor: '#fff',
};
exports.darkTheme = {
    'titlebar.backgroundColor': '#1c1c1c',
    'addressbar.backgroundColor': '#262626',
    'addressbar.textColor': '#fff',
    'toolbar.backgroundColor': '#333333',
    'toolbar.bottomLine.backgroundColor': 'rgba(255, 255, 255, 0.08)',
    'toolbar.lightForeground': true,
    'toolbar.separator.color': 'rgba(255, 255, 255, 0.12)',
    'tab.selected.textColor': '#fff',
    'tab.textColor': 'rgba(255, 255, 255, 0.54)',
    'control.backgroundColor': 'rgba(255, 255, 255, 0.1)',
    'control.hover.backgroundColor': 'rgba(255, 255, 255, 0.12)',
    'control.valueColor': '#fff',
    'control.lightIcon': true,
    'switch.backgroundColor': 'rgba(255, 255, 255, 0.24)',
    'dialog.backgroundColor': '#383838',
    'dialog.separator.color': 'rgba(255, 255, 255, 0.12)',
    'dialog.textColor': '#fff',
    'dialog.lightForeground': true,
    'searchBox.backgroundColor': '#262626',
    'searchBox.lightForeground': true,
    'pages.backgroundColor': '#212121',
    'pages.lightForeground': true,
    'pages.textColor': '#fff',
    'dropdown.backgroundColor': 'rgb(66, 66, 66)',
    'dropdown.backgroundColor.translucent': 'rgb(60, 60, 60, 0.6)',
    'dropdown.separator.color': 'rgba(255, 255, 255, 0.12)',
    'pages.navigationDrawer1.backgroundColor': 'rgba(255, 255, 255, 0.1)',
    'pages.navigationDrawer2.backgroundColor': 'rgba(255, 255, 255, 0.05)',
    backgroundColor: '#1c1c1c',
    accentColor: colors_1.BLUE_500,
};


/***/ }),

/***/ "./src/utils/form-fill.ts":
/*!********************************!*\
  !*** ./src/utils/form-fill.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getFormFillSubValue = exports.getFormFillValue = void 0;
const getKey = (name) => {
    try {
        switch (name) {
            case 'username':
                return 'username';
            case 'login':
                return 'username';
            case 'email':
                return 'email';
            case 'password':
                return 'password';
            case 'name':
                return 'name';
            case 'fname':
                return 'name';
            case 'mname':
                return 'name';
            case 'lname':
                return 'name';
            case 'address':
                return 'address';
            case 'city':
                return 'city';
            case 'postal':
                return 'postCode';
            case 'country':
                return 'country';
            case 'phone':
                return 'phone';
            case 'mobile':
                return 'phone';
        }
    }
    catch (err) { }
    return null;
};
exports.getFormFillValue = (name, data, hidePassword = false) => {
    const { fields } = data;
    const fullName = (fields.name || '').split(' ');
    if (name === 'password' && hidePassword) {
        return fields.username || fields.email;
    }
    try {
        switch (name) {
            case 'fname': // first name
                return fullName[0];
            case 'mname': // middle name
                return fullName.length >= 3 && fullName[fullName.length - 2];
            default:
                return fields[getKey(name)];
        }
    }
    catch (error) { }
    return null;
};
exports.getFormFillSubValue = (name, data) => {
    const key = getKey(name);
    const { fields } = data;
    if (data.type === 'address') {
        for (const itemKey in fields) {
            const val = fields[itemKey];
            if (key !== itemKey && val != null) {
                return val;
            }
        }
    }
    else {
        return '•'.repeat(fields.passLength);
    }
    return null;
};


/***/ }),

/***/ "./src/utils/themes.ts":
/*!*****************************!*\
  !*** ./src/utils/themes.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getTheme = void 0;
const themes_1 = __webpack_require__(/*! ~/renderer/constants/themes */ "./src/renderer/constants/themes.ts");
exports.getTheme = (name) => {
    if (name === 'wexond-light')
        return themes_1.lightTheme;
    else if (name === 'wexond-dark')
        return themes_1.darkTheme;
    return themes_1.lightTheme;
};


/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("electron");

/***/ })

/******/ });