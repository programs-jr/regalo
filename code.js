window.addEventListener("load", ()=> {
    // Media 
    const mediaTelefono = window.matchMedia("(max-width: 560px)");
    const mediaTablet = window.matchMedia("(min-width: 561px) and (max-width: 960px)");
    const mediaLap = window.matchMedia("(min-width: 961px) and (max-width: 2000px)");

    // elementos
    const un = document.getElementById("uno");
    const dos = document.getElementById("dos");
    const tres = document.getElementById("tres");
    const cuatro = document.getElementById("cuatro");
    const conco = document.querySelector(".contenedorcodigo");
    const aviso = document.querySelector(".noti");
    const boton = document.getElementById("comprobar");

    const aplicarCambios = ()=> {
        if (mediaTelefono.matches) {
            setTimeout(()=> {
                boton.style.animation = "des2 5s ease-out forwards";
            }, 1000);
            document.addEventListener("keydown", (e)=> {
                if (e.key === "ArrowRight") {
                    if (document.activeElement === un) {
                        dos.focus();
                    }
                    else if (document.activeElement === dos) {
                        tres.focus();
                    }
                    else if (document.activeElement === tres) {
                        cuatro.focus();
                    }
                    else if (document.activeElement === cuatro) {
                        un.focus()
                    }
                }
        
                if (e.key === "ArrowLeft") {
                    if (document.activeElement == un) {
                        cuatro.focus();
                    }
                    else if (document.activeElement == dos) {
                        un.focus();
                    }
                    else if (document.activeElement == tres) {
                        dos.focus();
                    }
                    else if (document.activeElement == cuatro) {
                        tres.focus()
                    }
                }
        
                if (e.key === "Enter") {
                    boton.click();
                }
            });
            boton.addEventListener("click",(e)=> {
                const primer = document.getElementById("uno").value;
                const segundo = document.getElementById("dos").value;
                const tercero = document.getElementById("tres").value;
                const cuarto = document.getElementById("cuatro").value;
        
                if (primer == "1" && segundo == "0" && tercero == "0" && cuarto == "6") {
                    aviso.style.animation = "mov 6s ease forwards";
                    conco.style.animation = "mov1 6s ease forwards";
                    setTimeout(()=> {
                        aviso.textContent = "CODIGO CORRECTO";
                    }, 6500);
                    setTimeout(()=> {
                        aviso.style.fontSize = "28px";
                        aviso.textContent = "Bienvenida Sra. Melanie";
                    }, 11000);
                    aviso.style.backgroundColor = "lightskyblue";
                    aviso.style.color = "#183b5b";
                    setTimeout(()=> {
                        aviso.style.animation = "reg 6s ease forwards";
                    }, 15000);
                }
                else {
                    aviso.style.animation = "mov 6s ease forwards";
                    setTimeout(()=> {
                        aviso.textContent = "CODIGO INCORRECTO....";
                    }, 7000);
                    setTimeout(()=> {
                        aviso.style.animation = "reg 6s ease forwards";
                    }, 12000);
                    setTimeout(()=> {
                        aviso.textContent = " ";
                    }, 18000);
                    e.defaultPrevented();
                }
        
            const elementos = {
                vid: document.getElementById("vid"),
                conv: document.querySelector(".conv"),
                conc: document.querySelector(".carga"),
                texti: document.querySelector(".texti"),
                imgc: document.querySelector(".imgc"),
                conm: document.querySelector(".mensajecon"),
                can: document.getElementById("dayone"),
                img: document.querySelector(".block"),
                con1: document.querySelector(".con1"),
                con2: document.querySelector(".con2"),
                con3: document.querySelector(".con3"),
                con4: document.querySelector(".con5"),
                con5: document.querySelector(".con6"),
            }

            elementos.imgc.style.width = "30%";
            elementos.imgc.style.transition = "width 4s";
            elementos.imgc.style.animation = "girar 120s ease forwards";
        
            const canciones = {
                can1: "yporq.mp3",
                can2: "tu.mp3",
                can3: "unaentre.mp3",
                can4: "comono.mp3",
                can5: "dique.mp3",
            }
        
            // carga inicial
        
            setTimeout(()=> {
                elementos.texti.style.animation = "engrandecer 5s ease forwards";
                elementos.texti.style.fontSize = "22px";
            }, 5000);
        
            setTimeout(()=>{
                elementos.texti.innerHTML = "<p class='texto1'>CARGANDO...</p>"
            }, 11000);
        
            setTimeout(()=>{
                elementos.texti.innerHTML = " ";
                elementos.texti.style.animation = "mini 5s ease forwards";
            }, 17000);
            
            setTimeout(()=>{
                elementos.imgc.setAttribute("src", "https://imgfz.com/i/jfBQza5.jpeg");
            }, 20000);
        
            setTimeout(()=> {
                elementos.imgc.style.animation = "engra 10s ease forwards";
            }, 25000);
        
            setTimeout(()=> {
                elementos.conc.style.animation = "des 5s ease-out forwards";
            }, 35000);
        
            // video intro 
        
            elementos.vid.style.height = "0";
            elementos.conv.style.opacity = "0";
        
            setTimeout(()=> {
                elementos.conv.style.animation = "des3 5s ease forwards"
            }, 39000);
        
            setTimeout(()=> {
                elementos.vid.style.animation = "intro 8s ease forwards";
            }, 44000);
        
            setTimeout(()=> {
                elementos.vid.muted = true;
                vid.play();
                const audio = new Audio(`${canciones.can1}`);
                audio.play();
                // audio.muted = true;
            }, 52500);
        
            elementos.vid.addEventListener("ended", ()=> {
                elementos.conv.style.animation = "des 6s ease forwards";
                elementos.vid.style.animation = "des 6s ease forwards";
                setTimeout(()=> {
                    elementos.conv.style.display = "none";
                    audio.muted = true;
                }, 6000);
            });
        
            // setTimeout(()=>{}, 1000);
            // setTimeout(()=>{}, 1000);
            // setTimeout(()=>{}, 1000);
            // setTimeout(()=>{}, 1000);
            // setTimeout(()=>{}, 1000);
        
            // sec original
            
            // elementos.vid.addEventListener("ended", ()=> {
            //     conv.style.animation = "des 6s ease forwards";
            //     vid.style.animation = "des 6s ease forwards";
            //     conv.style.display = "none";
            // });
        
            // setTimeout(()=> {
            //     elementos.conm.innerHTML = "<p class='texto'>Para cambiar de dia debes de tocar el recuadro, los dias se iran desbloqueando dependiendo los dias restantes</p>";
            //     elementos.conm.style.padding = "5px 10px";
            //     elementos.conm.style.transition = "padding 4s, height 3s, width 3s";
            //     elementos.conm.style.width = "90%";
            //     elementos.conm.style.height = "70%";
            // }, 6000);
            
            // setTimeout(()=> {
            //     elementos.con1.style.animation = "bajar 2s ease-out forwards";
            //     elementos.con2.style.animation = "bajar 1.5s ease-out forwards";
            //     elementos.con3.style.animation = "bajar 4s ease-out forwards";
            //     elementos.con3.style.animationDelay = "2s";
            //     elementos.con4.style.animation = "bajar 1.5s ease-out forwards";
            //     elementos.con5.style.animation = "bajar 2s ease-out forwards";
            //     elementos.conm.style.animation = "crecer 4s ease forwards";
            // }, 10000);
        
            // setTimeout(()=> {
            //     elementos.conm.innerHTML = "<p class='texto'>En total son 6 fechas, NOTA, no puedes desbloquear otro recuadro hasta ese dia, por si solo se actualizara</p>";
            // }, 11000);
        
            // setTimeout(()=> {
            //     elementos.conm.innerHTML = " ";
            //     elementos.conm.style.padding = "0";
            //     elementos.conm.style.transition = "padding 4s, height 3s, width 3s";
            //     elementos.conm.style.width = "60%";
            //     elementos.conm.style.height = "40%";
            //     elementos.conm.style.animation = "encojer 4s ease forwards";
            // }, 17000);
        
            // setTimeout(()=> {
            //     elementos.conm.style.animation = "encojer 4s ease forwards";
            // }, 20000);
        
        //     document.addEventListener("keydown", (e)=> {
        //         if (e.key === "f" || e.key === "F") {
        //             elementos.con3.style.width = "40%";
        //             elementos.con3.style.height = "20%";
        //             setTimeout(()=> {
        //                 elementos.can.style.animation = "abajo 5s ease-out forwards";
        //             },0)
        //             setTimeout(()=>{
        //                 elementos.con1.style.animation = "des 3s ease forwards";
        //                 elementos.con2.style.animation = "des 3s ease forwards";
        //                 elementos.con4.style.animation = "des 3s ease forwards";
        //                 elementos.con5.style.animation = "des 3s ease forwards";
        //             }, 5000);
        //             setTimeout(()=>{
        //                 elementos.con3.style.gridRow = "2/6";
        //                 elementos.con3.style.gridColumn = "2/9";
        //                 elementos.con3.style.alignSelf = "center";
        //                 elementos.con3.style.height = "80%";
        //                 elementos.con3.style.width = "90%";
        //                 elementos.con3.style.transition = "width 5s, height 7s";
        //             },6000);
        //         }
        //     })
            });
        }
        else if (mediaTablet.matches) {
            setTimeout(()=> {
                boton.style.animation = "des2 5s ease-out forwards";
            }, 1000);
            document.addEventListener("keydown", (e)=> {
                if (e.key === "ArrowRight") {
                    if (document.activeElement === un) {
                        dos.focus();
                    }
                    else if (document.activeElement === dos) {
                        tres.focus();
                    }
                    else if (document.activeElement === tres) {
                        cuatro.focus();
                    }
                    else if (document.activeElement === cuatro) {
                        un.focus()
                    }
                }
        
                if (e.key === "ArrowLeft") {
                    if (document.activeElement == un) {
                        cuatro.focus();
                    }
                    else if (document.activeElement == dos) {
                        un.focus();
                    }
                    else if (document.activeElement == tres) {
                        dos.focus();
                    }
                    else if (document.activeElement == cuatro) {
                        tres.focus()
                    }
                }
        
                if (e.key === "Enter") {
                    boton.click();
                }
            });
            boton.addEventListener("click",(e)=> {
                const primer = document.getElementById("uno").value;
                const segundo = document.getElementById("dos").value;
                const tercero = document.getElementById("tres").value;
                const cuarto = document.getElementById("cuatro").value;
        
                if (primer == "1" && segundo == "0" && tercero == "0" && cuarto == "6") {
                    aviso.style.animation = "mov 6s ease forwards";
                    conco.style.animation = "mov1 6s ease forwards";
                    setTimeout(()=> {
                        aviso.textContent = "CODIGO CORRECTO";
                    }, 6500);
                    setTimeout(()=> {
                        aviso.style.fontSize = "28px";
                        aviso.textContent = "Bienvenida Sra. Melanie";
                    }, 11000);
                    aviso.style.backgroundColor = "lightskyblue";
                    aviso.style.color = "#183b5b";
                    setTimeout(()=> {
                        aviso.style.animation = "reg 6s ease forwards";
                    }, 15000);
                }
                else {
                    aviso.style.animation = "mov 6s ease forwards";
                    setTimeout(()=> {
                        aviso.textContent = "CODIGO INCORRECTO....";
                    }, 7000);
                    setTimeout(()=> {
                        aviso.style.animation = "reg 6s ease forwards";
                    }, 12000);
                    setTimeout(()=> {
                        aviso.textContent = " ";
                    }, 18000);
                    e.defaultPrevented();
                }
        
            const elementos = {
                vid: document.getElementById("vid"),
                conv: document.querySelector(".conv"),
                conc: document.querySelector(".carga"),
                texti: document.querySelector(".texti"),
                imgc: document.querySelector(".imgc"),
                conm: document.querySelector(".mensajecon"),
                can: document.getElementById("dayone"),
                img: document.querySelector(".block"),
                con1: document.querySelector(".con1"),
                con2: document.querySelector(".con2"),
                con3: document.querySelector(".con3"),
                con4: document.querySelector(".con5"),
                con5: document.querySelector(".con6"),
            }
        
            elementos.imgc.style.animation = "girar 120s ease forwards";
        
            const canciones = {
                can1: "yporq.mp3",
                can2: "tu.mp3",
                can3: "unaentre.mp3",
                can4: "comono.mp3",
                can5: "dique.mp3",
            }
        
            // carga inicial
        
            setTimeout(()=> {
                elementos.texti.style.animation = "mod 8s ease forwards";
            }, 5000);
        
            setTimeout(()=>{
                elementos.texti.innerHTML = "<p class='texto1'>CARGANDO...</p>"
            }, 11000);
        
            setTimeout(()=>{
                elementos.texti.innerHTML = " ";
                elementos.texti.style.animation = "mod1 8s ease forwards";
            }, 17000);
            
            setTimeout(()=>{
                elementos.imgc.setAttribute("src", "https://imgfz.com/i/jfBQza5.jpeg");
            }, 20000);
        
            setTimeout(()=> {
                elementos.imgc.style.animation = "engra 10s ease forwards";
            }, 25000);
        
            setTimeout(()=> {
                elementos.conc.style.animation = "des 5s ease-out forwards";
            }, 35000);
        
            // video intro 
        
            elementos.vid.style.height = "0";
            elementos.conv.style.opacity = "0";
        
            setTimeout(()=> {
                elementos.conv.style.animation = "des3 5s ease forwards"
            }, 39000);
        
            setTimeout(()=> {
                elementos.vid.style.animation = "intro 8s ease forwards";
            }, 44000);
        
            setTimeout(()=> {
                elementos.vid.muted = true;
                vid.play();
                const audio = new Audio(`${canciones.can1}`);
                audio.play();
                // audio.muted = true;
            }, 52500);
        
            elementos.vid.addEventListener("ended", ()=> {
                elementos.conv.style.animation = "des 6s ease forwards";
                elementos.vid.style.animation = "des 6s ease forwards";
                setTimeout(()=> {
                    elementos.conv.style.display = "none";
                }, 6000);
            });
        
            // setTimeout(()=>{}, 1000);
            // setTimeout(()=>{}, 1000);
            // setTimeout(()=>{}, 1000);
            // setTimeout(()=>{}, 1000);
            // setTimeout(()=>{}, 1000);
        
            // sec original
            
            // elementos.vid.addEventListener("ended", ()=> {
            //     conv.style.animation = "des 6s ease forwards";
            //     vid.style.animation = "des 6s ease forwards";
            //     conv.style.display = "none";
            // });
        
            // setTimeout(()=> {
            //     elementos.conm.innerHTML = "<p class='texto'>Para cambiar de dia debes de tocar el recuadro, los dias se iran desbloqueando dependiendo los dias restantes</p>";
            //     elementos.conm.style.padding = "5px 10px";
            //     elementos.conm.style.transition = "padding 4s, height 3s, width 3s";
            //     elementos.conm.style.width = "90%";
            //     elementos.conm.style.height = "70%";
            // }, 6000);
            
            // setTimeout(()=> {
            //     elementos.con1.style.animation = "bajar 2s ease-out forwards";
            //     elementos.con2.style.animation = "bajar 1.5s ease-out forwards";
            //     elementos.con3.style.animation = "bajar 4s ease-out forwards";
            //     elementos.con3.style.animationDelay = "2s";
            //     elementos.con4.style.animation = "bajar 1.5s ease-out forwards";
            //     elementos.con5.style.animation = "bajar 2s ease-out forwards";
            //     elementos.conm.style.animation = "crecer 4s ease forwards";
            // }, 10000);
        
            // setTimeout(()=> {
            //     elementos.conm.innerHTML = "<p class='texto'>En total son 6 fechas, NOTA, no puedes desbloquear otro recuadro hasta ese dia, por si solo se actualizara</p>";
            // }, 11000);
        
            // setTimeout(()=> {
            //     elementos.conm.innerHTML = " ";
            //     elementos.conm.style.padding = "0";
            //     elementos.conm.style.transition = "padding 4s, height 3s, width 3s";
            //     elementos.conm.style.width = "60%";
            //     elementos.conm.style.height = "40%";
            //     elementos.conm.style.animation = "encojer 4s ease forwards";
            // }, 17000);
        
            // setTimeout(()=> {
            //     elementos.conm.style.animation = "encojer 4s ease forwards";
            // }, 20000);
        
        //     document.addEventListener("keydown", (e)=> {
        //         if (e.key === "f" || e.key === "F") {
        //             elementos.con3.style.width = "40%";
        //             elementos.con3.style.height = "20%";
        //             setTimeout(()=> {
        //                 elementos.can.style.animation = "abajo 5s ease-out forwards";
        //             },0)
        //             setTimeout(()=>{
        //                 elementos.con1.style.animation = "des 3s ease forwards";
        //                 elementos.con2.style.animation = "des 3s ease forwards";
        //                 elementos.con4.style.animation = "des 3s ease forwards";
        //                 elementos.con5.style.animation = "des 3s ease forwards";
        //             }, 5000);
        //             setTimeout(()=>{
        //                 elementos.con3.style.gridRow = "2/6";
        //                 elementos.con3.style.gridColumn = "2/9";
        //                 elementos.con3.style.alignSelf = "center";
        //                 elementos.con3.style.height = "80%";
        //                 elementos.con3.style.width = "90%";
        //                 elementos.con3.style.transition = "width 5s, height 7s";
        //             },6000);
        //         }
        //     })
    });
        }
        else if (mediaLap.matches) {
            setTimeout(()=> {
                boton.style.animation = "des2 5s ease-out forwards";
            }, 1000);
            document.addEventListener("keydown", (e)=> {
                if (e.key === "ArrowRight") {
                    if (document.activeElement === un) {
                        dos.focus();
                    }
                    else if (document.activeElement === dos) {
                        tres.focus();
                    }
                    else if (document.activeElement === tres) {
                        cuatro.focus();
                    }
                    else if (document.activeElement === cuatro) {
                        un.focus()
                    }
                }
        
                if (e.key === "ArrowLeft") {
                    if (document.activeElement == un) {
                        cuatro.focus();
                    }
                    else if (document.activeElement == dos) {
                        un.focus();
                    }
                    else if (document.activeElement == tres) {
                        dos.focus();
                    }
                    else if (document.activeElement == cuatro) {
                        tres.focus()
                    }
                }
        
                if (e.key === "Enter") {
                    boton.click();
                }
            });
            boton.addEventListener("click",(e)=> {
                const primer = document.getElementById("uno").value;
                const segundo = document.getElementById("dos").value;
                const tercero = document.getElementById("tres").value;
                const cuarto = document.getElementById("cuatro").value;
        
                if (primer == "1" && segundo == "0" && tercero == "0" && cuarto == "6") {
                    aviso.style.animation = "mov 6s ease forwards";
                    conco.style.animation = "mov1 6s ease forwards";
                    setTimeout(()=> {
                        aviso.textContent = "CODIGO CORRECTO";
                    }, 6500);
                    setTimeout(()=> {
                        aviso.style.fontSize = "28px";
                        aviso.textContent = "Bienvenida Sra. Melanie";
                    }, 11000);
                    aviso.style.backgroundColor = "lightskyblue";
                    aviso.style.color = "#183b5b";
                    setTimeout(()=> {
                        aviso.style.animation = "reg 6s ease forwards";
                    }, 15000);
                }
                else {
                    aviso.style.animation = "mov 6s ease forwards";
                    setTimeout(()=> {
                        aviso.textContent = "CODIGO INCORRECTO....";
                    }, 7000);
                    setTimeout(()=> {
                        aviso.style.animation = "reg 6s ease forwards";
                    }, 12000);
                    setTimeout(()=> {
                        aviso.textContent = " ";
                    }, 18000);
                    e.defaultPrevented();
                }
        
            const elementos = {
                vid: document.getElementById("vid"),
                conv: document.querySelector(".conv"),
                conc: document.querySelector(".carga"),
                texti: document.querySelector(".texti"),
                imgc: document.querySelector(".imgc"),
                conm: document.querySelector(".mensajecon"),
                can: document.getElementById("dayone"),
                img: document.querySelector(".block"),
                con1: document.querySelector(".con1"),
                con2: document.querySelector(".con2"),
                con3: document.querySelector(".con3"),
                con4: document.querySelector(".con5"),
                con5: document.querySelector(".con6"),
            }
        
            elementos.imgc.style.animation = "girar 120s ease forwards";
        
            const canciones = {
                can1: "yporq.mp3",
                can2: "tu.mp3",
                can3: "unaentre.mp3",
                can4: "comono.mp3",
                can5: "dique.mp3",
            }
        
            // carga inicial
        
            setTimeout(()=> {
                elementos.texti.style.animation = "mod 8s ease forwards";
            }, 5000);
        
            setTimeout(()=>{
                elementos.texti.innerHTML = "<p class='texto1'>CARGANDO...</p>"
            }, 11000);
        
            setTimeout(()=>{
                elementos.texti.innerHTML = " ";
                elementos.texti.style.animation = "mod1 8s ease forwards";
            }, 17000);
            
            setTimeout(()=>{
                elementos.imgc.setAttribute("src", "https://imgfz.com/i/jfBQza5.jpeg");
            }, 20000);
        
            setTimeout(()=> {
                elementos.imgc.style.animation = "engra 10s ease forwards";
            }, 25000);
        
            setTimeout(()=> {
                elementos.conc.style.animation = "des 5s ease-out forwards";
            }, 35000);
        
            // video intro 
        
            elementos.vid.style.height = "0";
            elementos.conv.style.opacity = "0";
        
            setTimeout(()=> {
                elementos.conv.style.animation = "des3 5s ease forwards"
            }, 39000);
        
            setTimeout(()=> {
                elementos.vid.style.animation = "intro 8s ease forwards";
            }, 44000);
        
            setTimeout(()=> {
                elementos.vid.muted = true;
                vid.play();
                const audio = new Audio(`${canciones.can1}`);
                audio.play();
                // audio.muted = true;
            }, 52500);
        
            elementos.vid.addEventListener("ended", ()=> {
                elementos.conv.style.animation = "des 6s ease forwards";
                elementos.vid.style.animation = "des 6s ease forwards";
                setTimeout(()=> {
                    elementos.conv.style.display = "none";
                }, 6000);
            });
        
            // setTimeout(()=>{}, 1000);
            // setTimeout(()=>{}, 1000);
            // setTimeout(()=>{}, 1000);
            // setTimeout(()=>{}, 1000);
            // setTimeout(()=>{}, 1000);
        
            // sec original
            
            // elementos.vid.addEventListener("ended", ()=> {
            //     conv.style.animation = "des 6s ease forwards";
            //     vid.style.animation = "des 6s ease forwards";
            //     conv.style.display = "none";
            // });
        
            // setTimeout(()=> {
            //     elementos.conm.innerHTML = "<p class='texto'>Para cambiar de dia debes de tocar el recuadro, los dias se iran desbloqueando dependiendo los dias restantes</p>";
            //     elementos.conm.style.padding = "5px 10px";
            //     elementos.conm.style.transition = "padding 4s, height 3s, width 3s";
            //     elementos.conm.style.width = "90%";
            //     elementos.conm.style.height = "70%";
            // }, 6000);
            
            // setTimeout(()=> {
            //     elementos.con1.style.animation = "bajar 2s ease-out forwards";
            //     elementos.con2.style.animation = "bajar 1.5s ease-out forwards";
            //     elementos.con3.style.animation = "bajar 4s ease-out forwards";
            //     elementos.con3.style.animationDelay = "2s";
            //     elementos.con4.style.animation = "bajar 1.5s ease-out forwards";
            //     elementos.con5.style.animation = "bajar 2s ease-out forwards";
            //     elementos.conm.style.animation = "crecer 4s ease forwards";
            // }, 10000);
        
            // setTimeout(()=> {
            //     elementos.conm.innerHTML = "<p class='texto'>En total son 6 fechas, NOTA, no puedes desbloquear otro recuadro hasta ese dia, por si solo se actualizara</p>";
            // }, 11000);
        
            // setTimeout(()=> {
            //     elementos.conm.innerHTML = " ";
            //     elementos.conm.style.padding = "0";
            //     elementos.conm.style.transition = "padding 4s, height 3s, width 3s";
            //     elementos.conm.style.width = "60%";
            //     elementos.conm.style.height = "40%";
            //     elementos.conm.style.animation = "encojer 4s ease forwards";
            // }, 17000);
        
            // setTimeout(()=> {
            //     elementos.conm.style.animation = "encojer 4s ease forwards";
            // }, 20000);
        
        //     document.addEventListener("keydown", (e)=> {
        //         if (e.key === "f" || e.key === "F") {
        //             elementos.con3.style.width = "40%";
        //             elementos.con3.style.height = "20%";
        //             setTimeout(()=> {
        //                 elementos.can.style.animation = "abajo 5s ease-out forwards";
        //             },0)
        //             setTimeout(()=>{
        //                 elementos.con1.style.animation = "des 3s ease forwards";
        //                 elementos.con2.style.animation = "des 3s ease forwards";
        //                 elementos.con4.style.animation = "des 3s ease forwards";
        //                 elementos.con5.style.animation = "des 3s ease forwards";
        //             }, 5000);
        //             setTimeout(()=>{
        //                 elementos.con3.style.gridRow = "2/6";
        //                 elementos.con3.style.gridColumn = "2/9";
        //                 elementos.con3.style.alignSelf = "center";
        //                 elementos.con3.style.height = "80%";
        //                 elementos.con3.style.width = "90%";
        //                 elementos.con3.style.transition = "width 5s, height 7s";
        //             },6000);
        //         }
        //     })
            });
        }
    }

    mediaTelefono.addEventListener("change", aplicarCambios);
    mediaTablet.addEventListener("change", aplicarCambios);
    mediaLap.addEventListener("change", aplicarCambios);

    aplicarCambios();
});