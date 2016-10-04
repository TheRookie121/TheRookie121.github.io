

class KeyView
{
    constructor(a_Controller)
    {
        window.onkeydown = (e) => {
            this.onKeyDown(e, a_Controller);
        }
        this.m_KeyListener;
    }

    onKeyDown(e, a)
    {
        console.log(e.keyCode);
        const keys = {
            left: e.keyCode === 37 || e.keyCode === 65,     //true or false
            right: e.keyCode === 39 || e.keyCode === 68,    //true or false
            up: e.keyCode === 38 || e.keyCode === 87,       //true or false
            space: e.keyCode === 32 //true or false
        };
        this.m_KeyListener(keys, a);
    }
}

export {KeyView};