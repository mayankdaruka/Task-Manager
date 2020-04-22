export const task_field = (text) => {
    return {
        type: "TASK",
        value: text + '. '
    }
}

export const importance_field = (text) => {
    var addition;
    if (text == 1 || text == 2) {
        addition = 'Task is not very important. '
    } else if (text == 3 || text == 4) {
        addition = 'Task is important. '
    } else {
        addition = 'Task is very important. '
    }
    return {
        type: "IMPORTANCE",
        value: addition
    }
}

export const date_field = (text) => {
    return {
        type: "DATE",
        value: ' Task must be completed by ' + text + '. '
    }
}

export const submit_button = () => {
    return {
        type: "SUBMIT"
    }
}

export const remove_button = (value1) => {
    return {
        type: "REMOVE",
        value: value1
    }
}