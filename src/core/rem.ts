window.addEventListener("resize", debounce(setRem, 10), false);

// 设置 rem 函数
function setRem() {
    //750px = 18.75rem ;每个元素px基础上/40
    const htmlWidth =
        document.documentElement.clientWidth || document.body.clientWidth;
    //得到html的Dom元素
    const htmlDom = document.getElementsByTagName("html")[0];
    //设置根元素字体大小
    htmlDom.style.fontSize = htmlWidth / 18.75 + "px";
}
// 初始化

//防抖
function debounce(task: () => void, timeout: number) {
    let timer: any = null;

    return function () {
        //说明当前正在一个计时过程中，并且又触发了相同事件。所以要取消当前的计时，重新开始计时;
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            task();
            clearTimeout(timer);
        }, timeout);
    };
}

export default setRem;
