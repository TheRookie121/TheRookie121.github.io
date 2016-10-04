class Bullet
{
    constructor(a_Position, a_Angle, a_ForceToApply, a_MatterEngine)
    {
        this.m_Position = a_Position;
        this.m_Width = 20;
        this.m_Height = 20;
        this.m_BulletForce = {x: a_ForceToApply.x, y: a_ForceToApply.y };
        this.m_Bullets = [];
        this.m_FillStyle = "rgb(200,200,28)";
        this.m_Body = a_MatterEngine.m_Matter.Bodies.rectangle(this.m_Position.x, this.m_Position.y, this.m_Width, 3,
            {
                friction: false, airFriction: false, gravity: false,
                render: {
                    sprite: {
                        texture: '../assets/images/superthumb.jpg',
                        xScale: 2,
                        yScale: 2
                    }
                }
            } );
        a_MatterEngine.m_Matter.Body.rotate(this.m_Body, a_Angle);
        a_MatterEngine.m_Matter.World.add(a_MatterEngine.engine.world, this.m_Body);
        a_MatterEngine.m_Matter.Body.applyForce(this.m_Body, this.m_Position, { x: this.m_BulletForce.x * 10, y: this.m_BulletForce.y * 10} );
        this.m_CanApplyForce = true;
    }

    draw(a_Context)
    {

    }

    update()
    {
    }
}


export {Bullet};