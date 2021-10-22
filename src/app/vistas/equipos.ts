import { Component} from "@angular/core";
import { EquipoService } from "../SERVICES/equipo.service";

export interface EquiposFUT {
  name: string;
  country: string;
  foto: string ;
}

const ELEMENT_DATA: EquiposFUT[] = [ {name: "BARCA", country: 'Espana', foto: "https://gamingfrog.com/wp-content/uploads/2020/11/sbc_set_image_1000066-c0e6dcdf-15a9.png"},
                                     {name: "BAYERN", country: 'Espana', foto: "https://gamingfrog.com/wp-content/uploads/2020/11/sbc_set_image_1000066-c0e6dcdf-15a9.png"},
                                     {name: "MADRID", country: 'Espana', foto: "https://gamingfrog.com/wp-content/uploads/2020/11/sbc_set_image_1000066-c0e6dcdf-15a9.png"},
                                     {name: "ATLETICO", country: 'Espana', foto: "https://gamingfrog.com/wp-content/uploads/2020/11/sbc_set_image_1000066-c0e6dcdf-15a9.png"}

];

@Component({
  selector: 'equipos',
  templateUrl: "./equipos.html",
  styleUrls: ["./equipos.css"]
})



export class Equipos{

    constructor(private EquipoService:EquipoService){

    }

  url = "https://material.angular.io/assets/img/examples/shiba2.jpg"
  foto = ""
  foton = ""
  name = ""
  country =""



  onSelectedFile(event) {
    if(event.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (event:any)=>{
        this.foto = event.target.result;
      }
    }
    console.log(event);
  }

  guardar(name,country,foto){
      this.name = name;
      this.country = country;
      this.foto = foto
      ELEMENT_DATA.push({name: name, country: country, foto: foto });

  }

  deleteEquipo(e_name){
    ELEMENT_DATA.forEach(function(equipo,index,object) {
      if(equipo.name === e_name){
        object.splice(index, 1);
      }
  });
  }

  listarEquipo(){
    this.EquipoService.getEquipos().subscribe(
      res=>{
        console.log(res)
      },
      err => console.log(err)
    );
  }


  data = ELEMENT_DATA;
}
