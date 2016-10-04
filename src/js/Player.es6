import {PlayerBullet} from "./PlayerBullet.es6";

class Player
{
    constructor(a_MatterEngine)
    {
        this.m_Position = { x: 200, y: 200};
        this.m_Dimension = { width: 20, height: 20 };
        this.m_Rect = {
            x: this.m_Position.x,
            y: this.m_Position.y,
            width: this.m_Dimension.width,
            height: this.m_Dimension.height
        };
        //this.m_Width = 20;
        //this.m_Height = 20;
        this.m_MoveForce = 0.003;
        this.m_Speed = 5;
        this.m_State = "Idle";
        this.m_Bullets = [];
        this.m_FillStyle = "rgb(200,200,28)";
        this.m_CanApplyForce = true;
        //this.m_RotateForce = 0.1;
    }

    length(a_Vector)
    {
        const length = Math.sqrt(a_Vector.x* a_Vector.x + a_Vector.y*a_Vector.y);
        return length;
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
    }

    move(a_Keys)
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
            this.shootBullet();
        }
    }

    shootBullet()
    {
        this.m_Bullets.push(new PlayerBullet(this.m_Position, this.m_Dimension));
    }

}

export {Player};