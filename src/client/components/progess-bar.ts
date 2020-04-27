export class ProgressBar {
    private totalTime: number;
    private currentPosition: number = 0;
    private tick: number;
    private timer: any;

    constructor(totalTime: number) {
        this.totalTime = totalTime;
        this.tick = this.totalTime / 100;
    }

    private update(): void {
        if (this.currentPosition < 100) {
            const progressBarEl = document.getElementById('progress-bar');
            if (progressBarEl) {
                this.currentPosition++;
                progressBarEl.style.width = this.currentPosition + '%'; 
            }
        }
    }

    start(): void {
        this.timer = setInterval(() => {
            this.update(); 
        }, (this.tick * 1000));
    }

    stop(): void {
        clearInterval(this.timer);
    }
}