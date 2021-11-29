var realImg = null;
var redImg = null;
var yellowImg = null;
var grayImg = null;
var rainbowImg = null;
var canvas;

function uploadImg() {
    fInput = document.getElementById('fInput');
    canvas = document.getElementById('can');
    realImg = new SimpleImage(fInput);
    redImg = new SimpleImage(fInput);
    yellowImg = new SimpleImage(fInput);
    grayImg = new SimpleImage(fInput);
    rainbowImg = new SimpleImage(fInput);
    realImg.drawTo(canvas);
}

function doRed() {
    if (!checkImg(redImg)) {
        alert('First Load the Image...');
        return;
    }
    var outputImg = filterRed();
    outputImg.drawTo(canvas);
    fInput = document.getElementById('fInput');
    redImg = new SimpleImage(fInput);
}

function filterRed() {
    for (let pixel of redImg.values()) {
        var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
        let value = 2 * avg
        if (avg < 128) {
            pixel.setRed(value);
            pixel.setBlue(0);
            pixel.setGreen(0);
        } else {
            pixel.setRed(255);
            pixel.setBlue(value - 255);
            pixel.setGreen(value - 255);
        }
    }
    return redImg;
}

function doYellow() {
    if (!checkImg(yellowImg)) {
        alert('First Load the Image...');
        return;
    }
    let outputImg = filterYellow();
    outputImg.drawTo(canvas);
    fInput = document.getElementById('fInput');
    yellowImg = new SimpleImage(fInput);
}

function filterYellow() {
    for (let pixel of yellowImg.values()) {
        var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
        var value = 2 * avg;
        if (avg < 128) {
            pixel.setRed(value);
            pixel.setBlue(0);
            pixel.setGreen(value);
        } else {
            pixel.setRed(255);
            pixel.setBlue(value - 255);
            pixel.setGreen(255);
        }
    }
    return yellowImg;
}

function doRainbow() {
    if (!checkImg(rainbowImg)) {
        alert('First Load the Image...');
        return;
    }
    let outputImg = filterRainbow();
    outputImg.drawTo(canvas);
    fInput = document.getElementById('fInput');
    rainbowImg = new SimpleImage(fInput);
}

function filterRainbow() {
    var height = rainbowImg.getHeight();
    h1 = (height / 7);
    h2 = 2 * (height / 7);
    h3 = 3 * (height / 7);
    h4 = 4 * (height / 7);
    h5 = 5 * (height / 7);
    h6 = 6 * (height / 7);
    for (let pixel of rainbowImg.values()) {
        var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
        if (pixel.getY() < h1) {
            pixel = rainbowRed(pixel, avg);
        }
        if (pixel.getY() < h2 && pixel.getY() >= h1) {
            pixel = rainbowOrange(pixel, avg);
        }
        if (pixel.getY() < h3 && pixel.getY() >= h2) {
            pixel = rainbowYellow(pixel, avg);
        }
        if (pixel.getY() < h4 && pixel.getY() >= h3) {
            pixel = rainbowGreen(pixel, avg);
        }
        if (pixel.getY() < h5 && pixel.getY() >= h4) {
            pixel = rainbowBlue(pixel, avg);
        }
        if (pixel.getY() < h6 && pixel.getY() >= h5) {
            pixel = rainbowIndigo(pixel, avg);
        }
        if (pixel.getY() >= h6) {
            pixel = rainbowViolet(pixel, avg);
        }
    }
    return rainbowImg;
}

function rainbowRed(pix, avg) {
    if (avg < 128) {
        pix.setRed(2 * avg);
        pix.setBlue(0);
        pix.setGreen(0);
    } else {
        pix.setRed(255);
        pix.setBlue(2 * avg - 255);
        pix.setGreen(2 * avg - 255);
    }
    return pix;
}

function rainbowOrange(pix, avg) {
    if (avg < 128) {
        pix.setRed(2 * avg);
        pix.setGreen(0.8 * avg);
        pix.setBlue(0);
    } else {
        pix.setRed(255);
        pix.setGreen(1.2 * avg - 51);
        pix.setBlue(2 * avg - 255);
    }
    return pix;
}

function rainbowYellow(pix, avg) {
    if (avg < 128) {
        pix.setRed(2 * avg);
        pix.setBlue(0);
        pix.setGreen(2 * avg);
    } else {
        pix.setRed(255);
        pix.setBlue(2 * avg - 255);
        pix.setGreen(255);
    }
    return pix;
}

function rainbowGreen(pix, avg) {
    if (avg < 128) {
        pix.setRed(0);
        pix.setBlue(0);
        pix.setGreen(2 * avg);
    } else {
        pix.setRed(2 * avg - 255);
        pix.setBlue(2 * avg - 255);
        pix.setGreen(0);
    }
    return pix;
}

function rainbowBlue(pix, avg) {
    if (avg < 128) {
        pix.setRed(0);
        pix.setBlue(2 * avg);
        pix.setGreen(0);
    } else {
        pix.setRed(2 * avg - 255);
        pix.setBlue(255);
        pix.setGreen(2 * avg - 255);
    }
    return pix;
}

function rainbowIndigo(pix, avg) {
    if (avg < 128) {
        pix.setRed(0.8 * avg);
        pix.setBlue(0);
        pix.setGreen(2 * avg);
    } else {
        pix.setRed(1.2 * avg - 51);
        pix.setBlue(255);
        pix.setGreen(2 * avg - 255);
    }
    return pix;
}

function rainbowViolet(pix, avg) {
    if (avg < 128) {
        pix.setRed(1.6 * avg);
        pix.setBlue(1.6 * avg);
        pix.setGreen(0);
    } else {
        pix.setRed(0.4 * avg + 153);
        pix.setBlue(0.4 * avg + 153);
        pix.setGreen(2 * avg - 255);
    }
    return pix;
}

function doGray() {
    if (!checkImg(grayImg)) {
        alert('First Load the Image...');
        return;
    }
    let outputImg = filterGray();
    outputImg.drawTo(canvas);
    fInput = document.getElementById('fInput');
    grayImg = new SimpleImage(fInput);
}

function filterGray() {
    for (let pixel of grayImg.values()) {
        var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
        pixel.setRed(avg);
        pixel.setGreen(avg);
        pixel.setBlue(avg);
    }
    return grayImg;
}

function checkImg(img) {
    if (img == null || !img.complete()) {
        return false;
    }
    return true;
}

function ResetImg() {
    if (checkImg(realImg)) {
        realImg.drawTo(canvas);
        return;
    }
    alert('First Upload Image...')
}

function DownLodeImg() {
    if (checkImg(realImg)) {
        download('myImage.png');
        return;
    }
    alert('First Upload Image...')
}

function download(filename) {
    var lnk = document.createElement('a'),
        e;

    /// the key here is to set the download attribute of the a tag
    lnk.download = filename;

    /// convert canvas content to data-uri for link. When download
    /// attribute is set the content pointed to by link will be
    /// pushed as "download" in HTML5 capable browsers
    lnk.href = canvas.toDataURL("image/png;base64");

    /// create a "fake" click-event to trigger the download
    if (document.createEvent) {
        e = document.createEvent("MouseEvents");
        e.initMouseEvent("click", true, true, window,
            0, 0, 0, 0, 0, false, false, false,
            false, 0, null);

        lnk.dispatchEvent(e);
    } else if (lnk.fireEvent) {
        lnk.fireEvent("onclick");
    }
}