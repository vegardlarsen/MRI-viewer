$(function()
{
	var viewer = $('#viewer').createViewer(mri.data.markers);

	var slider = $('#position img').slider();

	$.each(mri.data.sets, function(i, set)
	{
		var span =  $('<span />').append($('<img />').attr('src', set.overviewImage))
			.append($('<h2>').text(set.name));
		span.click(function()
		{
			var img = $('<img />').attr('src', set.sliderImage).load(function()
			{
				$('#selectPlane span.selected').removeClass('selected');
				span.addClass('selected');
				viewer.setDataSet(set, function() {
					slider.setImage(img);
					slider.setDirection(set.sliderDirection);
					slider.setMax(viewer.getLength());
					slider.setPosition(viewer.getPosition());
					slider.update();
				});
			});
			$('#position img').replaceWith(img);
			return false;
		});
		$('#selectPlane').append(span);
	});
	
	$('#about').append($('<h1 />').html(mri.data.name))
		.append($('<section />').addClass('info').html(mri.data.info)
			.prepend($('<span>i</span>')));
	
	$('#selectPlane > :first-child').click();

	slider.onChange = function()
	{
		viewer.setPosition(slider.position);
	};
	
	$('img').live('dragstart', function(event) { event.preventDefault(); });
});