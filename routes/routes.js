import insertionCtrl from '../controllers/insertionCtrl'
import searchCtrl from '../controllers/searchCtrl'

const routes = (router) => {
  router.route('/insert')
    .post(insertionCtrl.insertValue)

  router.route('/search/brand/:searchQuery')
    .get(searchCtrl.searchByBrand)

  router.route('/search/category/:searchQuery')
    .get(searchCtrl.searchByCategory)

  router.route('/search/name/:searchQuery')
    .get(searchCtrl.searchByName)

  // TODO; Uncomment when the controller is functional.
  // router.route('/update')
  //   .put(updateCtrl.updateValue)
}

export default routes
