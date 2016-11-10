// import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import { ConfigService } from './app.config';

const platform = platformBrowserDynamic();

// enableProdMode();
platform.bootstrapModule(AppModule);