import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialComponentsModule } from './material-components.module'
import { UploadService } from './upload.service'
import { UpdateExpenceComponent } from './modelPopups/update-expence/update-expence.component'
import { UserprofileComponent } from './modelPopups/userprofile/userprofile.component'
import { ChangepasswordComponent } from './modelPopups/changepassword/changepassword.component'
import { AddroomieComponent } from './modelPopups/addroomie/addroomie.component'





@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    SidenavComponent,
    HeaderComponent,
    UpdateExpenceComponent,
    UserprofileComponent,
    ChangepasswordComponent,
    AddroomieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialComponentsModule

  ],
  entryComponents: [
    UpdateExpenceComponent,
    UserprofileComponent,
    ChangepasswordComponent,
    AddroomieComponent
  ],
  providers: [UploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
