import {PlayerBullet} from "./PlayerBullet.es6";

class Player
{
    //Player constructor
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
        this.m_Speed = 10;
        this.m_State = "Active";
        this.m_Bullets = [];
        this.m_FillStyle = "rgb(12,66,145)";
        this.m_CanApplyForce = true
        this.m_StateTimer = 0;
        this.m_Health = 3;
        this.m_Score = 0;
        this.m_EnemiesKilled = 0;
        this.m_ShootTimer = 0;
        this.m_Right = false;
        this.m_Left = false;
        this.m_Up = false;
        this.m_Down = false;
        this.m_Space = false;

    }

    //Player killed an enemy
    enemyKilled()
    {
        this.m_EnemiesKilled++;
        this.m_Score = this.m_EnemiesKilled * 1000;
    }

    //Player update loop
    update(a_BulletManager)
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

        if(this.m_Right)
            this.m_Position.x += this.m_Speed;
        if(this.m_Left)
            this.m_Position.x -= this.m_Speed;
        if(this.m_Up)
            this.m_Position.y -= this.m_Speed;
        if(this.m_Down)
            this.m_Position.y += this.m_Speed;
        if(this.m_Space)
            this.shootBullet(a_BulletManager);

        switch(this.m_State)
        {
            case "Idle":
                this.idle();
                break;
            case "Active":
                break;
            case "Dead":
                break;
        }
    }

    //Player can't be hit in this state
    idle()
    {
        this.m_StateTimer++;
        if(this.m_StateTimer >= 300)
        {
            this.m_State = "Active";
            this.m_StateTimer = 0;
        }
    }

    //Player got hit (takes damage)
    hit()
    {
        this.m_Health--;
        this.m_State = "Idle";
        if(this.m_Health == 0)
            this.m_State = "Dead";
    }

    //Move player and collision with sides of canvas
    move(a_Keys, a_BulletManager)
    {
        if(a_Keys.right)
            this.m_Right = true;
        else
            this.m_Right = false;

        if(a_Keys.left )
            this.m_Left = true;
        else
            this.m_Left = false;

        if(a_Keys.up )
            this.m_Up = true;
        else
            this.m_Up = false;

        if(a_Keys.down)
            this.m_Down = true;
        else
            this.m_Down = false;

        if(a_Keys.space)
            this.m_Space = true;
        else
            this.m_Space = false;

        if(this.m_Position.x < 0)
            this.m_Position.x = 640;
        else if(this.m_Position.x > 640)
            this.m_Position.x = 0;
        else if( this.m_Position.y < 0)
            this.m_Position.y = 720;
        else if( this.m_Position.y > 720)
            this.m_Position.y = 0;

    }

    //Shoot a bullet
    shootBullet(a_BulletManager)
    {
        this.m_ShootTimer++;
        if(this.m_ShootTimer >= 3)
        {
            a_BulletManager.m_Bullets.push(new PlayerBullet(this.m_Position, this.m_Dimension));
            this.m_ShootTimer = 0;
        }
    }

}

export {Player};