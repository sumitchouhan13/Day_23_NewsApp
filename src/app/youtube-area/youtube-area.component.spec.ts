import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeAreaComponent } from './youtube-area.component';

describe('YoutubeAreaComponent', () => {
  let component: YoutubeAreaComponent;
  let fixture: ComponentFixture<YoutubeAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoutubeAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
