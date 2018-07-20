// Section 1
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { App } from './../models/app.model';
import { SetApp, UpdateAppName } from './../actions/app.actions';

@State<App>({
  name: 'app',
  defaults: {
    name: 'MadApp'
  }
})
export class AppState {

  @Selector()
  static getApp(state: App) {
    return state;
  }

  @Selector()
  static getAppName(state: App) {
    return state.name;
  }

  @Action(SetApp)
  setApp({ setState }: StateContext<App>, { payload }: SetApp) {
    setState(payload);
  }

  @Action(UpdateAppName)
  updateAppName({ patchState }: StateContext<App>, { payload }: UpdateAppName) {
    patchState({
      name: payload
    });
  }

}
