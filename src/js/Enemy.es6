class Enemy {
    //Enemy constructor
    constructor(a_Position) {
        this.m_Position = a_Position;
        this.m_Dimension = {width: 40, height: 40};
        this.m_Width = 20;
        this.m_Height = 40;
        this.m_Bullets = [];
        this.m_ApplyForceTimer = 0;
        this.m_Spawn = true;
        this.m_BulletTimer = 0;
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
        this.m_BulletTimer++;
        if(this.m_BulletTimer == 100)
        {
            console.log("shoot")
            for(let i = 0; i < 20; i++)
            {
                console.log(this.m_Position);
                //this.m_Bullets.push(this.m_Position);
            }
        }
    }
}

export {Enemy};