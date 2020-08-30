import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HrmtSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [HrmtSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent],
})
export class HrmtHomeModule {}
