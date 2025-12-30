(function () {
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    const toggle = document.querySelector('.menu-toggle');
    const links = document.querySelector('.nav-links');
    if (toggle && links) {
        toggle.addEventListener('click', () => {
            const open = links.classList.toggle('open');
            toggle.setAttribute('aria-expanded', String(open));
        });
    }

    // Email popover behavior
    const emailToggle = document.getElementById('emailToggle');
    const emailMenu = document.getElementById('emailMenu');
    const copyBtn = document.querySelector('.copy-email');
    const emailAddress = 'joelkaret@gmail.com';

    function setEmailOpen(open) {
        if (!emailMenu || !emailToggle) return;
        emailMenu.classList.toggle('open', open);
        emailToggle.setAttribute('aria-expanded', String(open));
    }

    if (emailToggle && emailMenu) {
        emailToggle.addEventListener('click', () => {
            const nowOpen = !emailMenu.classList.contains('open');
            setEmailOpen(nowOpen);
        });

        // Close when clicking outside
        document.addEventListener('click', (e) => {
            const container = emailToggle.closest('.email-popover');
            if (!container) return;
            if (emailMenu.classList.contains('open')) {
                if (!container.contains(e.target)) setEmailOpen(false);
            }
        });

        // Close on Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && emailMenu.classList.contains('open')) {
                setEmailOpen(false);
                emailToggle.focus();
            }
        });
    }

    if (copyBtn) {
        copyBtn.addEventListener('click', async () => {
            const label = copyBtn.querySelector('.copy-label');
            try {
                if (navigator.clipboard && navigator.clipboard.writeText) {
                    await navigator.clipboard.writeText(emailAddress);
                } else {
                    // Fallback for older browsers
                    const ta = document.createElement('textarea');
                    ta.value = emailAddress;
                    ta.style.position = 'fixed';
                    ta.style.left = '-9999px';
                    document.body.appendChild(ta);
                    ta.focus();
                    ta.select();
                    document.execCommand('copy');
                    document.body.removeChild(ta);
                }
                if (label) {
                    const prev = label.textContent;
                    label.textContent = 'Copied!';
                    label.classList.add('copy-success');
                    setTimeout(() => {
                        label.textContent = prev || 'Copy';
                        label.classList.remove('copy-success');
                    }, 1500);
                }
            } catch (err) {
                if (label) label.textContent = 'Copy failed';
            }
        });
    }
})();
