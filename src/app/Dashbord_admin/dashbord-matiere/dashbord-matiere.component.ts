import { Component , OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashbord-matiere',
  templateUrl: './dashbord-matiere.component.html',
  styleUrls: ['./dashbord-matiere.component.css']
})
export class DashbordMatiereComponent implements OnInit {

  public storeMatiere: any;

  matiere: string="";
  id:number = 0;
  
  public Matiere: any[] = [
    {
      id: "",
      matiere :"",
    }
  ]
 
  ngOnInit(): void {
  this.storeMatiere = localStorage.getItem('Matiere');
  if (this.storeMatiere) {
    // this.usersMat = JSON.parse(this.usersMat);
    this.usersMat = JSON.parse(localStorage.getItem("Matiere") || "[]");
    console.log(this.usersMat);
    console.log(this.storeMatiere);

  } else {
    // Si aucune donnée n'est présente dans le local storage, initialisez-le avec vos données par défaut
    localStorage.setItem('Matiere', JSON.stringify(this.Matiere));
}
 
 
  }


  viderChapmsMatiere(){
    this.matiere = ""
   
  }
  public usersMat: any;
  ajouterMatiere(){
    let  matieres  = {
     id: this.Matiere.length ++,
     matiere:this.matiere,
  
   }  
    
  // On ajoute l'objet dans la liste des classes
    
       this.usersMat.push(matieres);
       
       console.log(this.matiere);
       console.log(this.id);
       console.log(this.usersMat);

        // On vide les champs 
      this.viderChapmsMatiere();
 
       // localStorage.setItem('classe', JSON.stringify(this.classe));
       localStorage.setItem('Matiere', JSON.stringify(this.usersMat));
 
        // Ferme le popup si on click sur Ok 
        Swal.fire({
         title: "Felicitation!",
         text: "Classe Ajouter avec Succés ",
         icon: "success",
       });
     }

}
