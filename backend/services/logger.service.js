import fs from 'fs';
import chalk from 'chalk';
import asyncLocalStorage from './als.service.js';

chalk.switch = (level) => {
    switch (level) {
        case 'DEBUG': return chalk.cyan(level)
        case 'INFO': return chalk.yellowBright(level)
        case 'WARN': return chalk.yellow(level)
        case 'ERROR': return chalk.red(level)
    }
};

const logsDir = './logs';
if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
}

//define the time format
function getTime() {
    const now = new Date();
    return now.toLocaleString();
}

function isError(e) {
    return e && e.stack && e.message;
}

function doLog(level, ...args) {
    const strs = args.map((arg) =>
        typeof arg === 'string' || isError(arg) ? arg : JSON.stringify(arg)
    );

    const line = strs.join(' | ');
    const store = asyncLocalStorage.getStore();
    const sessionId = store?.sessionId;
    const sid = sessionId ? `(sid: ${sessionId})` : '';
    const logLine = `[ ${getTime()} ] - ${level} - ${line} ${sid} \n`;
    const cmdLine = `[${getTime()}] - ${chalk.switch(level)} - ${line} ${sid} \n`;    
    fs.appendFileSync(`${logsDir}/backend.log`, logLine);
    console.log(cmdLine);
}

export default {
    debug(...args) {
        if (process.env.NODE_NEV === 'production') return
        doLog('DEBUG', ...args);
    },
    info(...args) {
        doLog('INFO', ...args);
    },
    warn(...args) {
        doLog('WARN', ...args);
    },
    error(...args) {
        doLog('ERROR', ...args);
    },
};
