window.onload = function () {
    document.oncontextmenu = function () {
        ret = confirm("デモページを離れてダウンロードページに移動しますか？");
        if (ret == true) {
            window.location.href = 'https://github.com/Mrmkroll/simple';
        }
        return false;
    }
}