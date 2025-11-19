/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			fontFamily: {
				primary: ['Inter', 'system-ui', 'sans-serif'],
				serif: ['"Playfair Display"', 'serif'],
			},
			colors: {
				// BM Solution Premium Design Tokens
				primary: {
					50: '#F0F4F8',
					100: '#D9E2EC',
					200: '#BCCCDC',
					300: '#9FB3C8',
					400: '#829AB1',
					500: '#627D98', // Slate Blue
					600: '#486581',
					700: '#334E68',
					800: '#243B53',
					900: '#102A43', // Deep Navy
					950: '#05111D', // Ultra Deep Navy (Anthracite-ish)
				},
				accent: {
					50: '#FBF7E9',
					100: '#F5ECD0',
					200: '#EAD8A0',
					300: '#DFC470',
					400: '#D4AF37', // Classic Gold
					500: '#B89628',
					600: '#9C7E1F',
					700: '#806619',
					800: '#655014',
					900: '#4B3B0F',
				},
				neutral: {
					50: '#F8F9FA',
					100: '#F1F3F5',
					200: '#E9ECEF',
					300: '#DEE2E6',
					400: '#CED4DA',
					500: '#ADB5BD',
					600: '#868E96',
					700: '#495057',
					800: '#343A40',
					900: '#212529',
				},
				background: {
					DEFAULT: 'hsl(var(--background))',
					page: '#FDFDFD', // Pure white with a tiny hint of warmth
					surface: '#FFFFFF',
				},
				semantic: {
					success: '#2B8A3E',
					error: '#C92A2A',
				},
				// Keep existing variables for compatibility
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				foreground: 'hsl(var(--foreground))',
				secondary: {
					DEFAULT: '#D4AF37', // Use Gold as secondary
					foreground: '#FFFFFF',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
			},
			borderRadius: {
				sm: '4px',
				md: '8px',
				lg: '12px',
				xl: '20px', // Slightly larger for modern feel
				'2xl': '32px', // Luxurious curves
				'3xl': '40px',
			},
			spacing: {
				'2': '8px',
				'4': '16px',
				'6': '24px',
				'8': '32px',
				'12': '48px',
				'16': '64px',
				'24': '96px',
				'32': '128px',
				'40': '160px',
			},
			boxShadow: {
				'card': '0 4px 20px -2px rgba(0, 0, 0, 0.05), 0 0 2px rgba(0,0,0,0.02)', // Subtle ambient
				'card-hover': '0 20px 40px -4px rgba(0, 0, 0, 0.1), 0 0 4px rgba(0,0,0,0.05)', // Lifted
				'pricing': '0 8px 30px rgba(0, 0, 0, 0.08)',
				'modal': '0 24px 48px rgba(0, 0, 0, 0.15)',
				'glow': '0 0 30px rgba(212, 175, 55, 0.25)', // Soft gold glow
				'glow-strong': '0 0 40px rgba(212, 175, 55, 0.4)',
				'inner-light': 'inset 0 1px 0 rgba(255, 255, 255, 0.5)',
			},
			transitionDuration: {
				'fast': '200ms',
				'normal': '300ms',
				'slow': '500ms',
				'luxury': '800ms', // For very slow, smooth entrances
			},
			transitionTimingFunction: {
				'default': 'cubic-bezier(0.4, 0, 0.2, 1)',
				'smooth': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
				'luxury': 'cubic-bezier(0.2, 0.8, 0.2, 1)', // High-end feel
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				'fade-in-slow': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				'slide-up': {
					'0%': { opacity: '0', transform: 'translateY(40px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				'scale-in': {
					'0%': { opacity: '0', transform: 'scale(0.95)' },
					'100%': { opacity: '1', transform: 'scale(1)' },
				},
				'scroll-indikator': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(6px)' },
				},
				'blob': {
					'0%': { transform: 'translate(0px, 0px) scale(1)' },
					'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
					'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
					'100%': { transform: 'translate(0px, 0px) scale(1)' },
				},
				'shimmer': {
					'0%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '200% 0' },
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.3s ease-out',
				'accordion-up': 'accordion-up 0.3s ease-out',
				'fade-in': 'fade-in 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
				'fade-in-slow': 'fade-in-slow 1.5s ease-out forwards',
				'slide-up': 'slide-up 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
				'scale-in': 'scale-in 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
				'scroll-indikator': 'scroll-indikator 2s ease-in-out infinite',
				'blob': 'blob 15s infinite',
				'shimmer': 'shimmer 3s linear infinite',
				'float': 'float 6s ease-in-out infinite',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
}