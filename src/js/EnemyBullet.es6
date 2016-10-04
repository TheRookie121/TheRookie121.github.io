import {Bullet} from "./Bullet.es6";

class EnemyBullet extends Bullet
{
    constructor(a_Posistion, a_Dimension)
    {
        super(a_Posistion, a_Dimension);
        this.m_Name = "EnemyBullet";
    }

    update()
    {
        super.setRect();
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

export {EnemyBullet};