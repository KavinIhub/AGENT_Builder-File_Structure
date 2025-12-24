from celery import Celery

celery_app = Celery("worker", broker="redis://localhost:6379/0")

@celery_app.task
def hello_task():
    return "Hello form worker"
