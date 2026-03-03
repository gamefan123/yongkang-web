<template>
  <div class="h-screen w-full bg-gray-950 font-sans relative overflow-hidden">
    
    <nav class="fixed w-[96%] max-w-6xl left-1/2 -translate-x-1/2 z-[100] transition-all duration-500"
         :class="isScrolled ? 'top-4' : 'top-8'">
      
      <div class="rounded-full px-8 py-4 flex justify-between items-center transition-all duration-500"
           :class="isScrolled 
             ? 'bg-white/80 backdrop-blur-2xl border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.08)]' 
             : 'bg-transparent border border-transparent shadow-none'">
        
        <div class="text-2xl font-extrabold tracking-tight transition-colors duration-500"
             :class="isScrolled ? 'text-blue-600' : 'text-white'">
          Yongkang's<span :class="isScrolled ? 'text-gray-900' : 'text-gray-200'" class="transition-colors duration-500">Web</span>
        </div>
        
        <div class="space-x-8 hidden md:flex items-center">
          <a href="#about" class="relative text-base lg:text-lg font-semibold transition-colors group"
             :class="isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-gray-300 hover:text-white'">
            Über mich
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full" :class="isScrolled ? 'bg-blue-600' : 'bg-white'"></span>
          </a>
          <a href="#resume" class="relative text-base lg:text-lg font-semibold transition-colors group"
             :class="isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-gray-300 hover:text-white'">
            Lebenslauf
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full" :class="isScrolled ? 'bg-blue-600' : 'bg-white'"></span>
          </a>
          <a href="#skills" class="relative text-base lg:text-lg font-semibold transition-colors group"
             :class="isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-gray-300 hover:text-white'">
            Fähigkeiten
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full" :class="isScrolled ? 'bg-blue-600' : 'bg-white'"></span>
          </a>
          <a href="#experience" class="relative text-base lg:text-lg font-semibold transition-colors group"
             :class="isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-gray-300 hover:text-white'">
            Erfahrung
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full" :class="isScrolled ? 'bg-blue-600' : 'bg-white'"></span>
          </a>
          <a href="#contact" class="relative text-base lg:text-lg font-semibold transition-colors group"
             :class="isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-gray-300 hover:text-white'">
            Kontakt
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full" :class="isScrolled ? 'bg-blue-600' : 'bg-white'"></span>
          </a>
        </div>
        
        <div class="hidden md:block w-[120px]"></div> 
      </div>
    </nav>

    <main id="parallax-container" class="parallax-wrapper h-full w-full overflow-y-auto overflow-x-hidden relative scroll-smooth">

      <header id="about" class="relative min-h-screen flex items-center justify-center preserve-3d pt-20">
        <div class="absolute inset-0 bg-cover bg-center layer-bg z-0" :style="{ backgroundImage: `url(${bgImg})` }"></div>
        <div class="absolute inset-0 bg-black/60 z-0 layer-bg"></div> 
        
        <div class="relative z-20 max-w-4xl mx-auto px-6 py-16 text-center text-white bg-black/30 backdrop-blur-lg rounded-3xl border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.4)] animate-on-load w-11/12 md:w-full">
          <h1 class="text-5xl md:text-7xl font-extrabold mb-6 font-mono drop-shadow-2xl">
            <span>{{ visibleIntroduction }}</span>
            <span class="text-blue-400 type-cursor">{{ visibleName }}</span>
          </h1>
          <p class="text-xl md:text-2xl text-gray-200 mb-10 font-light tracking-wide">
            Leidenschaftlicher Informatiker Multimedia.<br>Ich liebe es, digitale Erlebnisse durch Code, 3D und Design zu erschaffen.
          </p>
          <a href="#resume" class="inline-block bg-blue-600 text-white px-10 py-4 rounded-full shadow-lg hover:bg-blue-500 transition-all font-bold text-lg">
            Lebenslauf ansehen
          </a>
        </div>
      </header>

      <section id="resume" class="relative bg-white z-20 shadow-[0_-30px_60px_rgba(0,0,0,0.15)] py-32 preserve-3d">
        <div class="absolute top-20 left-10 text-[15rem] font-black text-gray-50 opacity-50 whitespace-nowrap layer-deep-bg pointer-events-none select-none">BILDUNG</div>
        
        <div class="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <h2 class="text-5xl font-extrabold mb-20 text-gray-900 tracking-tight scroll-driven fade-down-driven layer-fg">Bildungsweg</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-12 gap-12 items-stretch">
            <div class="md:col-span-4 scroll-driven scale-driven">
              <div class="bg-gradient-to-br from-blue-50 to-indigo-50 backdrop-blur-md p-10 rounded-3xl border border-blue-100/50 h-full flex flex-col justify-center shadow-lg relative overflow-hidden">
                <div class="absolute -top-10 -right-10 w-40 h-40 bg-blue-200/40 rounded-full blur-2xl"></div>
                <h3 class="text-3xl font-bold text-blue-700 mb-6 leading-tight relative z-10">Eine interkulturelle<br>akademische Reise.</h3>
                <p class="text-gray-600 text-lg leading-relaxed relative z-10">
                  Von den strengen analytischen Grundlagen der Informatik bis hin zur kreativen Entfaltung im Bereich Multimedia und Game Development.
                </p>
              </div>
            </div>

            <div class="md:col-span-8 space-y-8">
              <div class="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-gray-100 scroll-driven fade-up-driven group hover:border-blue-300 transition-colors">
                <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 class="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">bib International College</h3>
                    <p class="text-lg text-blue-500 font-medium">Staatlich geprüfter Informatiker Multimedia</p>
                  </div>
                  <div class="mt-2 md:mt-0 px-4 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-bold tracking-wider">
                    10/2023 - 09/2025
                  </div>
                </div>
                <p class="text-gray-600 leading-relaxed mb-4">
                  Fokus auf die praktische Entwicklung interaktiver Medien. Im Rahmen der Ausbildung erlangte ich unter anderem die Zertifizierung zum „Game Developer“.
                </p>
                <div class="flex flex-wrap gap-2">
                  <span class="text-xs font-semibold px-3 py-1 bg-gray-100 text-gray-600 rounded-md">Game Development</span>
                  <span class="text-xs font-semibold px-3 py-1 bg-gray-100 text-gray-600 rounded-md">2D-Platformer</span>
                  <span class="text-xs font-semibold px-3 py-1 bg-gray-100 text-gray-600 rounded-md">Multimedia</span>
                </div>
              </div>

              <div class="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-gray-100 scroll-driven fade-up-driven" style="transition-delay: 50ms;">
                <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 class="text-2xl font-bold text-gray-900">Universität Paderborn</h3>
                    <p class="text-lg text-gray-600 font-medium">Informatik (Bachelorstudiengang) & Studienkolleg</p>
                  </div>
                  <div class="mt-2 md:mt-0 px-4 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-bold tracking-wider">
                    10/2020 - 06/2023
                  </div>
                </div>
                <p class="text-gray-600 leading-relaxed mb-4">
                  Aneignung fundierter theoretischer Kenntnisse in der Informatik. Vorab erfolgreicher Abschluss des internationalen Studienkollegs zur fachlichen Studienvorbereitung.
                </p>
                <div class="flex flex-wrap gap-2">
                  <span class="text-xs font-semibold px-3 py-1 bg-gray-100 text-gray-600 rounded-md">Theoretische Informatik</span>
                  <span class="text-xs font-semibold px-3 py-1 bg-gray-100 text-gray-600 rounded-md">Algorithmen</span>
                  <span class="text-xs font-semibold px-3 py-1 bg-gray-100 text-gray-600 rounded-md">Softwaretechnik</span>
                </div>
              </div>

              <div class="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-gray-100 scroll-driven fade-up-driven" style="transition-delay: 100ms;">
                <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 class="text-2xl font-bold text-gray-900">Nr.89 Hochschule Xi'an (China)</h3>
                    <p class="text-lg text-gray-600 font-medium">Allgemeine Hochschulreife (Gao Kao)</p>
                  </div>
                  <div class="mt-2 md:mt-0 px-4 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-bold tracking-wider">
                    09/2016 - 06/2019
                  </div>
                </div>
                <p class="text-gray-600 leading-relaxed">
                  Erfolgreicher Abschluss der High School mit sehr gutem Ergebnis im nationalen Hochschulaufnahmetest (Gao Kao).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" class="relative bg-gray-50 z-30 shadow-[0_-30px_60px_rgba(0,0,0,0.12)] py-32 preserve-3d">
        <div class="absolute inset-0 opacity-20 layer-bg pointer-events-none" style="background-image: radial-gradient(#3b82f6 2px, transparent 2px); background-size: 40px 40px;"></div>
        
        <div class="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <h2 class="text-5xl font-extrabold mb-20 text-center text-gray-900 tracking-tight scroll-driven fade-down-driven layer-fg">Kenntnisse & Fähigkeiten</h2>
          
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            
            <div class="bg-white/90 backdrop-blur-md p-10 rounded-[2.5rem] shadow-xl border border-gray-100 scroll-driven fade-up-driven flex flex-col h-full">
              <div class="flex items-center mb-16">
                <div class="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center text-2xl font-black mr-5 shadow-inner">&lt;/&gt;</div>
                <h3 class="text-3xl font-bold text-gray-900">Softwareentwicklung</h3>
              </div>
              
              <div class="relative h-80 flex items-end justify-around border-b-2 border-gray-200 pb-1 mt-auto">
                <div class="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-30 z-0">
                  <div class="border-t-2 border-dashed border-gray-400 w-full"></div>
                  <div class="border-t-2 border-dashed border-gray-400 w-full"></div>
                  <div class="border-t-2 border-dashed border-gray-400 w-full"></div>
                  <div class="border-t-2 border-dashed border-gray-400 w-full"></div>
                  <div class="border-t-2 border-transparent w-full"></div>
                </div>

                <div class="relative flex flex-col items-center w-14 sm:w-16 md:w-20 z-10 h-full justify-end group cursor-pointer">
                  <div class="w-full bg-gradient-to-t from-blue-600 to-cyan-400 rounded-t-xl shadow-[0_0_25px_rgba(6,182,212,0.5)] h-driven relative transition-transform duration-300 group-hover:brightness-110 group-hover:scale-105" style="--target-h: 90%;">
                    <span class="absolute -top-10 left-1/2 -translate-x-1/2 font-black text-cyan-500 text-lg md:text-xl drop-shadow-md transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110">90%</span>
                  </div>
                  <span class="absolute -bottom-10 text-sm md:text-base font-extrabold text-gray-800 whitespace-nowrap transition-colors group-hover:text-cyan-500">Vue.js</span>
                </div>
                
                <div class="relative flex flex-col items-center w-14 sm:w-16 md:w-20 z-10 h-full justify-end group cursor-pointer">
                  <div class="w-full bg-gradient-to-t from-blue-600 to-cyan-400 rounded-t-xl shadow-[0_0_20px_rgba(6,182,212,0.4)] h-driven relative transition-transform duration-300 group-hover:brightness-110 group-hover:scale-105" style="--target-h: 85%;">
                    <span class="absolute -top-10 left-1/2 -translate-x-1/2 font-black text-cyan-500 text-lg md:text-xl drop-shadow-md transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110">85%</span>
                  </div>
                  <span class="absolute -bottom-10 text-sm md:text-base font-extrabold text-gray-800 whitespace-nowrap transition-colors group-hover:text-cyan-500">JS/CSS</span>
                </div>

                <div class="relative flex flex-col items-center w-14 sm:w-16 md:w-20 z-10 h-full justify-end group cursor-pointer">
                  <div class="w-full bg-gradient-to-t from-blue-700 to-blue-400 rounded-t-xl shadow-[0_0_20px_rgba(59,130,246,0.5)] h-driven relative transition-transform duration-300 group-hover:brightness-110 group-hover:scale-105" style="--target-h: 80%;">
                    <span class="absolute -top-10 left-1/2 -translate-x-1/2 font-black text-blue-500 text-lg md:text-xl drop-shadow-md transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110">80%</span>
                  </div>
                  <span class="absolute -bottom-10 text-sm md:text-base font-extrabold text-gray-800 whitespace-nowrap transition-colors group-hover:text-blue-500">Java/C#</span>
                </div>

                <div class="relative flex flex-col items-center w-14 sm:w-16 md:w-20 z-10 h-full justify-end group cursor-pointer">
                  <div class="w-full bg-gradient-to-t from-blue-700 to-blue-400 rounded-t-xl shadow-[0_0_15px_rgba(59,130,246,0.4)] h-driven relative transition-transform duration-300 group-hover:brightness-110 group-hover:scale-105" style="--target-h: 75%;">
                    <span class="absolute -top-10 left-1/2 -translate-x-1/2 font-black text-blue-500 text-lg md:text-xl drop-shadow-md transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110">75%</span>
                  </div>
                  <span class="absolute -bottom-10 text-sm md:text-base font-extrabold text-gray-800 whitespace-nowrap transition-colors group-hover:text-blue-500">Python</span>
                </div>

                <div class="relative flex flex-col items-center w-14 sm:w-16 md:w-20 z-10 h-full justify-end group cursor-pointer">
                  <div class="w-full bg-gradient-to-t from-blue-800 to-blue-500 rounded-t-xl shadow-[0_0_15px_rgba(37,99,235,0.4)] h-driven relative transition-transform duration-300 group-hover:brightness-110 group-hover:scale-105" style="--target-h: 70%;">
                    <span class="absolute -top-10 left-1/2 -translate-x-1/2 font-black text-blue-600 text-lg md:text-xl drop-shadow-md transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110">70%</span>
                  </div>
                  <span class="absolute -bottom-10 text-sm md:text-base font-extrabold text-gray-800 whitespace-nowrap transition-colors group-hover:text-blue-600">SQL</span>
                </div>
              </div>
            </div>

            <div class="bg-white/90 backdrop-blur-md p-10 rounded-[2.5rem] shadow-xl border border-gray-100 scroll-driven fade-up-driven flex flex-col h-full" style="transition-delay: 50ms;">
              <div class="flex items-center mb-16">
                <div class="w-14 h-14 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center text-2xl font-black mr-5 shadow-inner">3D</div>
                <h3 class="text-3xl font-bold text-gray-900">Multimedia & Design</h3>
              </div>

              <div class="relative h-80 flex items-end justify-around border-b-2 border-gray-200 pb-1 mt-auto">
                <div class="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-30 z-0">
                  <div class="border-t-2 border-dashed border-gray-400 w-full"></div>
                  <div class="border-t-2 border-dashed border-gray-400 w-full"></div>
                  <div class="border-t-2 border-dashed border-gray-400 w-full"></div>
                  <div class="border-t-2 border-dashed border-gray-400 w-full"></div>
                  <div class="border-t-2 border-transparent w-full"></div>
                </div>

                <div class="relative flex flex-col items-center w-16 sm:w-20 md:w-24 z-10 h-full justify-end group cursor-pointer">
                  <div class="w-full bg-gradient-to-t from-purple-600 to-pink-400 rounded-t-xl shadow-[0_0_25px_rgba(244,114,182,0.5)] h-driven relative transition-transform duration-300 group-hover:brightness-110 group-hover:scale-105" style="--target-h: 85%;">
                    <span class="absolute -top-10 left-1/2 -translate-x-1/2 font-black text-pink-500 text-lg md:text-xl drop-shadow-md transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110">85%</span>
                  </div>
                  <span class="absolute -bottom-10 text-sm md:text-base font-extrabold text-gray-800 whitespace-nowrap transition-colors group-hover:text-pink-500">Unity</span>
                </div>
                
                <div class="relative flex flex-col items-center w-16 sm:w-20 md:w-24 z-10 h-full justify-end group cursor-pointer">
                  <div class="w-full bg-gradient-to-t from-purple-600 to-pink-400 rounded-t-xl shadow-[0_0_20px_rgba(244,114,182,0.4)] h-driven relative transition-transform duration-300 group-hover:brightness-110 group-hover:scale-105" style="--target-h: 80%;">
                    <span class="absolute -top-10 left-1/2 -translate-x-1/2 font-black text-pink-500 text-lg md:text-xl drop-shadow-md transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110">80%</span>
                  </div>
                  <span class="absolute -bottom-10 text-sm md:text-base font-extrabold text-gray-800 whitespace-nowrap transition-colors group-hover:text-pink-500">Blender</span>
                </div>

                <div class="relative flex flex-col items-center w-16 sm:w-20 md:w-24 z-10 h-full justify-end group cursor-pointer">
                  <div class="w-full bg-gradient-to-t from-purple-700 to-purple-400 rounded-t-xl shadow-[0_0_20px_rgba(192,132,252,0.5)] h-driven relative transition-transform duration-300 group-hover:brightness-110 group-hover:scale-105" style="--target-h: 70%;">
                    <span class="absolute -top-10 left-1/2 -translate-x-1/2 font-black text-purple-500 text-lg md:text-xl drop-shadow-md transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110">70%</span>
                  </div>
                  <span class="absolute -bottom-10 text-sm md:text-base font-extrabold text-gray-800 whitespace-nowrap transition-colors group-hover:text-purple-500">Houdini</span>
                </div>

                <div class="relative flex flex-col items-center w-16 sm:w-20 md:w-24 z-10 h-full justify-end group cursor-pointer">
                  <div class="w-full bg-gradient-to-t from-purple-600 to-pink-400 rounded-t-xl shadow-[0_0_25px_rgba(244,114,182,0.5)] h-driven relative transition-transform duration-300 group-hover:brightness-110 group-hover:scale-105" style="--target-h: 90%;">
                    <span class="absolute -top-10 left-1/2 -translate-x-1/2 font-black text-pink-500 text-lg md:text-xl drop-shadow-md transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110">90%</span>
                  </div>
                  <span class="absolute -bottom-10 text-sm md:text-base font-extrabold text-gray-800 whitespace-nowrap transition-colors group-hover:text-pink-500">PS/PR/AE</span>
                </div>
              </div>
            </div>

          </div>

          <div class="bg-white/90 backdrop-blur-md p-10 rounded-3xl shadow-xl border border-gray-100 scroll-driven fade-up-driven flex flex-col md:flex-row md:items-center justify-between mt-10" style="transition-delay: 100ms;">
            <div class="mb-6 md:mb-0 md:mr-8 md:w-1/3">
              <h3 class="text-2xl font-bold text-gray-900 mb-2">Sprachkenntnisse</h3>
              <p class="text-gray-600 font-medium">Reibungslose Kommunikation in interkulturellen Teams.</p>
            </div>
            <div class="flex flex-col sm:flex-row gap-4 md:w-2/3 justify-end">
              <div class="bg-gray-50 border-2 border-gray-100 px-6 py-4 rounded-xl text-center flex-1 hover:border-gray-300 transition-colors">
                <div class="text-sm text-gray-500 uppercase tracking-wider font-bold mb-1">Chinesisch</div>
                <div class="text-xl font-bold text-gray-900">Muttersprache</div>
              </div>
              <div class="bg-gray-50 border-2 border-blue-100 px-6 py-4 rounded-xl text-center flex-1 hover:border-blue-200 transition-colors">
                <div class="text-sm text-blue-500 uppercase tracking-wider font-bold mb-1">Deutsch</div>
                <div class="text-xl font-black text-blue-600">Verhandlungssicher</div>
              </div>
              <div class="bg-gray-50 border-2 border-gray-100 px-6 py-4 rounded-xl text-center flex-1 hover:border-gray-300 transition-colors">
                <div class="text-sm text-gray-500 uppercase tracking-wider font-bold mb-1">Englisch</div>
                <div class="text-xl font-bold text-gray-900">Verhandlungssicher</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section id="experience" class="relative bg-white z-40 shadow-[0_-30px_60px_rgba(0,0,0,0.12)] py-32 preserve-3d overflow-hidden">
        
        <div class="absolute top-0 -left-20 w-[55rem] h-[55rem] layer-deep-bg pointer-events-none mix-blend-multiply">
          <div class="w-full h-full rounded-full blur-[120px] bg-gradient-to-br from-blue-600 via-indigo-500 to-purple-600 scroll-driven halo-driven-1"></div>
        </div>
        
        <div class="absolute bottom-0 -right-10 w-[50rem] h-[50rem] layer-bg pointer-events-none mix-blend-multiply">
          <div class="w-full h-full rounded-full blur-[120px] bg-gradient-to-tl from-cyan-400 via-blue-400 to-teal-300 scroll-driven halo-driven-2"></div>
        </div>

        <div class="relative z-10 max-w-5xl mx-auto px-8 w-full">
          <h2 class="text-5xl font-extrabold mb-20 text-center text-gray-900 tracking-tight scroll-driven fade-down-driven layer-fg">Praxiserfahrung</h2>
          
          <div class="bg-white/60 backdrop-blur-2xl p-12 md:p-16 rounded-[3rem] border border-white shadow-2xl relative scroll-driven scale-driven">
            <div class="relative z-10 border-l-4 border-blue-600 pl-10 space-y-16">
              
              <div class="relative scroll-driven slide-right-driven">
                <div class="absolute -left-[58px] top-1 w-6 h-6 rounded-full bg-blue-600 border-4 border-white shadow-md ring-4 ring-blue-100"></div>
                <h3 class="text-3xl font-bold text-gray-900 mb-2">Praktikum</h3>
                <h4 class="text-xl text-blue-600 font-bold mb-3">HEGGEMAN AG</h4>
                <p class="text-gray-600 font-semibold tracking-wide uppercase">02/2025 - 04/2025 | Paderborn, Deutschland</p>
              </div>

              <div class="relative scroll-driven slide-right-driven" style="transition-delay: 50ms;">
                <div class="absolute -left-[58px] top-1 w-6 h-6 rounded-full bg-gray-400 border-4 border-white shadow-md"></div>
                <h3 class="text-3xl font-bold text-gray-900 mb-2">Praktikum</h3>
                <h4 class="text-xl text-gray-800 font-bold mb-3">Geek+</h4>
                <p class="text-gray-600 font-semibold tracking-wide uppercase">07/2023 - 08/2023 | Venlo, Niederlande</p>
              </div>

              <div class="relative scroll-driven slide-right-driven" style="transition-delay: 100ms;">
                <div class="absolute -left-[58px] top-1 w-6 h-6 rounded-full bg-gray-400 border-4 border-white shadow-md"></div>
                <h3 class="text-3xl font-bold text-gray-900 mb-2">Praktikum</h3>
                <h4 class="text-xl text-gray-800 font-bold mb-3">Deyu</h4>
                <p class="text-gray-600 font-semibold tracking-wide uppercase">07/2019 - 08/2019 | Xi'an, Shaanxi, China</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section id="projects" class="relative bg-gray-50 z-50 shadow-[0_-30px_60px_rgba(0,0,0,0.12)] py-32 preserve-3d">
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-indigo-100 rounded-full blur-[150px] opacity-50 layer-bg pointer-events-none"></div>

        <div class="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <h2 class="text-5xl font-extrabold mb-20 text-center text-gray-900 tracking-tight scroll-driven fade-down-driven layer-fg">Projekte</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            <div class="bg-white/80 backdrop-blur-xl rounded-[2rem] shadow-xl border border-white overflow-hidden flex flex-col scroll-driven fade-up-driven preserve-3d group">
              <div class="h-72 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden layer-bg flex items-center justify-center transition-transform duration-700 group-hover:scale-105 border-b border-gray-100">
                <div class="text-blue-300 font-black text-3xl relative z-10 tracking-widest uppercase">2D Platformer</div>
              </div>
              <div class="p-10 flex-grow flex flex-col justify-between relative z-10 bg-white/50">
                <div>
                  <h3 class="text-3xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">Game Development</h3>
                  <p class="text-gray-600 mb-8 text-lg leading-relaxed font-medium">Entwicklung eines vollständigen 2D-Platformers im Rahmen der Zertifizierung zum „Game Developer“ am bib International College.</p>
                </div>
                <div class="flex flex-wrap gap-3 mt-auto">
                  <span class="bg-blue-100 text-blue-700 text-sm px-5 py-2 rounded-full font-bold shadow-sm">Unity</span>
                  <span class="bg-blue-100 text-blue-700 text-sm px-5 py-2 rounded-full font-bold shadow-sm">C#</span>
                </div>
              </div>
            </div>
            
            <div class="bg-white/80 backdrop-blur-xl rounded-[2rem] shadow-xl border border-white overflow-hidden flex flex-col scroll-driven fade-up-driven preserve-3d group" style="transition-delay: 150ms">
              <div class="h-72 bg-gradient-to-br from-purple-50 to-pink-50 relative overflow-hidden layer-bg flex items-center justify-center transition-transform duration-700 group-hover:scale-105 border-b border-gray-100">
                <div class="text-purple-300 font-black text-3xl relative z-10 tracking-widest uppercase">3D Rendering</div>
              </div>
              <div class="p-10 flex-grow flex flex-col justify-between relative z-10 bg-white/50">
                <div>
                  <h3 class="text-3xl font-bold mb-4 text-gray-900 group-hover:text-purple-600 transition-colors">3D & Rendering</h3>
                  <p class="text-gray-600 mb-8 text-lg leading-relaxed font-medium">Nutzung von Blender für die 3D-Modellierung und anschließende Integration in Houdini für professionelles Rendering.</p>
                </div>
                <div class="flex flex-wrap gap-3 mt-auto">
                  <span class="bg-purple-100 text-purple-700 text-sm px-5 py-2 rounded-full font-bold shadow-sm">Blender</span>
                  <span class="bg-purple-100 text-purple-700 text-sm px-5 py-2 rounded-full font-bold shadow-sm">Houdini</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section id="contact" class="relative bg-gray-100 z-[60] shadow-[0_-30px_60px_rgba(0,0,0,0.15)] py-32 preserve-3d overflow-hidden">
        <div class="absolute top-1/3 right-10 w-96 h-96 bg-blue-300 rounded-full blur-[120px] opacity-30 layer-deep-bg pointer-events-none"></div>

        <div class="relative z-10 max-w-5xl mx-auto px-8 w-full">
          
          <div class="layer-fg">
            <h2 class="text-5xl font-extrabold mb-8 text-center text-gray-900 tracking-tight scroll-driven slide-from-right">Kontakt & Nachricht</h2>
            <p class="text-center text-gray-600 mb-16 text-lg scroll-driven slide-from-right font-medium">Haben Sie Fragen oder möchten Sie mit mir zusammenarbeiten? <br>Hinterlassen Sie mir gerne eine Nachricht!</p>
          </div>

          <div class="bg-white/80 backdrop-blur-xl p-10 md:p-14 rounded-[3rem] border border-white shadow-2xl scroll-driven slide-from-left relative">
            <form class="relative z-10 space-y-8" @submit.prevent>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label class="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Name</label>
                  <input type="text" class="w-full bg-gray-50 border border-gray-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all text-gray-800 placeholder-gray-400 font-medium" placeholder="Ihr Name">
                </div>
                <div>
                  <label class="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">E-Mail</label>
                  <input type="email" class="w-full bg-gray-50 border border-gray-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all text-gray-800 placeholder-gray-400 font-medium" placeholder="Ihre E-Mail Adresse">
                </div>
              </div>
              <div>
                <label class="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Nachricht</label>
                <textarea rows="5" class="w-full bg-gray-50 border border-gray-200 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all text-gray-800 placeholder-gray-400 resize-none font-medium" placeholder="Ihre Nachricht..."></textarea>
              </div>
              <div class="text-center pt-4">
                <button type="submit" class="bg-blue-600 text-white font-bold text-lg px-12 py-4 rounded-full shadow-[0_8px_20px_rgba(37,99,235,0.3)] hover:bg-blue-500 hover:-translate-y-1 hover:shadow-[0_12px_25px_rgba(37,99,235,0.4)] transition-all duration-300 w-full md:w-auto">
                  Nachricht Senden
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer class="relative bg-gray-950 pt-24 pb-12 z-[70] border-t border-white/10 text-gray-400">
        <div class="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 scroll-driven fade-up-driven">
          
          <div>
            <h4 class="text-white text-2xl font-bold mb-6">Yongkang Zhang</h4>
            <p class="leading-relaxed mb-4">Leidenschaftlicher Informatiker Multimedia. Ich gestalte digitale Erlebnisse von der Idee bis zum finalen Produkt.</p>
          </div>

          <div>
            <h4 class="text-white text-xl font-bold mb-6">Kontakt</h4>
            <ul class="space-y-4">
              <li class="flex items-start">
                <svg class="w-6 h-6 text-blue-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                <a href="mailto:001231Zhangyongkang@gmail.com" class="hover:text-blue-400 transition-colors break-all">001231Zhangyongkang@gmail.com</a>
              </li>
              <li class="flex items-center">
                <svg class="w-6 h-6 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                <span>0176 32924545</span>
              </li>
              <li class="flex items-start">
                <svg class="w-6 h-6 text-blue-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <span>An der Schönen Aussicht 4<br>33098 Paderborn</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 class="text-white text-xl font-bold mb-6">Navigation</h4>
            <ul class="space-y-3">
              <li><a href="#about" class="hover:text-blue-400 transition-colors">Über mich</a></li>
              <li><a href="#resume" class="hover:text-blue-400 transition-colors">Lebenslauf</a></li>
              <li><a href="#skills" class="hover:text-blue-400 transition-colors">Fähigkeiten</a></li>
              <li><a href="#experience" class="hover:text-blue-400 transition-colors">Erfahrung</a></li>
            </ul>
          </div>
          
        </div>
        
        <div class="border-t border-white/10 pt-8 text-center text-sm">
          <p>&copy; 2024 Yongkang Zhang. Alle Rechte vorbehalten.</p>
        </div>
      </footer>

    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import bgImg from './assets/portrait.png'; 

