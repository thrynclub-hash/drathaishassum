import './style.css'

// Menu mobile
const menuBtn = document.querySelector('[data-menu-btn]')
const mobileMenu = document.querySelector('[data-mobile-menu]')

menuBtn?.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('flex')
  mobileMenu.classList.toggle('hidden')
  menuBtn.setAttribute('aria-expanded', String(isOpen))
})

// FAQ accordion
document.querySelectorAll('[data-faq-item]').forEach((item) => {
  const question = item.querySelector('[data-faq-question]')
  const answer = item.querySelector('[data-faq-answer]')
  const icon = item.querySelector('[data-faq-icon]')

  question?.addEventListener('click', () => {
    const isOpen = item.getAttribute('data-open') === 'true'
    item.setAttribute('data-open', String(!isOpen))
    answer.style.maxHeight = !isOpen ? `${answer.scrollHeight}px` : '0px'
    icon?.classList.toggle('rotate-45', !isOpen)
  })
})

// Header shadow on scroll
const header = document.querySelector('[data-site-header]')
window.addEventListener('scroll', () => {
  if (window.scrollY > 8) {
    header?.classList.add('shadow-md', 'bg-white/95')
  } else {
    header?.classList.remove('shadow-md', 'bg-white/95')
  }
})
