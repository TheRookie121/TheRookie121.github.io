import {Enemy} from './Enemy.es6';
import {EnemyBullet} from './EnemyBullet.es6';

class EnemyRect extends Enemy
{
    //enemyrect constructor
    constructor(a_Position)
    {
        super(a_Position);
        this.m_FillStyle = "rgb(145,0,0)";
        this.m_Bullets = [];
        this.m_Type = "rect";
    }

    //Enemyrect shoot function
    shootBullet(a_BulletManager)
    {
        this.m_ShootTimer++;
        if(this.m_BulletCounter >= 20)
        {
            this.m_CanShoot = false;
            this.m_ShootTimer = 0;
            this.m_BulletCounter = 0;
        }

        if(this.m_ShootTimer == 100)
        {
            this.m_CanShoot = true;
        }
        if(this.m_CanShoot) {
            this.m_TriggerTimer++;
            if (this.m_TriggerTimer >= 10) {
                const bullet = new EnemyBullet({x: this.m_Position.x, y: this.m_Position.y + 10 }, this.m_Dimension);
                a_BulletManager.m_Bullets.push(bullet);
                this.m_TriggerTimer = 0;
                this.m_BulletCounter++;
            }
        }
    }

    //enemyrect update
    update(a_BulletManager)
    {
        super.setRect();
        this.shootBullet(a_BulletManager);
    }
}

export {EnemyRect};