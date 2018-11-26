import { NgModule } from '@angular/core';
import { MenuComponent } from './menu/menu';
import { FooterComponent } from './footer/footer';
@NgModule({
	declarations: [MenuComponent,
    FooterComponent],
	imports: [],
	exports: [MenuComponent,
    FooterComponent]
})
export class ComponentsModule {}
