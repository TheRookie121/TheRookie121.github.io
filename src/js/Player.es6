import {PlayerBullet} from "./PlayerBullet.es6";

class Player
{
    constructor()
    {
        this.m_Position = { x: 200, y: 200};
        this.m_Dimension = { width: 20, height: 20 };
        this.m_Rect = {
            x: this.m_Position.x,
            y: this.m_Position.y,
            width: this.m_Dimension.width,
            height: this.m_Dimension.height
        };
        this.m_Speed = 5;
        this.m_State = "Active";
        this.m_Bullets = [];
        this.m_FillStyle = "rgb(12,66,145)";
        this.m_CanApplyForce = true
        this.m_StateTimer = 0;
        this.m_Health = 3;
        this.m_Score = 0;
        this.m_EnemiesKilled = 0;
    }

    length(a_Vector)
    {
        const length = Math.sqrt(a_Vector.x* a_Vector.x + a_Vector.y*a_Vector.y);
        return length;
    }

    enemyKilled()
    {
        this.m_EnemiesKilled++;
        this.m_Score = this.m_EnemiesKilled * 1000;
    }

    update()
    {

        this.m_Rect = {
            x: this.m_Position.x,
            y: this.m_Position.y,
            width: this.m_Dimension.width,
            height: this.m_Dimension.height
        };

        for(let i in this.m_Bullets)
        {
            const bullet = this.m_Bullets[i];
            bullet.update();
        }

        switch(this.m_State)
        {
            case "Idle":
                this.idle();
                break;
            case "Active":
                this.active();
                break;
            case "Dead":
                break;
        }
    }

    active()
    {}

    idle()
    {
        this.m_StateTimer++;
        if(this.m_StateTimer >= 300)
        {
            this.m_State = "Active";
            this.m_StateTimer = 0;
        }
    }

    hit()
    {
        this.m_Health--;
        this.m_State = "Idle";
        if(this.m_Health == 0)
            this.m_State = "Dead";
    }
    move(a_Keys, a_BulletManager)
    {
        if(a_Keys.right && this.m_CanApplyForce)
        {
            this.m_Position.x += this.m_Speed;
        }
        if(a_Keys.left && this.m_CanApplyForce)
        {
            this.m_Position.x -= this.m_Speed;
        }
        if(a_Keys.up && this.m_CanApplyForce)
        {
            this.m_Position.y -= this.m_Speed;
        }
        if(a_Keys.down && this.m_CanApplyForce)
        {
            this.m_Position.y += this.m_Speed;
        }
        if(a_Keys.space)
        {
            this.shootBullet(a_BulletManager);
        }
    }

    shootBullet(a_BulletManager)
    {
        a_BulletManager.m_Bullets.push(new PlayerBullet(this.m_Position, this.m_Dimension));
    }

}

export {Player};