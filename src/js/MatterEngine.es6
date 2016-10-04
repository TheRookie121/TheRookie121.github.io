/**
 * Created by Brandon on 9/28/2016.
 */

const Matter = require('matter-js');

class MatterEngine
{
    constructor()
    {
        //Matter variables
        this.m_Matter = Matter;
        this.Engine = Matter.Engine;
        this.Render = Matter.Render;
        this.World = Matter.World;
        this.Bodies  = Matter.Bodies;
        this.Body =  Matter.Body;
        this.Bounds = Matter.Bounds;
        this.engine = this.Engine.create();;
        this.render = this.Render.create({
            element: document.body,
            engine: this.engine,
            options: {
                width: 500,
                height: 500,
                pixelRatio: 1,
                background: '#222222',
                wireframeBackground: '#222',
                hasBounds: true,
                enabled: true,
                wireframes: true,
                showSleeping: true,
                showDebug: false,
                showBroadphase: false,
                showBounds: false,
                showVelocity: false,
                showCollisions: false,
                showSeparations: false,
                showAxes: false,
                showPositions: false,
                showAngleIndicator: false,
                showIds: false,
                showShadows: false,
                showVertexNumbers: false,
                showConvexHulls: false,
                showInternalEdges: false,
                showMousePosition: false
            }
        });

        // add all of the bodies to the world
        this.World.add(this.engine.world, []);

        //0 Gravity
        this.engine.world.gravity.y = 0;

        // run the engine
        this.Engine.run(this.engine);

        // run the renderer
        this.Render.run(this.render);

    }
}

export {MatterEngine};