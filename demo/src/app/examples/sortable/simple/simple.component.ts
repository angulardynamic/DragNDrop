import {Component} from '@angular/core';

@Component({
    selector: 'simple',
    templateUrl: './simple.component.html'
})
export class SimpleComponent {
    listOne: Array<string> = ['Coffee', 'Orange Juice', 'Red Wine', 'Unhealty drink!', 'Water'];
}