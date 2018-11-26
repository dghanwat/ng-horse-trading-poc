import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Ng2DropdownModule } from 'ng2-material-dropdown';
import { UICarouselModule } from 'ui-carousel';
import { MasonryGalleryModule } from 'ngx-masonry-gallery';



import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FaqPage } from '../pages/faq/faq';
import { ContactusPage } from '../pages/contactus/contactus';

import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FaqPage,
    ContactusPage
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    Ng2DropdownModule,
    UICarouselModule,
    MasonryGalleryModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FaqPage,
    ContactusPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
