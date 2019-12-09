var panelWidth = $(".panel").width();
		var imgWidth = $(".panel img").width();

// panelWidth / 2 wordt de afbeelding door twee gedeelt en komt in het midden terecht
		var difference = ((imgWidth - panelWidth)/2);

		$(".panel img").css("left",-difference);

		$(".panel").mouseover(function() {
			$(".panel").removeClass("on").removeClass("off");
			$(this).addClass("on").siblings().addClass("off");
		});
		$(".panel").mouseout(function() {
			$(".panel").removeClass("on").removeClass("off");
		});


var paneloneWidth = $(".panelone").width();
		var imgWidth = $(".panelone img").width();

		// panelWidth / 2 wordt de afbeelding door twee gedeelt en komt in het midden terecht
		var difference = ((imgWidth - paneloneWidth)/2);

		$(".panelone img").css("left",-difference);

		$(".panelone").mouseover(function() {
			$(".panelone").removeClass("on").removeClass("off");
			$(this).addClass("on").siblings().addClass("off");
		});
		$(".panelone").mouseout(function() {
			$(".panelone").removeClass("on").removeClass("off");
		});
