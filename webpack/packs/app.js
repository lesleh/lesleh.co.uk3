import '../javascripts/contact/form'
import '../javascripts/layout/icons'
import '../javascripts/layout/lazy_images'
import '../javascripts/layout/menu'
import '../javascripts/layout/turbolinks'
import '../javascripts/gallery/lightbox'
import '../javascripts/gallery/resize'

import * as Components from '../javascripts/components'
import { mountComponents, unmountComponents } from '../javascripts/util/mount_components'

document.addEventListener('turbolinks:load', function () {
  mountComponents(document, Components);
})

document.addEventListener('turbolinks:before-render', function () {
  unmountComponents(document);
})
