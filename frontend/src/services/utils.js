export const getTextCut = (str, num) => {
    if (str.length > num) return str.slice(0, num - 3) + '...';
    else return str;
};
