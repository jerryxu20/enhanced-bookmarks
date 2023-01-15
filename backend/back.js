

export function setTasks(tasks) {
    const date = dateKey();
    console.log("from set tasks")
    console.log(tasks);
    chrome.storage.sync.set({[date]: tasks}).then(() => {
        console.log('set tasks');
        getTasks();
    });
}

export function getTasks() {
    const date = dateKey();
    chrome.storage.sync.get([date]).then((res) => {
        const ans = []
        const taskobj = res[date];
        console.log(res[date])
        if (res[date] === undefined) return ans;
        for (const prop in taskobj) {
            ans.push(taskobj[prop]);
        }
        console.log('from get', ans);
        return ans;
    });
    return [];
    
}

export function dateKey() {
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    const date = (new Date()).toLocaleDateString('en-US', options)
    return date;
}


