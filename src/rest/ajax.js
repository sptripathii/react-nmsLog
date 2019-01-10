import store from '../stores/store.js';

export function fetchLogsForGrid() {
    console.log("testing from ajax sq")
    return fetch('http://localhost:8083/nmslog/')
        .then(function (response) {
            return response.json();
        })
        .then(function (logData) {
            store.dispatch({
                type: 'grid',
                logs: logData
            });
            console.log("logData in ajax", logData);
        });
};

export function fetchCount() {
    return fetch('../sampleData/count.json').then(function (response) {
        return response.json();
    }).then(function (countData) {
        store.dispatch({
            type: 'dashboard',
            count: countData
        });
        console.log("count in ajax", countData);
    });
};