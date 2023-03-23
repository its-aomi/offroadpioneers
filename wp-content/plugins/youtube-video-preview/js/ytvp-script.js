(function() {
    const players = document.getElementsByClassName("youtube-player");
    for (let i = 0, l = players.length; i < l; i++) {
        players[i].onclick = function() {
            const iframe = document.createElement("iframe");
            iframe.src = `//www.youtube.com/embed/${this.dataset.id}?autoplay=1&autohide=2&border=0&wmode=opaque&enablejsapi=1&rel=${this.dataset.related}&controls=${this.dataset.control}&showinfo=${this.dataset.info}`;
            iframe.frameBorder = 0;
            iframe.id = "youtube-iframe";
            iframe.style.cssText = "width: 100%; height: 100%; position: absolute; top: 0; left: 0;";
            if (this.dataset.fullscreen == 1) {
                iframe.allowFullscreen = true;
            }
            while (this.firstChild) {
                this.removeChild(this.firstChild);
            }
            this.appendChild(iframe);
        };
    }
})();
