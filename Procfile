release: cd backend && python manage.py migrate
web: gunicorn FYP.backend.backend.wsgi --log-file -
