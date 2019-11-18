```
1px
```
```
.borderBot1px{
  position: relative;
  &:after{
    content:' ';
    position: absolute;
    left:0;
    bottom:0;
    z-index: 10;
    width: 100%;
    border-bottom:1px solid #000;
  }
}
.borderTop1px{
  position: relative;
  &::before{
    content:' ';
    position: absolute;
    left:0;
    top:0;
    z-index: 10;
    width: 100%;
    border-top:1px solid #000;
  }
}
@media(-webkit-min-device-pixel-ratio:1.5),(min-device-pixel-ratio:1.5){
  .borderTop1px{
    &:before{
      -webkit-transform:scaleY(0.7);
      transform:scaleY(0.7);
    }
  }
  .borderBot1px{
    &:after{
      -webkit-transform:scaleY(0.7);
      transform:scaleY(0.7);
    }
  }
}
@media(-webkit-min-device-pixel-ratio:2),(min-device-pixel-ratio:2){
  .borderTop1px{
    &:before{
      -webkit-transform:scaleY(0.5);
      transform:scaleY(0.5);
    }
  }
  .borderBot1px{
    &:after{
      -webkit-transform:scaleY(0.5);
      transform:scaleY(0.5);
    }
  }
}
```
