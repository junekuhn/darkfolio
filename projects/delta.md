---
title: Digital Education & Learning Technologies Applications (DELTA)
thumbnail: "../static/uploads/2021-02-22-14-20-36.png"
year: 2019-2021
categories:
- Front-End Development
- Photogrammetry
- 3D Graphics
- Web Audio
- Spatial Audio
- Virtual Reality
- Web Design

---
As an Immersive Media Support Specialist at DELTA, I contributed media deliverables to 4 college courses, across 3 grant cycles. I also participated in research and development for immersive media and new immersive media platforms for use in the classroom.

## Event Risk Management (PRT 458)

I did video editing, audio editing, and interaction design for a course on event-risk management.  My team recorded 360 video for a 5K run at different points in time and location to capture the event, warts and all.  We then ran the video by the instructor, who pointed out both correct and incorrect event safety protocols.

`youtube:https://www.youtube.com/embed/svUP0MqlBDE`

After the content was compiled, a my colleague Rhett and I authored a VR experience for students to traverse the event and hear the voiceover of the instructor to learn about event safety.

[Full Blog Post](https://medium.com/@justintkuhn/a-case-study-on-designing-sound-for-immersive-education-d36f10f194f5)

## Organic Chemistry (CH 220)

I designed and created a web-based molecule visualization/sonification based in three.js for a chemistry course. My supervisor for the project made a chart for students to see different configurations of each molecule in 2D, and I took the 3D models authored in Blender and created an interface for students to interact with the molecules.

![](/uploads/2021-10-24-16-52-16.png)

## Teaching Exceptional Students in the Mainstreamed Classroom (ECI 416)

The purpose of the virtual IEP (Individualized Education Program) experience is to give pre-service educators and related service providers an opportunity to “participate” in an IEP meeting in a low-stakes, virtual reality (VR) environment.

The virtual IEP experience is a 20-minute model IEP meeting that students and instructors can experience with a VR headset or 360° video on a laptop or tablet.

This exploratory project was also a pilot for future immersive videos because much the technology that we exercised had only existed in silos; this is the first time we were combining stereoscopy, 3rd-order ambisonics, custom Unity rendering, and experimental video formats all in one project.

![](https://miro.medium.com/max/875/1*h_ASQELBGk0fj4H-GMhDWw.png)

Where ambisonic plugins mostly fall short, [Audio Ease](https://www.audioease.com/) provided exactly what I needed: an easy way to align spatial sound with spatial video. Using a video I was able to map the position of a sound to exactly where I wanted it to be in the video.

![](https://miro.medium.com/max/1400/1*kmcuh49kEXngUujk-tuwBg.png)

The project was made possible through the DELTA grant program at NC State University. For more information, read [here.](https://delta.ncsu.edu/course-planning/delta-grants/)

[Full Blog Post](https://medium.com/@justintkuhn/spatial-audio-workflow-for-educational-vr-video-68e481680de1)

## Fire Ecology (FOR 595)

I designed and created a website that functioned as an aggregate for different types of immersive media for a fire ecology course.

![](/uploads/map.jpg)

The design constraints were tight.  We wanted a site that could be passed off to an external IT department at NC State's College of Natural Resources.  Our options for web design were either Wordpress or a static html site.  Since we wanted a lot of custom interaction, I pursued the static html approach.

![](/uploads/pinpage.jpg)

Horizontal works best because it works well with our linear perception of time.

![](/uploads/2021-10-24-16-56-26.png)

Instead of scrolling through year, it was clear that scrolling through each capture date was better because there could be either no captures in a year or more than one capture in a year.  The Greensock Timeline is still scrollable.

![](/uploads/2021-10-24-16-57-36.png)

And if we chose date over year/season, the pin page that displays the different kinds of media can focus on only showing what media was captured at a specific date.  And, you can still navigate to different pins for a specific date.  Each link is loaded from a Google Sheet and can be updated by anyone.