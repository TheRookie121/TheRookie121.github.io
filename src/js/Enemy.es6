import {Bullet} from './Bullet.es6';

class Enemy {
    //Enemy constructor
    constructor(a_Position) {
        this.m_Position = a_Position;
        this.m_Dimension = {width: 40, height: 40};
        this.m_Rect = {
            x: this.m_Position.x,
            y: this.m_Position.y,
            width: this.m_Dimension.width,
            height: this.m_Dimension.height
        }
        this.m_Width = 20;
        this.m_Height = 40;
        this.m_Bullets = [];
        this.m_ApplyForceTimer = 0;
        this.m_Spawn = true;
        this.m_ShootTimer = 0;
        this.m_TriggerTimer = 0;
        this.m_BulletCounter = 0;
        this.m_CanShoot = true;
    }

    add(PosA, PosB) {

        let returnValue =
        {
            x: PosA.x + PosB.x,
            y: PosA.y + PosB.y
        };

        return returnValue;
    }


    sub(PosA, PosB) {

        let returnValue =
        {
            x: PosA.x - PosB.x,
            y: PosA.y - PosB.y
        };

        return returnValue;
    }

    normalize(a_Vector)
    {

        const length = Math.sqrt(a_Vector.x* a_Vector.x + a_Vector.y*a_Vector.y);

        let returnValue =
        {
            x: a_Vector.x/length,
            y: a_Vector.y/length
        };

        return returnValue;

    }

    length(a_Vector)
    {
        const length = Math.sqrt(a_Vector.x* a_Vector.x + a_Vector.y*a_Vector.y);
        return length;
    }

    update(a_Player)
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
                const bullet = new Bullet(this.m_Position, this.m_Dimension);
                this.m_Bullets.push(bullet);
                this.m_TriggerTimer = 0;
                this.m_BulletCounter++;
            }
        }
        for(let j in this.m_Bullets)
        {
            const bullet = this.m_Bullets[j];
            bullet.update();
        }
    }
}

export {Enemy};