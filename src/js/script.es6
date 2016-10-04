import {CollisionManager} from './CollisionManager.es6';
import {Controller} from './Controller.es6';
import {EnemyManager} from './EnemyManager.es6'

function init()
{
    const m_Controller = new Controller();
    const m_CollisionManager = new CollisionManager(m_Controller.m_MatterEngine);
    const m_EnemyManager = new EnemyManager(m_Controller.m_MatterEngine);
    const m_Player = m_Controller.m_Player;
    loop(m_Controller, m_CollisionManager, m_EnemyManager, m_Player);
}

function loop(a_Controller, a_CollisionManager, a_EnemyManager, a_Player)
{
    //m_Controller.m_Player.update();
    //console.log("controler", a_Controller, a_EnemyManager);
    a_Controller.m_Player.update();
    a_EnemyManager.update(a_Player);
    a_CollisionManager.update(a_Player, a_EnemyManager);
    window.requestAnimationFrame(function(){
        loop(a_Controller, a_CollisionManager, a_EnemyManager, a_Player);
    });
}

document.addEventListener("DOMContentLoaded", ()=> {
    init();
});