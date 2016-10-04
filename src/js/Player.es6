class Player
{
    constructor(a_MatterEngine)
    {
        this.m_Position = { x: 200, y: 200};
        this.m_Dimensions = {width: 20, height: 20};
        this.m_Bullets = [];
        this.m_FillStyle = "rgb(200,200,28)";
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


    }

    move(a_Keys)
    {
        if(a_Keys.right && this.m_CanApplyForce)
        {

        }

        if(a_Keys.left && this.m_CanApplyForce)
        {

        }

        if(a_Keys.space)
        {
            //Apply force to body

        }
    }
}

export {Player};