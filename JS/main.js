let rocola = document.getElementById("rocola");
      let radio = document.getElementById("radio");
      radio.addEventListener("change", function() {
        let selectedSong = this.options[this.selectedIndex];
        rocola.src = selectedSong.value;
        if (rocola.src==""){
            rocola.controls=false;
        }
        else{
            rocola.controls=true;
        }
      })
      
      /*let rocola = document.getElementById("rocola");
      let radio = document.getElementById("radio");
      let signo = document.getElementById("musicstatus");
      radio.addEventListener("change", function() {
          let selectedSong = this.options[this.selectedIndex];
          rocola.src = selectedSong.value;
      
          if (rocola.src=="") {
              rocola.controls = false;
              signo.textContent= "l l";
          } else {
              rocola.controls = true;
              signo.textContent= "▷";
          }
      });*/