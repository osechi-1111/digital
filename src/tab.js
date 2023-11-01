// タブ
document.addEventListener("DOMContentLoaded", function () {
    const tabLinks = document.querySelectorAll(".tab-link");
    const tabContents = document.querySelectorAll(".tab-content");

    tabLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            // すべてのタブのアクティブクラスを削除
            tabLinks.forEach((tabLink) => {
                tabLink.classList.remove("active");
            });

            // クリックされたタブにアクティブクラスを追加
            link.classList.add("active");

            // すべてのタブのコンテンツを非表示
            tabContents.forEach((content) => {
                content.classList.remove("active");
            });

            // 対応するタブのコンテンツを表示
            const tabId = link.getAttribute("data-tab");
            const tabContent = document.getElementById(tabId);
            tabContent.classList.add("active");
        });
    });

    // 最初のタブをアクティブに設定
    tabLinks[0].click();
});