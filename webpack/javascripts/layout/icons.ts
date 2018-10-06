import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import {
  faBars,
  faEnvelope,
  faHome,
  faImages,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faGithubAlt,
  faBars,
  faEnvelope,
  faHome,
  faImages,
  faUserCircle
);

document.addEventListener('turbolinks:load', function () {
  dom.watch()
})
