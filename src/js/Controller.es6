import {KeyView} from './KeyView.es6';
import {Player} from './Player.es6';

class Controller
{
    constructor()
    {
        this.m_MatterEngine = new MatterEngine();
        this.m_Player = new Player(this.m_MatterEngine); //CHANGE TO m_MATTERENGINE
        this.m_KeyView = new KeyView(this);
        this.m_MatterEngine.World.add(this.m_MatterEngine.engine.world, this.m_Player.m_Body);
        this.m_KeyView.m_KeyListener = this.update;
        this.m_KeyView.m_KeyListener.bind(this);//callback
    }

    update(a_Keys, a_Self)
    {
        a_Self.m_Player.move(a_Keys, a_Self.m_MatterEngine);
    }

    loop()
    {

    }
}

export {Controller}