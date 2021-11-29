var fgImg = null;
var bgImg = null;
var fgCanvas;
var bgCanvas;

function uploadfgImg() {
    var fgInput = document.getElementById('fgInput');
    fgCanvas = document.getElementById('can1');
    fgImg = new SimpleImage(fgInput);
    fgImg.drawTo(fgCanvas);
}

function uploadbgImg() {
    var bgInput = document.getElementById('bgInput');
    bgCanvas = document.getElementById('can2');
    bgImg = new SimpleImage(bgInput);
    bgImg.drawTo(bgCanvas);
}

function clrCanvas() {
    doClear(fgCanvas);
    doClear(bgCanvas);
}

function doClear(canvas) {
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function makeComposite() {
    if ((fgImg == null) || (!fgImg.complete())) {
        alert('Foreground Image is not Loaded....');
        return;
    }
    if ((bgImg == null) || (!bgImg.complete())) {
        alert('Background Image is not Loaded....');
        return;
    }
    if (checkSize()) {
        clrCanvas();
        var finalImg = doGreenScreen();
        finalImg.drawTo(fgCanvas);
    } else {
        alert("Uplode Same Size Image...")
        clrCanvas();
    }

}

function checkSize() {
    if (fgImg.getWidth() == bgImg.getWidth() && fgImg.getHeight() == bgImg.getHeight()) {
        return true;
    }
    return false;
}

function doGreenScreen() {
    var output = new SimpleImage(fgImg.getWidth(), fgImg.getHeight());
    var greenThreshold = 245;
    for (var pixel of fgImg.values()) {
        var x = pixel.getX();
        var y = pixel.getY();
        if (pixel.getGreen() > greenThreshold) {
            //pixel is green, use background
            var bgPixel = bgImg.getPixel(x, y);
            output.setPixel(x, y, bgPixel);
        } else {
            //pixel is not green, use foreground
            output.setPixel(x, y, pixel);
        }
    }
    return output;
}