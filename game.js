document.addEventListener('DOMContentLoaded', () => {
    const draggables = document.querySelectorAll('.draggable');
    
    draggables.forEach(draggable => {
        draggable.addEventListener('mousedown', mouseDrag);
        draggable.addEventListener('touchstart', touchDrag);
    });

    function mouseDrag(e) {
        drag(this, e, e.clientX, e.clientY);
    }

    function touchDrag(e) {
        const touch = e.touches[0];
        drag(this, e, touch.clientX, touch.clientY);
    }

    function drag(element, event, clientX, clientY) {
        event.preventDefault();
        let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        pos3 = clientX;
        pos4 = clientY;

        document.onmouseup = closeDragElement;
        document.ontouchend = closeDragElement;
        document.onmousemove = elementDrag;
        document.ontouchmove = elementDragTouch;

        function elementDrag(e) {
            elementMove(e, e.clientX, e.clientY);
        }

        function elementDragTouch(e) {
            const touch = e.touches[0];
            elementMove(e, touch.clientX, touch.clientY);
        }

        function elementMove(e, clientX, clientY) {
            e.preventDefault();
            pos1 = pos3 - clientX;
            pos2 = pos4 - clientY;
            pos3 = clientX;
            pos4 = clientY;
            element.style.top = (element.offsetTop - pos2) + "px";
            element.style.left = (element.offsetLeft - pos1) + "px";
        }

        function closeDragElement() {
            document.onmouseup = null;
            document.ontouchend = null;
            document.onmousemove = null;
            document.ontouchmove = null;
        }
    }
});
