# Simple MRI image viewer

This is a simple online viewer for MRI images, a demo which can be seen on [my playground][1].

## How do I use it?

If you have your own MRI images you wish to present, you can use this framework. You can yourself choose which planes you wish to present.

### Getting the images in the right format

The first step is getting the images into the right format. MRI images are usually saved in the DICOM image format. You will need a special reader software for this.

I used [Synedra View Personal][2], which is a free download (that runs fine under Wine). 

1.  Load the `DICOMDIR` file from the CD. 
2.  Click *Load complete examination*
3.  On the *Preview* tab, find the *MPR* button, in the upper right-hand corner. MPR is an abbreviation for *multi-planar reconstruction*.
4.  You can now see your brain from 3 different planes, known as the *sagittal* (from the side), *coronal* (from the front) and *transverse* (from the top) planes.
5.  To get the numbering right for your export, on the *Extras* menu, choose *Settings*.  Find *Save*, *File names*. Click *New*, and call it something like *numbered*, and use `<$COMMENT$>\<RelativeCount>` as the output filename. Click *OK* to save (if you are prompted to restart, you don't have to).
6.  To export, right-click in the main area, and choose *Image administration*, then *Export and save series*. You will be given a choice of options, which will determine how many images are output. After some experimentation, I picked *MinIP* with a *Slab size* and *Step size* of *2.00 mm*. You can invert the order of images (e.g. if your sagittal images are right to left, you will need them to be left to right).
7.  In the left-hand area, under *Save/Edit Selection*, you should now be able to export your images. Pick the directory you want to output to, select *numbered* from the *Filename* dropdown. Pick *JPEG* as your image output format. Uncheck *Image text* if it is checked, and fill in the *Comment* field with the name of the plane you are exporting. For my first export, I wrote *sagittal*. Click *Save*.
8.  When the images have been saved, at the bottom off the MPR part of the window, find 3 buttons labelled *TRA*, *COR* and *SAG*, decorated with arrows. Choose one of the planes you haven't exported, and repeat from step 6.
    
PS! You might get a few images that appear to be completely black. I recommend you keep them, as removing images will shift planes in relation to each other.

### Setting up your `data.js` file

You will need to tell the plugin where to find your images. My `data.js` file is included in this repos for reference. You will need to modify the `window.mri.data` structure. These are the fields:

* `name`: The title of the website.
* `info`: Some information HTML.
* `sets`: Array of sets, consisting of these fields:
 * `name`: The name of the set (e.g. *sagittal*)
 * `id`: ID that will be used to refer to this plane (and must correspond to the subdirectory where the images will be found)
 * `firstImage`: Number of the first image (should be 1).
 * `lastImage`: Number of the last image.
 * `overviewImage`: Thumbnail image that represents this plane.
 * `sliderImage`: Image that can be used as an underlay to the slider.
 * `sliderDirection`: The direction the slider should travel.
* `markers`: Array of markers, consisting of these fields:
 * `name`: The marker's name
 * `text`: More detailed text about the marker (HTML).
 * `link`: URL to source material
 * `source`: Link text to source material
 * `position`: Array of positions where the marker should be visible:
  * `plane`: ID of the plane (see `id` above)
  * `x` and `y`: coordinates where the marker is placed in this plane
  * `from` and `to`: image range to show the marker (e.g. from image 4 to image 15)

For markers, note that you cannot show one marker in more than one place at a time, meaning that it is valid to have the same marker show up twice on one plane, but not with overlapping `from` and `to` ranges.

## Credits

Thanks to [St. Olavs Hospital][7] in Trondheim, Norway for allowing me to participate in the study. 

To avoid spending too much time on this project, I used the following resources:

* [CSS3 based progress bar][3]
* [Less.js][4]
* Tactile Noise background image from [SubtlePatterns.com][5]
* [jQuery][6]
* [jQuery mousewheel][8]

## License

This code is licensed under the Creative Commons BY-NC-SA license. *This license does not apply to the images used.*

[<img src="http://i.creativecommons.org/l/by-nc-sa/3.0/80x15.png" alt="Creative Commons BY-NC-SA" />][9].

[1]: http://playground.rd.no/mri
[2]: http://download.synedra.com/index.php?language=english
[3]: http://css-tricks.com/css3-progress-bars/
[4]: http://lesscss.org/
[5]: http://subtlepatterns.com/
[6]: http://jquery.com
[7]: http://www.stolav.no/
[8]: http://brandonaaron.net/code/mousewheel/docs
[9]: http://creativecommons.org/licenses/by-nc-sa/3.0/