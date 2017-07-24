	 var currentSongNumber = 1;
     var willLoop = 0;
			//var willShuffle = 0; 
	   var willmute = 1; 
			   
			  function mute()
			  {
			      var song=document.querySelector('audio');
				  if (song.muted)
					  {
						song.muted= false;
					  }
				 else
					  {
						song.muted=true;
					  }
			   }
<!--------------------------------------------------------//vegas slider start------------------------------------------------------------------>	
		
	function slide(next)
	  {
		  if(next==songs[0])
		  {
			  $('body').vegas('destroy');

				  $('.vegas-slider').vegas(
				  {
				
					 slides:[
							{ src: "img/10.png" },
							{ src: "img/11.jpg" },
							{ src: "img/12.jpg" },
							{ src: "img/13.jpg" },
							{ src: "img/14.jpg" },
							{ src: "img/15.jpg" },
							{ src: "img/16.jpg" },
							{ src: "img/17.jpg" },
							{ src: "img/18.jpg" },
							{ src: "img/19.jpg" },
							{ src: "img/101.jpg" },
							{ src: "img/102.jpg" },
							{ src: "img/103.jpg" }
							],
				   animation: 'kenburns'
				 });
	     }
	   
	   else if(next ==songs[1])
	   {
				 $('body').vegas('destroy');
					 
				 $('.vegas-slider').vegas(
				 {
					
				   slides:[
						{ src: "img/21.jpg" },
						{ src: "img/22.jpg" },
						{ src: "img/23.jpg" },
						{ src: "img/24.jpg" },
						{ src: "img/25.jpg" },
						{ src: "img/26.jpg" },
						{ src: "img/27.jpg" },
						{ src: "img/28.jpg" },
						{ src: "img/29.jpg" },
						{ src: "img/291.jpg" },
						{ src: "img/292.jpg" },
						{ src: "img/293.jpg" }
					     ],
					animation: 'kenburns'
				 });
	    }
	
            else if(next == songs[2])
			    {
				    $('body').vegas('destroy');
					   $('.vegas-slider').vegas(
					   {
						 slides:[
							{ src: "img/30.jpg" },
							{ src: "img/31.jpg" },
							{ src: "img/32.jpg" },
							{ src: "img/33.jpg" },
							{ src: "img/34.jpg" },
							{ src: "img/35.jpg" },
							{ src: "img/36.jpg" },
							{ src:"img/37.jpg"  },
							{ src: "img/38.jpg" },
							{ src: "img/39.jpg" }
							  ],
						animation: 'kenburns'
				      });
				
				}	
				
				  else if(next == songs[3])
				  {
					 $('body').vegas('destroy');
						$('.vegas-slider').vegas(
						{
						   slides:[
								{ src: "img/41.jpg" },
								{ src: "img/42.jpg" },
								{ src: "img/43.jpg" },
								{ src: "img/45.jpg" },
								{ src: "img/46.jpg" },
								{ src: "img/47.jpg" },
								{ src: "img/48.jpg" },
								{ src: "img/401.jpg" },
								{ src: "img/402.jpg" },
								{ src: "img/403.jpg" },
								{ src: "img/404.jpg" },
								{ src: "img/405.jpg" },
								{ src: "img/406.jpg" },
								{ src: "img/407.jpg" }
								  ],
							animation: 'kenburns'
						});
			      }
				
				    else if(next == songs[4])
					{
						$('body').vegas('destroy');
							$('.vegas-slider').vegas(
							{
							    slides:[
								{ src: "img/51.jpg" },
								{ src: "img/52.jpg" },
								{ src: "img/53.jpg" },
								{ src: "img/54.jpg" },
								{ src: "img/55.jpg" },
								{ src: "img/56.jpg" },
								{ src: "img/57.jpg" },
								{ src: "img/58.jpg" },
								{ src: "img/59.jpg" },
								{ src: "img/591.jpg" },
								{ src: "img/592.jpg" },
								{ src: "img/593.jpg" },
								{ src: "img/595.jpg" },
								{ src: "img/596.jpg" },
								{ src: "img/597.jpg" },
								{ src: "img/598.jpg" },
								{ src: "img/599.jpg" },
								{ src: "img/501.jpg" },
								{ src: "img/502.jpg" },
								{ src: "img/503.jpg" },
								{ src: "img/504.jpg" },
								{ src: "img/505.jpg" },
								{ src: "img/506.jpg" },
								{ src: "img/507.jpg" }
								 ],
						        animation: 'kenburns'
					   });
				    }
				 
				     else if(next == songs[5])
				     {
					     $('body').vegas('destroy');
						 $('.vegas-slider').vegas(
						 {
							slides:[
								{ src: "img/60.jpg" },
								{ src: "img/61.jpg" },
								{ src: "img/62.jpg" },
								{ src: "img/63.jpg" },
								{ src: "img/64.jpg" },
								{ src: "img/65.jpg" },
								{ src: "img/66.jpg" },
								{ src: "img/67.jpg" },
								{ src: "img/601.jpg" },
								{ src: "img/602.jpg" },
								{ src: "img/603.png" },
								{ src: "img/604.jpg" }
								],
							animation: 'kenburns'
						 });
				     }
				
				      else
				      {
						$('body').vegas('destroy');
						$('.vegas-slider').vegas(
						{
							slides:[
								{ src: "img/01.jpg" },
								{ src: "img/02.jpg" },
								{ src: "img/04.jpg" },
								{ src: "img/05.jpg" },
								{ src: "img/06.jpg" }
							],
							animation: 'kenburns'
						});
				     }
				
				}
				
