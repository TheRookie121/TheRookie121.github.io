class Enemy {
    //Enemy constructor
    constructor(a_Position) {
        this.m_Position = a_Position;
        this.m_Width = 20;
        this.m_Height = 40;
        this.m_Bullets = [];
        this.m_ApplyForceTimer = 0;
        this.m_Spawn = true;
        this.m_VelocityVector;
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
        const enemyPos = 0;
        const playerPos = 0;

        //calculate line to player
        const lineToPlayer = this.sub(enemyPos,playerPos);
        //calculate direction
        const moveDirection =this.normalize(lineToPlayer);

        //velocity vector
        if(this.m_Spawn) {
            console.log("spawned");
            this.m_VelocityVector =
            {
                x: -(moveDirection.x) * 1.0,
                y: -(moveDirection.y) * 1.0
            };
            this.m_Spawn = false;
        }
    }
}

export {Enemy};