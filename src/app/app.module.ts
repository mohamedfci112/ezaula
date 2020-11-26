import { QuizBService } from './quiz-b/quiz-b.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AlertModule, ModalModule } from 'ngx-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularMaterialWrapperModule } from './_modules/angular-material-wrapper/angular-material-wrapper.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// videogular2 ...
import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';
import { VgBufferingModule } from 'videogular2/buffering';
import { HomeComponent } from './core/home/home.component';
import { TopHeaderComponent } from './core/top-header/top-header.component';
import { HeaderComponent } from './core/header/header.component';
import { SliderComponent } from './core/slider/slider.component';
import { FooterComponent } from './core/footer/footer.component';
import { SubscribeComponent } from './core/subscribe/subscribe.component';
import { KidsIndexComponent } from './kids/kids-index/kids-index.component';
import { KidsSliderComponent } from './kids/kids-slider/kids-slider.component';
import { LoginComponent } from './access/login/login.component';
import { RegisterComponent } from './access/register/register.component';
import { ForgottenComponent } from './access/forgotten/forgotten.component';
import { QuizBComponent } from './quiz-b/quiz-b.component';
import { QuizAComponent } from './quiz-a/quiz-a.component';
import { QuizCComponent } from './quiz-c/quiz-c.component';
import { QuizDComponent } from './quiz-d/quiz-d.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopHeaderComponent,
    HeaderComponent,
    SliderComponent,
    FooterComponent,
    SubscribeComponent,
    KidsIndexComponent,
    KidsSliderComponent,
    LoginComponent,
    RegisterComponent,
    ForgottenComponent,
    QuizBComponent,
    QuizAComponent,
    QuizCComponent,
    QuizDComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialWrapperModule,
    HttpClientModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    AngularFontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [QuizBService],
  bootstrap: [AppComponent]
})
export class AppModule { }
