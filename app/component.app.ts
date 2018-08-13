import {Component} from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: './partials/app.html'
})

export class AppComponent {
    name: string;
    artists: Object[];

    onClick(myItem, myElement){
        this.name  = myItem.name;
        myElement.style.backgroundColor = '#FECE4E';
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
