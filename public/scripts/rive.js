import rive from "@rive-app/canvas";

const r = new rive.Rive({
  src: "", // Colocar link do arquivo .riv (ou local)
  canvas: document.getElementById("canvas"),
  autoplay: true,
  onLoad: () => {
    r.resizeDrawingSurfaceToCanvas();
  },
});
