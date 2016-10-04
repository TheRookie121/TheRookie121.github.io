import {KeyView} from './KeyView.es6';
import {Player} from './Player.es6';
import {EnemyManager} from './EnemyManager.es6';
import {CanvasView} from './CanvasView.es6';
import {CollisionManager} from './CollisionManager.es6';
import {BulletManager} from './BulletManager.es6';

class Controller
{
    constructor()
    {
        this.m_Player = new Player(); //CHANGE TO m_MATTERENGINE
        this.m_CanvasView = new CanvasView();
        this.m_EnemyManager = new EnemyManager();
        this.m_CollisionManager = new CollisionManager();
        this.m_BulletManager = new BulletManager();
        this.m_KeyView = new KeyView(this);
        this.m_KeyView.m_KeyListener = this.update;
        this.m_KeyView.m_KeyListener.bind(this);//callback
        this.loop();
    }

    update(a_Keys, a_Self)
    {
        a_Self.m_Player.move(a_Keys, a_Self.m_BulletManager);
    }

    loop()
    {
        this.m_CanvasView.clearDraw();
        const enemies = this.m_EnemyManager.m_Enemies;
        const player = this.m_Player;
        self = this;
        this.m_Player.update();
        this.m_CanvasView.draw(player.m_Position, player.m_Dimension, player.m_FillStyle);
        this.m_CanvasView.drawScore(player.m_Score);
        this.m_EnemyManager.update(this.m_BulletManager);
        for(let i in enemies)
        {
            const enemy = enemies[i];
            this.m_CanvasView.draw(enemy.m_Position, enemy.m_Dimension, enemy.m_FillStyle);
        }

        this.m_BulletManager.update();
        for(let l in this.m_BulletManager.m_Bullets)
        {
            const bullet = this.m_BulletManager.m_Bullets[l];
            this.m_CanvasView.draw(bullet.m_Position, bullet.m_Dimension, bullet.m_FillStyle);
        }

        this.m_CollisionManager.update(player, enemies, this.m_BulletManager);

        window.requestAnimationFrame(function(){
           self.loop();
        });
    }
}

export {Controller}