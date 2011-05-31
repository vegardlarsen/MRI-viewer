(function($)
{
	Marker = function(parent, marker)
	{
		var self = this;
		this.marker = marker;
		this.dom = $('<span />').addClass('marker')
			.after($('<aside />')
				.append($('<h1 />').text(marker.name))
				.append($('<article />')
					.append($('<p />').text(marker.text))
					.append($('<p />').text('Source: ')
						.append($('<a />').attr('href', marker.link).attr('target', '_new').text(marker.source)))));
		this.dom.click(function() {
			$('.marker.active').removeClass('active');
			self.dom.toggleClass('active');
		});
		this.dom.filter('.marker').mouseover(function() {
			$('.marker.active').not(this).removeClass('active');
		});
		
		this.dom.filter('aside').click(function() { 
			self.dom.removeClass('active');
		});
		parent.append(this.dom);
	};
	
	Marker.prototype.setCut = function(plane, position)
	{
		var inPlane = false, coordinates;
		$.each(this.marker.position, function(i, p)
		{
			if (p.plane == plane && p.from < position && p.to > position)
			{
				coordinates = p;
				inPlane = true;
			}
		});
		
		this.dom.removeClass('active');
		if (!inPlane) { this.dom.removeClass('visible'); return; }
				
		var padding = 0;
		this.dom.filter('.marker').css({ left: coordinates.x + padding, top: coordinates.y + padding }).addClass('visible');
		this.dom.filter('aside').css(this.dom.filter('.marker').position());
	};
	
	$.fn.marker = function(marker)
	{
		return new Marker($(this), marker);
	};
})(jQuery);