import { Component, OnInit } from '@angular/core';


export interface Photo {
  descripcion: string;
  tiempo: string;
  url: string;
}

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  photos: Photo[] = [
    {
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida sapien at gravida semper. Aenean a lacinia diam. Nulla facilisi. Suspendisse ut turpis at tellus porttitor hendrerit.",
      "tiempo": "3 mins",
      "url": "https://randomwordgenerator.com/img/picture-generator/53e4d2464252ae14f1dc8460962e33791c3ad6e04e507440722d72d59448c5_640.jpg"
    },
    {
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida sapien at gravida semper. Aenean a lacinia diam. Nulla facilisi. Suspendisse ut turpis at tellus porttitor hendrerit.",
      "tiempo": "9 mins",
      "url": "https://randomwordgenerator.com/img/picture-generator/57e3d2474255a814f1dc8460962e33791c3ad6e04e507440762a7cd49348cc_640.jpg"
    },
    {
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida sapien at gravida semper. Aenean a lacinia diam. Nulla facilisi. Suspendisse ut turpis at tellus porttitor hendrerit.",
      "tiempo": "5 mins",
      "url": "https://randomwordgenerator.com/img/picture-generator/57e4dd404d51a914f1dc8460962e33791c3ad6e04e5074417c2e7dd29744c7_640.jpg"
    },
    {
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida sapien at gravida semper. Aenean a lacinia diam. Nulla facilisi. Suspendisse ut turpis at tellus porttitor hendrerit.",
      "tiempo": "3 mins",
      "url": "https://randomwordgenerator.com/img/picture-generator/52e1d2454e55b10ff3d8992cc12c30771037dbf852577148762c7ad2904e_640.jpg"
    },
    {
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida sapien at gravida semper. Aenean a lacinia diam. Nulla facilisi. Suspendisse ut turpis at tellus porttitor hendrerit.",
      "tiempo": "3 mins",
      "url": "https://randomwordgenerator.com/img/picture-generator/52e8d2474851ad14f1dc8460962e33791c3ad6e04e5074417c2f7dd59f4ac1_640.jpg"
    },
    {
      "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida sapien at gravida semper. Aenean a lacinia diam. Nulla facilisi. Suspendisse ut turpis at tellus porttitor hendrerit.",
      "tiempo": "19 mins",
      "url": "https://randomwordgenerator.com/img/picture-generator/52e3d4404852ac14f1dc8460962e33791c3ad6e04e507440772d7cdd9f4bcc_640.jpg"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
