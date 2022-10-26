const string = `
<style>
.sharingan *{box-sizing: border-box;padding: 0;margin: 0;}
.sharingan{
    background: rgb(93, 58, 58);
    min-height: 50vh;
    position: relative;
}
.eye{
    position: absolute;
    left: 50%;
    margin-left: -125px;
    top: 100px;
    background: black;
    border-radius: 50%;
    width: 250px;
    height: 250px;
}
.flower1,.flower2,.flower3{
    position: absolute;
    background: rgb(160, 33, 50);
    border-radius: 100% 0;
    top: 145px;
    width: 160px;
    height: 160px;
    margin-left: -80px;
    left: 50%;
    border: 4px solid black;
    animation: glowing 3s infinite;
}
.flower1{
    rotate: -45deg;
}
.flower2{
    rotate: -105deg;
}
.flower3{
    rotate: -165deg;
}
.flower-line1, .flower-line2, .flower-line3{
    position: absolute;
    left: 50%;
    margin-left: -80px;
    border: 4px solid black;
    height:160px;
    width:160px;
    border-radius: 100% 0;
    top: 145px;
}
.flower-line1{
    rotate: -45deg;
}
.flower-line2{
    rotate: -105deg;
}
.flower-line3{
    rotate: -165deg;
}

.itachi-1-1,.itachi-2-1,.itachi-3-1{
    border-radius: 100% 0px 0px;
}
.itachi-1-1,.itachi-2-1,.itachi-3-1,.itachi-1-2,.itachi-2-2,.itachi-3-2{
    position: absolute;
    width: 20px;
    height: 100px;
    background: black;
}
.itachi-1-2,.itachi-2-2,.itachi-3-2{
    left: 18px;
    border-radius: 0px 100% 0px 0px;
}
.itachi-1-1{
    left: 50%;
    margin-left: -41px;
    rotate: -60deg;
    top: 168px;
}
.itachi-2-1{
    left: 50%;
    rotate: 60deg;
    margin-left: 21px;
    top: 149px;
}
.itachi-3-1{
    left: 50%;
    rotate: 180deg;
    top: 214px;
    margin-left: -1px;
}
.pupil{
    position: absolute;
    background: rgb(160, 33, 50);
    width: 35px;
    height: 35px;
    border-radius: 50%;
    left: 50%;
    margin-left: -17.5px;
    top: 207.5px;
}
@keyframes glowing {
    0% { box-shadow: 0 0 20px #ff1c20; }
    25% { box-shadow: 0 0 10px ; }
      50% { box-shadow: 0 0  0px #ff1c20; }
      75% { box-shadow: 0 0 10px #ff1c20; }
    100% { box-shadow: 0 0 20px #ff1c20; }
  }

</style>
`

export default string;