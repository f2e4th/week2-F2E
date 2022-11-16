<template>
  <div>
    <canvas id="canvas" style="border: 1px solid #000"></canvas>
  </div>
</template>

<script>
import pdfjsLib from "pdfjs-dist/build/pdf";

export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {
    // readBlob(blob) {
    //   return new Promise((resolve, reject) => {
    //     const reader = new FileReader();
    //     reader.addEventListener("load", () => resolve(reader.result));
    //     reader.addEventListener("error", reject);
    //     reader.readAsDataURL(blob);
    //   });
    // },

    // async printPDF(pdfData) {
    //   pdfData = await readBlob(pdfData);
    //   const data = atob(pdfData.substring(Base64Prefix.length));

    //   // Using DocumentInitParameters object to load binary data.
    //   const pdfDoc = await pdfjsLib.getDocument({ data }).promise;
    //   const pdfPage = await pdfDoc.getPage(1);

    //   const viewport = pdfPage.getViewport({ scale: window.devicePixelRatio });
    //   const canvas = document.createElement("canvas");
    //   const context = canvas.getContext("2d");

    //   // 控制顯示PDF的寬高
    //   canvas.height = viewport.height;
    //   canvas;
    //   canvas.width = viewport.width;
    //   const renderContext = {
    //     canvasContext: context,
    //     viewport,
    //   };
    //   const renderTask = pdfPage.render(renderContext);

    //   // 回傳做好的canvas
    //   return renderTask.promise.then(() => canvas);
    // },

    // async pdfToImage(pdfData) {
    //   const scale = 1 / window.devicePixelRatio;
    //   return new fabric.Image(pdfData, {
    //     scaleX: scale,
    //     scaleY: scale,
    //   });
    // },
  },
  created() {
    console.log(pdfjsLib);
    // pdfjsLib.GlobalWorkerOptions.workerSrc =
    //   "https://mozilla.github.io/pdf.js/build/pdf.worker.js";
  },
};
</script>
