import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-professeur',
  templateUrl: './user-professeur.component.html',
  styleUrls: ['./user-professeur.component.css']
})
export class UserProfesseurComponent implements OnInit {
 
  public Evaluation: any[] = [
    {
      id: '',
      semestre: '',
      date: '',
      type: '',
      etat: '',
      matiere: '',
      professeur: '',
      niveau: ''
    }
  ]



  /**tous les  varibles  */
  public storedUsers: any;
  public usersdata: any;

  public storeMatiere: any;
  public usersMat: any;

  public storeclasse: any;
  public userClasse: any;

  public storeEvaluation: any;
  public userEvaluation: any;
  // public addEvaluation: any;

  public storeNotes: any;
  public usersNotes: any

  public userid: any = 0;
  public userfoundid: any;
  public useretat: any;


addProf: any={};
  
  ngOnInit(): void {
    console.log(this.storedUsers);
    this.storedUsers = localStorage.getItem('Schooluser');
    console.log(this.storedUsers);
     if (this.storedUsers) {
       this.usersdata = JSON.parse(this.storedUsers);
     } else {
       // Si aucune donnée n'est présente dans le local storage, initialisez-le avec vos données par défaut
   }

   this.storeMatiere = localStorage.getItem('Matiere');
     if (this.storedUsers) {

       this.usersMat = JSON.parse(this.usersMat);
     } else {
       // Si aucune donnée n'est présente dans le local storage, initialisez-le avec vos données par défaut
   }
   

   this.storeclasse = localStorage.getItem('Classe');
     if (this.storeclasse) {
       this.userClasse = JSON.parse(this.userClasse);
     } else {
       // Si aucune donnée n'est présente dans le local storage, initialisez-le avec vos données par défaut
   }

   this.storeEvaluation = localStorage.getItem('Evaluation');
     if (this.storeEvaluation) {
       this.Evaluation = JSON.parse(this.storeEvaluation);
     } else {
       // Si aucune donnée n'est présente dans le local storage, initialisez-le avec vos données par défaut
       localStorage.setItem('Evaluation', JSON.stringify(this.userEvaluation));  
       }

       this.userEvaluation.push(this.addProf);;
       console.log(this.Evaluation);
       this.addProf ={}; 
       // methode sauvegarde dans localstorage
       this.addEvaluation();
}
addEvaluation(){
  localStorage.setItem('Evaluation', JSON.stringify(this.userEvaluation));
  // this.storeEvaluation();
 

}

}






  //  test


   
    

