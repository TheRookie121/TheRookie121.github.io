import {EnemyCircle} from './EnemyCircle.es6';
import {EnemyRect} from './EnemyRect.es6';

class EnemyManager
{
    //EnemyManager constructor
    constructor()
    {
        this.m_EnemySpawnTimer = {
            rect: 0,
            circle: 0,
        };
        this.m_Enemies = [];
    }

    //update and spawn enemies
    update(a_BulletManager, a_Player)
    {
        this.m_EnemySpawnTimer.rect++;
        this.m_EnemySpawnTimer.circle++;
        if(this.m_EnemySpawnTimer.rect == 200)
        {
            this.spawnRectEnemy();
            this.m_EnemySpawnTimer.rect = 0;
        }
        if(this.m_EnemySpawnTimer.circle == 100)
        {
            this.spawnCircleEnemy();
            this.m_EnemySpawnTimer.circle = 0;
        }

        for(let i in this.m_Enemies)
        {
            const enemy = this.m_Enemies[i];
            enemy.update(a_BulletManager, a_Player);
        }
    }

    //spawn rect enemy
    spawnRectEnemy()
    {
        const ranPos = Math.random() * 10;
        let enemyPos = {x: 0, y: 0};
        enemyPos.x = (Math.random() * 500);
        enemyPos.y = (Math.random() * 500);
        this.m_Enemies.push(new EnemyRect(enemyPos));

    }

    //spawn circle enemy
    spawnCircleEnemy()
    {
        const ranPos = Math.random() * 10;
        let enemyPos = {x: 0, y: 0};
        enemyPos.x = (Math.random() * 500);
        enemyPos.y = (Math.random() * 500);
        this.m_Enemies.push(new EnemyCircle(enemyPos));

    }
}

export {EnemyManager};