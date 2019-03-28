import { SELECT_TASK } from '../actions/actionTypes';

export default function taskSelected(taskID) {
    return { type: SELECT_TASK, taskID };
}