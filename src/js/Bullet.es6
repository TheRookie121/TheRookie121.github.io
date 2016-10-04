class Bullet
{
    constructor()
    {
        this.m_Position = {x: 0, y: 0};
        this.m_Width = 20;
        this.m_Height = 20;
        this.m_Bullets = [];
        this.m_FillStyle = "rgb(200,200,28)";

        this.m_CanApplyForce = true;
    }

    draw(a_Context)
    {

    }

    update()
    {
    }
}


export {Bullet};