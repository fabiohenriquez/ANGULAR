import { Component} from "@angular/core";
import { EquipoService } from "../SERVICES/equipo.service";

export interface EquiposFUT {
  name: string;
  country: string;
  foto: string ;
}

const ELEMENT_DATA: EquiposFUT[] = [/* {name: "BARCA", country: 'Espana', foto: "https://gamingfrog.com/wp-content/uploads/2020/11/sbc_set_image_1000066-c0e6dcdf-15a9.png"},
                                      {name: "BAYERN", country: 'Espana', foto: "https://gamingfrog.com/wp-content/uploads/2020/11/sbc_set_image_1000066-c0e6dcdf-15a9.png"},
                                      {name: "MADRID", country: 'Espana', foto: "https://gamingfrog.com/wp-content/uploads/2020/11/sbc_set_image_1000066-c0e6dcdf-15a9.png"},
                                      {name: "ATLETICO", country: 'Espana', foto: "https://gamingfrog.com/wp-content/uploads/2020/11/sbc_set_image_1000066-c0e6dcdf-15a9.png"}*/
  {//Tene en cuenta el tabulado y la jerarquía del código. Esto te va ayudar a encontrar más rápido las cosas :D
    name: "BARCA", 
    country: 'Espana', 
    foto: "https://gamingfrog.com/wp-content/uploads/2020/11/sbc_set_image_1000066-c0e6dcdf-15a9.png"
  },
  {
    name: "BAYERN", 
    country: 'Espana', 
    foto: "https://gamingfrog.com/wp-content/uploads/2020/11/sbc_set_image_1000066-c0e6dcdf-15a9.png"
  },
  {
    name: "MADRID", 
    country: 'Espana', 
    foto: "https://gamingfrog.com/wp-content/uploads/2020/11/sbc_set_image_1000066-c0e6dcdf-15a9.png"
  },
  {
    name: "ATLETICO", 
    country: 'Espana', 
    foto: "https://gamingfrog.com/wp-content/uploads/2020/11/sbc_set_image_1000066-c0e6dcdf-15a9.png"
  }
];

@Component({
  selector: 'equipos',
  templateUrl: "./equipos.html",
  styleUrls: ["./equipos.css"]
})

export class Equipos{

    //Typescript es Javascript pero con tipado estático. Pero al final siempr es Javascript,
    //así que si alguna vez ocupas un tipo cualquier usas: visibilidad varibale:any = valor ---> private hola:any = "CualquierCosa"
    public url:string = "https://material.angular.io/assets/img/examples/shiba2.jpg"
    public foto:string = ""
    public foton:string = ""
    public name:string = ""
    public country:string = ""

    //Trata de hacer las declaraciones antes del constructor :D
    constructor(private EquipoService:EquipoService){

    }

  /* url = "https://material.angular.io/assets/img/examples/shiba2.jpg"
  foto = ""
  foton = ""
  name = ""
  country ="" */



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
        console.log("res")
        console.log(res)
      },
      err => {
        console.log("err")
        console.log(err)
      }
    );
  }


  data = ELEMENT_DATA;
}
