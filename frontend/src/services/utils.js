export const getTextCut = (str, num) => {
    if (str.length > num) return str.slice(0, num - 3) + '...';
    else return str;
};

export const ls = {
    set: (key, value) => {
        localStorage.setItem(key, JSON.stringify(value));
        return value;
    },
    get: (key) => {
        return JSON.parse(localStorage.getItem(key));
    },
};

export const ss = {
    set: (key, value) => {
        sessionStorage.setItem(key, JSON.stringify(value));
        return value;
    },
    get: (key) => {
        return JSON.parse(sessionStorage.getItem(key));
    },
};
