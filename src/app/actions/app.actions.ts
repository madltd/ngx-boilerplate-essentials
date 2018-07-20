import { App } from './../models/app.model';

export class SetApp {
  static readonly type = '[APP] Set App';

  constructor(public payload: App) { }
}

export class UpdateAppName {
  static readonly type = '[APP] Update App Name';

  constructor(public payload: string) { }
}
