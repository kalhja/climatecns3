import os
from flask import current_app
from werkzeug.utils import secure_filename

ALLOWED_EXTENSIONS = ['jpg', 'gif', 'jpeg', 'png']

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower()\
            in ALLOWED_EXTENSIONS


def save_image(image_file, folder = None):
    if image_file and allowed_file(image_file.filename) and folder:
        if not os.path.exists(folder):
            os.makedirs(folder)

        filename = secure_filename(image_file.filename)
        image_path = os.path.join(folder, filename)
        image_file.save(image_path)
        
        return image_path
    
    return None
