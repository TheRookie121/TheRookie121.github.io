

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
        this.m_ShootTimer = 0;
        this.m_TriggerTimer = 0;
        this.m_BulletCounter = 0;
        this.m_CanShoot = true;

    }

    //subtract vectors (to get direction)
    sub(PosA, PosB) {

        let returnValue =
        {
            x: PosA.x - PosB.x,
            y: PosA.y - PosB.y
        };

        return returnValue;
    }

    //normalize vector
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

    //set m_Rect
    setRect()
    {
        this.m_Rect = {
            x: this.m_Position.x,
            y: this.m_Position.y,
            width: this.m_Dimension.width,
            height: this.m_Dimension.height
        };
    }

}

export {Enemy};