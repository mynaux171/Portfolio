particlesJS('particles-js', {
    particles: {
        number: {
            value: 70,
            density: { enable: true, value_area: 800 }
        },
        color: { value: '#FF33CC' },
        shape: { type: 'star' },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#EEEEEE',
            opacity: 0.2,
            width: 1
        },
        move: {
            enable: true,
            speed: 2.5,
            direction: 'none',
            random: true,
            out_mode: 'out'
        }
    }
});