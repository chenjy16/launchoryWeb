// 移动端菜单切换
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    mobileMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // 点击导航链接时关闭移动菜单
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
});

// 滚动时导航栏效果
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');

    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// 平滑滚动到锚点
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 80;

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// 滚动显示动画
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// 为功能卡片添加滚动显示动画
document.addEventListener('DOMContentLoaded', () => {
    const featureCards = document.querySelectorAll('.feature-card');

    featureCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

        observer.observe(card);
    });
});

// 添加下载按钮点击事件
document.addEventListener('DOMContentLoaded', () => {
    const downloadButtons = document.querySelectorAll('a[href="#download"]');

    downloadButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();

            // 这里可以添加实际的下载逻辑
            // 例如: window.location.href = 'path/to/download/file.dmg';

            // 模拟下载提示
            const notification = document.createElement('div');
            notification.className = 'download-notification';
            notification.textContent = '感谢您的关注！下载即将开始...';
            notification.style.cssText = `
                position: fixed;
                bottom: 20px;
                left: 50%;
                transform: translateX(-50%);
                background-color: #0071e3;
                color: white;
                padding: 15px 25px;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                z-index: 1000;
                animation: slideUp 0.3s ease, fadeOut 0.3s ease 2.7s forwards;
            `;

            // 添加动画样式
            const style = document.createElement('style');
            style.textContent = `
                @keyframes slideUp {
                    from {
                        transform: translate(-50%, 100%);
                        opacity: 0;
                    }
                    to {
                        transform: translate(-50%, 0);
                        opacity: 1;
                    }
                }

                @keyframes fadeOut {
                    to {
                        opacity: 0;
                        transform: translate(-50%, 20px);
                    }
                }
            `;

            document.head.appendChild(style);
            document.body.appendChild(notification);

            // 3秒后移除通知
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 3000);
        });
    });
});