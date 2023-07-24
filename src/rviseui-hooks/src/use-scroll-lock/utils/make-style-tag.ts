export function makeStyleTag() {
  const tag = document.createElement('style')
  tag.type = 'text/css'
  tag.setAttribute('rviseui-scroll-lock', '')

  return tag
}
