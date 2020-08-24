import { Component, OnInit, Input } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() title: string;

  readonly source = 'https://github.com/MOONYAN/todo-app';

  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
  ) { }

  ngOnInit(): void {
    this.iconRegistry.addSvgIconInNamespace(
      'custom-svg',
      'github',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/github.icon.svg')
    );
  }

}
