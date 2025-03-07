import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransactionsComponent } from './views/transactions/transactions.component';
import { ComponentsComponent } from './shared/components/components.component';

@NgModule({
  declarations: [
    AppComponent,
    TransactionsComponent,
    ComponentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
