

class KeyView
{
    //KeyView constructor
    constructor(a_Controller)
    {
        //keydown listener
        window.onkeydown = (e) => {
            this.onKeyDown(e, a_Controller);
        }
        window.onkeyup = (e) => {
            this.onKeyUp(e, a_Controller);
        }
        this.m_KeyListener;
        this.m_Keys = {};
    }

    //key down function
    onKeyDown(e, a)
    {
        if(e.keyCode === 37 || e.keyCode === 65)
            this.m_Keys["left"] = true;
        if(e.keyCode === 39 || e.keyCode === 68)
            this.m_Keys["right"] = true;
        if(e.keyCode === 38 || e.keyCode === 87)
            this.m_Keys["up"] = true;
        if(e.keyCode === 40 || e.keyCode === 83)
            this.m_Keys["down"] = true;
        if(e.keyCode === 32)
            this.m_Keys["space"] = true;
        this.m_KeyListener(this.m_Keys, a);
    }

    //key down function
    onKeyUp(e, a)
    {
        let keys = {};
        if(e.keyCode === 37 || e.keyCode === 65)
            this.m_Keys["left"] = false;
        if(e.keyCode === 39 || e.keyCode === 68)
            this.m_Keys["right"] = false;
        if(e.keyCode === 38 || e.keyCode === 87)
            this.m_Keys["up"] = false;
        if(e.keyCode === 40 || e.keyCode === 83)
            this.m_Keys["down"] = false;
        if(e.keyCode === 32)
            this.m_Keys["space"] = false;
        this.m_KeyListener(this.m_Keys, a);
    }
}

export {KeyView};