// 导航栏滚动状态变量
const isScrolled = ref(false);

const handleContainerScroll = (e) => {
  isScrolled.value = e.target.scrollTop > 60;
};

// 打字机逻辑
const typingSpeed = 100; const deleteSpeed = 50; const startDelay = 500; const pauseDelay = 2000; 
const visibleIntroduction = ref(''); const visibleName = ref(''); let isTypingActive = true; 

const typeSentence = (f, t, s) => new Promise(r => { let i = 0; const v = setInterval(() => { if(!isTypingActive) return r(clearInterval(v)); if(i < f.length) { t.value += f[i]; i++; } else r(clearInterval(v)); }, s); });
const deleteSentence = (t, s) => new Promise(r => { const v = setInterval(() => { if(!isTypingActive) return r(clearInterval(v)); if(t.value.length > 0) t.value = t.value.slice(0, -1); else r(clearInterval(v)); }, s); });

// LERP 动画引擎（极其丝滑、不卡顿）
let rafId = null;
const dampingFactor = 0.15; 
const animElements = [];

const lerp = (start, end, factor) => start + (end - start) * factor;

const renderLoop = () => {
  const windowHeight = window.innerHeight;

  animElements.forEach(item => {
    const rect = item.el.getBoundingClientRect();
    
    // 只要元素顶部碰到屏幕底部，马上触发动画！
    const startAnimPos = windowHeight * 1.0; 
    
    // 提早结束阈值，让柱状图瞬间拉满，其他元素迅速就位
    const isBar = item.el.classList.contains('h-driven');
    const endAnimPos = isBar ? windowHeight * 0.85 : windowHeight * 0.85;   

    let targetProgress = (startAnimPos - rect.top) / (startAnimPos - endAnimPos);
    targetProgress = Math.max(0, Math.min(1, targetProgress));

    item.currentP = lerp(item.currentP, targetProgress, dampingFactor);

    if (Math.abs(item.currentP - targetProgress) > 0.001) {
      item.el.style.setProperty('--scroll-p', item.currentP.toFixed(4));
    }
  });

  rafId = requestAnimationFrame(renderLoop);
};

