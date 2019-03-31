import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent implements OnInit {

  lat: number = -12.9482258;
  lng: number = -38.384024899999986;
  zoom: number = 14;
  addressInfo: string ="Piatã Salvador, BA, Brasil";
  showZoom: boolean = true;
  showStreetView: boolean = true;
  showMapType: boolean = true;
  label: string = "Piatã Salvador, BA, Brasil";
  
  styles: any[] =  [  
    {  
    "elementType":"labels.text.fill",
    "featureType":"administrative",
    "stylers":[  
      {  
        "visibility":"on"
      },
      {  
        "color":"#b1b1b3"
      }
    ]
    },
    {  
    "elementType":"labels.text.stroke",
    "featureType":"administrative",
    "stylers":[  
      {  
        "visibility":"on"
      },
      {  
        "color":"#3c3d41"
      }
    ]
    },
    {  
    "elementType":"all",
    "featureType":"landscape",
    "stylers":[  
      {  
        "color":"#525459"
      },
      {  
        "visibility":"on"
      }
    ]
    },
    {  
    "elementType":"all",
    "featureType":"poi",
    "stylers":[  
      {  
        "color":"#f14e4e"
      },
      {  
        "visibility":"off"
      }
    ]
    },
    {  
    "elementType":"labels.text.stroke",
    "featureType":"poi",
    "stylers":[  
      {  
        "color":"#1c262d"
      },
      {  
        "visibility":"off"
      }
    ]
    },
    {  
    "elementType":"labels.icon",
    "featureType":"poi",
    "stylers":[  
      {  
        "color":"#f14e4e"
      },
      {  
        "visibility":"off"
      }
    ]
    },
    {  
    "elementType":"all",
    "featureType":"poi.park",
    "stylers":[  
      {  
        "color":"#3c3d41"
      }
    ]
    },
    {  
    "elementType":"all",
    "featureType":"road",
    "stylers":[  
      {  
        "color":"#3c3d41"
      }
    ]
    },
    {  
    "elementType":"labels.text.fill",
    "featureType":"road",
    "stylers":[  
      {  
        "color":"#eeeeee"
      },
      {  
        "visibility":"on"
      }
    ]
    },
    {  
    "elementType":"all",
    "featureType":"transit",
    "stylers":[  
      {  
        "color":"#3c3d41"
      },
      {  
        "visibility":"simplified"
      }
    ]
    },
    {  
    "elementType":"labels.text.fill",
    "featureType":"transit",
    "stylers":[  
      {  
        "color":"#f14e4e"
      },
      {  
        "visibility":"off"
      }
    ]
    },
    {  
    "elementType":"all",
    "featureType":"water",
    "stylers":[  
      {  
        "color":"#3c3d41"
      }
    ]
    }
  ]

  constructor() { }

  ngOnInit() {
  
  }

}
