import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/app/serviceuser/userservice.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-dashbord-professeur',
  templateUrl: './dashbord-professeur.component.html',
  styleUrls: ['./dashbord-professeur.component.css']
})
export class DashbordProfesseurComponent {
  public storedUsers: any;
  public usersdata: any;


  constructor(private router: Router, private userService: UserserviceService) {
  }

  formDataregister = {
    nom: '',
    prenom: '',
    email: '',
    password: '',
    matiere: '',
  }

  userid: any;
  userfoundid: any;
  existingData: any;

  Registerfunction(event: Event) {
    event.preventDefault();
    if (this.formDataregister.nom !== '' && this.formDataregister.prenom !== '' && this.formDataregister.email !== '' && this.formDataregister.password !== '' && this.formDataregister.matiere!="") {
      let datastring = localStorage.getItem('Schooluser');
      this.existingData = datastring ? JSON.parse(datastring) : [];
      this.userid = this.existingData.length;
      let nomprof = this.formDataregister.nom
      let prenomprof = this.formDataregister.prenom;
      let emailprof = this.formDataregister.email;
      let passwordprof = this.formDataregister.password;
      let matiereProf = this.formDataregister.matiere


      this.existingData.push({
        id: this.existingData.length + 1,
        nom: nomprof,
        prenom: prenomprof,
        email: emailprof,
        password: passwordprof,
        niveau: '',
        annee: '',
        role: '2',
        etat: '1',
        Matiere: [
          {
            id:this.existingData.length+1,
            matiere: matiereProf
          }
        ]
      });

      localStorage.setItem('Schooluser', JSON.stringify(this.existingData));
      console.log(this.existingData);
      alert("hello")


    }
  }

   ngOnInit(): void {
    this.storedUsers = localStorage.getItem('Schooluser');
    if (this.storedUsers) {
      this.usersdata = JSON.parse(this.storedUsers);
    } else {
      // Si aucune donnée n'est présente dans le local storage, initialisez-le avec vos données par défaut
      localStorage.setItem('Schooluser', JSON.stringify('Schooluser'));
    }
  }



  archiver(id: any) {
    alert(id);
  }
}
