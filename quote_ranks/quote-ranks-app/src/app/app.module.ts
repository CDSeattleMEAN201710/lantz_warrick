import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuoteCreateComponent } from './quotes/quote-create/quote-create.component';
import { QuoteListComponent } from './quotes/quote-list/quote-list.component';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    QuoteCreateComponent,
    QuoteListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }