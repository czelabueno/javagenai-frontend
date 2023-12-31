import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ThemeService } from '../services/theme.service';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  cost: any;
  conversion: any;
  costPerConversion: any;

  @Input() sidebarVisible = false;
  @Input() navTab = 'menu';
  @Input() currentActiveMenu;
  @Input() currentActiveSubMenu;
  @Output() changeNavTabEvent = new EventEmitter();
  @Output() activeInactiveMenuEvent = new EventEmitter();
  public themeClass = 'theme-cyan';

  constructor(private themeService: ThemeService, private data: CommonService) {
    this.themeService.themeClassChange.subscribe(themeClass => {
      this.themeClass = themeClass;
    });
  }

  ngOnInit() {
    this.data.getCommonData().subscribe(data => {
      this.cost = data.cost;
      this.conversion = data.conversion;
      this.costPerConversion = data.costPerConversion;
    });
  }

  changeNavTab(tab: string) {
    this.navTab = tab;
  }

  activeInactiveMenu(menuItem: string) {
    this.activeInactiveMenuEvent.emit({ item: menuItem });
  }

  changeTheme(theme: string) {
    this.themeService.themeChange(theme);
  }
}
