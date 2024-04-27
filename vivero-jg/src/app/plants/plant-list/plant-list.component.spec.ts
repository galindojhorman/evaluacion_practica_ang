/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantListComponent } from './plant-list.component';
import { DebugElement } from '@angular/core';
import { PlantService } from '../plant.service';
import { Plant } from '../plant';
import { By } from '@angular/platform-browser';
import { AppComponent } from 'src/app/app.component';
import { HttpClientModule } from '@angular/common/http';



describe('PlantListComponent', () => {
  let component: PlantListComponent;
  let fixture: ComponentFixture<PlantListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlantListComponent, AppComponent],
      imports: [HttpClientModule],
      providers: [PlantService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantListComponent);
    component = fixture.componentInstance;

    for (let i = 0; i < 3; i++) {
      component.plants.push(
        new Plant(
          i, 
          `Nombre Comun ${i}`, 
          `Nombre Cientifico ${i}`, 
          `Tipo ${i}`, 
          i * 10,
          `Clima ${i}`,
          `Sustrato Siembra ${i}` 
        )
      );
    }

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display 3 plants and header', () => {
    const tableRows = fixture.debugElement.queryAll(By.css('tr'));
    // Debería haber 4 filas en total: 1 para el encabezado y 3 para las plantas
    expect(tableRows.length).toBe(4);
  });
});
