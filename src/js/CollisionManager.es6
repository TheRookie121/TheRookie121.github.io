class CollisionManager
{
    constructor()
    {

    }

    //Axis Aligned Bounding Box
    AABB(a_RectA, a_RectB)
    {
        return (a_RectA.x <= a_RectB.x + a_RectB.width &&
                a_RectB.x <= a_RectA.x + a_RectA.width &&
                a_RectA.y <= a_RectB.y + a_RectB.height &&
                a_RectB.y <= a_RectA.y + a_RectA.height);
    }

    update(a_Player, a_Enemies, a_BulletManager)
    {
        const bullets = a_BulletManager.m_Bullets;
        for(let i in a_Enemies)
         {
            const enemy = a_Enemies[i];
            if (this.AABB(a_Player.m_Rect, enemy.m_Rect) && a_Player.m_State == "Active")
            {
                a_Enemies.splice(i, 1);
                a_Player.hit();
            }
        }

        //Enemy Bullets & Player Collision
        for(let k in bullets)
        {
            const bullet = bullets[k];
            if(bullet.m_Name == "EnemyBullet")
            {
                if(this.AABB(a_Player.m_Rect, bullet.m_Rect) && a_Player.m_State == "Active")
                {
                   bullets.splice(k, 1);
                   a_Player.hit();
                }
            }
        }

        //Enemy & Player Bullet
        for(let l in a_Enemies)
        {
            const enemy = a_Enemies[l];
            for(let m in bullets)
            {
                const bullet = bullets[m];
                if(bullet.m_Name == "PlayerBullet")
                {
                    if(this.AABB(enemy.m_Rect, bullet.m_Rect))
                    {
                        a_Enemies.splice(l, 1);
                        bullets.splice(m, 1);
                        a_Player.enemyKilled();
                    }
                }
            }
        }

    }
}

export {CollisionManager};