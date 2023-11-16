import { Component , OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashbord-matiere',
  templateUrl: './dashbord-matiere.component.html',
  styleUrls: ['./dashbord-matiere.component.css']
})
export class DashbordMatiereComponent implements OnInit {

   public userMatiere: any;
   public storeMatiere :any;
   // la variable qui permet de boucler notre tableau 
  
 // le dernier classe qui est ajouter 
   // idDernierClasse: number = 0;
 
 
   idMatiere:number= 0;
   matiere: string="";
 
  
   public listeMatiere: any[] = [
     {
       id: "",
       matiere: "",
       effectif:''
     }
   ]
 
 
 
 ngOnInit(): void {
 
   
   this.storeclasse = localStorage.getItem('listeMatiere');
   if (this.storeMatiere) {
     this.userMatiere = JSON.parse(localStorage.getItem("classe") || "[]");
     console.log(this.userMatiere)
   } else {
     // Si aucune donnée n'est présente dans le local storage, initialisez-le avec vos données par défaut
     localStorage.setItem('listeMatiere', JSON.stringify(this.listeMatiere));
 }
 
 }
 
 
 public storeclasse: any;
   ajouterClasse(){
      let listeMatiere = {
       id: this.listeMatiere.length ++,
       matiere:this.listeMatiere,
      
     }
   
  
       // On ajoute l'objet dans la liste des classes
    
       this.userMatiere.push(listeMatiere);
 
      //  console.log(this.niveauClasse);
      //  console.log(this.userClasse);
      //  console.log(this.classe);
 
 
 
 
       // localStorage.setItem('classe', JSON.stringify(this.classe));
       localStorage.setItem('listeMatiere', JSON.stringify(this.userMatiere));
 
        // Ferme le popup si on click sur Ok 
        Swal.fire({
         title: "Felicitation!",
         text: "Classe Ajouter avec Succés ",
         icon: "success",
       });
     }
}