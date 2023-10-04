from django.urls import path
from . import views

urlpatterns = [
    path("", views.homePageRoute, name="home page"),
    path("logout/", views.logout_user, name="Logout User"),
    path("list_tasks/", views.list_tasks, name="All tasks"),
    path("create_task/", views.create_task, name="Create task"),
    path("update_task/<str:pk>/", views.update_task, name="Update task"),
    path("get_task_task/<str:pk>/", views.get_task_detail, name="Get task detail"),
]
