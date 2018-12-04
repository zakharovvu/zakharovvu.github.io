 
    var cufra1 = 0;
    
    var cufra2 = 0;
    
    var znaks = "";
    var index = 0;
    var displayer = document.getElementById('disp');
    function f1(knopka){
        
        if (displayer.innerHTML == 0){
            displayer.innerHTML = "";
        }
        if (index == 0){
            displayer.innerHTML = "";
        }
        index++;
        displayer.innerHTML += knopka;
        //console.log(typeData);
    }
    function f2(znak){
        index = 0;
        znaks = znak;
        cufra1 = displayer.innerHTML;
        // document.getElementById('disp').innerHTML = 0;
    }
    function f3(){
        index = 0;
        cufra2 = displayer.innerHTML;
        let rezultat;
        switch(znaks){
            case '+': displayer.innerHTML = Number(cufra1) + Number(cufra2); 
            break
            case '-': displayer.innerHTML =  Number(cufra1) - Number(cufra2); 
            break
            case '*': displayer.innerHTML =  Number(cufra1) * Number(cufra2); 
            break
            case '/': rezultat = Number(cufra1) / Number(cufra2); 
            var colz = rezultat => ( (rezultat.toString().includes('.')) ? (rezultat.toString().split('.').pop().length) : (0) );
            if (colz(rezultat) > 2){
                displayer.innerHTML = rezultat.toFixed(2);
            } else {displayer.innerHTML = rezultat;}
            break
        }
    }
    function f4(){
        displayer.innerHTML = 0;
    }

    //     var elem = e ? e.target : window.event.srcElement;
    //     alert(elem.id)}
    

