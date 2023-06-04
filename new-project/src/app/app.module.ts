import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { BootstrapFormComponent } from './bootstrap-form/bootstrap-form.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    JumbotronComponent,
    BootstrapFormComponent,
    ProductsComponent,
    ProductComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
