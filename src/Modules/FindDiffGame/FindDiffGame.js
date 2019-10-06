import React, { Component } from 'react';

import './FindDiffGame.css';
import pic1 from './Pictures/1.jpg' // relative path to image 
import pic1b from './Pictures/1b.jpg' // relative path to image 
import pic2 from './Pictures/2.jpg' // relative path to image 
import pic2b from './Pictures/2b.jpg' // relative path to image 
import pic3 from './Pictures/3.jpg' // relative path to image 
import pic3b from './Pictures/3b.jpg' // relative path to image 

    var x = 5;
    var a = 1;
    var b = 1;
    var c = 1;
    var d = 1;
    var e = 1;
    var diffOne = document.getElementsByClassName("differenceOne");
    var diffTwo = document.getElementsByClassName("differenceTwo");
    var diffThree = document.getElementsByClassName("differenceThree");
    var diffFour = document.getElementsByClassName("differenceFour");
    var diffFive = document.getElementsByClassName("differenceFive");
    var picNum = 0;

class FindDiffGame extends Component {

    findDiffOne = () => {
        diffOne[0].style.strokeOpacity = "1";
        diffOne[1].style.strokeOpacity = "1";
        diffOne[2].style.strokeOpacity = "1";
        diffOne[3].style.strokeOpacity = "1";
        diffOne[4].style.strokeOpacity = "1";
        diffOne[5].style.strokeOpacity = "1";
        if (x > 0) {
            x = x - a;
            document.getElementById("diffLeft").innerHTML = "Pozostało do odgadniecia: " + x;
            a = 0;
            if (x == 0) {
                alert("Brawo Ty");
            }
        }
    }

    findDiffTwo = () => {
        diffTwo[0].style.strokeOpacity = "1";
        diffTwo[1].style.strokeOpacity = "1";
        diffTwo[2].style.strokeOpacity = "1";
        diffTwo[3].style.strokeOpacity = "1";
        diffTwo[4].style.strokeOpacity = "1";
        diffTwo[5].style.strokeOpacity = "1";
        if(x>0)
        {
        x = x-b;
        document.getElementById("diffLeft").innerHTML = "Pozostało do odgadniecia: " + x;
        b = 0;
            if(x==0)
            {
                alert("Brawo Ty");
            }
        }
    }

    findDiffThree = () => {
        diffThree[0].style.strokeOpacity = "1";
        diffThree[1].style.strokeOpacity = "1";
        diffThree[2].style.strokeOpacity = "1";
        diffThree[3].style.strokeOpacity = "1";
        diffThree[4].style.strokeOpacity = "1";
        diffThree[5].style.strokeOpacity = "1";
        if(x>0)
        {
        x = x-c;
        document.getElementById("diffLeft").innerHTML = "Pozostało do odgadniecia: " + x;
        c = 0;
            if(x==0)
            {
                alert("Brawo Ty");
            }
        }
    }	

    findDiffFour = () => {
        diffFour[0].style.strokeOpacity = "1";
        diffFour[1].style.strokeOpacity = "1";
        diffFour[2].style.strokeOpacity = "1";
        diffFour[3].style.strokeOpacity = "1";
        diffFour[4].style.strokeOpacity = "1";
        diffFour[5].style.strokeOpacity = "1";
        if(x>0)
        {
        x = x-d;
        document.getElementById("diffLeft").innerHTML = "Pozostało do odgadniecia: " + x;
        d = 0;
            if(x==0)
            {
                alert("Brawo Ty");
            }
        }
    }	

    findDiffFive = () => {
        diffFive[0].style.strokeOpacity = "1";
        diffFive[1].style.strokeOpacity = "1";
        diffFive[2].style.strokeOpacity = "1";
        diffFive[3].style.strokeOpacity = "1";
        diffFive[4].style.strokeOpacity = "1";
        diffFive[5].style.strokeOpacity = "1";
        if(x>0)
        {
        x = x-e;
        document.getElementById("diffLeft").innerHTML = "Pozostało do odgadniecia: " + x;
        e = 0;
            if(x==0)
            {
                alert("Brawo Ty");
            }
        }
    }
    
