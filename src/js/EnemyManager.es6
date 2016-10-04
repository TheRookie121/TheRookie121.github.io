import {Enemy} from './Enemy.es6';

class EnemyManager
{
    constructor()
    {
        this.m_EnemySpawnTimer = 0;
        this.m_EnemySpawnTimerMax = 100;
        this.m_Enemies = [];
    }

    update(a_BulletManager)
    {
        this.m_EnemySpawnTimer++;

        if(this.m_EnemySpawnTimer == 100){
        {
            this.spawnEnemy();
            //this.m_EnemySpawnTimer = 0;
        }

        }
        for(let i in this.m_Enemies)
        {
            const enemy = this.m_Enemies[i];
            enemy.update(a_BulletManager);
        }
    }

    spawnEnemy()
    {
        const ranPos = Math.random() * 10;
        let enemyPos = {x: 0, y: 0};
        enemyPos.x = (Math.random() * 500);
        enemyPos.y = (Math.random() * 500);
        this.m_Enemies.push(new Enemy(enemyPos));

    }
}

export {EnemyManager};