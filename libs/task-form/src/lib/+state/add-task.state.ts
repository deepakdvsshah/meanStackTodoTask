import { State, Action, StateContext, Selector } from '@ngxs/store';
import { AddTask, GetFullTaskList } from '../+state/add-task.action';
import { Injectable } from '@angular/core';
import { TaskApiService } from '@create-task/openapi/task'
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';


export class AddTaskStateModel {
    taskList: Array<object> = [];
    viewFullTaskList: Array<object> = [];
}

@State<AddTaskStateModel>({
    name: 'addList',
    defaults: {
        taskList: [],
        viewFullTaskList: [],
    }
})
@Injectable()
export class AddTaskState {

    constructor(public taskApiService: TaskApiService) {
    }

    /**
    * @param  {AddTaskStateModel} 
    * return task list
    */
    @Selector()
    static addTask(state: AddTaskStateModel) {
        return state.taskList;
    }
    /**
    * @param  {AddTaskStateModel} 
    * return task list
    */
    @Selector()
    static viewTask(state: AddTaskStateModel) {
        return state.viewFullTaskList;
    }

    /**
     * Get task list
     * @Action  GetTaskList
     */
    @Action(AddTask)
    addTask({ getState, setState }: StateContext<AddTaskStateModel>, aaddTask: any) {
        return this.taskApiService.appControllerSetData(aaddTask.payload).pipe(tap((result) => {
            const state = getState();
            setState({
                ...state,
                viewFullTaskList: result
            });
        }),
            catchError(() => {
                return of();
            })
        );
    }
    @Action(GetFullTaskList)
    getTaskList({ getState, setState }: StateContext<AddTaskStateModel>) {
        return this.taskApiService.appControllerGetData().pipe(tap((result) => {
            const state = getState();
            setState({
                ...state,
                viewFullTaskList: result,
            });
        }),
            catchError(() => {
                return of();
            })
        );
    }
}