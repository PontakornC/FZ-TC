import { Component, ViewChildren, QueryList, ElementRef } from '@angular/core';
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

  @ViewChildren('statInput') statInputs!: QueryList<ElementRef<HTMLInputElement>>;
  handleKeyDown(event: KeyboardEvent, index: number) {
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