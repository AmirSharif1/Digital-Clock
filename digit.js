      



           function clock() {
            let hore = document.querySelector(".hour");
            let min = document.querySelector("#min");

            let sec = document.querySelector("#second");
            let per = document.querySelector("#period");

             let h = new Date().getHours();
             let m = new Date().getMinutes();
             let s = new Date().getSeconds();
             let ped = h <=12 ? "pm": "am";

             h = ( h < 10 ) ? "0" + h : h ;
             m = ( m < 10 ) ? "0" + m : m ;
             s = ( s < 10 ) ? "0" + s : s ;                                            

                hore.innerHTML=h;
                min.innerHTML  = m;
                sec.innerHTML =s;
                 per.innerHTML=ped;
                 if(h<12){
                    h= h - 12;
                 };
                        
                    
         }
            setInterval(() => {
                clock();
            }, 1000);
            