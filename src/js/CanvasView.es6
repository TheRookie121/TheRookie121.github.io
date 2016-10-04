class CanvasView
{
    //canvasview constructor
    constructor()
    {
        this.m_Canvas = document.getElementById("m_Canvas");
        this.m_Context = this.m_Canvas.getContext("2d");
    }

    //clear canvas
    clearDraw()
    {
        this.m_Context.clearRect(0, 0, 1280, 720);
    }

    //draw rectangle function
    drawRect(a_Pos, a_Dimensions, a_FillStyle, a_Score)
    {
        this.m_Context.fillStyle = a_FillStyle;
        this.m_Context.fillRect(a_Pos.x, a_Pos.y, a_Dimensions.width, a_Dimensions.height);
    }

    //draw circle function
    drawArc(a_Pos, a_Dimensions, a_FillStyle, a_Score)
    {
        this.m_Context.fillStyle = a_FillStyle;
        // this.m_Context.arc(100,75,50,0*Math.PI,1.5*Math.PI);
        this.m_Context.beginPath();
        this.m_Context.arc(a_Pos.x, a_Pos.y, 20, 0, 2 * Math.PI, false);
        this.m_Context.fillStyle = 'green';
        this.m_Context.fill();
        this.m_Context.lineWidth = 5;
        this.m_Context.strokeStyle = '#003300';
        this.m_Context.stroke();
    }

    //draw score function
    drawScore(a_Score)
    {
        this.m_Context.font = "20px Helvetica";
        this.m_Context.fillText(a_Score, 10, 20);
    }

    //draw health function
    drawHealth(a_Health)
    {
        for(let i = 0; i < a_Health; i++)
        {
            this.m_Context.fillRect((560)+(i*20), 700, 10, 10);
        }
    }

    //draw text function
    drawText(a_Score)
    {
        this.m_Context.font = "30px Helvetica";
        this.m_Context.fillText("GAME OVER", 640 / 2 - 100, 720/2 - 40);
        this.m_Context.fillText("High Score: " + a_Score, 640 / 2 - 160, 720/2);
        this.m_Context.fillText("Press SPACEBAR to restart", 640 / 2 - 200, 720/2 + 40);
    }
}

export {CanvasView}