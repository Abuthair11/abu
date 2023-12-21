import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  projectshow:any =[
    {
      "id": 1,
      "projectName": "Management using Spring",
      "simpleName":"EmploymentManagement",
         "url":"https://github.com/Abuthair11/Employmanagement_SpringBoot",
         "cover":"./assets/employement.png",
         "logo": "https://img.icons8.com/officel/48/spring-logo.png",
       "Description":" Revolutionize Employment Management experiences with our Spring Boot . This project, developed with efficiency in mind, seamlessly handles Management reservations, showcasing the power of Spring Boot in crafting robust backend solutions for modern Employment Management applications.",
      "techStack":[
        {
          "stack":"Java"
        } , {
          "stack":"SpringBoot"
        }
          ,{
             "stack":"MYSQL"
            } ,{
              "stack": "POSTMAN"
            }
      ]
    },
{
      "id": 2,
      "projectName": "Movie Application using Angular",
      "simpleName":"bookMyShow",
       "url":"https://github.com/Abuthair11/Angular_MovieApp",
       "cover":"./assets/moviereview.jpeg",
       "logo":"https://img.icons8.com/fluency/48/angularjs.png",
      "Description":" Explore Angular's power with our Movie Review Page, a hands-on project for learning. Dive into building dynamic components, managing state, and crafting a responsive UI, providing a practical introduction to Angular development. Start your journey into web development by creating a movie-centric page that's both educational and fun!",
      "techStack":[
        {"stack":"TypeScript"} ,{"stack": "Angular"} ,{"stack" : "JSON"} ]
         },
{
      "id": 3,
      "projectName": "Calculator Android App",
      "simpleName":"Calculator",
        "url":"https://github.com/Abuthair11/AndroidStudio_CalculatorApp",
        "cover":"./assets/kotlin.png",
        "logo":"https://img.icons8.com/color/48/android-studio--v3.png",
       "Description":" Embark on your Android development journey with our Basic Calculator App created in Android Studio. This simple yet essential application showcases fundamental skills in UI design, user input handling, and arithmetic operations. Dive into the world of mobile app development by building and customizing this beginner-friendly calculator ",
      "techStack":[{"stack":"Kotlin"}]
         },
{
      "id": 4,
      "projectName": "LinkTree using HTML CSS JS",
      "simpleName":"LinkTree",
      "url":"https://abuthair11.github.io/LinkTreeClone/",
      "cover":"./assets/linktree.jpeg",
      "logo":"https://img.icons8.com/pulsar-color/48/linktree.png",
       "Description":"Dive into web development with our Linktree Clone project, built using HTML, CSS, and JavaScript. This hands-on exercise allows you to recreate the popular Linktree interface, showcasing your proficiency in responsive design, navigation structures, and dynamic content. Enhance your front-end skills by crafting a user-friendly platform that aggregates links effectively ",
      "techStack":[{"stack":"HTML"} , {"stack":"CSS"} ,{"stack":"JS "}]
         },
{
      "id": 5,
      "projectName": "Piano JS",
      "simpleName":"Piano",
        "url":"https://github.com/Abuthair97/PianoJs",
        "cover":"./assets/piano.jpeg",
        "logo":"https://img.icons8.com/fluency/48/javascript.png",
       "Description":"Immerse yourself in the world of music with our Piano Simulation project, crafted using HTML, CSS, and JavaScript. This interactive web application replicates the elegance of a piano, offering a seamless blend of visual appeal and functional playability. Delve into the harmonious convergence of code and design as you create keys that respond dynamically to user input. ",
       "techStack":[{"stack":"HTML"} , {"stack":"CSS"} ,{"stack":"JS "}]
         },
{
      "id": 6,
      "projectName": "Player Management Application",
      "simpleName":"Player Management",
        "url":"https://github.com/Abuthair/Player_scouting_application_BE",
        "cover":"./assets/playermanagement.jpeg",
        "logo":"https://img.icons8.com/officel/48/spring-logo.png",
       "Description":"Effortlessly register players with our full-stack Team Management Application, merging the power of Spring Boot and Angular. Seamlessly capture player details, utilizing Spring Boot for robust backend functionality and Angular for a sleek, responsive frontend. Elevate your team management experience with this streamlined, end-to-end solution.",
      "techStack":[{"stack":"Java"} ,{"stack": "Spring Boot"}, {"stack":"MYSQL"} ,{"stack": "POSTMAN"} , {"stack":"Angular" } ,{"stack":"JSON  "}]
         },
{
    "id": 7,
    "projectName": "Disney Clone Using HTML CSS JS ",
    "simpleName":"Disney",
      "url":"https://abuthair11.github.io/Disney-Hotstar_Clone/",
      "cover":"./assets/disney.png",
      "logo":"https://img.icons8.com/fluency/48/disney-plus.png",
     "Description":"Experience the magic of Disney with our Clone project, crafted using HTML, CSS, and JavaScript. Immerse yourself in a visually stunning and interactive replica, showcasing your front-end skills. Dive into web development by creating this captivating Disney-inspired experience in just a few lines of code!",
   "techStack":[{"stack":"HTML"} , {"stack":"CSS"} ,{"stack":"JS "}]
   },
   {
    "id": 8,
          "projectName": "Movie Spring Boot Application ",
          "simpleName":"MovieApp",
            "url":"https://github.com/Abuthair11/MovieBookingApp",
            "cover":"./assets/bookmyshow.jpeg",
            "logo":"https://img.icons8.com/officel/48/spring-logo.png",
           "Description":"Revolutionize cinema experiences with our Spring Boot Movie Booking System. This project, developed with efficiency in mind, seamlessly handles movie reservations, showcasing the power of Spring Boot in crafting robust backend solutions for modern booking applications.",
           "techStack":[
            {
              "stack":"Java"
            } , {
              "stack":"SpringBoot"
            }
              ,{
                 "stack":"MYSQL"
                } ,{
                  "stack": "POSTMAN"
                }
          ]   
         }
  ];
  

}
