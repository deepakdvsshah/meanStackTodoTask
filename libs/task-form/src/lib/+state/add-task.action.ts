
export type Action = | AddTask | GetFullTaskList

export enum AddTaskListActionType {
    ADD_TASK = '[ADD-TASK] Add task ',
    VIEW_TASK = '[ADD-TASK] View task ',
}

export class AddTask {
    static readonly type = AddTaskListActionType.ADD_TASK;
    constructor(public payload: any) {
    }
}
export class GetFullTaskList {
    static readonly type = AddTaskListActionType.VIEW_TASK;

}
