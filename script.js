const envelope = document.getElementById('envelope');
        const seal = document.getElementById('seal');
        const photoReveal = document.getElementById('photo-reveal');
        const valentineReveal = document.getElementById('valentine-reveal');
        const continueBtn = document.getElementById('continue-btn');
        const revealMessageBtn = document.getElementById('reveal-message-btn');
        let messageViewed = false;
        let envelopeFlipped = false;

        envelope.addEventListener('click', () => {
            if(!envelopeFlipped) {
                envelope.classList.add('flipped');
                envelopeFlipped = true;
                setTimeout(() => {
                    seal.style.pointerEvents = 'auto';
                }, 800);
            }
        });

        seal.addEventListener('click', () => {
            envelope.classList.add('envelope-open');
            setTimeout(() => {
                envelope.style.display = 'none';
                photoReveal.style.display = 'block';
            }, 800);
        });

        revealMessageBtn.addEventListener('click', () => {
            document.getElementById('hidden-message-popup').style.display = 'block';
        });

        function showContinueButton() {
            messageViewed = true;
            document.getElementById('continue-btn').style.display = 'block';
        }

        continueBtn.addEventListener('click', () => {
            if(messageViewed) {
                photoReveal.style.display = 'none';
                valentineReveal.style.display = 'block';
            }
        });

        function triggerConfetti(type) {
            const config = {
                basic: { 
                    count: 200,
                    spread: 60,
                    popupId: 'popup-basic',
                    message: 'IF YOU PICKED THIS FIRST YOU SUCK BOO ❤️'
                },
                mega: {
                    count: 4000,
                    spread: 200,
                    popupId: 'popup-mega',
                    message: 'DRAMATIC MUCH  ❤️'
                }
            };
            
            confetti({
                particleCount: config[type].count,
                spread: config[type].spread,
                origin: { y: 0.6 },
                colors: ['#ff69b4', '#ff1493', '#ff00ff']
            });

            const popupId = config[type].popupId;
            const popup = document.getElementById(popupId);
            popup.querySelector('p').textContent = config[type].message;
            popup.style.display = 'block';
        }

        function showFinalMessage() {
            const valentineDiv = document.getElementById('valentine-reveal');
            const finalMessage = document.getElementById('final-message');
            
            valentineDiv.classList.add('fade-out');
            finalMessage.classList.add('visible');
            
            setTimeout(() => {
                valentineDiv.style.display = 'none';
            }, 1000);
        }

        function closePopup(popupId) {
            document.getElementById(popupId).style.display = 'none';
        }