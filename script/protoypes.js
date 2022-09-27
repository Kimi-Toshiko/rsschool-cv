HTMLElement.prototype.addAnimation = function (name, duration) {
    this.style.animationName = name;
    this.style.animationDuration = duration;
    this.style.animationTimingFunction = 'linear';
    this.style.animationDelay = '0s';
    this.style.animationDirection = 'alternate';
    this.style.animationIterationCount = '1';
    this.style.animationFillMode = 'forwards';
}