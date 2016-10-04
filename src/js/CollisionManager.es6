class CollisionManager
{
    constructor(a_MatterEngine)
    {
        this.m_MatterEngine = a_MatterEngine;
    }

    update(a_Player, a_EnemyManager)
    {
        const matter = this.m_MatterEngine.m_Matter;
        const bullets = a_Player.m_Bullets;
        const enemies = a_EnemyManager.m_Enemies;

        for(var i in bullets)
        {
            //bullet & enemy collision
            const bullet = bullets[i];
            for(var j in enemies)
            {
                const enemy = enemies[j];
                if(matter.Bounds.overlaps(bullet.m_Body.bounds, enemy.m_Body.bounds))
                {
                   enemies.splice(j, 1);
                   bullets.splice(i, 1);
                   matter.World.remove(this.m_MatterEngine.engine.world, bullet.m_Body);
                   matter.World.remove(this.m_MatterEngine.engine.world, enemy.m_Body);
                }
            }

            //Bullet & border collision
            if(bullet.m_Body.position.x - 50 < 0)
            {
                bullets.splice(i, 1);
                matter.World.remove(this.m_MatterEngine.engine.world, bullet.m_Body);
            }
            else if(bullet.m_Body.position.x + 50 > 500)
            {
                bullets.splice(i, 1);
                matter.World.remove(this.m_MatterEngine.engine.world, bullet.m_Body);
            }
            else if(bullet.m_Body.position.y - 50 < 0)
            {
                bullets.splice(i, 1);
                matter.World.remove(this.m_MatterEngine.engine.world, bullet.m_Body);
            }
            else if(bullet.m_Body.position.y + 50 > 500)
            {
                bullets.splice(i, 1);
                matter.World.remove(this.m_MatterEngine.engine.world, bullet.m_Body);
            }
        }

        for(var k in enemies)
        {
            const enemy = enemies[k];
            //Enemy & border collision
            if(enemy.m_Body.position.x < -500)
            {
                enemies.splice(i, 1);
                matter.World.remove(this.m_MatterEngine.engine.world, enemy.m_Body);
            }
            else if(enemy.m_Body.position.x > 1000)
            {
                enemies.splice(i, 1);
                matter.World.remove(this.m_MatterEngine.engine.world, enemy.m_Body);
            }
            else if(enemy.m_Body.position.y < -500)
            {
                enemies.splice(i, 1);
                matter.World.remove(this.m_MatterEngine.engine.world, enemy.m_Body);
            }
            else if(enemy.m_Body.position.y > 1000)
            {
                enemies.splice(i, 1);
                matter.World.remove(this.m_MatterEngine.engine.world, enemy.m_Body);
            }
        }

    }

}

export {CollisionManager};