<!-----------------------------------------------------------------//vegas slider end-------------------------------------------------------------------------->				 
		function fancyTimeFormat(time)
				{   
					// Hours, minutes and seconds
					var hrs = ~~(time / 3600);
					var mins = ~~((time % 3600) / 60);
					var secs = time % 60;

					// Output like "1:01" or "4:03:59" or "123:03:59"    //this show the time duration of songs
					var ret = "";
                     
					if (hrs > 0) {
						ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
					}

					ret += "" + mins + ":" + (secs < 10 ? "0" : "");
					ret += "" + secs;
					return ret;
				}
				
				
			 function changeCurrentSongDetails(songObj) 
			    {
					$('.current-song-image').attr('src','img/' + songObj.image)
					$('.current-song-name').text(songObj.name)                       //this change the name,album nd imgae of selected song
					$('.current-song-album').text(songObj.album)
				}

    
                function setvolume()
				  {
					var song = document.querySelector('audio');
					song.volume = slider.value/100;
				  }
    
			function toggleSong() 
			{
				var song = document.querySelector('audio');
				if(song.paused == true) {        // if song is in pause mode then play 
				console.log('Playing');
				$('.play-icon').removeClass('fa-play').addClass('fa-pause');
				song.play();
				$('body').vegas('play');                                                
				}
				else {
				console.log('Pausing');          //otherwise pause 
				$('.play-icon').removeClass('fa-pause').addClass('fa-play');
				song.pause();
				$('body').vegas('pause');
				}
			} 
			
			          function updateCurrentTime() 
					  {
							var song = document.querySelector('audio');
							var currentTime = Math.floor(song.currentTime);
							currentTime = fancyTimeFormat(currentTime);
							var duration = Math.floor(song.duration);
							duration = fancyTimeFormat(duration)
							$('.time-elapsed').text(currentTime);
							$('.song-duration').text(duration);
		              }
		
	
	              function addSongNameClickEvent(songObj,position) 
			       {
							var songName = songObj.fileName;
							var id = '#song' + position;
							$(id).click(function() {
							var audio = document.querySelector('audio');
							var currentSong = audio.src;
							if(currentSong.search(songName) != -1)
							{
							toggleSong();
								
							 
							}
							else {
							audio.src = songName;
							toggleSong();
							
							changeCurrentSongDetails(songObj); 
							}
							});
				   }
								