    goToNextPic = () => {
        if (picNum == 0) {
            document.getElementById("pic1").style.display = "none";
            document.getElementById("pic1b").style.display = "none";
            document.getElementById("pic2").style.display = "inline";
            document.getElementById("pic2b").style.display = "inline";
            document.getElementById("pic3").style.display = "none";
            document.getElementById("pic3b").style.display = "none";
        }		
        
        if (picNum == 1) {
            document.getElementById("pic1").style.display = "none";
            document.getElementById("pic1b").style.display = "none";
            document.getElementById("pic2").style.display = "none";
            document.getElementById("pic2b").style.display = "none";
            document.getElementById("pic3").style.display = "inline";
            document.getElementById("pic3b").style.display = "inline";
        }
        
        diffOne[0].style.strokeOpacity = "0";
        diffOne[1].style.strokeOpacity = "0";
        diffOne[2].style.strokeOpacity = "0";
        diffOne[3].style.strokeOpacity = "0";
        diffOne[4].style.strokeOpacity = "0";
        diffOne[5].style.strokeOpacity = "0";
        
        diffTwo[0].style.strokeOpacity = "0";
        diffTwo[1].style.strokeOpacity = "0";
        diffTwo[2].style.strokeOpacity = "0";
        diffTwo[3].style.strokeOpacity = "0";
        diffTwo[4].style.strokeOpacity = "0";
        diffTwo[5].style.strokeOpacity = "0";
        
        diffThree[0].style.strokeOpacity = "0";
        diffThree[1].style.strokeOpacity = "0";
        diffThree[2].style.strokeOpacity = "0";
        diffThree[3].style.strokeOpacity = "0";
        diffThree[4].style.strokeOpacity = "0";
        diffThree[5].style.strokeOpacity = "0";
        
        diffFour[0].style.strokeOpacity = "0";
        diffFour[1].style.strokeOpacity = "0";
        diffFour[2].style.strokeOpacity = "0";
        diffFour[3].style.strokeOpacity = "0";
        diffFour[4].style.strokeOpacity = "0";
        diffFour[5].style.strokeOpacity = "0";
        
        diffFive[0].style.strokeOpacity = "0";
        diffFive[1].style.strokeOpacity = "0";
        diffFive[2].style.strokeOpacity = "0";
        diffFive[3].style.strokeOpacity = "0";
        diffFive[4].style.strokeOpacity = "0";
        diffFive[5].style.strokeOpacity = "0";
        
        x=5;
        a=1;
        b=1;
        c=1;
        d=1;
        e=1;

        picNum++;
        document.getElementById("diffLeft").innerHTML = "Pozostało do odgadniecia: " + x;
    }

    hint = () => {
        if (a == 1)	{
            document.getElementsByClassName("differenceOne")[0].style.strokeOpacity = "0.2";
            document.getElementsByClassName("differenceOne")[1].style.strokeOpacity = "0.2";
            document.getElementsByClassName("differenceOne")[2].style.strokeOpacity = "0.2";
            document.getElementsByClassName("differenceOne")[3].style.strokeOpacity = "0.2";
            document.getElementsByClassName("differenceOne")[4].style.strokeOpacity = "0.2";
            document.getElementsByClassName("differenceOne")[5].style.strokeOpacity = "0.2";
        } else if (b == 1) {
            document.getElementsByClassName("differenceTwo")[0].style.strokeOpacity = "0.2";
            document.getElementsByClassName("differenceTwo")[1].style.strokeOpacity = "0.2";
            document.getElementsByClassName("differenceTwo")[2].style.strokeOpacity = "0.2";
            document.getElementsByClassName("differenceTwo")[3].style.strokeOpacity = "0.2";
            document.getElementsByClassName("differenceTwo")[4].style.strokeOpacity = "0.2";
            document.getElementsByClassName("differenceTwo")[5].style.strokeOpacity = "0.2";
        } else if (c == 1) {
            document.getElementsByClassName("differenceThree")[0].style.strokeOpacity = "0.2";
            document.getElementsByClassName("differenceThree")[1].style.strokeOpacity = "0.2";
            document.getElementsByClassName("differenceThree")[2].style.strokeOpacity = "0.2";
            document.getElementsByClassName("differenceThree")[3].style.strokeOpacity = "0.2";
            document.getElementsByClassName("differenceThree")[4].style.strokeOpacity = "0.2";
            document.getElementsByClassName("differenceThree")[5].style.strokeOpacity = "0.2";
        } else if (d == 1) {
            document.getElementsByClassName("differenceFour")[0].style.strokeOpacity = "0.2";
            document.getElementsByClassName("differenceFour")[1].style.strokeOpacity = "0.2";
            document.getElementsByClassName("differenceFour")[2].style.strokeOpacity = "0.2";
            document.getElementsByClassName("differenceFour")[3].style.strokeOpacity = "0.2";
            document.getElementsByClassName("differenceFour")[4].style.strokeOpacity = "0.2";
            document.getElementsByClassName("differenceFour")[5].style.strokeOpacity = "0.2";
        } else if (e == 1) {
            document.getElementsByClassName("differenceFive")[0].style.strokeOpacity = "0.2";
            document.getElementsByClassName("differenceFive")[1].style.strokeOpacity = "0.2";
            document.getElementsByClassName("differenceFive")[2].style.strokeOpacity = "0.2";
            document.getElementsByClassName("differenceFive")[3].style.strokeOpacity = "0.2";
            document.getElementsByClassName("differenceFive")[4].style.strokeOpacity = "0.2";
            document.getElementsByClassName("differenceFive")[5].style.strokeOpacity = "0.2";
        }
    }

