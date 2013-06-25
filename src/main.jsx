import "js/web.jsx";

import "Eye/Eye.jsx";
import "Eye/Layer.jsx";
import "Eye/DisplayNode.jsx";
import "Eye/Shapes/ImageShape.jsx";


class _Main {
    static function main(args: string[]): void {
        var size = dom.window.location.hash.substring(1).split(',').concat(["", ""]);
        var canvas = dom.createElement("canvas") as HTMLCanvasElement;
        canvas.width  = 465;
        canvas.height = 465;
        dom.document.body.appendChild(canvas);

        var eye = new Eye(canvas);

        var layer = new Layer(465, 465);
        eye.appendLayer(layer);

        var img = dom.createElement("img") as HTMLImageElement;
        img.src = "img/tombo.jpg";
        img.onload = (e) -> {
            var imgShape = new ImageShape(img);
            var node = new DisplayNode(imgShape, 160, 90, 0.5, 0.5);

            layer.root.appendChild(node);

            eye.render();

            canvas.addEventListener("mousemove", (e) -> {
                var m = e as MouseEvent;
                if (m) {
                    var x = m.clientX - canvas.offsetLeft + dom.window.scrollX;
                    var y = m.clientY - canvas.offsetTop + dom.window.scrollY;
                    node.setPosition(x, y);
                }
                eye.render();
            });
        };
    }
}