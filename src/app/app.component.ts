import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'portfolio';
  isMenuOpen = false;
  projects: any = [];
  formData = { from_name: '', from_email: '', message: '', to_mail: '', title: '' };

  isLoading = false;
  statusMessage = '';

  // Replace these with your EmailJS keys
  serviceID = 'service_tx0p4ia';
  templateID = 'template_iixn4ol';
  publicKey = '866dzFd3XpsCrqvPj';


  ngOnInit() {
    // Initialize any data or state here
    this.projects = [
      { name: 'AgroSense', 
        description: 'A microservices architecture project with Spring Boot and Angular.', 
        image: 'assets/green-farm-tractor-windmill.png', 
        link: 'https://resplendent-frangipane-1e872e.netlify.app/',
       },
      { name: 'SpringAIBoot', 
        description: 'A microservices architecture project with Spring Boot and Angular.', 
        image: 'assets/ChatGPT.png', 
        link: 'https://resplendent-frangipane-1e872e.netlify.app/'
       },
      // Add more projects as needed
    ];
  }

  sendMail() {
    window.location.href = "mailto:your.emailexample.com";
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  openProject(arg0: string) {
    if (arg0 === 'AgroSense') {
      window.open('https://resplendent-frangipane-1e872e.netlify.app/');
    }
  }

  sendEmail() {
    this.isLoading = true;

     this.formData = {
          from_name: this.formData.from_name,
          from_email: this.formData.from_email,
          message: this.formData.message,
          to_mail: 'devarshi.patidar18@gmail.com',
          title: 'New Registration!!!'
        };

    emailjs
      .send(this.serviceID, this.templateID, this.formData, this.publicKey)
      .then(
        (response: EmailJSResponseStatus) => {
          this.statusMessage = '✅ Message sent successfully!';
          this.isLoading = false;
          this.formData = { from_name: '', from_email: '', message: '' , to_mail: '', title: '' }; // reset form
        },
        (error) => {
          console.error('FAILED...', error);
          this.statusMessage = '❌ Failed to send message. Try again.';
          this.isLoading = false;
        }
      );
  }
}
