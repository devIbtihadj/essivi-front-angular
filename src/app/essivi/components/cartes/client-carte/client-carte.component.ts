import { Component, OnInit } from '@angular/core';


import * as L from 'leaflet';
import 'leaflet-routing-machine';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/essivi/Services/client.service';
import { ClientModel } from 'src/app/essivi/models/client.model';


const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';



@Component({
  selector: 'app-client-carte',
  templateUrl: './client-carte.component.html',
  styleUrls: ['./client-carte.component.css']
})
export class ClientCarteComponent implements OnInit{

  private map : any


  lat : number = 0
  lon : number = 0

  constructor(private router : Router, private clientservice : ClientService) {
    var coords = this.router.getCurrentNavigation()?.extras.state
    console.log(this.router.getCurrentNavigation())
    if(coords!=null){
      this.lat = parseFloat(coords?.['lat'])
      this.lon = parseFloat(coords?.['lon'])
    }else{

      // POSITION DU NAVIGATEUR.. Mais ici je vais prendre la position de ma maison

      this.lat=6.1378
      this.lon=1.2125

    }
    
  }



  ngOnInit(): void {
    this.initMap()
  }





  initMap(){

    let clients : ClientModel[]

    this.clientservice.getAllClients().subscribe({
      next : (data)=>{
        clients = data.data

        console.log(data.data)
        console.log(clients)





        this.map = L.map('map', {
          center: [this.lat, this.lon],
          attributionControl: false,
          zoom: 12
        });
    
    
        var iconDefault = L.icon({
          iconRetinaUrl,
          iconUrl,
          shadowUrl,
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          tooltipAnchor: [16, -28],
          shadowSize: [41, 41]
        });
       L.Marker.prototype.options.icon = iconDefault;
    
        //titulo
        const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '&copy; <a href="https://1938.com.es">Web Inteligencia Artificial</a>'
        });


        for (let i = 0; i < clients.length; i++) {
          console.log("--")
          const lon = clients[i].longitude;
          console.log(lon)
          const lat = clients[i].latitude;
          const marker = L.marker([lat, lon]).bindPopup(clients[i].nom+" "+clients[i].prenom);
          console.log(marker)
          marker.addTo(this.map);
        } 

  
    
    

        L.Routing.control({
          router: L.Routing.osrmv1({
            serviceUrl: `https://router.project-osrm.org/route/v1/`
          }),
          showAlternatives: true,
          fitSelectedRoutes: false,
          show: true,
          routeWhileDragging: true,
         
          useZoomParameter : true
        }).addTo(this.map);
        tiles.addTo(this.map);
      }











        
      }
    

    
    


    )

  }
}
