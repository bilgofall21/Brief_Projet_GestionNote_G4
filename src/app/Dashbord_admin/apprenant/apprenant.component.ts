import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apprenant',
  templateUrl: './apprenant.component.html',
  styleUrls: ['./apprenant.component.css']
})
export class ApprenantComponent implements OnInit {

public Schooluser: any[] = [
  {
    id: '1',
    nom: 'bah',
    prenom:'habib',
    email: 'habib@gmail.com',
    password: 'habib',
    niveau: '',
    annee: '',
    role:'1',
    etat: '1',
    Matiere: [
      {
        id: '',
        matiere: '',
      }
    ]
  },
]


// variables declare pour mnupuler les locals storages

 public storedUsers: any;
  public usersdata: any;

  public storeMatiere: any;
  public usersMat: any;

  public storeclasse: any;
  public userClasse: any;

  public storeEvaluation: any;
  public userEvaluation: any;

  public storeNotes: any;
  public usersNotes: any

  public userid: any = 0;
  public userfoundid: any;
  public useretat: any;


// modele pour formulaire

formuStudent : any = {
id : 0,
nom: '',
prenom:'' ,
password : '',
email : '',
niveau : '',
annee : '',
role:'3',
etat: '1',
};

emelementSelectioner : any ;



// constructeur
constructor() {};
// implemantion de ngOnitt pour l'initialisation des donnees
ngOnInit(): void {
   //* tous les methodes pour manipuler les diiferents local storage


   this.storedUsers = localStorage.getItem('Schooluser');
   console.log(this.storedUsers);
   if (this.storedUsers) {
     this.usersdata = JSON.parse(this.storedUsers);
   } else {
     // Si aucune donnée n'est présente dans le local storage, initialisez-le avec vos données par défaut
     localStorage.setItem('Schooluser', JSON.stringify(this.Schooluser));
 }

 this.storeMatiere = localStorage.getItem('Matiere');

   if (this.storedUsers) {
     this.usersMat = JSON.parse(this.usersMat);
   } else {
     // Si aucune donnée n'est présente dans le local storage, initialisez-le avec vos données par défaut
     // localStorage.setItem('Matiere', JSON.stringify(this.Matiere));
 }

 this.storeclasse = localStorage.getItem('Classe');
   if (this.storeclasse) {
     this.userClasse = JSON.parse(this.userClasse);
   } else {
     // Si aucune donnée n'est présente dans le local storage, initialisez-le avec vos données par défaut
     // localStorage.setItem('Classe', JSON.stringify(this.Classe));
 }

 this.storeEvaluation = localStorage.getItem('Evaluation');
   if (this.storeEvaluation) {
     this.userEvaluation = JSON.parse(this.userEvaluation);
   } else {
     // Si aucune donnée n'est présente dans le local storage, initialisez-le avec vos données par défaut
     // localStorage.setItem('Evaluation', JSON.stringify(this.Evaluation));
 }

 this.storeNotes = localStorage.getItem('notes');
   if (this.storeEvaluation) {
     this.usersNotes = JSON.parse(this.usersNotes);
   } else {
     // Si aucune donnée n'est présente dans le local storage, initialisez-le avec vos données par défaut
     // localStorage.setItem('notes', JSON.stringify(this.notes));
 }


}


SoumettreFormlaire (){
  // assiger sur le Local des id pour chak apprenant
  this.formuStudent.id = this.usersdata.length + 1;

  // ajouter le formulaire dans le tableau

      // avec le destructuring {...} pour recuperer pour crer une copie de l'objet
  this.usersdata.push({...this.formuStudent});
  console.log(this.Schooluser);
   // vider le formulaire apre ajout
  this.formuStudent = {};
  // methode sauvegarde dans localstorage
  this.saveDataLocal();
  // vider le formulaire apre ajou
}
// fonction pour stocker donne ajouter sur local storage au submit
saveDataLocal (){
  localStorage.setItem('Schooluser', JSON.stringify(this.usersdata));
}
selectElement (element : any){
this.emelementSelectioner = element;
}



}





