class BulletManager
{
    constructor()
    {
        this.m_Bullets = [];
    }

    update()
    {
        for(let i in this.m_Bullets)
        {
            const bullet = this.m_Bullets[i];
            if(!bullet.m_Alive)
                this.m_Bullets.splice(i, 1);
            bullet.update();
        }
    }
}

export {BulletManager};