onMounted(async () => {
  const container = document.getElementById('parallax-container');
  if (container) {
    container.addEventListener('scroll', handleContainerScroll, { passive: true });
  }

  document.querySelectorAll('.scroll-driven, .h-driven').forEach(el => {
    animElements.push({ el, currentP: 0 });
  });

  rafId = requestAnimationFrame(renderLoop);

  // 德语打字机启动
  await new Promise(r => setTimeout(r, startDelay));
  while (isTypingActive) {
    await typeSentence("Hi, ich bin ", visibleIntroduction, typingSpeed);
    if (!isTypingActive) break;
    await typeSentence("Yongkang", visibleName, typingSpeed);
    if (!isTypingActive) break;
    await new Promise(r => setTimeout(r, pauseDelay));
    if (!isTypingActive) break;
    await deleteSentence(visibleName, deleteSpeed);
    if (!isTypingActive) break;
    await deleteSentence(visibleIntroduction, deleteSpeed);
    if (!isTypingActive) break;
    await new Promise(r => setTimeout(r, startDelay));
  }
});

onUnmounted(() => { 
  isTypingActive = false; 
  if (rafId) cancelAnimationFrame(rafId);
  const container = document.getElementById('parallax-container');
  if (container) {
    container.removeEventListener('scroll', handleContainerScroll);
  }
});
</script>

