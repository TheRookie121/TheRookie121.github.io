import {Enemy} from './Enemy.es6';

class EnemyCircle extends Enemy
{
    constructor(a_Position)
    {
        super(a_Position);
        this.m_FillStyle = "rgb(145,0,0)";
        this.m_Type = "circle";
    }

    update(a_BulletManager, a_Player)
    {
        super.setRect();
        const enemyPos = this.m_Position;
        const playerPos = a_Player.m_Position;

        //calculate line to player
        const lineToPlayer = super.sub(enemyPos,playerPos);
        //calculate direction
        const moveDirection = super.normalize(lineToPlayer);

        this.m_VelocityVector =
        {
            x: -(moveDirection.x) * 1.0,
            y: -(moveDirection.y) * 1.0
        };

        this.m_Position.x += this.m_VelocityVector.x;
        this.m_Position.y += this.m_VelocityVector.y;
    }
}

export {EnemyCircle};