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
import { JwtModule } from '@auth0/angular-jwt';
//import {ToastModule} from 'ng2-toastr/ng2-toastr';
import { ToastrModule } from 'ng6-toastr-notifications';
import { UploadService } from './upload.service'
import { UpdateExpenceComponent } from './modelPopups/update-expence/update-expence.component'
import { UserprofileComponent } from './modelPopups/userprofile/userprofile.component'
import { ChangepasswordComponent } from './modelPopups/changepassword/changepassword.component'
import { AddroomieComponent } from './modelPopups/addroomie/addroomie.component'
import { ApiServiceService} from './api-service.service'
import { AuthGuard } from './auth.guard'
import {AuthService } from './auth.service'





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
    MaterialComponentsModule,
    JwtModule,
    ToastrModule.forRoot()
  //  ToastModule.forRoot()

  ],
  entryComponents: [
    UpdateExpenceComponent,
    UserprofileComponent,
    ChangepasswordComponent,
    AddroomieComponent
  ],
  providers: [UploadService,ApiServiceService,AuthGuard,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
