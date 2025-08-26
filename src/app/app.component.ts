import { Component, ViewChildren, QueryList, ElementRef, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Position, positions } from './positions.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'FZ-TC';
  positions: Position[] = positions;
  selectedPosition: Position | null = null;
  isDarkMode = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Load theme preference from localStorage
      const savedTheme = localStorage.getItem('theme');
      this.isDarkMode = savedTheme === 'dark';
      this.applyTheme();
    }
  }

  selectPosition(position: Position): void {
    this.selectedPosition = position;
  }

  upgradeUp(stat: any): void {
    if (stat.upgrade < 2) {
      stat.upgrade++;
    }
  }

  upgradeDown(stat: any): void {
    if (stat.upgrade > 0) {
      stat.upgrade--;
    }
  }

  calculateOVR(position: Position): number {
    let totalWeight = 0;
    let weightedSum = 0;
    
    position.stats.forEach(stat => {
      if (stat.value !== null && stat.value !== undefined) {
        const finalValue = stat.value + stat.upgrade;
        weightedSum += finalValue * stat.weight;
        totalWeight += stat.weight;
      }
    });
    
    position.ovr = totalWeight > 0 ? +(weightedSum / totalWeight).toFixed(2) : 0;
    return position.ovr;
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    this.applyTheme();
    
    if (isPlatformBrowser(this.platformId)) {
      // Save theme preference to localStorage
      localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
    }
  }

  private applyTheme(): void {
    if (isPlatformBrowser(this.platformId)) {
      const body = document.body;
      if (this.isDarkMode) {
        body.setAttribute('data-theme', 'dark');
      } else {
        body.removeAttribute('data-theme');
      }
    }
  }

  @ViewChildren('statInput') statInputs!: QueryList<ElementRef<HTMLInputElement>>;
  
  handleKeyDown(event: KeyboardEvent, index: number): void {
    const inputs = this.statInputs.toArray();

    if (event.key === 'Enter' || event.key === 'ArrowDown') {
      event.preventDefault();
      if (index < inputs.length - 1) {
        inputs[index + 1].nativeElement.focus();
      }
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      if (index > 0) {
        inputs[index - 1].nativeElement.focus();
      }
    }
  }
}