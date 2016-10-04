/*
update player collide with enemy

axis aligned bounding box

2 boxen die overlappen, en dan iets laten gebeuren
 */

class CollisionManager
{
    constructor()
    {
        //..
    }

    AABB(a_RectA, a_RectB)
    {
        return (a_RectA <= a_RectB.x + a_RectB.width &&
                a_RectB<= a_RectA.x + a_RectA.width &&
                a_RectA <= a_RectB.y + a_RectB.height &&
                a_RectB <= a_RectA.y + a_RectA.height);
    }

    update(a_Player, a_Enemies)
    {
        for(let i in a_Enemies) {

            const enemy = a_Enemies[i];
            if (this.AABB(a_Player.m_Rect, enemy.m_Rect)) {
                a_Enemies.splice(i, 1);
                //player loses 1 life
                //start healthFeedback()
                //wub
            }
        }
    }
}

export {CollisionManager};