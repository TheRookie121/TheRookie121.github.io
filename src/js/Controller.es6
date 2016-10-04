import {KeyView} from './KeyView.es6';
import {Player} from './Player.es6';
import {EnemyManager} from './EnemyManager.es6';
import {CanvasView} from './CanvasView.es6';
import {CollisionManager} from './CollisionManager.es6';
import {BulletManager} from './BulletManager.es6';

class Controller
{
    //Controller constructor (everything starts here)
    constructor()
    {
        this.m_Player = new Player();
        this.m_CanvasView = new CanvasView();
        this.m_EnemyManager = new EnemyManager();
        this.m_CollisionManager = new CollisionManager();
        this.m_BulletManager = new BulletManager();
        this.m_KeyView = new KeyView(this);
        this.m_KeyView.m_KeyListener = this.update;
        this.m_KeyView.m_KeyListener.bind(this);//callback
        this.loop();
    }

    //controller update
    update(a_Keys, a_Self)
    {
        //reset game
        if(a_Self.m_Player.m_State == "Dead") {
            if(a_Keys.space) {
                console.log("space");
                a_Self.m_EnemyManager = null;
                a_Self.m_BulletManager = null;
                a_Self.m_CollisionManager = null;
                a_Self.m_Player = null;
                a_Self.m_Player = new Player();
                a_Self.m_EnemyManager = new EnemyManager();
                a_Self.m_CollisionManager = new CollisionManager();
                a_Self.m_BulletManager = new BulletManager();
                a_Self.loop();
            }
        }
        //Move player
        else
            a_Self.m_Player.move(a_Keys, a_Self.m_BulletManager);
    }

    loop()
    {
        if(this.m_Player.m_State != "Dead") {
            //clear canvas before filling
            this.m_CanvasView.clearDraw();
            const enemies = this.m_EnemyManager.m_Enemies;
            const player = this.m_Player;
            self = this;


            this.m_Player.update();

            //update enemymanager loop over enemies to draw them
            this.m_EnemyManager.update(this.m_BulletManager, player);
            for (let i in enemies) {
                const enemy = enemies[i];
                this.m_CanvasView.drawRect(enemy.m_Position, enemy.m_Dimension, enemy.m_FillStyle);
            }

            //update bulletmanager loop over bullets to draw them
            this.m_BulletManager.update();
            for (let l in this.m_BulletManager.m_Bullets) {
                const bullet = this.m_BulletManager.m_Bullets[l];
                this.m_CanvasView.drawRect(bullet.m_Position, bullet.m_Dimension, bullet.m_FillStyle);
            }

            //update collisionmanager
            this.m_CollisionManager.update(player, enemies, this.m_BulletManager);

            //draw functions
            this.m_CanvasView.drawRect(player.m_Position, player.m_Dimension, player.m_FillStyle);
            this.m_CanvasView.drawScore(player.m_Score);
            this.m_CanvasView.drawHealth(player.m_Health);

            window.requestAnimationFrame(function () {
                self.loop();
            });
        } else
        {
            this.m_CanvasView.drawText();
        }
    }
}

export {Controller}