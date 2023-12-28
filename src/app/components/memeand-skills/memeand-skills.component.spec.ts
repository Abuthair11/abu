import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemeandSkillsComponent } from './memeand-skills.component';

describe('MemeandSkillsComponent', () => {
  let component: MemeandSkillsComponent;
  let fixture: ComponentFixture<MemeandSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemeandSkillsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MemeandSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
