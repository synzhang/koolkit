/**
 * Async load scripts.
 * @param files url of script files.
 * @param done callback after scripts load.
 * @returns none
 */

type Callback = (options?: any) => any

const loadScripts = (files: string[], done: Callback) => {
  const head = document.getElementsByTagName('head')[0];

  Promise
    .all(files.map(file => (
      new Promise(resolve => {
        const s = document.createElement('script')

        s.type = 'text/javascript'
        s.async = true
        s.src = file

        s.addEventListener('load', e => resolve(undefined), false)
        head.appendChild(s)
      })
    )))
    .then(done)
}

export default loadScripts
