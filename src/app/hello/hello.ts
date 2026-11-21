import { Component, computed, signal } from '@angular/core';
import { NgClass } from '../../../node_modules/@angular/common/types/_common_module-chunk';

@Component({
  imports: [],
  selector: 'app-hello',
  styleUrl: './hello.scss',
  templateUrl: './hello.html',
})
export class Hello {
  protected readonly title = 'Hello, modern-angular';
  protected isDisabled = false;

  protected onClick() {
    console.log('Button clicked!');
    this.isDisabled = !this.isDisabled;
  }

  protected count = signal(0);
  protected doubleCount = computed(() => this.count() * 2);

  protected increase() {
    this.count.update(() => this.count() + 1);
  }

  protected decrease() {
    this.count.update(() => this.count() - 1);
  }

  protected reset() {
    this.count.set(0);
  }
}
