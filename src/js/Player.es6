import {Bullet} from "./Bullet.es6";

class Player
{
    constructor(a_MatterEngine)
    {
        this.m_Position = { x: 200, y: 200};
        this.m_MatterEngine = a_MatterEngine;
        this.m_Matter =  this.m_MatterEngine.m_Matter;
        this.m_Width = 20;
        this.m_Height = 20;
        this.m_MoveForce = 0.003;
        this.m_State = "Idle";
        this.m_Bullets = [];
        this.m_FillStyle = "rgb(200,200,28)";
        this.m_Body = this.m_Matter.Bodies.polygon(this.m_Position.x, this.m_Position.y, 3, this.m_Height,
            {
                friction: false, airFriction: false, gravity: false,
                render: {
                    sprite: {
                        texture: '../a  ssets/images/superthumb.jpg',
                        xScale: 2,
                        yScale: 2
                    }
                }
            } );
        console.log(this.m_Body);
        this.m_CanApplyForce = true;
        this.m_RotateForce = 0.1;
    }

    length(a_Vector)
    {
        const length = Math.sqrt(a_Vector.x* a_Vector.x + a_Vector.y*a_Vector.y);
        return length;
    }

    update()
    {

        if(this.m_Body.position.x < 0)
            this.m_Matter.Body.setPosition(this.m_Body, {x: 499, y: this.m_Body.position.y});
        else if(this.m_Body.position.x > 500)
            this.m_Matter.Body.setPosition(this.m_Body, {x: 0, y: this.m_Body.position.y});
        else if(this.m_Body.position.y < 0)
            this.m_Matter.Body.setPosition(this.m_Body, {x: this.m_Body.position.x, y: 499});
        else if(this.m_Body.position.y > 500)
            this.m_Matter.Body.setPosition(this.m_Body, {x: this.m_Body.position.x, y: 0});

    }

    move(a_Keys)
    {
        //angle is in radians
        let xForce = Math.cos(this.m_Body.angle);
        let yForce = Math.sin(this.m_Body.angle);
        //scale vector to unit vector
        let mag = Math.sqrt((xForce*xForce) + (yForce*yForce));
        //negative number for triangle's top * 0.001 = divide by 1000
        let forceToApply =
        {
            x: -(xForce / mag) * 0.001,
            y: -(yForce / mag) * 0.001
        };

        if(a_Keys.right && this.m_CanApplyForce)
            this.m_Matter.Body.rotate(this.m_Body, this.m_RotateForce);
        if(a_Keys.left && this.m_CanApplyForce)
            this.m_Matter.Body.rotate(this.m_Body, -this.m_RotateForce);

        if(a_Keys.up)
        {
            //Apply force to body
            this.m_Matter.Body.applyForce(this.m_Body, this.m_Body.position, forceToApply);
        }
        if(a_Keys.space)
        {
            this.shootBullet(xForce, yForce, forceToApply);
        }
    }

    shootBullet(a_XForce, a_YForce, a_ForceToApply)
    {
        let bulletPosition =
        {
            x: (-(a_XForce * 10) + this.m_Body.position.x),
            y: (-(a_YForce * 10) + this.m_Body.position.y),
        };
        this.m_Bullets.push(new Bullet(bulletPosition, this.m_Body.angle, a_ForceToApply,  this.m_MatterEngine ));
    }

}

export {Player};