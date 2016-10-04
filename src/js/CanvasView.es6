class CanvasView
{
    constructor()
    {
        this.m_Canvas = document.getElementById("m_Canvas");
        this.m_Context = this.m_Canvas.getContext("2d");
    }

    clearDraw()
    {
        this.m_Context.clearRect(0, 0, 1280, 720);
    }

    draw(a_Pos, a_Dimensions, a_FillStyle, a_Score)
    {
        this.m_Context.fillStyle = a_FillStyle;
        this.m_Context.fillRect(a_Pos.x, a_Pos.y, a_Dimensions.width, a_Dimensions.height);
    }

    drawScore(a_Score)
    {
        this.m_Context.font = "20px Helvetica";
        this.m_Context.fillText(a_Score, 10, 20);
    }
}

export {CanvasView}