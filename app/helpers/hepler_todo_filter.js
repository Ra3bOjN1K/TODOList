export const FILTER_TASKS_ALL = 'FILTER_ALL_TASKS_ALL';
export const FILTER_TASKS_DONE = "FILTER_TASKS_DONE";
export const FILTER_TASKS_ACTIVE = "FILTER_TASKS_ACTIVE";


export function filterTodoList(list, filter) {
    return list.reduce((arr, item) => {
        if (filter === FILTER_TASKS_ALL) {
            arr.push(item);
        }
        else if (filter === FILTER_TASKS_DONE && item.isDone) {
            arr.push(item);
        }
        else if (filter === FILTER_TASKS_ACTIVE && !item.isDone) {
            arr.push(item);
        }
        return arr;
    }, []);
}

export function searchByPattern(list, pattern) {
    return list.reduce((arr, item) => {
        if (item.title.toLowerCase().indexOf(pattern.toLowerCase()) > -1) {
            arr.push(item);
        }
        return arr;
    }, []);
}
