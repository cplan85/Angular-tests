import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';


describe('Incremendator Component', () => {

    let component: IncrementadorComponent;
    let fixture: ComponentFixture<IncrementadorComponent>;

    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [ IncrementadorComponent ],
            imports: [ FormsModule ]
        });

        fixture = TestBed.createComponent(IncrementadorComponent);
        component = fixture.componentInstance;

    });

    it('Should show the legend', () => {

      component.leyenda = 'Loading progress';

      fixture.detectChanges(); //when an app loads, leyenda is blank, so you need to execute detect change to recieve input value.

      const elem: HTMLElement = fixture.debugElement.query( By.css('h3') ).nativeElement;

      expect(elem.innerHTML).toContain('Loading progress');
    });

    it('Should show in the input the progress value', () => {

      component.cambiarValor(5);

      fixture.detectChanges();
      //the detectChange can take longer than the unit test, so it is actually best to employ whenStable().then. It waits for detectChange to completely finish then executes what is in whenStable.

      fixture.whenStable().then( () => {
    
        const input = fixture.debugElement.query(By.css('input'));
        const elem = input.nativeElement;
        console.log(elem, "elem")
        expect(elem.value).toBe('55');
      })
   
      });

      it('Should increment/decrease in 5 with the click of the button', () => {

        //queryAll Get all elements that match .btn-primary in this case.
        const buttons = fixture.debugElement.queryAll( By.css('.btn-primary'));
        
        //the first button is the decrease butotn, so it should decrease 50 by 5 t0 be 45.
        buttons[0].triggerEventHandler('click', null);
        expect(component.progreso).toBe(45);
        //2nd button increases. So now 45 + 5 = 50.
        buttons[1].triggerEventHandler('click', null);
        expect(component.progreso).toBe(50);
     
        });

        it('When user clicks button to increment/decrement, progress html should change ', () => {

            const buttons = fixture.debugElement.queryAll( By.css('.btn-primary'));
            
            //the first button is the decrease butotn, so it should decrease 50 by 5 t0 be 45.
            buttons[0].triggerEventHandler('click', null);
            fixture.detectChanges();
            
            const elem: HTMLElement = fixture.debugElement.query( By.css('h3') ).nativeElement;

            expect(elem.innerHTML).toContain('45');

            });

});
