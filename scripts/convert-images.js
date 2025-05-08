// scripts/convert-images.js
import imagemin from "imagemin";
import imageminWebp from "imagemin-webp";

(async() => {
    // PNG画像をWebPに変換
    const pngResults = await imagemin(["public/**/*.png"], {
        destination: "public",
        plugins: [
            imageminWebp({
                quality: 85,
            }),
        ],
    });

    console.log(`PNG images converted to WebP: ${pngResults.length} files`);

    // JPG画像をWebPに変換
    const jpgResults = await imagemin(["public/**/*.{jpg,jpeg}"], {
        destination: "public",
        plugins: [
            imageminWebp({
                quality: 85,
            }),
        ],
    });

    console.log(`JPG images converted to WebP: ${jpgResults.length} files`);
})();