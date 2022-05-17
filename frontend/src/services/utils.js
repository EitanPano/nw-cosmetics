// import debounce from 'lodash.debounce';

export const getTextCut = (str, num) => {
    if (str.length > num) return str.slice(0, num - 3) + '...';
    else return str;
};

export const localStore = {
    set: (key, value) => {
        localStorage.setItem(key, JSON.stringify(value));
        return value;
    },
    get: (key) => {
        return JSON.parse(localStorage.getItem(key));
    },
};

export const sessionStore = {
    set: (key, value) => {
        sessionStorage.setItem(key, JSON.stringify(value));
        return value;
    },
    get: (key) => {
        return JSON.parse(sessionStorage.getItem(key));
    },
};

let timeout;
export function debounce(func, wait = 1000) {
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

export function asyncDebounce(func, wait = 1000) {
    const debounced = debounce((resolve, reject, args) => {
        func(...args)
            .then(resolve)
            .catch(reject);
    }, wait);
    return (...args) =>
        new Promise((resolve, reject) => {
            debounced(resolve, reject, args);
        });
}
