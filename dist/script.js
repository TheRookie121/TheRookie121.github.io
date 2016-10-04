!function e(t,i,n){function o(s,a){if(!i[s]){if(!t[s]){var l="function"==typeof require&&require;if(!a&&l)return l(s,!0);if(r)return r(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var h=i[s]={exports:{}};t[s][0].call(h.exports,function(e){var i=t[s][1][e];return o(i?i:e)},h,h.exports,e,t,i,n)}return i[s].exports}for(var r="function"==typeof require&&require,s=0;s<n.length;s++)o(n[s]);return o}({1:[function(e,t,i){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(i,"__esModule",{value:!0});var o=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),r=function(){function e(t,i){n(this,e),this.m_Position={x:t.x+i.width/2-5,y:t.y},this.m_Dimension={width:10,height:10},this.m_Rect={x:this.m_Position.x,y:this.m_Position.y,width:this.m_Dimension.width,height:this.m_Dimension.height},this.m_FillStyle="rgb(200,200,28)",this.m_CanApplyForce=!0,this.m_Alive=!0,this.m_XSpeed=4*Math.random()-2,this.m_YSpeed=5*Math.random()}return o(e,[{key:"setRect",value:function(){this.m_Rect={x:this.m_Position.x,y:this.m_Position.y,width:this.m_Dimension.width,height:this.m_Dimension.height}}},{key:"update",value:function(){this.setRect()}}]),e}();i.Bullet=r},{}],2:[function(e,t,i){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(i,"__esModule",{value:!0});var o=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),r=function(){function e(){n(this,e),this.m_Bullets=[]}return o(e,[{key:"update",value:function(){for(var e in this.m_Bullets){var t=this.m_Bullets[e];t.m_Alive||this.m_Bullets.splice(e,1),t.update()}}}]),e}();i.BulletManager=r},{}],3:[function(e,t,i){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(i,"__esModule",{value:!0});var o=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),r=function(){function e(){n(this,e),this.m_Canvas=document.getElementById("m_Canvas"),this.m_Context=this.m_Canvas.getContext("2d")}return o(e,[{key:"clearDraw",value:function(){this.m_Context.clearRect(0,0,1280,720)}},{key:"drawRect",value:function(e,t,i,n){this.m_Context.fillStyle=i,this.m_Context.fillRect(e.x,e.y,t.width,t.height)}},{key:"drawArc",value:function(e,t,i,n){this.m_Context.fillStyle=i,this.m_Context.beginPath(),this.m_Context.arc(e.x,e.y,20,0,2*Math.PI,!1),this.m_Context.fillStyle="green",this.m_Context.fill(),this.m_Context.lineWidth=5,this.m_Context.strokeStyle="#003300",this.m_Context.stroke()}},{key:"drawScore",value:function(e){this.m_Context.font="20px Helvetica",this.m_Context.fillText(e,10,20)}},{key:"drawHealth",value:function(e){for(var t=0;t<e;t++)this.m_Context.fillRect(560+20*t,700,10,10)}},{key:"drawText",value:function(e){this.m_Context.font="30px Helvetica",this.m_Context.fillText("GAME OVER",220,320),this.m_Context.fillText("High Score: "+e,160,360),this.m_Context.fillText("Press SPACEBAR to restart",120,400)}}]),e}();i.CanvasView=r},{}],4:[function(e,t,i){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(i,"__esModule",{value:!0});var o=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),r=function(){function e(){n(this,e)}return o(e,[{key:"AABB",value:function(e,t){return e.x<=t.x+t.width&&t.x<=e.x+e.width&&e.y<=t.y+t.height&&t.y<=e.y+e.height}},{key:"update",value:function(e,t,i){var n=i.m_Bullets;for(var o in t){var r=t[o];this.AABB(e.m_Rect,r.m_Rect)&&"Active"==e.m_State&&(t.splice(o,1),e.hit())}for(var s in n){var a=n[s];"EnemyBullet"==a.m_Name&&this.AABB(e.m_Rect,a.m_Rect)&&"Active"==e.m_State&&(n.splice(s,1),e.hit())}for(var l in t){var u=t[l];for(var h in n){var m=n[h];"PlayerBullet"==m.m_Name&&this.AABB(u.m_Rect,m.m_Rect)&&(t.splice(l,1),n.splice(h,1),e.enemyKilled())}}}}]),e}();i.CollisionManager=r},{}],5:[function(e,t,i){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(i,"__esModule",{value:!0}),i.Controller=void 0;var o=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),r=e("./KeyView.es6"),s=e("./Player.es6"),a=e("./EnemyManager.es6"),l=e("./CanvasView.es6"),u=e("./CollisionManager.es6"),h=e("./BulletManager.es6"),m=function(){function e(){n(this,e),this.m_Player=new s.Player,this.m_CanvasView=new l.CanvasView,this.m_EnemyManager=new a.EnemyManager,this.m_CollisionManager=new u.CollisionManager,this.m_BulletManager=new h.BulletManager,this.m_KeyView=new r.KeyView(this),this.m_KeyView.m_KeyListener=this.update,this.m_KeyView.m_KeyListener.bind(this),this.loop()}return o(e,[{key:"update",value:function(e,t){"Dead"==t.m_Player.m_State?e.space&&(console.log("space"),t.m_EnemyManager=null,t.m_BulletManager=null,t.m_CollisionManager=null,t.m_Player=null,t.m_Player=new s.Player,t.m_EnemyManager=new a.EnemyManager,t.m_CollisionManager=new u.CollisionManager,t.m_BulletManager=new h.BulletManager,t.loop()):t.m_Player.move(e,t.m_BulletManager)}},{key:"loop",value:function(){if("Dead"!=this.m_Player.m_State){this.m_CanvasView.clearDraw();var e=this.m_EnemyManager.m_Enemies,t=this.m_Player;self=this,this.m_Player.update(this.m_BulletManager),this.m_EnemyManager.update(this.m_BulletManager,t);for(var i in e){var n=e[i];this.m_CanvasView.drawRect(n.m_Position,n.m_Dimension,n.m_FillStyle)}this.m_BulletManager.update();for(var o in this.m_BulletManager.m_Bullets){var r=this.m_BulletManager.m_Bullets[o];this.m_CanvasView.drawRect(r.m_Position,r.m_Dimension,r.m_FillStyle)}this.m_CollisionManager.update(t,e,this.m_BulletManager),this.m_CanvasView.drawRect(t.m_Position,t.m_Dimension,t.m_FillStyle),this.m_CanvasView.drawScore(t.m_Score),this.m_CanvasView.drawHealth(t.m_Health),window.requestAnimationFrame(function(){self.loop()})}else this.m_CanvasView.drawText()}}]),e}();i.Controller=m},{"./BulletManager.es6":2,"./CanvasView.es6":3,"./CollisionManager.es6":4,"./EnemyManager.es6":9,"./KeyView.es6":11,"./Player.es6":12}],6:[function(e,t,i){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(i,"__esModule",{value:!0});var o=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),r=function(){function e(t){n(this,e),this.m_Position=t,this.m_Dimension={width:40,height:40},this.m_Rect={x:this.m_Position.x,y:this.m_Position.y,width:this.m_Dimension.width,height:this.m_Dimension.height},this.m_ShootTimer=0,this.m_TriggerTimer=0,this.m_BulletCounter=0,this.m_CanShoot=!0}return o(e,[{key:"sub",value:function(e,t){var i={x:e.x-t.x,y:e.y-t.y};return i}},{key:"normalize",value:function(e){var t=Math.sqrt(e.x*e.x+e.y*e.y),i={x:e.x/t,y:e.y/t};return i}},{key:"setRect",value:function(){this.m_Rect={x:this.m_Position.x,y:this.m_Position.y,width:this.m_Dimension.width,height:this.m_Dimension.height}}}]),e}();i.Enemy=r},{}],7:[function(e,t,i){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(i,"__esModule",{value:!0}),i.EnemyBullet=void 0;var s=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),a=function e(t,i,n){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,i);if(void 0===o){var r=Object.getPrototypeOf(t);return null===r?void 0:e(r,i,n)}if("value"in o)return o.value;var s=o.get;if(void 0!==s)return s.call(n)},l=e("./Bullet.es6"),u=function(e){function t(e,i){n(this,t);var r=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,i));return r.m_Name="EnemyBullet",r}return r(t,e),s(t,[{key:"update",value:function(){a(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"setRect",this).call(this),this.m_Position.x+=this.m_XSpeed,this.m_Position.y+=this.m_YSpeed,this.m_Position.x-(this.m_Dimension.width+20)>640?this.m_Alive=!1:this.m_Position.x+(this.m_Dimension.width-20)<0?this.m_Alive=!1:this.m_Position.y-(this.m_Dimension.height+20)>720?this.m_Alive=!1:this.m_Position.y+(this.m_Dimension.height-20)<0&&(this.m_Alive=!1)}}]),t}(l.Bullet);i.EnemyBullet=u},{"./Bullet.es6":1}],8:[function(e,t,i){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(i,"__esModule",{value:!0}),i.EnemyCircle=void 0;var s=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),a=function e(t,i,n){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,i);if(void 0===o){var r=Object.getPrototypeOf(t);return null===r?void 0:e(r,i,n)}if("value"in o)return o.value;var s=o.get;if(void 0!==s)return s.call(n)},l=e("./Enemy.es6"),u=function(e){function t(e){n(this,t);var i=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return i.m_FillStyle="rgb(145,145,0)",i.m_Type="circle",i}return r(t,e),s(t,[{key:"update",value:function(e,i){a(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"setRect",this).call(this);var n=this.m_Position,o=i.m_Position,r=a(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"sub",this).call(this,n,o),s=a(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"normalize",this).call(this,r);this.m_VelocityVector={x:1*-s.x,y:1*-s.y},this.m_Position.x+=this.m_VelocityVector.x,this.m_Position.y+=this.m_VelocityVector.y}}]),t}(l.Enemy);i.EnemyCircle=u},{"./Enemy.es6":6}],9:[function(e,t,i){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(i,"__esModule",{value:!0}),i.EnemyManager=void 0;var o=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),r=e("./EnemyCircle.es6"),s=e("./EnemyRect.es6"),a=function(){function e(){n(this,e),this.m_EnemySpawnTimer={rect:0,circle:0},this.m_Enemies=[]}return o(e,[{key:"update",value:function(e,t){this.m_EnemySpawnTimer.rect++,this.m_EnemySpawnTimer.circle++,200==this.m_EnemySpawnTimer.rect&&(this.spawnRectEnemy(),this.m_EnemySpawnTimer.rect=0),100==this.m_EnemySpawnTimer.circle&&(this.spawnCircleEnemy(),this.m_EnemySpawnTimer.circle=0);for(var i in this.m_Enemies){var n=this.m_Enemies[i];n.update(e,t)}}},{key:"spawnRectEnemy",value:function(){var e=(10*Math.random(),{x:0,y:0});e.x=500*Math.random(),e.y=500*Math.random(),this.m_Enemies.push(new s.EnemyRect(e))}},{key:"spawnCircleEnemy",value:function(){var e=(10*Math.random(),{x:0,y:0});e.x=500*Math.random(),e.y=500*Math.random(),this.m_Enemies.push(new r.EnemyCircle(e))}}]),e}();i.EnemyManager=a},{"./EnemyCircle.es6":8,"./EnemyRect.es6":10}],10:[function(e,t,i){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(i,"__esModule",{value:!0}),i.EnemyRect=void 0;var s=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),a=function e(t,i,n){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,i);if(void 0===o){var r=Object.getPrototypeOf(t);return null===r?void 0:e(r,i,n)}if("value"in o)return o.value;var s=o.get;if(void 0!==s)return s.call(n)},l=e("./Enemy.es6"),u=e("./EnemyBullet.es6"),h=function(e){function t(e){n(this,t);var i=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return i.m_FillStyle="rgb(145,0,0)",i.m_Bullets=[],i.m_Type="rect",i}return r(t,e),s(t,[{key:"shootBullet",value:function(e){if(this.m_ShootTimer++,this.m_BulletCounter>=20&&(this.m_CanShoot=!1,this.m_ShootTimer=0,this.m_BulletCounter=0),100==this.m_ShootTimer&&(this.m_CanShoot=!0),this.m_CanShoot&&(this.m_TriggerTimer++,this.m_TriggerTimer>=10)){var t=new u.EnemyBullet({x:this.m_Position.x,y:this.m_Position.y+10},this.m_Dimension);e.m_Bullets.push(t),this.m_TriggerTimer=0,this.m_BulletCounter++}}},{key:"update",value:function(e){a(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"setRect",this).call(this),this.shootBullet(e)}}]),t}(l.Enemy);i.EnemyRect=h},{"./Enemy.es6":6,"./EnemyBullet.es6":7}],11:[function(e,t,i){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(i,"__esModule",{value:!0});var o=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),r=function(){function e(t){var i=this;n(this,e),window.onkeydown=function(e){i.onKeyDown(e,t)},window.onkeyup=function(e){i.onKeyUp(e,t)},this.m_KeyListener,this.m_Keys={}}return o(e,[{key:"onKeyDown",value:function(e,t){37!==e.keyCode&&65!==e.keyCode||(this.m_Keys.left=!0),39!==e.keyCode&&68!==e.keyCode||(this.m_Keys.right=!0),38!==e.keyCode&&87!==e.keyCode||(this.m_Keys.up=!0),40!==e.keyCode&&83!==e.keyCode||(this.m_Keys.down=!0),32===e.keyCode&&(this.m_Keys.space=!0),this.m_KeyListener(this.m_Keys,t)}},{key:"onKeyUp",value:function(e,t){37!==e.keyCode&&65!==e.keyCode||(this.m_Keys.left=!1),39!==e.keyCode&&68!==e.keyCode||(this.m_Keys.right=!1),38!==e.keyCode&&87!==e.keyCode||(this.m_Keys.up=!1),40!==e.keyCode&&83!==e.keyCode||(this.m_Keys.down=!1),32===e.keyCode&&(this.m_Keys.space=!1),this.m_KeyListener(this.m_Keys,t)}}]),e}();i.KeyView=r},{}],12:[function(e,t,i){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(i,"__esModule",{value:!0}),i.Player=void 0;var o=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),r=e("./PlayerBullet.es6"),s=function(){function e(){n(this,e),this.m_Position={x:200,y:200},this.m_Dimension={width:20,height:20},this.m_Rect={x:this.m_Position.x,y:this.m_Position.y,width:this.m_Dimension.width,height:this.m_Dimension.height},this.m_Speed=10,this.m_State="Active",this.m_Bullets=[],this.m_FillStyle="rgb(12,66,145)",this.m_CanApplyForce=!0,this.m_StateTimer=0,this.m_Health=3,this.m_Score=0,this.m_EnemiesKilled=0,this.m_ShootTimer=0,this.m_Right=!1,this.m_Left=!1,this.m_Up=!1,this.m_Down=!1,this.m_Space=!1}return o(e,[{key:"enemyKilled",value:function(){this.m_EnemiesKilled++,this.m_Score=1e3*this.m_EnemiesKilled}},{key:"update",value:function(e){this.m_Rect={x:this.m_Position.x,y:this.m_Position.y,width:this.m_Dimension.width,height:this.m_Dimension.height};for(var t in this.m_Bullets){var i=this.m_Bullets[t];i.update()}switch(this.m_Right&&(this.m_Position.x+=this.m_Speed),this.m_Left&&(this.m_Position.x-=this.m_Speed),this.m_Up&&(this.m_Position.y-=this.m_Speed),this.m_Down&&(this.m_Position.y+=this.m_Speed),this.m_Space&&this.shootBullet(e),this.m_State){case"Idle":this.idle();break;case"Active":break;case"Dead":}}},{key:"idle",value:function(){this.m_StateTimer++,this.m_StateTimer>=300&&(this.m_State="Active",this.m_StateTimer=0)}},{key:"hit",value:function(){this.m_Health--,this.m_State="Idle",0==this.m_Health&&(this.m_State="Dead")}},{key:"move",value:function(e,t){e.right?this.m_Right=!0:this.m_Right=!1,e.left?this.m_Left=!0:this.m_Left=!1,e.up?this.m_Up=!0:this.m_Up=!1,e.down?this.m_Down=!0:this.m_Down=!1,e.space?this.m_Space=!0:this.m_Space=!1,this.m_Position.x<0?this.m_Position.x=640:this.m_Position.x>640?this.m_Position.x=0:this.m_Position.y<0?this.m_Position.y=720:this.m_Position.y>720&&(this.m_Position.y=0)}},{key:"shootBullet",value:function(e){this.m_ShootTimer++,this.m_ShootTimer>=3&&(e.m_Bullets.push(new r.PlayerBullet(this.m_Position,this.m_Dimension)),this.m_ShootTimer=0)}}]),e}();i.Player=s},{"./PlayerBullet.es6":13}],13:[function(e,t,i){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(i,"__esModule",{value:!0}),i.PlayerBullet=void 0;var s=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),a=function e(t,i,n){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,i);if(void 0===o){var r=Object.getPrototypeOf(t);return null===r?void 0:e(r,i,n)}if("value"in o)return o.value;var s=o.get;if(void 0!==s)return s.call(n)},l=e("./Bullet.es6"),u=function(e){function t(e,i){n(this,t);var r=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{x:e.x+10,y:e.y},i));return r.m_YSpeed=3,r.m_Name="PlayerBullet",r.m_FillStyle="rgb("+Math.floor(256*Math.random())+","+Math.floor(256*Math.random())+","+Math.floor(256*Math.random())+")",r}return r(t,e),s(t,[{key:"update",value:function(){a(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"setRect",this).call(this),this.m_Position.y-=this.m_YSpeed,this.m_Position.x+=this.m_XSpeed,this.m_Position.x-(this.m_Dimension.width+20)>640?this.m_Alive=!1:this.m_Position.x+(this.m_Dimension.width-20)<0?this.m_Alive=!1:this.m_Position.y-(this.m_Dimension.height+20)>720?this.m_Alive=!1:this.m_Position.y+(this.m_Dimension.height-20)<0&&(this.m_Alive=!1)}}]),t}(l.Bullet);i.PlayerBullet=u},{"./Bullet.es6":1}],14:[function(e,t,i){"use strict";var n=e("./Controller.es6");document.addEventListener("DOMContentLoaded",function(){new n.Controller})},{"./Controller.es6":5}]},{},[14]);
//# sourceMappingURL=script.js.map
