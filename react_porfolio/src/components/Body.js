import React from 'react'

import '../styles/bodyStyles.css';

export default function Body() {
    return (
<div>
<aside id="leftDisplayContainer">

<p class="leftDisplayTitle">About Me</p>
<h1 id="leftDisplayContent">Hello, My name is Donaldson but I prefer to go by Donnie. For the past ten years I've worked in the service & sales industry. During that time I developed valuable communication and organization skills. I have since left the service and sales industry to pursue a career in the tech industry. I am attending UCF's full time full-stack coding bootcamp to help this transition, and I am excited to see what team I can benefit.</h1>
<h2 id="resume">Resume</h2>
<object
data='./assets/Donaldson_Roessling_Resume.PDF'
type="application/pdf"
width="678"
height="678"
>

<iframe
  src='./assets/Donaldson_Roessling_Resume.PDF'
  width="500"
  height="678"
>
<p>This browser does not support PDF!</p>
</iframe>
</object>
</aside>

<div id="mainRightSide">
        <div class="cards" id="projOne"><p class="cardTitle">iDunno</p></div>
        <div class="cards" id="projTwo"><p class="cardTitle">Planted</p></div>
        <div class="cards"><p class="cardTitle">Project Three</p></div>
        <div class="cards"><p class="cardTitle">Project Four</p></div>
        <div class="cards"><p class="cardTitle">Project Five</p></div>



</div>


</div>
    );
}