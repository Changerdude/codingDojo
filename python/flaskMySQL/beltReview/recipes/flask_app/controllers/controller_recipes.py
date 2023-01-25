from flask_app import app
from flask_app.models.model_user import User
from flask_app.models.model_recipe import Recipe
from flask import session,render_template,redirect,request,flash

#add recipe
@app.route('/recipe/add')
def recipe_add():
    return render_template('recipe_add.html')

@app.route('/recipe/create', methods=["POST"])
def recipe_create():
    data = {
        **request.form,
        'user_id' : session['uuid']
    }
    if Recipe.validate_form(data):
        Recipe.create(data)
        return redirect('/dashboard')
    return redirect('/recipe/add')

#show recipe
@app.route('/recipe/show/<int:id>')
def recipe_show(id):
    return render_template('recipe_show.html', user = User.get_user({'id' : session['uuid']}), recipe=Recipe.get_recipe({'id' : id}))


#edit recipe
@app.route('/recipe/edit/<int:id>')
def recipe_edit(id):
    recipe = Recipe.get_recipe({'id' : id})
    if recipe.user_id == session['uuid']:
        session['editing_id'] = recipe.id
        return render_template('recipe_edit.html', recipe=recipe)
    return redirect('/dashboard')

@app.route('/recipe/update', methods=["POST"])
def recipe_update():
    data = {
        **request.form,
        'user_id':session['uuid'],
        'id':session['editing_id']
    }
    if Recipe.validate_form(data):
        Recipe.update_recipe(data)
        return redirect('/dashboard')
    return redirect('/recipe/edit/' + data.id)

#delete recipe
@app.route('/recipe/delete/<int:id>')
def recipe_delete(id):
    recipe = Recipe.get_recipe({'id' : id})
    if recipe.user_id == session['uuid']:
        Recipe.delete_recipe({'id' : id})
    return redirect('/dashboard')