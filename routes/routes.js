import baseCtrl from '../controllers/baseCtrl'
import insertionCtrl from '../controllers/insertionCtrl'
import removeCtrl from '../controllers/removeCtrl'
import searchCtrl from '../controllers/searchCtrl'
import updateCtrl from '../controllers/updateCtrl'

const routes = (router) => {
  // Base route
  router.route('/')
    .get(baseCtrl.basePage)

  // Insertion routes
  router.route('/insert')
    .post(insertionCtrl.insertValue)

  // Deletion routes
  router.route('/delete/:name')
    .get(removeCtrl.removeValue)

  // Search routes
  router.route('/search/brand/:searchQuery')
    .get(searchCtrl.searchByBrand)

  router.route('/search/category/:searchQuery')
    .get(searchCtrl.searchByCategory)

  router.route('/search/name/:searchQuery')
    .get(searchCtrl.searchByName)

  // Updation routes
  router.route('/update/byId/:id')
    .put(updateCtrl.updateValueById)

  router.route('/update/byName/:name')
    .put(updateCtrl.updateValueByName)
}

export default routes
