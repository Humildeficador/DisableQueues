import config from "./config";
let intervalLolParties;

function lolPartiesTimer(divQueues = []) {
    intervalLolParties = setInterval(() => {
        const queues = Object.values(config.get());
        queues.forEach((enabled, i) => {
            divQueues[i].style.display = enabled ? 'none' : 'flex';
        });
    }, 100)
}

function getScreenRoot() {
    return new Promise((resolve, reject) => {
        const interval = setInterval(() => {
            const screenRoot = document.querySelector("#rcp-fe-viewport-root > section.rcp-fe-viewport-main");
            if (screenRoot) {
                clearInterval(interval);
                resolve(screenRoot);
            }
        }, 100);
    });
}

function observerCallback(mutationList) {
    for (const mutation of mutationList) {
        for (const node of mutation.addedNodes) {
            if (node.getAttribute('data-screen-name') == 'rcp-fe-lol-parties') {
                const classGames = node.querySelector('[data-game-mode="CLASSIC"] > div:nth-child(2) > lol-uikit-scrollable').children
                lolPartiesTimer(classGames)
            } else {
                clearInterval(intervalLolParties)
            }
        }
    }
}

const observer = new MutationObserver(observerCallback);

export function pluginInit() {
    getScreenRoot().then(screenRoot => {
        observer.observe(screenRoot, {
            attributes: true,
            childList: true,
            subtree: false
        })
    })
}