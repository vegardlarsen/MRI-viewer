(function($) {
	window.mri = window.mri || {};

	window.mri.data = 
	{
		name: 'My head &mdash; exposed', 
		info: '<p>These images were taken as part of a study I took part in at St. Olavs Hospital in Trondheim, Norway.</p>' +
		  '<p>I\'ve tried to annotate some of the easily visible and important areas of the brain. Note that I have no medical training, so my placement of the pointers on these images is probably all wrong. I\'ve also skipped over large structures that proved difficult to highlight.</p>' +
		  '<p>More info about these image can be <a href="http://vega.rd.no/post/123456/mri">found on my blog</a>.</p>',
		sets: 
		[
		 	{
		 		name: 'Front',
		 		direction: 'Front to back',
		 		medicalName: 'Coronal plane',
		 		id: 'coronal',
		 		firstImage: 1,
		 		lastImage: 131,
		 		overviewImage: 'images/coronal_plane.png',
		 		sliderImage: 'images/sagittal/45.jpg',
	 			sliderDirection: 'horizontal'
		 	},
		 	{
		 		name: 'Top',
		 		direction: 'Top to bottom',
		 		medicalName: 'Transverse plane',
		 		id: 'transverse',
	 			firstImage: 1,
	 			lastImage: 129,
		 		overviewImage: 'images/transverse_plane.png',
		 		sliderImage: 'images/sagittal/45.jpg',
		 		sliderDirection: 'vertical'
		 	},
		 	{
		 		name: 'Side',
		 		direction: 'Left to right',
		 		medicalName: 'Sagittal plane',
		 		id: 'sagittal',
		 		firstImage: 1,
		 		lastImage: 103,
		 		overviewImage: 'images/sagittal_plane.png',
		 		sliderImage: 'images/coronal/85.jpg',
		 		sliderDirection: 'horizontal'
		 	}
		],
		markers:
		[
		 	{
		 		name: "Medulla oblongata",
		 		text: "The medulla oblongata is the lower half of the brainstem. In discussions of neurology and similar contexts where no ambiguity will result, it is often referred to as simply the medulla. The medulla contains the cardiac, respiratory, vomiting and vasomotor centers and deals with autonomic, involuntary functions, such as breathing, heart rate and blood pressure.",
		 		link: "http://en.wikipedia.org/wiki/Medulla_oblongata",
		 		source: "Wikipedia",
		 		position:
		 		[
		 			{ plane: "coronal", x: 225, y: 360, from: 78, to: 83 },
		 			{ plane: "transverse", x: 220, y: 340, from: 75, to: 85 },
		 			{ plane: "sagittal", x: 340, y: 350, from: 50, to: 56 }
		 		]
			},
		 	{
		 		name: "Midbrain",
		 		text: "The midbrain or mesencephalon (from the Greek mesos - middle, and enkephalos - brain) is a portion of the central nervous system associated with vision, hearing, motor control, sleep/wake, arousal (alertness), and temperature regulation.",
		 		link: "http://en.wikipedia.org/wiki/Midbrain",
		 		source: "Wikipedia",
		 		position:
		 		[
		 			{ plane: "coronal", x: 225, y: 259, from: 67, to: 80 },
		 			{ plane: "transverse", x: 227, y: 316, from: 59, to: 62 },
		 			{ plane: "sagittal", x: 320, y: 265, from: 50, to: 54 }
		 		]
			},
			{
				name: "Cerebellum",
				text: "The cerebellum (Latin for little brain) is a region of the brain that plays an important role in motor control. It is also involved in some cognitive functions such as attention and language, and probably in some emotional functions such as regulating fear and pleasure responses.",
				link: "http://en.wikipedia.org/wiki/Cerebellum",
				source: "Wikipedia",
				position:
				[
					{ plane: "sagittal", x: 367, y: 292, from: 30, to: 75 },
					{ plane: "coronal", x: 266, y: 318, from: 85, to: 100 },
					{ plane: "transverse", x: 224, y: 374, from: 62, to: 82 }
				]
			},
			{
				name: "Thalamus",
				text: "The thalamus (from Greek room, chamber) is a midline paired symmetrical structure within the brains of vertebrates, including humans. It is situated between the cerebral cortex and midbrain, both in terms of location and neurological connections. Its function includes relaying sensation, spatial sense, and motor signals to the cerebral cortex, along with the regulation of consciousness, sleep, and alertness.",
				link: "http://en.wikipedia.org/wiki/Thalamus",
				source: "Wikipedia",
				position:
				[
					{ plane: "sagittal", x: 300, y: 208, from: 44, to: 48 },
					{ plane: "sagittal", x: 300, y: 208, from: 58, to: 65 },
					{ plane: "coronal", x: 250, y: 220, from: 65, to: 83 },
					{ plane: "transverse", x: 202, y: 300, from: 47, to: 56 }
				]
			},
			{
				name: "Third ventricle",
				text: "The third ventricle (ventriculus tertius) is one of four connected fluid-filled cavities comprising the ventricular system within the human brain. It is a median cleft between the two thalami, and is filled with cerebrospinal fluid (CSF).",
				link: "http://en.wikipedia.org/wiki/Third_ventricle",
				source: "Wikipedia",
				position:
				[
					{ plane: "coronal", x: 231, y: 225, from: 67, to: 82 },
					{ plane: "transverse", x: 229, y: 301, from: 54, to: 58 }
				]
			},
			{
				name: "Lateral ventricle",
				text: "The lateral ventricles are part of the ventricular system of the brain. Classified as part of the telencephalon, they are the largest of the ventricles.",
				link: "http://en.wikipedia.org/wiki/Lateral_ventricles",
				source: "Wikipedia",
				position:
				[
					{ plane: "coronal", x: 241, y: 189, from: 61, to: 71 },
					{ plane: "transverse", x: 240, y: 271, from: 45, to: 50 },
					{ plane: "sagittal", x: 285, y: 184, from: 51, to: 58 }			
				]
			},
			{
				name: "Pons",
				text: "Named after the Latin word for \"bridge\" or the 16th-century Italian anatomist and surgeon Costanzo Varolio (pons Varolii), the pons is a structure located on the brain stem. [..] The pons contains nuclei that relay signals from the forebrain to the cerebellum, along with nuclei that deal primarily with sleep, respiration, swallowing, bladder control, hearing, equilibrium, taste, eye movement, facial expressions, facial sensation, and posture.",
				link: "http://en.wikipedia.org/wiki/Pons",
				source: "Wikipedia",
				position:
				[
					{ plane: "coronal", x: 221, y: 300, from: 76, to: 80 },
					{ plane: "transverse", x: 227, y: 300, from: 69, to: 76 },
					{ plane: "sagittal", x: 301, y: 287, from: 52, to: 61 }			
				]
			},
			{
				name: "Medial longitudinal fissure",
				text: "The great longitudinal fissure (or longitudinal cerebral fissure, or longitudinal fissure, or interhemispheric fissure) is the deep groove which separates the two hemispheres of the vertebrate brain.",
				link: "http://en.wikipedia.org/wiki/Longitudinal_cerebral_fissure",
				source: "Wikipedia",
				position:
				[
					{ plane: "coronal", x: 230, y: 163, from: 41, to: 115 },
					{ plane: "transverse", x: 233, y: 279, from: 23, to: 42 },
	
				]
			},
			{
				name: "Corpus callosum",
				text: "The corpus callosum (Latin: tough body), also known as the colossal commissure, is a wide, flat bundle of neural fibers beneath the cortex in the eutherian brain at the longitudinal fissure. It connects the left and right cerebral hemispheres and facilitates interhemispheric communication. It is the largest white matter structure in the brain, consisting of 200–250 million contralateral axonal projections.",
				link: "http://en.wikipedia.org/wiki/Corpus_callosum",
				source: "Wikipedia",
				position:
				[
					{ plane: "coronal", x: 230, y: 176, from: 65, to: 85 },
					{ plane: "sagittal", x: 285, y: 170, from: 53, to: 64 }
	
				]
			},
			{
				name: "C1/Atlas vertebrae",
				text: "In anatomy, the atlas (C1) is the most superior (first) cervical vertebra of the spine.\n" + 
						"It is named for the Atlas of mythology, because it supports the globe of the head.",
				link: "http://en.wikipedia.org/wiki/Atlas_(anatomy)",
				source: "Wikipedia",
				position:
				[
					{ plane: "coronal", x: 221, y: 423, from: 70, to: 75 },
					{ plane: "sagittal", x: 305, y: 423, from: 50, to: 55 }
				]				
			},
			{
				name: "C2/Axis vertebrae",
				text: "In anatomy, the second cervical vertebra (C2) of the spine is named the axis (from Latin axis, \"axle\") or epistropheus.\n" + 
						"It forms the pivot upon which the first cervical vertebra (the atlas), which carries the head, rotates.",
				link: "http://en.wikipedia.org/wiki/Axis_(anatomy)",
				source: "Wikipedia",
				position:
				[
					{ plane: "coronal", x: 221, y: 467, from: 70, to: 75 },
					{ plane: "sagittal", x: 305, y: 467, from: 50, to: 55 }
				]				
			},
			{
				name: "C3 vertebrae",
				text: "The third of the cervical vertebrae.",
				link: "http://en.wikipedia.org/wiki/Cervical_vertebrae",
				source: "Wikipedia",
				position:
				[
					{ plane: "coronal", x: 221, y: 500, from: 70, to: 75 },
					{ plane: "sagittal", x: 305, y: 500, from: 50, to: 55 }
				]				
			}
		]			
	};
})(jQuery);