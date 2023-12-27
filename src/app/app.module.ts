import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventBindigComponent } from './Components/event-bindig/event-bindig.component';
import { TwoWayBindingComponent } from './Components/two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';
import { StructureDirectiveComponent } from './Components/structure-directive/structure-directive.component';
import { ToDoListComponent } from './Components/to-do-list/to-do-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EventBindigComponent,
    TwoWayBindingComponent,
    StructureDirectiveComponent,
    ToDoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