<!----------------------------------------------//start array of object--------------------------------------------------------------->				
	    var songs = [{
			
				'name': 'Closer',
				'artist': 'The Chainsmokers',
				'album': ' Memories...Do Not Open',
				'duration': '4:04',
				'fileName': 'song2.mp3',
				'image': 'song2.jpg'
			},
			{
				'name': 'Work from Home',
				'artist': ' Fifth Harmony',
				'album': '7/27',
				'duration': '3:39',
			   'fileName': 'song7.mp3',
			   'image': 'song7.jpg'
				
			},
			{
				'name': 'Let me love you',
				'artist': 'DJ Snake',
				'album': 'Encore',
				'duration': '3:25',
			   'fileName': 'song6.mp3',
			   'image': 'song6.jpg'
				
			},
			{
			    'name': 'Shape Of You',
				'artist': 'Ed Sheeran',
				'album': 'Divide',
				'duration': '3:54',
			   'fileName': 'song5.mp3',
			   'image': 'song5.jpg'
			},
			{
			   'name': 'Lean on',
				'artist': 'Major Lazer, DJ Snake',
				'album': 'NBA2K16',
				'duration': '2:56',
				'fileName': 'song1.mp3',
				'image': 'song1.jpg'
			},
		    {
				'name': 'Galway Girl',
				'artist': ' Ed Sheeran',
				'album': ' ÷',
				'duration': '2:50',
				'fileName': 'song4.mp3',
				'image': 'song4.jpg'
				
			}]
			
<!------------------------------------------------------------//array of object end--------------------------------------------------------------------------------->		  
		 $('audio').on('ended',function() 
		    {
			    var audio = document.querySelector('audio');
					if (willShuffle == 1) {
						
						var nextSongNumber = randomExcluded(1,6,currentSongNumber); 
						var nextSongObj = songs[nextSongNumber-1];
						 
						audio.src = nextSongObj.fileName;
						toggleSong();
						changeCurrentSongDetails(nextSongObj);
					     slide(nextSongObj);
						currentSongNumber = nextSongNumber;
						
					}
					else if(currentSongNumber < 7) {
						
						var nextSongObj = songs[currentSongNumber];
						audio.src = nextSongObj.fileName;
						toggleSong();
						changeCurrentSongDetails(nextSongObj);
						slide(nextSongObj);
						currentSongNumber = currentSongNumber + 1;
					}
					else if(willLoop == 1) {
					
						
						var nextSongObj = songs[0];
						audio.src = nextSongObj.fileName;
						toggleSong();
						changeCurrentSongDetails(nextSongObj);
						currentSongNumber =  1;
						slide(nextSongObj);
					}
					else {
						slide(nextSongObj);
						$('.play-icon').removeClass('fa-pause').addClass('fa-play');
						audio.currentTime = 0;
					}
			})
				
	            function randomExcluded(min,max,excluded){
				var n =Math.floor(Math.random()*(max-min)+min);
                if	(n>=excluded)n++;
                return n;				
					
				}
				
				
