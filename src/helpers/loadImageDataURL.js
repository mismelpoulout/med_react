const imageCache = {}
window.imageCache = imageCache;

export default function loadImageDataURL(url) {
    return new Promise((resolve, reject) => {
        if (imageCache[url]) {
            resolve(imageCache[url])
            return;
        }
        const img = new Image();
        img.onload = async () => {
            imageCache[url] = imageToDataURL(img);
            resolve(imageCache[url]);
        }
        img.onerror = error => reject(error);
        img.src = url;
    });
}

function imageToDataURL(img) {
    const canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    canvas.getContext("2d").drawImage(img, 0, 0);

    return canvas.toDataURL();
}
