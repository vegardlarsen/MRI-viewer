(function($){
	Viewer = function(dom, markers) 
	{ 
		this.dom = $(dom);
		var viewer = this;
		this.markers = [];
		$.each(markers, function(i, marker) 
		{
			viewer.markers.push($(dom).marker(marker));
		});
	};
	
	Viewer.prototype.setDataSet = function(dataSet, fnLoadCallback)
	{
		var viewer = this;
		this.dataSet = dataSet;
		
		this.dom.hide();
		this.dom.find('img').remove();
		
		var loadedCount = 0;
		var fnLoaded = function()
		{
			loadedCount++;
			if (loadedCount >= viewer.dom.children('img').size())
			{
				$('.meter').remove();
				viewer.dom.find('img.active').show();
				viewer.dom.show();
				viewer.setPosition(loadedCount / 2);

				fnLoadCallback();
			}
			else
			{
				viewer.dom.find('.meter > span').css('width', (loadedCount * 100) / viewer.dom.find('img').size() + "%");
			}
		};
		
		for (var i = this.dataSet.firstImage; i <= this.dataSet.lastImage; i++)
		{
			var img = $('<img />').attr('src', 'images/' + this.dataSet.id + '/' + i + '.jpg').addClass('img' + i).load(fnLoaded);
			this.dom.append(img);
		}

		this.dom.find('img').click(function(event)
		{
			console.log({ plane: dataSet.id, x: event.offsetX, y: event.offsetY, from: viewer.position, to: viewer.position });
		});
		$('body').append($('<section />').addClass('meter animate').append($('<span />').append($('<span />'))));
	};
	
	Viewer.prototype.setPosition = function(position)
	{
		position = parseInt(position);
		if (position > 0 && position <= this.getLength() && this.position != position)
		{
			this.position = position;
			this.dom.find('.active').removeClass('active');
			this.dom.find('.img'+ position).addClass('active');
			
			if (this.dataSet)
			{
				var viewer = this;
				$.each(this.markers, function(i, marker)
				{
					marker.setCut(viewer.dataSet.id, viewer.position);
				});
			}
		}
	};
	
	Viewer.prototype.getLength = function() { return this.dataSet.lastImage - this.dataSet.firstImage; };
	
	Viewer.prototype.getPosition = function() { return this.position; };
	
	$.fn.createViewer = function(markers)
	{
		return new Viewer(this, markers);
	};
})(jQuery);