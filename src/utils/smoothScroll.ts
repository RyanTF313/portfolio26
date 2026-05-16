export function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (!element) return;

  const headerOffset = 72;
  const elementPosition = element.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = elementPosition - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });
}
