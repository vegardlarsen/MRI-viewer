(function($) {
	var DIR_HORIZONTAL = 'horizontal',
		DIR_VERTICAL = 'vertical';
	Slider = function(domImage) 
	{ 
		var slider = this;
		this.setImage(domImage);
		this.domSlider = $('<span />').addClass('slider animated')
			.append($('<span>').addClass('grip'))
			.append($('<span>').addClass('grip last'));
		this.domImage.after(this.domSlider);
		
		this.domSlider.bind('mousedown', function() 
		{ 
			var mousemove = function(e)
				{
					slider.scrollTo(slider.direction == DIR_VERTICAL ? (e.pageY - slider.domImage.offset().top) : (e.pageX - slider.domImage.offset().left));
				},
				mouseup = function()
				{
					$('body').unbind('mouseup', mouseup).unbind('mousemove', mousemove);
					slider.domSlider.addClass('animated');
				};
			$('body')
				.bind('mouseup', mouseup)
				.bind('mousemove', mousemove);
			slider.domSlider.removeClass('animated');
		});
		
		this.direction = DIR_VERTICAL;
		this.min = 0;
		this.max = 100;
		
		$('body').mousewheel(function(event, delta, deltaX, deltaY) 
		{
			deltaY = slider.direction == DIR_VERTICAL ? -deltaY : deltaY;
		    slider.setPosition(slider.position + deltaY);
		    slider.update();
		});
	};
	
	Slider.prototype.onChange = function() {};
	Slider.prototype.setMax = function(max) 
	{ 
		this.max = max;
	};
	Slider.prototype.setDirection = function(dir) 
	{ 
		this.direction = dir;
	};
	
	Slider.prototype.scrollTo = function(px)
	{
		var pos = (this.max - this.min);
		if (this.direction == DIR_VERTICAL)
		{
			pos *= px / this.domImage.innerHeight(); 
		}
		else
		{
			pos *= px / this.domImage.innerWidth();
		}
		this.setPosition(parseInt(pos));		
		this.update();
	};
	Slider.prototype.setImage = function(domImage)
	{
		this.domImage = $(domImage).click(this, function(event)
		{ 
			var slider = event.data;
			slider.scrollTo(slider.direction == DIR_VERTICAL ? event.offsetY : event.offsetX);
		});
	};
	Slider.prototype.setPosition = function(pos) 
	{ 
		pos = parseInt(pos);
		if (pos >= this.min && pos <= this.max)
		{
			this.position = pos;
		}
	};
	
	Slider.prototype.update = function()
	{
		this.domSlider.css(this.domImage.position());
		var pos = this.position;
		var adj = 0;
		if (this.direction == DIR_HORIZONTAL)
		{
			var pxPos = parseInt((pos * this.domImage.width()) / this.max);
			this.domSlider.css({ marginTop: -15, marginLeft: pxPos + adj, width: '3px', height: this.domImage.parent().outerHeight() });
			this.domImage.parent().addClass('horizontal').removeClass('vertical');
		}
		else
		{
			var pxPos = parseInt((pos * this.domImage.height()) / this.max);
			this.domSlider.css({ marginTop: pxPos + adj, marginLeft: -15, height: '3px', width: this.domImage.parent().outerWidth() });
			this.domImage.parent().addClass('vertical').removeClass('horizontal');
		}
		this.onChange();
	};
	
	$.fn.slider = function()
	{
		return new Slider(this);
	};	
})(jQuery);