
export type Action = | GetTaskList

export enum TaskListActionType {
    GET_TASK_LIST = '[TASK] Get task list '
}

export class GetTaskList {
    static readonly type = TaskListActionType.GET_TASK_LIST;
}
