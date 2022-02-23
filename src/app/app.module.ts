import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AngularPipesComponent } from './angular-pipes/angular-pipes.component';
import { LifecycleHookComponent } from './lifecycle-hook/lifecycle-hook.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularPipesComponent,
    LifecycleHookComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
