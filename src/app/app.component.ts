// #region Angular + rxjs
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
// #endregion
// #region Third-party
import { Select } from '@ngxs/store';
// #endregion
// #region Custom interfaces
import { App } from './models/app.model';
import { AppState } from './states/app.state';
// #endregion

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @Select(AppState.getApp) app$: Observable<App>;

  constructor() { }
}
