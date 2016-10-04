import {KeyView} from './KeyView.es6';
import {Player} from './Player.es6';
import {EnemyManager} from './EnemyManager.es6';
import {CanvasView} from './CanvasView.es6';

class Controller
{
    constructor()
    {
        this.m_Player = new Player(); //CHANGE TO m_MATTERENGINE
        this.m_KeyView = new KeyView(this);
        this.m_KeyView.m_KeyListener = this.update;
        this.m_KeyView.m_KeyListener.bind(this);//callback
        this.m_CanvasView = new CanvasView();
        this.m_EnemyManager = new EnemyManager();
        this.loop();
    }

    update(a_Keys, a_Self)
    {
        a_Self.m_Player.move(a_Keys);
    }

    loop()
    {
        self = this;
        this.m_Player.update();
        this.m_EnemyManager.update(this.m_Player);
        this.m_CanvasView.draw(this.m_Player.m_Position, this.m_Player.m_Dimension);
        window.requestAnimationFrame(function(){
           self.loop();
        });
    }
}

export {Controller}