<style>
/* 防止滚动条出现在不该出现的地方 */
body { margin: 0; padding: 0; overflow: hidden; }

/* 禁用移动端不需要的动画，保障性能 */
@media (max-width: 768px) {
  .parallax-wrapper { perspective: none; }
  .layer-bg, .layer-deep-bg, .layer-fg { transform: none; }
}

/* === 核心：纯净 CSS 3D 视差引擎 === */
.parallax-wrapper {
  perspective: 3px;
  perspective-origin: center center;
}

.preserve-3d {
  transform-style: preserve-3d;
}

.layer-bg {
  transform: translateZ(-1px) scale(1.334);
  transform-origin: center center;
}

.layer-deep-bg {
  transform: translateZ(-2px) scale(1.667);
  transform-origin: center center;
}

.layer-fg {
  transform: translateZ(1px) scale(0.667);
  transform-origin: center center;
}

/* === LERP 丝滑位移映射 === */
.scroll-driven { will-change: transform, opacity, filter; }
.type-cursor { border-right: 3px solid #60a5fa; animation: blink 1s step-end infinite; padding-right: 4px; }
@keyframes blink { 50% { border-color: transparent; } }
.animate-on-load { animation: loadUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
@keyframes loadUp { 0% { opacity: 0; transform: translateY(40px); } 100% { opacity: 1; transform: translateY(0); } }

/* 基础滑动 */
.fade-up-driven { opacity: var(--scroll-p, 0); transform: translateY(calc((1 - var(--scroll-p, 0)) * 60px)); }
.fade-down-driven { opacity: var(--scroll-p, 0); transform: translateY(calc((1 - var(--scroll-p, 0)) * -40px)); }
.slide-left-driven { opacity: var(--scroll-p, 0); transform: translateX(calc((1 - var(--scroll-p, 0)) * 60px)); }
.slide-right-driven { opacity: var(--scroll-p, 0); transform: translateX(calc((1 - var(--scroll-p, 0)) * -60px)); }
.scale-driven { opacity: var(--scroll-p, 0); transform: scale(calc(0.95 + (var(--scroll-p, 0) * 0.05))); }

/* 联系页专属：幅度更大的左右交错滑动 */
.slide-from-right {
  opacity: var(--scroll-p, 0);
  transform: translateX(calc((1 - var(--scroll-p, 0)) * 150px));
}
.slide-from-left {
  opacity: var(--scroll-p, 0);
  transform: translateX(calc((1 - var(--scroll-p, 0)) * -150px));
}

/* 🔥 新增：光晕动态呼吸系统 (绑定的颜色渐变、旋转、缩放) */
.halo-driven-1 {
  opacity: calc(0.3 + (var(--scroll-p, 0) * 0.7));
  transform: rotate(calc(var(--scroll-p, 0) * 180deg)) scale(calc(0.7 + var(--scroll-p, 0) * 0.5));
  filter: hue-rotate(calc(var(--scroll-p, 0) * 90deg));
}

.halo-driven-2 {
  opacity: calc(0.3 + (var(--scroll-p, 0) * 0.7));
  transform: rotate(calc(var(--scroll-p, 0) * -180deg)) scale(calc(0.7 + var(--scroll-p, 0) * 0.5));
  filter: hue-rotate(calc(var(--scroll-p, 0) * 90deg));
}

/* 柱状图生长效果 */
.h-driven {
  height: calc(var(--target-h) * var(--scroll-p, 0));
  will-change: height;
}
</style>