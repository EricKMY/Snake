  (function() {
    var World = {
      Size: {
        width: 20,
        hight: 20
      },

      //產生蘋果位置
      Food_Normal:{
        x: undefined,
        y: undefined,

        Generate: function (snake) {
          var head = snake.head.get(),
              part = snake.body.Part;
          var map = []

          for(var x=0; x<World.Size.width; x++) {
            for(var y=0; y<World.Size.hight; y++) {
              if(x==head.x && y==head.y) {
                continue;
              }
              if(part.length>=0) {
                var pass = true;
                for(var i=part.length; i--;) {
                  if((x==part[i].x && y==part[i].y) || (x==World.Food_SpeedUp.x && y==World.Food_SpeedUp.y) || (x==World.Food_SpeedDown.x && y==World.Food_SpeedDown.y)) {
                    pass = false;
                    break;
                  }
                }
                for(var i=0; i<=I; i++) {
                  if(x==Map[i].position.x && y==Map[i].position.y) {
                    pass = false;
                    break;
                  }
                }
                if(pass) {
                  map.push([x,y]);
                }
              }
              else {
                map.push([x,y]);
              }
            }
          }

          var i = Math.floor(Math.random()*map.length);
          World.Food_Normal.x = map[i][0];
          World.Food_Normal.y = map[i][1];
        }
      },

      //產生閃電位置
      Food_SpeedUp:{
        x: undefined,
        y: undefined,

        Generate: function (snake) {
          var head = snake.head.get(),
              part = snake.body.Part;
          var map = []

          for(var x=0; x<World.Size.width; x++) {
            for(var y=0; y<World.Size.hight; y++) {
              if(x==head.x && y==head.y) {
                continue;
              }
              if(part.length>=0) {
                var pass = true;
                for(var i=part.length; i--;) {
                  if((x==part[i].x && y==part[i].y) || (x==World.Food_Normal.x && y==World.Food_Normal.y) || (x==World.Food_SpeedDown.x && y==World.Food_SpeedDown.y)) {
                    pass = false;
                    break;
                  }
                }
                for(var i=0; i<=I; i++) {
                  if(x==Map[i].position.x && y==Map[i].position.y) {
                    pass = false;
                    break;
                  }
                }
                if(pass) {
                  map.push([x,y]);
                }
              }
              else {
                map.push([x,y]);
              }
            }
          }

          var i = Math.floor(Math.random()*map.length);
          World.Food_SpeedUp.x = map[i][0];
          World.Food_SpeedUp.y = map[i][1];
        }
      },

      //產生蝸牛位置
      Food_SpeedDown:{
        x: undefined,
        y: undefined,

        Generate: function (snake) {
          var head = snake.head.get(),
              part = snake.body.Part;
          var map = []

          for(var x=0; x<World.Size.width; x++) {
            for(var y=0; y<World.Size.hight; y++) {
              if(x==head.x && y==head.y) {
                continue;
              }
              if(part.length>=0) {
                var pass = true;
                for(var i=part.length; i--;) {
                  if((x==part[i].x && y==part[i].y) || (x==World.Food_Normal.x && y==World.Food_Normal.y) || (x==World.Food_SpeedUp.x && y==World.Food_SpeedUp.y)) {
                    pass = false;
                    break;
                  }
                }
                for(var i=0; i<=I; i++) {
                  if(x==Map[i].position.x && y==Map[i].position.y) {
                    pass = false;
                    break;
                  }
                }
                if(pass) {
                  map.push([x,y]);
                }
              }
              else {
                map.push([x,y]);
              }
            }
          }

          var i = Math.floor(Math.random()*map.length);
          World.Food_SpeedDown.x = map[i][0];
          World.Food_SpeedDown.y = map[i][1];
        }
      }

    };

    //障礙物參數
    function Block(a,b) {
      this.position = {
        x:a,
        y:b
      }
    };

    //外掛參數
    var Cheat = 0;

    var aa = 3;

    //地圖一參數
    var I=43;
    var Map = [];
    var M_1 = [[3,0],[7,19],[11,0],[15,19],
               [3,1],[7,18],[11,1],[15,18],
               [3,2],[7,17],[11,2],[15,17],
               [3,3],[7,16],[11,3],[15,16],
               [3,4],[7,15],[11,4],[15,15],
               [3,5],[7,14],[11,5],[15,14],
               [3,6],[7,13],[11,6],[15,13],
               [3,7],[7,12],[11,7],[15,12],
               [3,8],[7,11],[11,8],[15,11],
               [3,9],[7,10],[11,9],[15,10],
               [3,10],[7,9],[11,10],[15,9],];

    //將地圖參數轉換成障礙物
    for(var i=0; i<=I; i++) {
      Map[i] = new Block(M_1[i][0],M_1[i][1]);
    }

    //蟲洞一與第二關地圖參數
    var BlackHole_1 = {
      position: {
        x: 6,
        y: 6
      },

      ChangeMap : function(snake) {
        if(snake.head.x==6 && snake.head.y==6) {
          I = 24;
          var M_2 = [[2,1],[6,3],[10,1],[14,3],[18,1],
                     [2,5],[6,7],[10,5],[14,7],[18,5],
                     [2,9],[6,11],[10,9],[14,11],[18,9],
                     [2,13],[6,15],[10,13],[14,15],[18,13],
                     [2,17],[6,19],[10,17],[14,19],[18,17]];
          for(var i=0; i<=I; i++) {
            Map[i] = new Block(M_2[i][0],M_2[i][1]);
          }
        }
      }
    };

    //蟲洞二與第三關地圖參數
    var BlackHole_2 = {
      position: {
        x: 18,
        y: 18
      },

      ChangeMap : function(snake) {
        if(snake.head.x==18 && snake.head.y==18) {
          I = 54;
          var M_3 = [          //W
                     [2,1],[10,1],[2,17],[18,1],
                     [3,2],[9,2],[11,2],[17,2],
                     [4,3],[8,3],[12,3],[16,3],
                     [5,4],[7,4],[13,4],[15,4],
                     [6,5],[14,5],

                     //I
                     [6,7],[7,7],[8,7],[9,7],[10,7],[11,7],[12,7],[13,7],[14,7],
                     [10,8],[10,9],[10,10],[10,11],[10,12],
                     [6,13],[7,13],[8,13],[9,13],[10,13],[11,13],[12,13],[13,13],[14,13],

                     //N
                     [6,15],[6,16],[6,17],[6,18],
                     [14,15],[14,16],[14,17],[14,18],
                     [7,15],[8,16],[9,16],[10,17],[11,17],[12,18]
                   ];

                for(var i=0; i<=I; i++) {
                 Map[i] = new Block(M_3[i][0],M_3[i][1]);
             }
          }
        }
    };

    //獎盃參數
    var Trophy = {
      position: {
        x: 10,
        y: 15
      },

      Win : function(snake) {
        document.write('<img src="images/win.jpg">' + 'score:' + Math.floor(Total));
        var audio = document.createElement("audio");
        audio.src = "sounds/GameOver.mp3";
        audio.play();
      }
    };

    var Total = 0;    //總得分
    var Points = 100; //蘋果分數

    function Score() {
      this.int = [1,1,1,1,1,1];
      this.total = Total;
    };

    function Plus() {
      this.int = [0,0,0];
      this.points = Points;
    }

    //將數字轉成矩正
    function IntegerPicture(score) {
      var x_5 = Total/100000;
      score.int[5] = Math.floor(x_5);
      var x_4 = (Total - 100000*score.int[5])/10000;
      score.int[4] = Math.floor(x_4);
      var x_3 = (Total - 100000*score.int[5] - 10000*score.int[4])/1000;
      score.int[3] = Math.floor(x_3);
      var x_2 = (Total - 100000*score.int[5] - 10000*score.int[4] - 1000*score.int[3])/100;
      score.int[2] = Math.floor(x_2);
      var x_1 = (Total - 100000*score.int[5] - 10000*score.int[4] - 1000*score.int[3] - 100*score.int[2])/10;
      score.int[1] = Math.floor(x_1);
      var x_0 = (Total - 100000*score.int[5] - 10000*score.int[4] - 1000*score.int[3] - 100*score.int[2] - 10*score.int[1]);
      score.int[0] = Math.floor(x_0);

    };

    //將數字轉成矩正
    function PlusArry(plus) {
      var x_2 = Points/100;
      plus.int[2] = Math.floor(x_2);
      var x_1 = (Points - 100*plus.int[2])/10;
      plus.int[1] = Math.floor(x_1);
      var x_0 = (Points - 100*plus.int[2] - 10*plus.int[1]);
      plus.int[0] = Math.floor(x_0);
    };

    var Speed = 1;

    var Center = {
      x:9,
      y:9    };

    var Direction = {
      up:1,
      down:-1,
      right:2,
      left:-2
    };

    //有關蛇的所有判定
    function Snake() {
      var self = this;

      function Head() {
        this.x = 2;
        this.y = 10;
        this.direction = undefined;

        this.get=function(){
          return {
            x:this.x,
            y:this.y
          }
        };

        //移動判斷
        this.Move = function(direction) {
          if(!direction){
              return true;
          }

          var head=this.get();

          if(direction + this.direction == 0) {
            direction = this.direction;
          }
            this.direction=direction;

            switch (direction) {
              case Direction.up:
                this.y--;
                break;
              case Direction.down:
                this.y++;
                break;
              case Direction.right:
                this.x++;
                break;
              case Direction.left:
                this.x--;
                break;
            }

          if(Eat_normal(this.x, this.y)) {
            World.Food_Normal.Generate(self);
            self.body.Increase(head);
            Total = Total + Points;
            var audio = document.createElement("audio");
            audio.src = "sounds/Faster.mp3";
            audio.play();
          }else if(Eat_SpeedUp(this.x, this.y)) {
            World.Food_SpeedUp.Generate(self);
            self.body.Move(head);
            Speed *= 0.7;
            Points *= 1.3;
            var audio = document.createElement("audio");
            audio.src = "sounds/electric-drill-3.mp3";
            audio.play();
          }else if(Eat_SpeedDown(this.x, this.y)) {
            World.Food_SpeedDown.Generate(self);
            self.body.Move(head);
            Speed *= 1.3;
            Points *= 0.7;
            var audio = document.createElement("audio");
            audio.src = "sounds/Slower.mp3";
            audio.play();
          }else if (HitWall(this.x,this.y) || HitSelf(this.x,this.y) || HitBlock(this.x,this.y)) {
            Die();
            return false;
          }else {
            self.body.Move(head);
          }
          return true;
        };

        //吃到東西判斷
        function Eat_normal(x,y) {
          if(x == World.Food_Normal.x && y == World.Food_Normal.y) {
            return true;
          }else {
            return false;
          }
        };

        //吃到加速判斷
        function Eat_SpeedUp(x,y) {
          if(x == World.Food_SpeedUp.x && y == World.Food_SpeedUp.y) {
            return true;
          }else {
            return false;
          }
        };

        //吃到減速判斷
        function Eat_SpeedDown(x,y) {
          if(x == World.Food_SpeedDown.x && y == World.Food_SpeedDown.y) {
            return true;
          }else {
            return false;
          }
        };

        //撞到邊界判斷
        function HitWall(x,y) {
          if (x<0 || y<0 || x==World.Size.width || y==World.Size.hight) {
            return true;
          }else {
            return false;
          }
        };

        //撞到自己判斷
        function HitSelf(x,y) {
          var part = self.body.Part;

          for (var i=0; i<part.length; i++) {
            if((x==part[i].x && y==part[i].y) && !Cheat) {
              return true;
            }
          }
          return false;
        };

        //撞到障礙物判斷
        function HitBlock(x,y) {
          for(var i=0; i<=I; i++) {
            if((x==Map[i].position.x && y==Map[i].position.y) && !Cheat) {
              return true;
            }
          }
          return false;
        };

      };


      function Body() {
        this.Part = [];

        this.Move = function(head) {
          if(this.Part.length>0){
              this.Part.pop();
              this.Increase(head);
          }
        };

        this.Increase = function(head) {
          this.Part.unshift(head);
        };
      }

      //死亡所產生的動作
      function Die() {
      document.write('<img src="images/DIE.png">' + 'score:' + Math.floor(Total));
      var audio = document.createElement("audio");
      audio.src = "sounds/GameOver.mp3";
      audio.play();
    }



      this.head = new Head();
      this.body = new Body();
    }

    function initial() {
      var snake = new Snake();
      var score = new Score();
      var plus  = new Plus();
      World.Food_Normal.Generate(snake);
      World.Food_SpeedUp.Generate(snake);
      World.Food_SpeedDown.Generate(snake);
      var ctx = document.querySelector('canvas').getContext('2d');

      //顯示所有遊戲中會碰到的東西
      function drawSnake(snake) {
        ctx.clearRect(0,0,200*aa,200*aa);
        var head = snake.head;
        if (!Cheat) {
          ctx.fillStyle = 'black'; //蛇的顏色
        }else {
          ctx.fillStyle = 'red'; //蛇的顏色
        }
        ctx.fillRect(head.x*10*aa,head.y*10*aa,10*aa,10*aa);
        var body = snake.body.Part;
        for(var i = body.length;i--;) {
            ctx.fillRect(body[i].x*10*aa,body[i].y*10*aa,10*aa,10*aa);
          }

        var img = document.getElementById("Apple");  //一般食物
        ctx.drawImage(img,World.Food_Normal.x*10*aa,World.Food_Normal.y*10*aa,10*aa,10*aa);

        var img = document.getElementById("Thunder");  //加速
        ctx.drawImage(img,World.Food_SpeedUp.x*10*aa,World.Food_SpeedUp.y*10*aa,10*aa,10*aa);

        var img = document.getElementById("Snail");  //減速
        ctx.drawImage(img,World.Food_SpeedDown.x*10*aa,World.Food_SpeedDown.y*10*aa,10*aa,10*aa);

        if (Total >= 100) {
          var img = document.getElementById("BlackHole");
          ctx.drawImage(img,BlackHole_1.position.x*10*aa,BlackHole_1.position.y*10*aa,10*aa,10*aa);
          if (head.x==BlackHole_1.position.x && head.y==BlackHole_1.position.y) {
            BlackHole_1.position.x = 100;
            BlackHole_1.position.y = 100;
            BlackHole_1.ChangeMap(snake);
            World.Food_Normal.Generate(snake);
            World.Food_SpeedUp.Generate(snake);
            World.Food_SpeedDown.Generate(snake);
          }
        }

        if ((Total>=200) && (BlackHole_1.position.x==100 && BlackHole_1.position.y==100)) {
          var img = document.getElementById("BlackHole");
          ctx.drawImage(img,BlackHole_2.position.x*10*aa,BlackHole_2.position.y*10*aa,10*aa,10*aa);
          if (head.x==BlackHole_2.position.x && head.y==BlackHole_2.position.y) {
            BlackHole_2.position.x = 100;
            BlackHole_2.position.y = 100;
            BlackHole_2.ChangeMap(snake);
            World.Food_Normal.Generate(snake);
            World.Food_SpeedUp.Generate(snake);
            World.Food_SpeedDown.Generate(snake);
          }
        }

        if ((Total>=300) && (BlackHole_2.position.x==100 && BlackHole_2.position.y==100)) {
          var img = document.getElementById("Trophy");
          ctx.drawImage(img,Trophy.position.x*10*aa,Trophy.position.y*10*aa,10*aa,10*aa);
          if (head.x==Trophy.position.x && head.y==Trophy.position.y) {
            Trophy.Win(snake);
          }
        }

        //障礙物
        for(var i=0; i<=I; i++) {
          var img = document.getElementById("Wall");
          ctx.drawImage(img,Map[i].position.x*10*aa,Map[i].position.y*10*aa,10*aa,10*aa);
        }
      }

      //顯示總分
      function drawScore(score) {
        IntegerPicture(score);
        for (var i=0; i<6; i++) {
          switch (score.int[i]) {
            case 0:
              var img = document.getElementById("INT_0");
              ctx.drawImage(img,830-15*i*aa,600-15*aa,15*aa,15*aa);
              break;

            case 1:
              var img = document.getElementById("INT_1");
              ctx.drawImage(img,830-15*i*aa,600-15*aa,15*aa,15*aa);
              break;

            case 2:
              var img = document.getElementById("INT_2");
              ctx.drawImage(img,830-15*i*aa,600-15*aa,15*aa,15*aa);
              break;

            case 3:
              var img = document.getElementById("INT_3");
              ctx.drawImage(img,830-15*i*aa,600-15*aa,15*aa,15*aa);
              break;

            case 4:
              var img = document.getElementById("INT_4");
              ctx.drawImage(img,830-15*i*aa,600-15*aa,15*aa,15*aa);
              break;

            case 5:
              var img = document.getElementById("INT_5");
              ctx.drawImage(img,830-15*i*aa,600-15*aa,15*aa,15*aa);
              break;

            case 6:
              var img = document.getElementById("INT_6");
              ctx.drawImage(img,830-15*i*aa,600-15*aa,15*aa,15*aa);
              break;

            case 7:
              var img = document.getElementById("INT_7");
              ctx.drawImage(img,830-15*i*aa,600-15*aa,15*aa,15*aa);
              break;

            case 8:
              var img = document.getElementById("INT_8");
              ctx.drawImage(img,830-15*i*aa,600-15*aa,15*aa,15*aa);
              break;

            case 9:
              var img = document.getElementById("INT_9");
              ctx.drawImage(img,830-15*i*aa,600-15*aa,15*aa,15*aa);
              break;
          }
        }
      }

      //顯示蘋果目前分數
      function drawPoints(plus) {
        var img = document.getElementById("Apple");
        ctx.drawImage(img,600,450,15*aa,15*aa);

        PlusArry(plus);
          for(var i=0; i<3; i++) {
            switch (plus.int[i]) {
              case 0:
                var img = document.getElementById("INT_0");
                ctx.drawImage(img,800-15*i*aa,500-15*aa,15*aa,15*aa);
                break;

              case 1:
                var img = document.getElementById("INT_1");
                ctx.drawImage(img,800-15*i*aa,500-15*aa,15*aa,15*aa);
                break;

              case 2:
                var img = document.getElementById("INT_2");
                ctx.drawImage(img,800-15*i*aa,500-15*aa,15*aa,15*aa);
                break;

              case 3:
                var img = document.getElementById("INT_3");
                ctx.drawImage(img,800-15*i*aa,500-15*aa,15*aa,15*aa);
                break;

              case 4:
                var img = document.getElementById("INT_4");
                ctx.drawImage(img,800-15*i*aa,500-15*aa,15*aa,15*aa);
                break;

              case 5:
                var img = document.getElementById("INT_5");
                ctx.drawImage(img,800-15*i*aa,500-15*aa,15*aa,15*aa);
                break;

              case 6:
                var img = document.getElementById("INT_6");
                ctx.drawImage(img,800-15*i*aa,500-15*aa,15*aa,15*aa);
                break;

              case 7:
                var img = document.getElementById("INT_7");
                ctx.drawImage(img,800-15*i*aa,500-15*aa,15*aa,15*aa);
                break;

              case 8:
                var img = document.getElementById("INT_8");
                ctx.drawImage(img,800-15*i*aa,500-15*aa,15*aa,15*aa);
                break;

              case 9:
                var img = document.getElementById("INT_9");
                ctx.drawImage(img,800-15*i*aa,500-15*aa,15*aa,15*aa);
                break;
            }
          }
      }


      var direction;
      document.addEventListener('keydown', function(e) {
        switch (e.keyCode) {
          case 37:
            direction = Direction.left;
            break;
          case 38:
            direction = Direction.up;
            break;
          case 39:
            direction = Direction.right;
            break;
          case 40:
            direction = Direction.down;
            break;
          case 32:
            Cheat = 1;
            break;
        }
      });

      (function(){
          if(snake.head.Move(direction)){
            var img = document.getElementById("Instruction");
            ctx.drawImage(img,600,0,300,400);
            drawScore(score);
            drawSnake(snake);
            drawPoints(plus);
            setTimeout(arguments.callee,200*Speed-snake.body.Part.length)
            }
          })();
    }
    initial();
  })();
