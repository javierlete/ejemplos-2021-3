import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-titulo',
    template: '<h2>{{texto}}</h2>',
    styles: [`
            h2 {
                text-transform: uppercase;
            }
            `]
})
export class TituloComponent {
    @Input() texto = 'Mi super título';
}
