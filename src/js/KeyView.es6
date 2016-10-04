

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
    }

    //key down function
    onKeyDown(e, a)
    {
        const keys = {
            left: e.keyCode === 37 || e.keyCode === 65,     //true or false
            right: e.keyCode === 39 || e.keyCode === 68,    //true or false
            up: e.keyCode === 38 || e.keyCode === 87,       //true or false
            down: e.keyCode === 40 || e.keyCode === 83,     //true or false
            space: e.keyCode === 32                         //true or false
        };
        this.m_KeyListener(keys, a);
    }

    //key down function
    onKeyUp(e, a)
    {
        let keys = {};
        if(e.keyCode === 37 || e.keyCode === 65)
            keys["left"] = false;
        if(e.keyCode === 39 || e.keyCode === 68)
            keys["right"] = false;
        if(e.keyCode === 38 || e.keyCode === 87)
            keys["up"] = false;
        if(e.keyCode === 40 || e.keyCode === 83)
            keys["down"] = false;
        if(e.keyCode === 32)
            keys["space"] = false;
        this.m_KeyListener(keys, a);
    }
}

export {KeyView};