<!-------------------------------------------------------------------------------------------->
			window.onload = function()        //jse hi window onload hogi ye sab show kr dena ek dm
			{
			
					changeCurrentSongDetails(songs[0]);
					
					updateCurrentTime(); 
					setInterval(function() {
					updateCurrentTime();
					updateTimer();
					},1000);
				
				 //var songName1 = 'Tamma Song';
															// var songName2 = 'Humma Song';
															 //var songName3 = 'Nashe Si Chadh Gayi';
															 //var songName4 = 'The Breakup Song';
															 //var songList = ['Tamma Tamma','Humma Song', 'Nashe Si Chadh Gayi', 'The Breakup Song'];
															 //var fileNames = ['song1.mp3','song2.mp3','song3.mp3','song4.mp3'];
                                                             //var artistList = ['Neha Kakkar, Monali Thakur, Ikka Singh, Dev Negi','Badshah, Jubin Nautiyal, Shashaa Tirupati','Arijit Singh','Nakash Aziz, Arijit Singh, Badshah, Jonita Gandhi']; 
                                                             //var albumList = ['Badrinath ki Dulhania','Ok Jaanu','Befikre','Ae Dil Hai Mushkil'];
                                                             //var durationList = ['2:56','3:15','2:34','2:29'];
				
				for(var i =0; i < songs.length;i++) 
				{
					var obj = songs[i];
					var name = '#song' + (i+1);
					var song = $(name);
					song.find('.song-name').text(obj.name);
					song.find('.song-artist').text(obj.artist);
					song.find('.song-album').text(obj.album);
					song.find('.song-length').text(obj.duration);
					addSongNameClickEvent(obj,i+1);
				}
						
					//addSongNameClickEvent(fileNames[0],1);
					//addSongNameClickEvent(fileNames[1],2);
					//addSongNameClickEvent(fileNames[2],3);
					//addSongNameClickEvent(fileNames[3],4);
					//addSongNameClickEvent(fileNames[4],5);
					//addSongNameClickEvent(fileNames[5],6);
					//addSongNameClickEvent(fileNames[6],7);				
				
					//for (var i = 0; i < fileNames.length ; i++) {
					//addSongNameClickEvent(fileNames[i],i+1)
					//	} 
				
					$('#songs').DataTable({
						"paging": false
					});
			}	   
					   
					   

			
			
			
			$('.welcome-screen button').on('click', function() 
			{  
				  var name = $('#name-input').val();               
				  if (name.length > 3) 
				  {                                                  //agar welcome screen m input ki value less ya equal to 3 hui tho error show kro
					var message = "Welcome, " + name;                //otherwise error show mt kro
					       
					$('.welcome-screen').addClass('hidden');    
					$('.main').removeClass('hidden');  
					
			             $('.vegas-slider').vegas(                //welcom screen k bdh jse hi main page m jte ho ye slider start kro
						 {
		                    slides:[
									{ src: "img/01.jpg" },
									{ src: "img/02.jpg" },
									{ src: "img/04.jpg" },
									{ src: "img/05.jpg" },
									{ src: "img/06.jpg" }
								   ],
							animation: 'kenburns'
				         });
				  }
               else{
					$('#name-input').addClass('error');
					
				  }
			});
			
			
	
				$('.play-icon').on('click', function() {
					 toggleSong();
				});
	
	
	            $('body').on('keypress',function(event) {
					console.log(event);                                       // spacebar sae bhi we can use toggle function ki property
					var target = event.target;
					if (event.keyCode == 32 && target.tagName !='INPUT')
					{
						toggleSong();
					}
				});
						
							
			$('.fa-volume-up').on('click',function() {
			$('.fa-volume-up').toggleClass('disabled')
			willmute = 1 - willmute;
			
			mute();
            });
					
					
				
			$('.fa-random').on('click',function() {
			$('.fa-random').toggleClass('disabled')
			willShuffle = 1 - willShuffle;
            });
			
			$('.fa-repeat').on('click',function() {
				$('.fa-repeat').toggleClass('disabled')
				willLoop = 1 - willLoop;
			});
			
		
			$('#slider').on('mousemove',function(){
				setvolume();
			});


<!-------------------------------------------------------------------------------------------------------------------------------------------->			
			$('#song1').on('click',function(){
			slide(songs[0]);

			});

            $('#song2').on('click',function(){
			slide(songs[1]);
					 
					
			});

			$('#song3').on('click',function(){
		    slide(songs[2]);
			
			});

            $('#song4').on('click',function(){
			slide(songs[3]);
			  
			});

            $('#song5').on('click',function(){
			slide(songs[4]);
			  
			});

			$('#song6').on('click',function(){
			slide(songs[5]);
			 
			});
