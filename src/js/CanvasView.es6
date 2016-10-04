class CanvasView
{
    constructor()
    {
        this.m_Canvas = document.getElementById("m_Canvas");
        this.m_Context = this.m_Canvas.getContext("2d");
    }

    draw(a_Pos, a_Dimensions)
    {
        this.m_Context.clearRect(0, 0, 1280, 720);
        this.m_Context.fillRect(a_Pos.x, a_Pos.y, a_Dimensions.width, a_Dimensions.height);
    }
}

export {CanvasView}