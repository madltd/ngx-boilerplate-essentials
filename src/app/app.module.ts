// #region Angular Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// #endregion

// #region Third-party modules and plugins
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
// #endregion

// #region Custom modules
import { AppRoutingModule } from './app-routing.module';
// #endregion

// #region Custom (Miscellaneous)
import { AppState } from './states/app.state';
// #endregion

// #region Pipes
import { SafeCodePipe } from './pipes/safe-code.pipe';
import { MdToHtmlPipe } from './pipes/md-to-html.pipe';
// #endregion

// #region Components
import { AppComponent } from './app.component';
import { VisitorComponent } from './layouts/visitor/visitor.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UserComponent } from './layouts/user/user.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
// #endregion

@NgModule({
  declarations: [
    AppComponent,
    SafeCodePipe,
    MdToHtmlPipe,
    HomeComponent,
    VisitorComponent,
    NotFoundComponent,
    UserComponent,
    DashboardComponent
  ],
  imports: [
    // #region Angular Modules
    BrowserModule,
    // #endregion
    // #region Third-party modules and plugins
    NgxsModule.forRoot([
      AppState
    ]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    // #endregion
    // #region Custom modules
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
