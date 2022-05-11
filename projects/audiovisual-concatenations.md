---
title: Audiovisual Concatenations
thumbnail: "/./screen-shot-2022-05-11-at-2-46-19-pm.png"
year: "2022"
categories:
- c++
- openframeworks
- maxmsp
- machine learning

---
Audiovisual Concatenations is a performance tool to explore sound and live webcam feedback through gesture. Using the Openframeworks libraries RapidLib and OpenCV, the performance trains a few gestures into the Dynamic Time Warping model, which detects hand movement through the computer’s webcam. The output of model is sent to a MaxMSP patch that has concatenative synthesis. The output is also mapped to the rendered visual output, which combines a series of video processing effects to map the detection of gesture to different colors. 

The effect of this tool is that the performer can use their hands to sift through sounds in more exploratory and expressive ways. Usually granular synthesis has an analogy of tape and tape machines. This experience feels more like panning for gold, in that the performer uses motion to find the sounds that are interesting to them.