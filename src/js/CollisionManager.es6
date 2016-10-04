/*
update player collide with enemy

axis aligned bounding box

2 boxen die overlappen, en dan iets laten gebeuren
 */

class CollisionManager
{
    constructor()
    {
        //..
    }

    AABB(a_RectA, a_RectB)
    {
        return (a_RectA.x <= a_RectB.x + a_RectB.width &&
                a_RectB.x <= a_RectA.x + a_RectA.width &&
                a_RectA.y <= a_RectB.y + a_RectB.height &&
                a_RectB.y <= a_RectA.y + a_RectA.height);
    }

    update(a_Player, a_Enemies)
    {
        for(let i in a_Enemies)
         {
            const enemy = a_Enemies[i];
            if (this.AABB(a_Player.m_Rect, enemy.m_Rect))
            {
                a_Enemies.splice(i, 1);
                //player loses 1 life
                //start healthFeedback()
                //wub
            }
        }

        //Enemy Bullets & Player Collision
        for(let j in a_Enemies)
        {
            const enemy = a_Enemies[j];
            for(let k in enemy.m_Bullets)
            {
                const bullet = enemy.m_Bullets[k];
                if(this.AABB(a_Player.m_Rect, bullet.m_Rect))
                {
                   enemy.m_Bullets.splice(k, 1);
                }
            }
        }

        //Enemy Bullets & Player Collision
        for(let l in a_Enemies)
        {
            const enemy = a_Enemies[l];
            for(let m in a_Player.m_Bullets)
            {
                const bullet = a_Player.m_Bullets[m];
                if(this.AABB(enemy.m_Rect, bullet.m_Rect))
                {
                    a_Enemies.splice(l, 1);
                    a_Player.m_Bullets.splice(m, 1);
                }
            }
        }

    }
}

export {CollisionManager};