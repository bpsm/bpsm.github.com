// Created by iWeb 3.0.1 local-build-20100707

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_1:new IWPhotoFrame([IWCreateImage('About_Me_files/Modern_C_TL_1.png'),IWCreateImage('About_Me_files/Modern_S_T_1.png'),IWCreateImage('About_Me_files/Modern_C_TR_1.png'),IWCreateImage('About_Me_files/Modern_S_R_1.png'),IWCreateImage('About_Me_files/Modern_C_BR_1.png'),IWCreateImage('About_Me_files/Modern_S_B_1.png'),IWCreateImage('About_Me_files/Modern_C_BL_1.png'),IWCreateImage('About_Me_files/Modern_S_L_1.png')],null,2,1.000000,0.000000,0.000000,0.000000,0.000000,17.000000,17.000000,17.000000,20.000000,40.000000,40.000000,40.000000,240.000000,null,null,null,0.100000),stroke_0:new IWPhotoFrame([IWCreateImage('About_Me_files/Modern_C_TL.png'),IWCreateImage('About_Me_files/Modern_S_T.png'),IWCreateImage('About_Me_files/Modern_C_TR.png'),IWCreateImage('About_Me_files/Modern_S_R.png'),IWCreateImage('About_Me_files/Modern_C_BR.png'),IWCreateImage('About_Me_files/Modern_S_B.png'),IWCreateImage('About_Me_files/Modern_C_BL.png'),IWCreateImage('About_Me_files/Modern_S_L.png')],null,2,1.000000,0.000000,0.000000,0.000000,0.000000,17.000000,17.000000,17.000000,20.000000,40.000000,40.000000,40.000000,240.000000,null,null,null,0.100000)});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('About_Me_files/About_MeMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');Widget.onload();fixAllIEPNGs('Media/transparent.gif');fixupIECSS3Opacity('id3');applyEffects()}
function onPageUnload()
{Widget.onunload();}
