import { Component } from '@angular/core';
import { Position, positions } from './positions.model';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FZ-TC';
  positions: Position[] = positions;
  selectedPosition: Position | null = null;

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
}