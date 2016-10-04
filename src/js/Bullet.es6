class Bullet
{
    constructor(a_Posistion, a_Dimension)
    {
        this.m_Position = {x: a_Posistion.x + (a_Dimension.width / 2) - 5, y: a_Posistion.y};
        this.m_Dimension = {width: 10, height: 10};
        this.m_Rect = {
            x: this.m_Position.x,
            y: this.m_Position.y,
            width: this.m_Dimension.width,
            height: this.m_Dimension.height
        };
        this.m_FillStyle = "rgb(200,200,28)";
        this.m_CanApplyForce = true;
        this.m_Alive = true;
        this.m_XSpeed = (Math.random() * 4)-2;
        this.m_YSpeed = Math.random() * 5;
    }

    setRect()
    {
       this.m_Rect =  {
            x: this.m_Position.x,
            y: this.m_Position.y,
            width: this.m_Dimension.width,
            height: this.m_Dimension.height
        };
    }


    update()
    {
        this.setRect();
    }
}


export {Bullet};