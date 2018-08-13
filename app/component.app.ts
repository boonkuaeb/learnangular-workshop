import {Component} from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: './partials/app.html'
})

export class AppComponent {
    name: string;
    artists: Object[];

    onClick(e){
        this.name  = e.target.innerHTML;
    }

    addArtist(value){
        if (value!== '')
        {
            this.artists.push({
                name:value,
                school : ''
            });
        }
    }

    constructor() {
        this.name = 'Boonkuae Boonsutta';
        this.artists = [
            {
                name: 'Tonnam',
                school: 'BK01'
            },
            {
                name: 'Nam',
                school: "BK02"
            },
            {
                name: 'Kuae',
                school: 'BK03'
            }
        ];
    }
}
