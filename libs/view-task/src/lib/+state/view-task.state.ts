import { State, Action, StateContext, Selector } from '@ngxs/store';
import { GetTaskList } from '../+state/view-task.action';
import { Injectable } from '@angular/core';
import { TaskApiService } from '@create-task/openapi/task'
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';


export class ViewTaskStateModel {
    viewTaskList: Array<object> = [{}];
}

@State<ViewTaskStateModel>({
    name: 'getList',
    defaults: {
        viewTaskList: [],
    }
})
@Injectable()
export class ViewTaskState {

    constructor(public taskApiService: TaskApiService) {
    }

    /**
    * @param  {ViewTaskStateModel} 
    * return task list
    */
    @Selector()
    static getTaskList(state: ViewTaskStateModel) {
        return state.viewTaskList;
    }

    /**
     * Get task list
     * @Action  GetTaskList
     */
    @Action(GetTaskList)
    getTaskList({ getState, setState }: StateContext<ViewTaskStateModel>) {
        return this.taskApiService.appControllerGetData().pipe(tap((result) => {
            const state = getState();
            setState({
                ...state,
                viewTaskList: result,
            });
        }),
            catchError(() => {
                return of();
            })
        );
    }
}