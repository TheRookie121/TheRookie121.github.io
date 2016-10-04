class Enemy {
    //Enemy constructor
    constructor(a_Position, a_MatterEngine) {
        this.m_Matter = a_MatterEngine.m_Matter;
        this.m_Position = a_Position;
        this.m_Width = 20;
        this.m_Height = 40;
        this.m_Bullets = [];
        this.m_ApplyForceTimer = 0;
        this.m_Body = a_MatterEngine.m_Matter.Bodies.circle(a_Position.x, a_Position.y, 10, {
            friction: false,
            airFriction: false
        });
        a_MatterEngine.m_Matter.World.add(a_MatterEngine.engine.world, this.m_Body);
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
        const enemyPos = this.m_Body.position;
        const playerPos = a_Player.m_Body.position;

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
        console.log(this.m_VelocityVector, this.m_Body.velocity);
        this.m_Matter.Body.setVelocity(this.m_Body, this.m_VelocityVector);

    }
}

export {Enemy};