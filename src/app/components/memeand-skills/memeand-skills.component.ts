import { Component } from '@angular/core';

@Component({
  selector: 'app-memeand-skills',
  standalone: true,
  imports: [],
  templateUrl: './memeand-skills.component.html',
  styleUrl: './memeand-skills.component.css'
})
export class MemeandSkillsComponent {
  skillslist:any=[
    {
     "title":"Java",
     "Subtitle":"7/10"
    },
    {
      "title":"HTML",
     "Subtitle":"8/10"
    },
    {
      "title":"CSS",
     "Subtitle":"3/10"
    },
    {
      "title":"JS",
     "Subtitle":"5/10"
    },
    {
      "title":"Spring",
     "Subtitle":"6/10"
    },
    {
      "title":"Angular",
     "Subtitle":"5/10"
    },
    {
      "title":"MySQL",
     "Subtitle":"7/10"
    },
    {
      "title":"PostMan",
     "Subtitle":"8/10"
    },
    {
      "title":"  Googling😌",
     "Subtitle":"100/10"
    },

    ]
}
