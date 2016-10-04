import {Bullet} from "./Bullet.es6";

class PlayerBullet extends Bullet
{
    //playerbullet constructor
    constructor(a_Posistion, a_Dimension)
    {
        super({x: a_Posistion.x + 10, y: a_Posistion.y}, a_Dimension);
        this.m_YSpeed = 3;
        this.m_Name = "PlayerBullet";
        this.m_FillStyle = "rgb(" + (Math.floor(Math.random() * 256)) + "," + (Math.floor(Math.random() * 256)) + "," + (Math.floor(Math.random() *256)) + ")";
    }

    //player update
    update()
    {
        super.setRect();
        this.m_Position.y -= this.m_YSpeed;
        this.m_Position.x += this.m_XSpeed;
        if(this.m_Position.x - (this.m_Dimension.width + 20) > 640)
            this.m_Alive = false;
        else if( this.m_Position.x + (this.m_Dimension.width - 20) < 0 )
            this.m_Alive = false;
        else if( this.m_Position.y - (this.m_Dimension.height + 20) > 720 )
            this.m_Alive = false;
        else if( this.m_Position.y + (this.m_Dimension.height - 20) < 0 )
            this.m_Alive = false;
    }
}

export {PlayerBullet};