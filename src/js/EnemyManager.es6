import {Enemy} from './Enemy.es6';

class EnemyManager
{
    constructor(a_MatterEngine)
    {
        this.m_EnemySpawnTimer = 0;
        this.m_EnemySpawnTimerMax = 100;
        this.m_Enemies = [];
    }

    update(a_Player)
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
            enemy.update(a_Player);
        }
    }

    spawnEnemy()
    {
        const ranPos = Math.random() * 10;
        let enemyPos = {x: 0, y: 0};
        if(ranPos >= 0 && ranPos < 2.5)//RIGHT
        {
            enemyPos.x = 520;
            enemyPos.y = (Math.random() * 500);
        }
        else if(ranPos >= 2.5 && ranPos < 5)//LEFT
        {
            enemyPos.x = -20;
            enemyPos.y = (Math.random() * 500);
        }
        else if(ranPos >= 5 && ranPos < 7.5)//TOP
        {
            enemyPos.x = (Math.random() * 500);
            enemyPos.y = -20;
        }
        else if(ranPos >= 7.5 && ranPos < 10)//DOWN
        {
            enemyPos.x = (Math.random() * 500);
            enemyPos.y = 520;
        }
        this.m_Enemies.push(new Enemy(enemyPos));

    }
}

export {EnemyManager};