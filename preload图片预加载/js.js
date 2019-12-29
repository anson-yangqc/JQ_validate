  function Preload(imgs, options) {
    this.imgs = typeof imgs === "string" ? [imgs] : imgs;
    this.opts = Object.assign({}, Preload.DEFAULT, options); //这里是浅拷贝

    if (this.opts.order) {
      this._ordered();
    } else {
      this._unordered();
    }
  }
  Preload.DEFAULT = {
    order: "unordered", // 默认使用无序预加载
    each: null, // 每加载一张图片的回调
    all: null // 图片全部加载完成（即使其中有加载失败）的回调
  };
  Preload.prototype._unordered = function () {
    // 无序预加载
    let imgs = this.imgs,
      opts = this.opts,
      count = 0;
    let len = imgs.length;
    for (let i = 0; i < imgs.length; i++) {
      const src = imgs[i];
      if (typeof src != "string") return;
      let imgObj = new Image();
      imgObj.src = src
      imgObj.onload = function () {
        handleLoad(i, src);
      };
      imgObj.onerror = function () {
        handleLoad(i, src);
      };
    }

    function handleLoad(i) {
      opts.each && opts.each(i);
      if (count >= len - 1) {
        opts.all && opts.all();
      }
      count++;
    }
  };
  Preload.prototype._ordered = function () {
    // 有序预加载
    let imgs = this.imgs,
      opts = this.opts,
      count = 0;
    let len = imgs.length;
    load(imgs[0]);

    function load(curSrc) {
      let imgObj = new Image();
      imgObj.src = curSrc
      imgObj.onload = function () {
        handleLoad(count, curSrc);
      };
      imgObj.onerror = function () {
        handleLoad(count, curSrc);
      };

      function handleLoad(index, curSrc) {
        opts.each && opts.each(index, curSrc);
        if (index >= len - 1) {
          opts.all && opts.all();
        } else {
          load(imgs[++count]);
        }
      }
    }
  };