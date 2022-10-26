const string = `
<style>
body{
    background:#5d3a3a;
  }
  div{
    position:absolute;
  }
#sasuke-ems{
    border-radius:100%;
    height:250px;
    width: 250px;
    background:black;
	  animation: rotation 2s infinite;
  }
#sasuke-ems-flower-1,#sasuke-ems-flower-2,#sasuke-ems-flower-3{
    background:#a02132;
    height:160px;
    width:160px;
		border:4px solid #a02132;
    animation: glowing 3s infinite;
  }
#sasuke-ems-flower-line-1,#sasuke-ems-flower-line-2,#sasuke-ems-flower-line-3{
    height:160px;
    width:160px;
		border:4px solid black;
  }
#sasuke-ems-flower-line-1{
    transform:rotate(-45deg);
  }
#sasuke-ems-flower-line-2{
    transform:rotate(-105deg);
      
  }
#sasuke-ems-flower-line-3{
    transform:rotate(-165deg);
  }

 
#sasuke-ems-flower-1,#sasuke-ems-flower-2,#sasuke-ems-flower-3,#sasuke-ems-flower-line-1,#sasuke-ems-flower-line-2,#sasuke-ems-flower-line-3{
    top:42px;
    left:42px;
    border-radius: 100% 0;
    
  }
  #sasuke-ems,{
    position:sticky;
    margin:auto;
  margin-bottom:30px;
}
  #sasuke-ems-flower-1{
    transform:rotate(-45deg);
  }
    #sasuke-ems-flower-2{
    transform:rotate(-105deg);
      
  }
  #sasuke-ems-flower-3{
    transform:rotate(-165deg);
  }
  #sasuke-ems-flower-bullet-1-1,#sasuke-ems-flower-bullet-2-1,#sasuke-ems-flower-bullet-3-1{
  	border-radius: 100%  0px 0px ;
  }
  #sasuke-ems-flower-bullet-1-1,#sasuke-ems-flower-bullet-2-1,#sasuke-ems-flower-bullet-3-1,#sasuke-ems-flower-bullet-1-2,#sasuke-ems-flower-bullet-2-2,#sasuke-ems-flower-bullet-3-2{
    width: 20px; 
  	height: 100px; 
  	background:black;
  }
  #sasuke-ems-flower-bullet-1-2,#sasuke-ems-flower-bullet-2-2,#sasuke-ems-flower-bullet-3-2{
    left:18px;
  	border-radius: 0px 100% 0px 0px;
  }
  #sasuke-ems-flower-bullet-1-1{
    transform:rotate(-60deg);
    top:65px;
    left:80px;
  }
  #sasuke-ems-flower-bullet-2-1{
    transform:rotate(60deg);
    top:47px;
    left:150px;
  }
  #sasuke-ems-flower-bullet-3-1{
    transform:rotate(180deg);
    top:120px;
    left:125px; 
  }
  #sasuke-ems-pupil{
    background:#a02132;
    height:35px;
    width:35px;
    top:108px;
    left:108px;
    border-radius:100%;
  }
@keyframes rotation {
		from {
				transform: rotate(0deg);
		}
		to {
				transform: rotate(360deg);
		}
}
@keyframes glowing {
  0% { box-shadow: 0 0 20px #ff1c20; }
  25% { box-shadow: 0 0 10px ; }
	50% { box-shadow: 0 0  0px #ff1c20; }
	75% { box-shadow: 0 0 10px #ff1c20; }
  100% { box-shadow: 0 0 20px #ff1c20; }
}
<style/>
`

export default string;