class Bullet
{
    constructor(a_Posistion)
    {
        console.log(a_Posistion);
        this.m_Position = a_Posistion;
        this.m_Dimension = {width: 10, height: 10};
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
        // switch(this.m_State)
        // {
        //
        // }


        this.m_Position.y+=3;

    }
}


export {Bullet};