    render() {
        return (
            <div>
                <p id="diffLeft">Pozostało do odgadnięcia: 5</p>
                <p><button onClick="pageRes()">Graj od nowa</button></p>
                <p><button onClick={this.hint}>Podpowiedź</button></p>
                <p><button onClick={this.goToNextPic}>Nastęny obrazek</button></p>
                {/* <p><a href="https://bany.pc.pl/main-page/index.html">Powrót</a></p>   */}
		
                <svg id="pic1" width="500" height="500">
                    <image href={pic1} x="0" y="0" height="100%" width="100%" alt="sdf" />
                    <circle className="differenceOne" cx="400" cy="97" r="40" onClick={this.findDiffOne} />
                    <circle className="differenceTwo" cx="280" cy="465" r="30" onClick={this.findDiffTwo} />
                    <circle className="differenceThree" cx="365" cy="195" r="35" onClick={this.findDiffThree} /> 
                    <circle className="differenceFour" cx="180" cy="405" r="30" onClick={this.findDiffFour} />
                    <circle className="differenceFive" cx="428" cy="325" r="30" onClick={this.findDiffFive} />
                </svg>

                <svg id="pic1b" width="500" height="500">
                    <image href={pic1b} x="0" y="0" height="100%" width="100%" alt="sdfd" />
                    <circle className="differenceFive" cx="428" cy="325" r="30" onClick={this.findDiffFive}/>
                    <circle className="differenceFour" cx="180" cy="405" r="30" onClick={this.findDiffFour}/>
                    <circle className="differenceThree" cx="365" cy="195" r="35" onClick={this.findDiffThree}/>
                    <circle className="differenceTwo" cx="280" cy="465" r="30" onClick={this.findDiffTwo}/>
                    <circle className="differenceOne" cx="400" cy="97" r="40"  onClick={this.findDiffOne} />	
                </svg>
		
                <svg id="pic2" width="500" height="500">
                    <image href={pic2} x="0" y="0" height="100%" width="100%"></image>
                    <circle className="differenceOne" cx="287" cy="228" r="25" onClick={this.findDiffOne}/>
                    <circle className="differenceTwo" cx="223" cy="154" r="20" onClick={this.findDiffTwo}/>
                    <circle className="differenceThree" cx="133" cy="220" r="15" onClick={this.findDiffThree}/>
                    <circle className="differenceFour" cx="213" cy="92" r="10" onClick={this.findDiffFour}/>
                    <circle className="differenceFive" cx="130" cy="338" r="20" onClick={this.findDiffFive}/>
                </svg>

                <svg id="pic2b" width="500" height="500">
                    <image href={pic2b} x="0" y="0" height="100%" width="100%"></image>
                    <circle className="differenceFive" cx="130" cy="338" r="20" onClick={this.findDiffFive}/>
                    <circle className="differenceFour" cx="213" cy="92" r="10" onClick={this.findDiffFour}/>
                    <circle className="differenceThree" cx="133" cy="220" r="15" onClick={this.findDiffThree}/>
                    <circle className="differenceTwo" cx="223" cy="154" r="20" onClick={this.findDiffTwo}/>
                    <circle className="differenceOne" cx="287" cy="228" r="25"  onClick={this.findDiffOne} />
                </svg>
	
                <svg id="pic3" width="500" height="500">
                    <image href={pic3} x="0" y="0" height="100%" width="100%"></image>
                    <circle className="differenceOne" cx="352" cy="191" r="12" onClick={this.findDiffOne}/>
                    <circle className="differenceTwo" cx="215" cy="182" r="12" onClick={this.findDiffTwo}/>
                    <circle className="differenceThree" cx="129" cy="261" r="15" onClick={this.findDiffThree}/>
                    <circle className="differenceFour" cx="288" cy="45" r="45" onClick={this.findDiffFour}/>
                    <circle className="differenceFive" cx="145" cy="295" r="20" onClick={this.findDiffFive}/>
                </svg>

                <svg id="pic3b" width="500" height="500">
                    <image href={pic3b} x="0" y="0" height="100%" width="100%"></image>
                    <circle className="differenceFive" cx="145" cy="295" r="20" onClick={this.findDiffFive}/>
                    <circle className="differenceFour" cx="288" cy="45" r="45" onClick={this.findDiffFour}/>
                    <circle className="differenceThree" cx="129" cy="261" r="15" onClick={this.findDiffThree}/>
                    <circle className="differenceTwo" cx="215" cy="182" r="12" onClick={this.findDiffTwo}/>
                    <circle className="differenceOne" cx="352" cy="191" r="12"  onClick={this.findDiffOne} />
                </svg>
            </div>
        )

    }
}

export default FindDiffGame;