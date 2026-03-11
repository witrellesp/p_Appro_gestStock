
import { getMenu } from '#services/menu_service'
import Category from '#models/category'
import Kind from '#models/kind'

export default class MenusController {

        async index({request,view}: any){
            const categoryId = request.input('categoryId')
    
            const menuTree = await getMenu()

            const categories = await Category.query()
            const kinds = await Kind.query()

            
    
            return view.render('menu/index',{
                categories,
                kinds,
                menuTree,
                selectedCategoyId: Number(categoryId) || null
            })
        }
}