class Bullet
{
    constructor(a_Posistion, a_Dimension)
    {
        this.m_Position = {x: a_Posistion.x + (a_Dimension.width / 2) - 5, y: a_Posistion.y};
        this.m_Dimension = {width: 10, height: 10};
        this.m_FillStyle = "rgb(200,200,28)";
        this.m_CanApplyForce = true;
        this.m_Alive = true;
        this.m_XSpeed = (Math.random() * 4)-2;
        this.m_YSpeed = Math.random() * 5;
    }


    update()
    {
        this.m_Position.x += this.m_XSpeed;
        this.m_Position.y += this.m_YSpeed;
        if(this.m_Position.x - (this.m_Dimension.width + 20) > 640)
        {
            this.m_Alive = false;
        }
        else if( this.m_Position.x + (this.m_Dimension.width - 20) < 0 )
        {
            this.m_Alive = false;
        }
        else if( this.m_Position.y - (this.m_Dimension.height + 20) > 720 )
        {
            this.m_Alive = false;
        }
        else if( this.m_Position.y + (this.m_Dimension.height - 20) < 0 )
        {
            this.m_Alive = false;
        }
    }
}


export {Bullet};